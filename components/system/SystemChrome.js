import React from 'react';
import { Modal, Pressable, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import LucideDynamic from '../LucideDynamic';
import { getThemeColors } from '../../config/theme';
import { appRuntime } from '../../lib/app';

const noop = () => {};

// Plain drawer actions (what DrawerActions.* return), so no extra package is needed.
function toggleDrawer(navigation) {
  try { navigation.dispatch({ type: 'TOGGLE_DRAWER' }); } catch (e) { /* no drawer */ }
}

// Tabs + drawer apps: the drawer is drawn over the screen, not by a navigator.
function DrawerOverlay({ drawer, pageId, insets, onClose }) {
  const items = drawer.items.map((it) => Object.assign({}, it, {
    active: it.pageId === pageId,
    onPress: () => { onClose(); if (it.pageId !== pageId) appRuntime.navigate(it.page); },
  }));
  const systemNav = { pageTitle: '', canGoBack: false, goBack: noop, toggleDrawer: onClose, items };
  return React.createElement(Modal, { transparent: true, visible: true, animationType: 'fade', onRequestClose: onClose },
    React.createElement(View, { style: { flex: 1, flexDirection: 'row' } },
      React.createElement(View, { style: { width: drawer.width, height: '100%' } },
        React.createElement(drawer.Panel, { systemNav, systemInsets: insets })),
      React.createElement(Pressable, { accessibilityLabel: 'Close menu', onPress: onClose, style: { flex: 1, backgroundColor: 'rgba(0,0,0,' + drawer.overlay + ')' } })));
}

export function makeHeader(Header, pageTitle, backFromHistory, drawer, pageId) {
  return function SystemHeaderHost(props) {
    const insets = useSafeAreaInsets();
    const [drawerOpen, setDrawerOpen] = React.useState(false);
    const navigation = props.navigation;
    const canGoBack = props.back != null || (backFromHistory && navigation.canGoBack());
    const systemNav = {
      pageTitle,
      canGoBack,
      goBack: () => navigation.goBack(),
      toggleDrawer: drawer ? () => setDrawerOpen((o) => !o) : () => toggleDrawer(navigation),
      items: [],
    };
    const header = React.createElement(Header, { systemNav, systemInsets: insets });
    if (!drawer || !drawerOpen) return header;
    return React.createElement(React.Fragment, null, header,
      React.createElement(DrawerOverlay, { drawer, pageId, insets, onClose: () => setDrawerOpen(false) }));
  };
}

// Items keep the authored order (tab / drawer order), not route order.
function itemsFor(state, items, onNavigate) {
  const current = state.routes[state.index];
  return Object.keys(items)
    .map((name) => {
      const r = state.routes.find((x) => x.name === name);
      if (!r) return null;
      return Object.assign({}, items[name], { active: r.key === current.key, onPress: () => onNavigate(r, current) });
    })
    .filter(Boolean);
}

var MAX_BAR_TABS = 5;
var MORE_TAB = {"pageId":"__more__","label":"More","icon":"more-horizontal"};

// Past MAX_BAR_TABS tabs, the last slot becomes More and the rest move into its sheet.
function withMoreTab(list, openMore) {
  if (list.length <= MAX_BAR_TABS) return { items: list, overflow: [] };
  var overflow = list.slice(MAX_BAR_TABS - 1);
  var more = Object.assign({}, MORE_TAB, { active: overflow.some(function (it) { return it.active; }), onPress: openMore });
  return { items: list.slice(0, MAX_BAR_TABS - 1).concat([more]), overflow: overflow };
}

function lookColor(v, fallback) {
  if (v && v.token) return getThemeColors()[v.token] || fallback;
  return v || fallback;
}

function MoreSheet(props) {
  if (!props.open) return null;
  var look = props.look || {};
  var active = lookColor(look.active, '#2563EB');
  var inactive = lookColor(look.inactive, '#111827');
  var rows = props.items.map(function (it) {
    var tint = it.active ? active : inactive;
    return React.createElement(Pressable, {
      key: it.pageId,
      accessibilityRole: 'button',
      accessibilityState: { selected: !!it.active },
      onPress: function () { props.onClose(); it.onPress(); },
      style: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, paddingHorizontal: 20 },
    },
      React.createElement(LucideDynamic, { name: it.icon, size: 22, color: tint }),
      React.createElement(Text, { style: { marginLeft: 16, fontSize: 16, color: tint, fontWeight: it.active ? '600' : '400' } }, it.label));
  });
  var sheet = React.createElement(View, { style: { flex: 1, justifyContent: 'flex-end' } },
    React.createElement(Pressable, { accessibilityLabel: 'Close', onPress: props.onClose, style: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.4)' } }),
    React.createElement(View, { accessibilityViewIsModal: true, style: { backgroundColor: lookColor(look.background, '#FFFFFF'), borderTopLeftRadius: 16, borderTopRightRadius: 16, paddingTop: 8, paddingBottom: 8 + ((props.insets && props.insets.bottom) || 0) } }, rows));
  if (props.inline) return React.createElement(View, { style: { position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, zIndex: 50 } }, sheet);
  return React.createElement(Modal, { transparent: true, visible: true, animationType: 'fade', onRequestClose: props.onClose }, sheet);
}

export function makeTabBar(Bar, items, look) {
  return function SystemTabBarHost({ state, navigation }) {
    const insets = useSafeAreaInsets();
    const [moreOpen, setMoreOpen] = React.useState(false);
    const current = state.routes[state.index];
    if (!items[current.name]) return null;
    const list = itemsFor(state, items, (r, cur) => {
      const e = navigation.emit({ type: 'tabPress', target: r.key, canPreventDefault: true });
      if (r.key !== cur.key && !e.defaultPrevented) navigation.navigate(r.name, r.params);
    });
    const bar = withMoreTab(list, () => setMoreOpen(true));
    const systemNav = { pageTitle: items[current.name].label, canGoBack: false, goBack: noop, toggleDrawer: noop, items: bar.items };
    return React.createElement(React.Fragment, null,
      React.createElement(Bar, { systemNav, systemInsets: insets }),
      React.createElement(MoreSheet, { open: moreOpen, items: bar.overflow, insets, look, onClose: () => setMoreOpen(false) }));
  };
}

export function makeDrawerContent(Drawer, items) {
  return function SystemDrawerHost({ state, navigation }) {
    const insets = useSafeAreaInsets();
    const list = itemsFor(state, items, (r) => {
      navigation.navigate(r.name);
      navigation.dispatch({ type: 'CLOSE_DRAWER' });
    });
    const current = state.routes[state.index];
    const systemNav = {
      pageTitle: (items[current.name] && items[current.name].label) || '',
      canGoBack: false,
      goBack: noop,
      toggleDrawer: () => toggleDrawer(navigation),
      items: list,
    };
    return React.createElement(Drawer, { systemNav, systemInsets: insets });
  };
}
