import { Can } from '@/components/Can';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { default as LucideDynamic } from '../../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getThemeColors } from '../../config/theme';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { appRuntime as app } from '../../lib/app';
import * as nf from '../../lib/runtime';

function Home() {
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
          <View style={styles.column2}>
            <View style={styles.row}>
              <View style={styles.column3}>
                <Text style={styles.goodMorningText}>Good morning,</Text>
                <Text style={styles.prahaladText}>{nf.text(listAccountsTheDemoData?.[0]?.owner_name || '')}</Text>
              </View>
              <View style={styles.row2}>
                <View accessible={true} accessibilityRole="image" accessibilityLabel="Notifications" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="bell" size={24} color="#FFFFFF" strokeWidth={2} /></View>
                <TouchableOpacity testID="Home_Center" accessible={true} accessibilityRole="button" style={styles.center} activeOpacity={0.7} onPress={nf.safely(() => { app.navigate("Profile"); })}>
                  <Text testID="Home_Text" accessible={true} style={styles.text} onPress={nf.safely(() => { app.navigate("Profile"); })}>A</Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.column4}>
              <View style={styles.row3}>
                <Text style={styles.totalBalanceText}>Total Balance</Text>
                <View accessible={true} accessibilityRole="image" accessibilityLabel="Toggle balance visibility" style={{ width: 15, height: 15, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="eye" size={15} color="#C7D0E8" strokeWidth={2} /></View>
              </View>
              <Text style={styles.text124832000Text}>{nf.text((nf.applyTransforms(listAccountsTheDemoData?.[0]?.balance, [{"type":"format-currency","locale":"en-US","currency":"INR","signDisplay":"auto"}])) || '')}</Text>
              <View style={styles.row4}>
                <View style={styles.row5}>
                  <View accessible={false} importantForAccessibility="no-hide-descendants" accessibilityElementsHidden={true} style={{ width: 14, height: 14, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="arrow-up" size={14} color="#34D399" strokeWidth={2} /></View>
                  <Text style={styles.text24Text}>2.4%</Text>
                </View>
                <Text style={styles.vsLastMonthText}>vs last month</Text>
              </View>
            </View>
          </View>
          <View style={styles.row6}>
            <View style={styles.column5}>
              <View style={styles.center2}>
                <View accessible={true} accessibilityRole="image" accessibilityLabel="Send money" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="send" size={24} color="#2563EB" strokeWidth={2} /></View>
              </View>
              <Text style={styles.sendText}>Send</Text>
            </View>
            <View style={styles.column6}>
              <View style={styles.center3}>
                <View accessible={true} accessibilityRole="image" accessibilityLabel="Request" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="corner-left-down" size={24} color="#7C3AED" strokeWidth={2} /></View>
              </View>
              <Text style={styles.requestText}>Request</Text>
            </View>
            <View style={styles.column7}>
              <View style={styles.center4}>
                <View accessible={true} accessibilityRole="image" accessibilityLabel="Scan and pay" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="scan-line" size={24} color="#EA580C" strokeWidth={2} /></View>
              </View>
              <Text style={styles.scanPayText}>Scan & Pay</Text>
            </View>
            <View style={styles.column8}>
              <View style={styles.center5}>
                <View accessible={true} accessibilityRole="image" accessibilityLabel="More options" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="grid-2x2" size={24} color="#059669" strokeWidth={2} /></View>
              </View>
              <Text style={styles.moreText}>More</Text>
            </View>
          </View>
          <View style={styles.column9}>
            <View style={styles.row7}>
              <View style={styles.center6}>
                <View style={styles.center7}>
                  <View style={styles.row8}>
                    <View style={styles.box} />
                    <View style={styles.box2} />
                  </View>
                </View>
              </View>
              <View style={styles.column10}>
                <Text style={styles.meetText}>Meet</Text>
                <Text style={styles.text2}>Mintly Ai</Text>
              </View>
            </View>
            <Text style={styles.askAnythingGetInstantText}>Ask anything, get instant answers, make transactions and more.</Text>
            <TouchableOpacity testID="Home_Pressable" accessible={true} accessibilityRole="button" style={styles.pressable} activeOpacity={0.7} onPress={nf.safely(() => { app.navigate("AI Mintly"); })}>
              <View style={styles.row9}>
                <View accessible={true} accessibilityRole="image" style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="sparkles" size={18} color="#FFFFFF" strokeWidth={2} /></View>
                <Text testID="Home_ChatWithMintlyText" accessible={true} accessibilityLabel="Chat with Mintly" style={styles.chatWithMintlyText} onPress={nf.safely(() => { app.navigate("AI Mintly"); })}>Chat with Mintly</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.column11}>
            <View style={styles.row10}>
              <TouchableOpacity testID="Home_Column" accessible={true} accessibilityRole="button" style={styles.column12} activeOpacity={0.7} onPress={nf.safely(() => { app.navigate("Payments"); })}>
                <View style={styles.column13}>
                  <Text style={styles.paymentsText}>Payments</Text>
                  <Text style={styles.billsUPIMoreText}>Bills, UPI & more</Text>
                </View>
                <View style={styles.row11}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 34, height: 34, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="receipt" size={34} color="#2B1B00" strokeWidth={2} /></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity testID="Home_Column2" accessible={true} accessibilityRole="button" style={styles.column14} activeOpacity={0.7} onPress={nf.safely(() => { app.navigate("Loans"); })}>
                <View style={styles.column15}>
                  <Text style={styles.loansCreditText}>Loans & Credit</Text>
                  <Text style={styles.preApprovedUpToText}>Pre-approved up to ₹50L</Text>
                </View>
                <View style={styles.row12}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 34, height: 34, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="shield-check" size={34} color="#B9F6CA" strokeWidth={2} /></View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.row13}>
              <TouchableOpacity testID="Home_Column3" accessible={true} accessibilityRole="button" style={styles.column16} activeOpacity={0.7} onPress={nf.safely(() => { app.navigate("Accounts"); })}>
                <View style={styles.column17}>
                  <Text style={styles.accountsText}>Accounts</Text>
                  <Text style={styles.savingsCurrentFDText}>Savings, Current & FD</Text>
                </View>
                <View style={styles.row14}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 34, height: 34, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="landmark" size={34} color="#F3D4D0" strokeWidth={2} /></View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity testID="Home_Column4" accessible={true} accessibilityRole="button" style={styles.column18} activeOpacity={0.7} onPress={nf.safely(() => { app.navigate("Investments"); })}>
                <View style={styles.column19}>
                  <Text style={styles.investmentsText}>Investments</Text>
                  <Text style={styles.fundsStocksText}>Funds & stocks</Text>
                </View>
                <View style={styles.row15}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 34, height: 34, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="gem" size={34} color="#F5C542" strokeWidth={2} /></View>
                </View>
              </TouchableOpacity>
            </View>
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
    backgroundColor: colors.background,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  column2: {
    gap: 20,
    overflow: 'hidden',
    position: 'relative',
    paddingTop: 45,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#19255A',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  row: {
    gap: 0,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
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
  goodMorningText: {
    color: '#AEB8E0',
    fontSize: 15,
  },
  prahaladText: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
  },
  row2: {
    gap: 16,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  notificationsIcon: {
    color: '#FFFFFF',
    paddingTop: 10,
  },
  center: {
    width: 40,
    height: 40,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#EDEFFA',
  },
  text: {
    color: '#19255A',
    fontSize: 15,
    fontWeight: '700',
  },
  column4: {
    gap: 10,
    marginTop: 12,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  row3: {
    gap: 6,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  totalBalanceText: {
    color: '#AEB8E0',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  toggleBalanceVisibilityIcon: {
    color: '#C7D0E8',
  },
  text124832000Text: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '800',
  },
  row4: {
    gap: 8,
    marginTop: 4,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  row5: {
    gap: 4,
    alignItems: 'flex-end',
    paddingTop: 4,
    paddingLeft: 10,
    borderRadius: 20,
    paddingRight: 10,
    paddingBottom: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    overflow: 'visible',
    flexDirection: 'row',
  },
  icon: {
    color: '#34D399',
  },
  text24Text: {
    color: '#4ADE80',
    fontSize: 13,
    fontWeight: '700',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  vsLastMonthText: {
    color: '#AEB8E0',
    fontSize: 13,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  row6: {
    gap: 0,
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  column5: {
    gap: 8,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  center2: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  sendMoneyIcon: {
    color: '#2563EB',
  },
  sendText: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '500',
  },
  column6: {
    gap: 8,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  center3: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  requestIcon: {
    color: '#7C3AED',
  },
  requestText: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '500',
  },
  column7: {
    gap: 8,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  center4: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  scanAndPayIcon: {
    color: '#EA580C',
  },
  scanPayText: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '500',
  },
  column8: {
    gap: 8,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  center5: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  moreOptionsIcon: {
    color: '#059669',
  },
  moreText: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  column9: {
    gap: 10,
    margin: 15,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#E6EBFB',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  row7: {
    gap: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  center6: {
    width: 56,
    height: 56,
    _rnShadow: {"shadowColor":"#000000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.08},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.08)',
    alignItems: 'center',
    borderRadius: 18,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  center7: {
    width: 40,
    height: 26,
    alignItems: 'center',
    borderRadius: 13,
    justifyContent: 'center',
    backgroundColor: '#0F1A4A',
  },
  row8: {
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  box: {
    width: 7,
    height: 7,
    padding: 0,
    borderRadius: 4,
    backgroundColor: '#6EE7B7',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  box2: {
    width: 7,
    height: 7,
    padding: 0,
    borderRadius: 4,
    backgroundColor: '#6EE7B7',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  column10: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  meetText: {
    color: '#6B7280',
    fontSize: 18,
  },
  text2: {
    color: '#1E2A5E',
    fontSize: 26,
    fontWeight: '800',
  },
  askAnythingGetInstantText: {
    color: '#6B7280',
    fontSize: 15,
    lineHeight: 20,
  },
  pressable: {
    alignItems: 'center',
    paddingTop: 14,
    borderRadius: 999,
    paddingBottom: 14,
    justifyContent: 'center',
    backgroundColor: '#3B4FE0',
  },
  row9: {
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  icon2: {
    color: '#FFFFFF',
  },
  chatWithMintlyText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  column11: {
    gap: 16,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 24,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  row10: {
    gap: 16,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  column12: {
    gap: 0,
    height: 150,
    padding: 18,
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: '#E0A43A',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  column13: {
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  paymentsText: {
    color: '#2B1B00',
    fontSize: 19,
    fontWeight: '800',
  },
  billsUPIMoreText: {
    color: '#4A3200',
    fontSize: 13,
  },
  row11: {
    gap: 0,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  icon3: {
    color: '#2B1B00',
  },
  column14: {
    gap: 0,
    height: 150,
    padding: 18,
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: '#3B5A41',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  column15: {
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  loansCreditText: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '800',
  },
  preApprovedUpToText: {
    color: '#D7E6DA',
    fontSize: 13,
  },
  row12: {
    gap: 0,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  icon4: {
    color: '#B9F6CA',
  },
  row13: {
    gap: 16,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  column16: {
    gap: 0,
    height: 150,
    padding: 18,
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: '#8A2A22',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  column17: {
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  accountsText: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '800',
  },
  savingsCurrentFDText: {
    color: '#F3D4D0',
    fontSize: 13,
  },
  row14: {
    gap: 0,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  icon5: {
    color: '#F3D4D0',
  },
  column18: {
    gap: 0,
    height: 150,
    padding: 18,
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: '#111827',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  column19: {
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  investmentsText: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '800',
  },
  fundsStocksText: {
    color: '#C9CED6',
    fontSize: 13,
  },
  row15: {
    gap: 0,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  icon6: {
    color: '#F5C542',
  },
  });
}

export default function HomeGuarded(props: any) {
  return <Can permissions={[]} redirectTo={"Login"}><Home {...props} /></Can>;
}
