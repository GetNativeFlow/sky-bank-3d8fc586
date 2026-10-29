import { Can } from '@/components/Can';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { default as LucideDynamic } from '../../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { appRuntime as app } from '../../lib/app';
import * as nf from '../../lib/runtime';

function Accounts() {
  const router = useRouter();
  const routeParams = useLocalSearchParams();
  const vars = {};

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
    <SafeAreaView edges={["top","left","right"]} style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
        <StatusBar style="auto" />
        <View style={styles.column}>
          <Text accessibilityRole="header" style={styles.accountsHeading}>Accounts</Text>
          <View style={styles.column2}>
            <View style={styles.row}>
              <View style={styles.row2}>
                <View style={styles.center}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="credit-card" size={22} color="#2554E8" strokeWidth={2} /></View>
                </View>
                <View style={styles.column3}>
                  <Text style={styles.savingsAccountText}>{nf.text(listAccountsTheDemoData?.[0]?.account_type || '')}</Text>
                  <Text style={styles.text}>XXXX 1001</Text>
                </View>
              </View>
              <View style={styles.column4}>
                <Text style={styles.text84523000Text}>{nf.text((nf.applyTransforms(listAccountsTheDemoData?.[0]?.balance, [{"type":"format-currency","locale":"en-US","currency":"INR","signDisplay":"auto"}])) || '')}</Text>
                <Text style={styles.availableBalanceText}>Available balance</Text>
              </View>
            </View>
            <View style={styles.row3}>
              <View style={styles.row4}>
                <View style={styles.center2}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="briefcase" size={22} color="#2554E8" strokeWidth={2} /></View>
                </View>
                <View style={styles.column5}>
                  <Text style={styles.currentAccountText}>Current Account</Text>
                  <Text style={styles.xXXX5678Text}>XXXX 5678</Text>
                </View>
              </View>
              <View style={styles.column6}>
                <Text style={styles.text30245000Text}>₹ 3,02,450.00</Text>
                <Text style={styles.availableBalanceText2}>Available balance</Text>
              </View>
            </View>
            <View style={styles.row5}>
              <View style={styles.row6}>
                <View style={styles.center3}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="clock" size={22} color="#B9690A" strokeWidth={2} /></View>
                </View>
                <View style={styles.column7}>
                  <Text style={styles.fixedDepositText}>Fixed Deposit</Text>
                  <Text style={styles.fDXXXX9012Text}>FDXXXX 9012</Text>
                </View>
              </View>
              <View style={styles.column8}>
                <Text style={styles.text50000000Text}>₹ 5,00,000.00</Text>
                <Text style={styles.maturesIn120DaysText}>Matures in 120 days</Text>
              </View>
            </View>
          </View>
          <View style={styles.row7}>
            <Text style={styles.recentTransactionsText}>Recent Transactions</Text>
            <Text testID="Accounts_ViewAllText" accessible={true} accessibilityLabel="View all" style={styles.viewAllText} onPress={nf.safely(() => { app.navigate("Transactions"); })}>View all</Text>
          </View>
          <View style={styles.column9}>
            <View style={styles.row8}>
              <View style={styles.row9}>
                <View style={styles.center4}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="shopping-bag" size={20} color="#B9690A" strokeWidth={2} /></View>
                </View>
                <View style={styles.column10}>
                  <Text style={styles.amazonText}>Amazon</Text>
                  <Text style={styles.shoppingText}>Shopping</Text>
                </View>
              </View>
              <View style={styles.column11}>
                <Text style={styles.text249900Text}>- ₹ 2,499.00</Text>
                <Text style={styles.todayText}>Today</Text>
              </View>
            </View>
            <View style={[styles.divider, { height: 1, backgroundColor: '#EEF0F4', alignSelf: 'stretch' }]} />
            <View style={styles.row10}>
              <View style={styles.row11}>
                <View style={styles.center5}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="briefcase" size={20} color="#1E8A4C" strokeWidth={2} /></View>
                </View>
                <View style={styles.column12}>
                  <Text style={styles.salaryCreditText}>Salary Credit</Text>
                  <Text style={styles.employerText}>Employer</Text>
                </View>
              </View>
              <View style={styles.column13}>
                <Text style={styles.text12000000Text}>+ ₹ 1,20,000.00</Text>
                <Text style={styles.yesterdayText}>Yesterday</Text>
              </View>
            </View>
            <View style={[styles.divider2, { height: 1, backgroundColor: '#EEF0F4', alignSelf: 'stretch' }]} />
            <View style={styles.row12}>
              <View style={styles.row13}>
                <View style={styles.center6}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="utensils" size={20} color="#C23636" strokeWidth={2} /></View>
                </View>
                <View style={styles.column14}>
                  <Text style={styles.zomatoText}>Zomato</Text>
                  <Text style={styles.foodDiningText}>Food & Dining</Text>
                </View>
              </View>
              <View style={styles.column15}>
                <Text style={styles.text74900Text}>- ₹ 749.00</Text>
                <Text style={styles.text12Sep2025Text}>12 Sep 2025</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenRoot: {
    flex: 1,
    height: '100%',
    width: '100%',
    minWidth: 0,
    alignSelf: 'stretch',
    backgroundColor: '#F3F5F9',
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
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
    gap: 0,
    paddingTop: 45,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 24,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  accountsHeading: {
    color: '#0F1E4D',
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 20,
  },
  column2: {
    gap: 14,
    marginBottom: 28,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  row: {
    padding: 16,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.05},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.05)',
    alignItems: 'stretch',
    borderRadius: 16,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  row2: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center: {
    width: 48,
    height: 48,
    alignItems: 'center',
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: '#DCE7FF',
  },
  icon: {
    color: '#2554E8',
  },
  column3: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  savingsAccountText: {
    color: '#0F1E4D',
    fontSize: 17,
    fontWeight: '700',
  },
  text: {
    color: '#8A93A6',
    fontSize: 13,
  },
  column4: {
    gap: 2,
    minWidth: 150,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  text84523000Text: {
    color: '#0F1E4D',
    fontSize: 17,
    textAlign: 'right',
    fontWeight: '800',
  },
  availableBalanceText: {
    color: '#8A93A6',
    fontSize: 12,
    textAlign: 'right',
  },
  row3: {
    padding: 16,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.05},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.05)',
    alignItems: 'stretch',
    borderRadius: 16,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  row4: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center2: {
    width: 48,
    height: 48,
    alignItems: 'center',
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: '#DCE7FF',
  },
  icon2: {
    color: '#2554E8',
  },
  column5: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  currentAccountText: {
    color: '#0F1E4D',
    fontSize: 17,
    fontWeight: '700',
  },
  xXXX5678Text: {
    color: '#8A93A6',
    fontSize: 13,
  },
  column6: {
    gap: 2,
    minWidth: 150,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  text30245000Text: {
    color: '#0F1E4D',
    fontSize: 17,
    textAlign: 'right',
    fontWeight: '800',
  },
  availableBalanceText2: {
    color: '#8A93A6',
    fontSize: 12,
    textAlign: 'right',
  },
  row5: {
    padding: 16,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.05},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.05)',
    alignItems: 'stretch',
    borderRadius: 16,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  row6: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center3: {
    width: 48,
    height: 48,
    alignItems: 'center',
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: '#FBE6C8',
  },
  icon3: {
    color: '#B9690A',
  },
  column7: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  fixedDepositText: {
    color: '#0F1E4D',
    fontSize: 17,
    fontWeight: '700',
  },
  fDXXXX9012Text: {
    color: '#8A93A6',
    fontSize: 13,
  },
  column8: {
    gap: 2,
    minWidth: 150,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  text50000000Text: {
    color: '#0F1E4D',
    fontSize: 17,
    textAlign: 'right',
    fontWeight: '800',
  },
  maturesIn120DaysText: {
    color: '#8A93A6',
    fontSize: 12,
    textAlign: 'right',
  },
  row7: {
    alignItems: 'stretch',
    marginBottom: 14,
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  recentTransactionsText: {
    color: '#0F1E4D',
    fontSize: 20,
    fontWeight: '800',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  viewAllText: {
    color: '#2554E8',
    fontSize: 15,
    fontWeight: '600',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  column9: {
    gap: 0,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.05},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.05)',
    paddingTop: 6,
    paddingLeft: 16,
    borderRadius: 16,
    paddingRight: 16,
    paddingBottom: 6,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  row8: {
    alignItems: 'stretch',
    paddingTop: 14,
    paddingBottom: 14,
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  row9: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center4: {
    width: 44,
    height: 44,
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'center',
    backgroundColor: '#FBE6C8',
  },
  icon4: {
    color: '#B9690A',
  },
  column10: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  amazonText: {
    color: '#0F1E4D',
    fontSize: 16,
    fontWeight: '700',
  },
  shoppingText: {
    color: '#8A93A6',
    fontSize: 13,
  },
  column11: {
    gap: 2,
    minWidth: 120,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  text249900Text: {
    color: '#0F1E4D',
    fontSize: 16,
    textAlign: 'right',
    fontWeight: '700',
  },
  todayText: {
    color: '#8A93A6',
    fontSize: 12,
    textAlign: 'right',
  },
  divider: {
    height: 1,
    backgroundColor: '#EEF0F4',
  },
  row10: {
    alignItems: 'stretch',
    paddingTop: 14,
    paddingBottom: 14,
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  row11: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center5: {
    width: 44,
    height: 44,
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'center',
    backgroundColor: '#D3F0DE',
  },
  icon5: {
    color: '#1E8A4C',
  },
  column12: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  salaryCreditText: {
    color: '#0F1E4D',
    fontSize: 16,
    fontWeight: '700',
  },
  employerText: {
    color: '#8A93A6',
    fontSize: 13,
  },
  column13: {
    gap: 2,
    minWidth: 120,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  text12000000Text: {
    color: '#1E8A4C',
    fontSize: 16,
    textAlign: 'right',
    fontWeight: '700',
  },
  yesterdayText: {
    color: '#8A93A6',
    fontSize: 12,
    textAlign: 'right',
  },
  divider2: {
    height: 1,
    backgroundColor: '#EEF0F4',
  },
  row12: {
    alignItems: 'stretch',
    paddingTop: 14,
    paddingBottom: 14,
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  row13: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center6: {
    width: 44,
    height: 44,
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'center',
    backgroundColor: '#FBDADA',
  },
  icon6: {
    color: '#C23636',
  },
  column14: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  zomatoText: {
    color: '#0F1E4D',
    fontSize: 16,
    fontWeight: '700',
  },
  foodDiningText: {
    color: '#8A93A6',
    fontSize: 13,
  },
  column15: {
    gap: 2,
    minWidth: 120,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  text74900Text: {
    color: '#0F1E4D',
    fontSize: 16,
    textAlign: 'right',
    fontWeight: '700',
  },
  text12Sep2025Text: {
    color: '#8A93A6',
    fontSize: 12,
    textAlign: 'right',
  },
});


export default function AccountsGuarded(props: any) {
  return <Can permissions={[]} redirectTo={"Login"}><Accounts {...props} /></Can>;
}
