import { Can } from '@/components/Can';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, TextInput, FlatList } from 'react-native';
import { Svg, Circle, Line } from 'react-native-svg';
import { default as StudioSpinner } from '../components/StudioSpinner';
import { default as LucideDynamic } from '../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getThemeColors } from '../config/theme';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { appRuntime as app } from '../lib/app';
import * as nf from '../lib/runtime';

function Transactions() {
  const colors = getThemeColors();
  const router = useRouter();
  const routeParams = useLocalSearchParams();
  const [searchTransactionsSearchInput, setSearchTransactionsSearchInput] = useState({ searchText: "", isFocused: false, isDropdownOpen: false, selectedItem: "" });
  const vars = {};

  const [listTransactionsData, setListTransactionsData] = useState([]);
  const [listTransactionsDataLoading, setListTransactionsDataLoading] = useState(false);
  const [listTransactionsDataError, setListTransactionsDataError] = useState(null);

  const fetchListTransactionsData = () => {
    setListTransactionsDataLoading(true);
    setListTransactionsDataError(null);
    fetch(nf.interpolate('https://wylsvmumemzvltauwqno.supabase.co/rest/v1/transactions', vars) + '?' + new URLSearchParams([[nf.interpolate('order', vars), nf.interpolate('created_at.desc', vars)]]).toString(), { method: 'GET', headers: { 'apikey': nf.interpolate('sb_publishable_7a7JrfhaF6ofII_rSFE8mQ_dZWL0adq', vars) } })
      .then(res => { if (!res.ok) throw new Error('HTTP ' + res.status); return res.json(); })
      .then(json => {
        const arr = nf.walkArrayPath(json, '');
        setListTransactionsData(Array.isArray(arr) ? arr : []);
        setListTransactionsDataLoading(false);
      })
      .catch(err => {
        console.warn('[Preview] List transactions fetch failed:', err && err.message ? err.message : err);
        setListTransactionsDataError(err && err.message ? err.message : String(err));
        setListTransactionsDataLoading(false);
      });
  };

  useEffect(() => { fetchListTransactionsData(); }, []);

  return (
    <SafeAreaView edges={["top","bottom","left","right"]} style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
        <StatusBar style="auto" />
        <View style={styles.column}>
          <Text testID="Transactions_TransactionsHeading" accessible={true} accessibilityRole="header" accessibilityLabel="Transactions" style={styles.transactionsHeading} onPress={nf.safely(() => { app.navigate("Accounts"); })}>Transactions</Text>
          <View testID="Transactions_SearchTransactionsSearchInput" accessibilityRole="search" style={{ position: 'relative' }}>
          <View style={[styles.searchTransactionsSearchInput, { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#ccc', borderRadius: 16, backgroundColor: '#FFFFFF', paddingHorizontal: 8 }]}>
            <View style={{ width: 18, height: 18, marginHorizontal: 4 }}><Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><Circle cx={11} cy={11} r={8} /><Line x1={21} y1={21} x2={16.65} y2={16.65} /></Svg></View>
            <TextInput style={{ flex: 1, fontSize: 16, padding: 8, color: '#333' }} placeholder="Search transactions" placeholderTextColor="#9CA3AF" value={typeof searchTransactionsSearchInput !== 'undefined' ? (searchTransactionsSearchInput.searchText ?? '') : ''} onChangeText={(v) => { if (typeof setSearchTransactionsSearchInput === 'function') setSearchTransactionsSearchInput(prev => ({...prev, searchText: v})); }} onFocus={() => { if (typeof setSearchTransactionsSearchInput === 'function') setSearchTransactionsSearchInput(prev => ({...prev, isFocused: true, isDropdownOpen: true})); }} onBlur={() => { if (typeof setSearchTransactionsSearchInput === 'function') setSearchTransactionsSearchInput(prev => ({...prev, isFocused: false})); }} returnKeyType="search" />
            
              {(typeof searchTransactionsSearchInput !== 'undefined' && searchTransactionsSearchInput.searchText) ? <TouchableOpacity onPress={() => { if (typeof setSearchTransactionsSearchInput === 'function') setSearchTransactionsSearchInput(prev => ({...prev, searchText: '', selectedItem: ''})); }}><View style={{ width: 18, height: 18, marginHorizontal: 4 }}><Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><Line x1={18} y1={6} x2={6} y2={18} /><Line x1={6} y1={6} x2={18} y2={18} /></Svg></View></TouchableOpacity> : null}
          </View>
          </View>
          {listTransactionsDataLoading ? <View style={{ padding: 20, alignItems: 'center' }}><StudioSpinner /></View> : <View style={[styles.list, styles.listContent]}>
            {(Array.isArray(listTransactionsData) ? listTransactionsData : []).map((item, index, arr) => (
              <View key={index}>
                <View>
                  <View style={styles.row}>
                    <View style={styles.box}>
                      <View accessible={true} accessibilityRole="image" style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name={nf.applyTransforms(item.category, [{"type":"map-icon","cases":[{"then":"utensils","when":"food"},{"then":"utensils","when":"dining"},{"then":"utensils","when":"restaurants"},{"then":"car","when":"transport"},{"then":"plane","when":"travel"},{"then":"fuel","when":"fuel"},{"then":"smartphone","when":"upi"},{"then":"arrow-left-right","when":"transfer"},{"then":"repeat","when":"subscriptions"},{"then":"film","when":"entertainment"},{"then":"briefcase","when":"salary"},{"then":"wallet","when":"income"},{"then":"rotate-ccw","when":"refund"},{"then":"percent","when":"interest"},{"then":"shopping-bag","when":"shopping"},{"then":"shopping-cart","when":"groceries"},{"then":"file-text","when":"bills"},{"then":"zap","when":"utilities"},{"then":"house","when":"rent"},{"then":"heart-pulse","when":"health"},{"then":"graduation-cap","when":"education"},{"then":"trending-up","when":"investment"},{"then":"banknote","when":"cash"},{"then":"banknote","when":"atm"},{"then":"coffee","when":"coffee"}],"default":"receipt","matchMode":"ci"}])} size={18} color={'#10B981'} strokeWidth={2} /></View>
                    </View>
                    <View style={styles.column2}>
                      <Text style={styles.starbucksText}>{nf.text(item.merchant)}</Text>
                      <Text style={styles.todayCoffeeText}>{nf.text(item.category)}</Text>
                    </View>
                    <View style={styles.column3}>
                      <Text style={[styles.text540Text, { "color": (String(item.type) === String("credit") ? "#249689" : "#FF5963") }]}>{nf.text(nf.applyTransforms(item.amount, [{"type":"format-currency","locale":"en-US","currency":"INR"}]))}</Text>
                      <Text style={styles.cardText}>{nf.text(nf.applyTransforms(item.created_at, [{"type":"format-date","format":"short","locale":"en-US"}]))}</Text>
                    </View>
                    <View accessible={true} accessibilityRole="image" style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="chevron-right" size={16} color="#D1D5DB" strokeWidth={2} /></View>
                  </View>
                </View>
                {index < arr.length - 1 && <View style={{ height: 1, backgroundColor: '#F0F1F4', marginVertical: 0 }} />}
              </View>
            ))}
          </View>}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = createStyles();

function createStyles() {
  const colors = getThemeColors();
  return StyleSheet.create({
  screenRoot: {
    flex: 1,
    height: '100%',
    width: '100%',
    minWidth: 0,
    alignSelf: 'stretch',
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: '#F3F5F9',
    height: '100%',
    width: '100%',
    minWidth: 0,
    alignSelf: 'stretch',
  },
  containerContent: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    width: '100%',
    alignSelf: 'stretch',
  },
  column: {
    gap: 16,
    paddingTop: 45,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: colors.background,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  transactionsHeading: {
    color: '#1E2A5A',
    fontWeight: '800',
    fontSize: 28,
  },
  searchTransactionsSearchInput: {
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
  },
  list: {
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":8,"shadowOpacity":0.05},
    boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
    minHeight: 60,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  listContent: {
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  row: {
    padding: 10,
    minHeight: 56,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  box: {
    width: 36,
    height: 36,
    minHeight: 36,
    borderRadius: 12,
    backgroundColor: '#ECFDF5',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    overflow: 'hidden',
  },
  icon: {
    color: '#10B981',
  },
  column2: {
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    gap: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  starbucksText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  todayCoffeeText: {
    color: '#6B7280',
    fontSize: 12,
  },
  column3: {
    minHeight: 40,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    gap: 0,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  text540Text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  cardText: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  icon2: {
    color: '#D1D5DB',
  },
  });
}

export default function TransactionsGuarded(props: any) {
  return <Can permissions={[]} redirectTo={"Login"}><Transactions {...props} /></Can>;
}
