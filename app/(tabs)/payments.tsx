import { Can } from '@/components/Can';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { default as LucideDynamic } from '../../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getThemeColors } from '../../config/theme';
import { useLocalSearchParams, useRouter } from 'expo-router';
import * as nf from '../../lib/runtime';

function Payments() {
  const colors = getThemeColors();
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
          <Text style={styles.paymentsText}>Payments</Text>
          <View style={styles.row}>
            <View style={styles.column2}>
              <View style={styles.center}>
                <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="at-sign" size={24} color="#2541B2" strokeWidth={2} /></View>
              </View>
              <Text style={styles.uPIText}>UPI</Text>
            </View>
            <View style={styles.column3}>
              <View style={styles.center2}>
                <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="scan" size={24} color="#2541B2" strokeWidth={2} /></View>
              </View>
              <Text style={styles.scanPayText}>Scan & Pay</Text>
            </View>
            <View style={styles.column4}>
              <View style={styles.center3}>
                <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="send" size={24} color="#2541B2" strokeWidth={2} /></View>
              </View>
              <Text style={styles.sendText}>Send</Text>
            </View>
            <View style={styles.column5}>
              <View style={styles.center4}>
                <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="corner-left-down" size={24} color="#2541B2" strokeWidth={2} /></View>
              </View>
              <Text style={styles.requestText}>Request</Text>
            </View>
          </View>
          <View style={styles.column6}>
            <View style={styles.row2}>
              <Text style={styles.uPIText2}>UPI</Text>
              <Text style={styles.viewAllText}>View all</Text>
            </View>
            <View style={styles.row3}>
              <View style={styles.center5}>
                <View accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="at-sign" size={20} color="#FFFFFF" strokeWidth={2} /></View>
              </View>
              <View style={styles.column7}>
                <Text style={styles.text}>alice@upi</Text>
                <Text style={styles.text84523000Text}>{nf.text((nf.applyTransforms(listAccountsTheDemoData?.[0]?.balance, [{"type":"format-currency","locale":"en-US","currency":"INR","signDisplay":"auto"}])) || '')}</Text>
              </View>
            </View>
          </View>
          <View style={styles.column8}>
            <Text style={styles.billPaymentsText}>Bill Payments</Text>
            <View style={styles.row4}>
              <View style={styles.column9}>
                <View style={styles.center6}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="zap" size={22} color="#2541B2" strokeWidth={2} /></View>
                </View>
                <Text style={styles.electricityText}>Electricity</Text>
              </View>
              <View style={styles.column10}>
                <View style={styles.center7}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="droplet" size={22} color="#2541B2" strokeWidth={2} /></View>
                </View>
                <Text style={styles.waterText}>Water</Text>
              </View>
              <View style={styles.column11}>
                <View style={styles.center8}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="smartphone" size={22} color="#2541B2" strokeWidth={2} /></View>
                </View>
                <Text style={styles.mobileText}>Mobile</Text>
              </View>
              <View style={styles.column12}>
                <View style={styles.center9}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="tv" size={22} color="#2541B2" strokeWidth={2} /></View>
                </View>
                <Text style={styles.dTHText}>DTH</Text>
              </View>
            </View>
            <View style={styles.row5}>
              <View style={styles.column13}>
                <View style={styles.center10}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="wifi" size={22} color="#2541B2" strokeWidth={2} /></View>
                </View>
                <Text style={styles.broadbandText}>Broadband</Text>
              </View>
              <View style={styles.column14}>
                <View style={styles.center11}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="flame" size={22} color="#2541B2" strokeWidth={2} /></View>
                </View>
                <Text style={styles.gasText}>Gas</Text>
              </View>
              <View style={styles.column15}>
                <View style={styles.center12}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="credit-card" size={22} color="#2541B2" strokeWidth={2} /></View>
                </View>
                <Text style={styles.creditCardText}>Credit Card</Text>
              </View>
              <View style={styles.column16}>
                <View style={styles.center13}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="ellipsis" size={22} color="#2541B2" strokeWidth={2} /></View>
                </View>
                <Text style={styles.moreText}>More</Text>
              </View>
            </View>
          </View>
          <View style={styles.row6}>
            <View style={styles.center14}>
              <View accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="repeat" size={20} color="#2541B2" strokeWidth={2} /></View>
            </View>
            <View style={styles.column17}>
              <Text style={styles.saveTimeWithUPIText}>Save time with UPI AutoPay</Text>
              <Text style={styles.setUpRecurringPaymentsText}>Set up recurring payments for bills & more.</Text>
            </View>
            <View accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="chevron-right" size={20} color="#6B7280" strokeWidth={2} /></View>
          </View>
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
    gap: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 32,
    backgroundColor: colors.background,
    justifyContent: 'center',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  paymentsText: {
    color: colors.primaryText,
    fontSize: 32,
    fontWeight: '800',
  },
  row: {
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  column2: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  center: {
    width: 64,
    height: 64,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.06},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.06)',
    alignItems: 'center',
    borderRadius: 32,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  icon: {
    color: '#2541B2',
  },
  uPIText: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  column3: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  center2: {
    width: 64,
    height: 64,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.06},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.06)',
    alignItems: 'center',
    borderRadius: 32,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  icon2: {
    color: '#2541B2',
  },
  scanPayText: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  column4: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  center3: {
    width: 64,
    height: 64,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.06},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.06)',
    alignItems: 'center',
    borderRadius: 32,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  icon3: {
    color: '#2541B2',
  },
  sendText: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  column5: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  center4: {
    width: 64,
    height: 64,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.06},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.06)',
    alignItems: 'center',
    borderRadius: 32,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  icon4: {
    color: '#2541B2',
  },
  requestText: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  column6: {
    gap: 12,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.05},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.05)',
    paddingTop: 16,
    paddingLeft: 16,
    borderRadius: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  row2: {
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  uPIText2: {
    color: colors.primaryText,
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  viewAllText: {
    color: '#2541B2',
    fontSize: 15,
    fontWeight: '600',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  row3: {
    gap: 12,
    paddingTop: 12,
    paddingLeft: 12,
    borderRadius: 14,
    paddingRight: 12,
    paddingBottom: 12,
    backgroundColor: '#F3F5F9',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  center5: {
    width: 48,
    height: 48,
    alignItems: 'center',
    borderRadius: 24,
    justifyContent: 'center',
    backgroundColor: '#0B1E52',
  },
  icon5: {
    color: '#FFFFFF',
  },
  column7: {
    gap: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  text: {
    color: colors.primaryText,
    fontSize: 17,
    fontWeight: '700',
  },
  text84523000Text: {
    color: '#6B7280',
    fontSize: 15,
    fontWeight: '400',
  },
  column8: {
    gap: 16,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.05},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.05)',
    paddingTop: 16,
    paddingLeft: 16,
    borderRadius: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  billPaymentsText: {
    color: colors.primaryText,
    fontSize: 20,
    fontWeight: '700',
  },
  row4: {
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  column9: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  center6: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#DCE6FB',
  },
  icon6: {
    color: '#2541B2',
  },
  electricityText: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  column10: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  center7: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#DCE6FB',
  },
  icon7: {
    color: '#2541B2',
  },
  waterText: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  column11: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  center8: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#DCE6FB',
  },
  icon8: {
    color: '#2541B2',
  },
  mobileText: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  column12: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  center9: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#DCE6FB',
  },
  icon9: {
    color: '#2541B2',
  },
  dTHText: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  row5: {
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  column13: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  center10: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#DCE6FB',
  },
  icon10: {
    color: '#2541B2',
  },
  broadbandText: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  column14: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  center11: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#DCE6FB',
  },
  icon11: {
    color: '#2541B2',
  },
  gasText: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  column15: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  center12: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#DCE6FB',
  },
  icon12: {
    color: '#2541B2',
  },
  creditCardText: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  column16: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  center13: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#DCE6FB',
  },
  icon13: {
    color: '#2541B2',
  },
  moreText: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  row6: {
    gap: 12,
    paddingTop: 16,
    paddingLeft: 16,
    borderRadius: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#E3E9FB',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  center14: {
    width: 44,
    height: 44,
    alignItems: 'center',
    borderRadius: 22,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  icon14: {
    color: '#2541B2',
  },
  column17: {
    gap: 4,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  saveTimeWithUPIText: {
    color: colors.primaryText,
    fontSize: 16,
    fontWeight: '700',
  },
  setUpRecurringPaymentsText: {
    color: '#6B7280',
    fontSize: 14,
    fontWeight: '400',
  },
  icon15: {
    color: '#6B7280',
  },
  });
}

export default function PaymentsGuarded(props: any) {
  return <Can permissions={[]} redirectTo={"Login"}><Payments {...props} /></Can>;
}
