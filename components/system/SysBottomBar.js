import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { default as LucideDynamic } from '../../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as nf from '../../lib/runtime';

export default function BottomBar({ systemNav, systemInsets }) {
  const router = useRouter();
  const routeParams = useLocalSearchParams();
  const vars = {};

  const [listTransactionsData, setListTransactionsData] = useState(null);
  const [listTransactionsDataLoading, setListTransactionsDataLoading] = useState(false);
  const [listTransactionsDataError, setListTransactionsDataError] = useState(null);

  const fetchListTransactionsData = () => {
    setListTransactionsDataLoading(true);
    setListTransactionsDataError(null);
    fetch(nf.interpolate('https://wylsvmumemzvltauwqno.supabase.co/rest/v1/transactions', vars) + '?' + new URLSearchParams([[nf.interpolate('order', vars), nf.interpolate('created_at.desc', vars)]]).toString(), { method: 'GET', headers: { 'apikey': nf.interpolate('sb_publishable_7a7JrfhaF6ofII_rSFE8mQ_dZWL0adq', vars) } })
      .then(res => { if (!res.ok) throw new Error('HTTP ' + res.status); return res.json(); })
      .then(json => { setListTransactionsData(json); setListTransactionsDataLoading(false); })
      .catch(err => {
        console.warn('[Preview] List transactions fetch failed:', err && err.message ? err.message : err);
        setListTransactionsDataError(err && err.message ? err.message : String(err));
        setListTransactionsDataLoading(false);
      });
  };

  useEffect(() => { fetchListTransactionsData(); }, []);

  const [listAccountsTheDemoData, setListAccountsTheDemoData] = useState(null);
  const [listAccountsTheDemoDataLoading, setListAccountsTheDemoDataLoading] = useState(false);
  const [listAccountsTheDemoDataError, setListAccountsTheDemoDataError] = useState(null);

  const fetchListAccountsTheDemoData = () => {
    setListAccountsTheDemoDataLoading(true);
    setListAccountsTheDemoDataError(null);
    fetch(nf.interpolate('https://wylsvmumemzvltauwqno.supabase.co/rest/v1/accounts', vars) + '?' + new URLSearchParams([[nf.interpolate('select', vars), nf.interpolate('*', vars)]]).toString(), { method: 'GET', headers: { 'apikey': nf.interpolate('sb_publishable_7a7JrfhaF6ofII_rSFE8mQ_dZWL0adq', vars) } })
      .then(res => { if (!res.ok) throw new Error('HTTP ' + res.status); return res.json(); })
      .then(json => { setListAccountsTheDemoData(json); setListAccountsTheDemoDataLoading(false); })
      .catch(err => {
        console.warn('[Preview] List accounts (the demo has one main account) fetch failed:', err && err.message ? err.message : err);
        setListAccountsTheDemoDataError(err && err.message ? err.message : String(err));
        setListAccountsTheDemoDataLoading(false);
      });
  };

  useEffect(() => { fetchListAccountsTheDemoData(); }, []);

  return (
    <View style={[styles.container, { flexDirection: "row", alignItems: "stretch", backgroundColor: '#FFFFFF', borderTopWidth: 1, borderTopColor: 'rgba(0,0,0,0.08)', paddingBottom: systemInsets.bottom, paddingLeft: systemInsets.left, paddingRight: systemInsets.right, minHeight: 50 + systemInsets.bottom }]}>
      {systemNav.items.map((navItem) => (
      <TouchableOpacity testID="BottomBar_NavItem" key={navItem.pageId} onPress={navItem.onPress} activeOpacity={0.7} accessibilityRole="tab" accessibilityState={{ selected: navItem.active }} style={[styles.navItem, { flex: 1, flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 2 }]}>
        <View accessible={true} accessibilityRole="image" style={[{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }, { "color": (String(navItem.active) === String("true") ? "#2563EB" : "#6B7280") }]}><LucideDynamic name={navItem.icon} size={20} color={(((String(navItem.active) === String("true") ? "#2563EB" : "#6B7280")) || '#9CA3AF')} strokeWidth={2} /></View>
        <Text style={[styles.text, { "color": (String(navItem.active) === String("true") ? "#2563EB" : "#6B7280") }]} numberOfLines={1}>{nf.text(navItem.label)}</Text>
      </TouchableOpacity>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  navItem: {
    flexDirection: 'column',
    gap: 2,
  },
  text: {
    fontSize: 10,
  },
});

