import { Can } from '@/components/Can';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { default as LucideDynamic } from '../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { appRuntime as app } from '../lib/app';
import * as nf from '../lib/runtime';

function Profile() {
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
    <SafeAreaView edges={["top","bottom","left","right"]} style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
        <StatusBar style="auto" />
        <View style={styles.row}>
        <View style={styles.rowContent}>
          <View testID="Profile_Icon" accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }} onPress={nf.safely(() => { (() => { console.warn('[navigateTo] Target page not found for pageId:', undefined); })(); })}><LucideDynamic name="arrow-left" size={24} color="#000000" strokeWidth={2} /></View>
          <Text testID="Profile_ProfileHeading" accessible={true} accessibilityRole="header" accessibilityLabel="Profile" style={styles.profileHeading} onPress={nf.safely(() => { app.navigate("Home"); })}>Profile</Text>
        </View>
        </View>
        <View style={styles.column}>
          <View style={styles.row2}>
            <View style={styles.row3}>
              <View style={styles.center}>
                <Text style={styles.text}>AC</Text>
              </View>
              <View style={styles.column2}>
                <Text style={styles.prahaladMadepallyText}>{nf.text(listAccountsTheDemoData?.[0]?.owner_name || '')}</Text>
                <Text style={styles.customerID12345678Text}>{nf.text(listAccountsTheDemoData?.[0]?.ifsc || '')}</Text>
              </View>
            </View>
            <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="chevron-right" size={22} color="#9CA3AF" strokeWidth={2} /></View>
          </View>
          <View style={styles.column3}>
            <View style={styles.row4}>
              <View style={styles.row5}>
                <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="user" size={22} color="#0D1B4C" strokeWidth={2} /></View>
                <Text style={styles.personalDetailsText}>Personal Details</Text>
              </View>
              <View accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="chevron-right" size={20} color="#9CA3AF" strokeWidth={2} /></View>
            </View>
            <View style={styles.row6}>
              <View style={styles.row7}>
                <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="settings" size={22} color="#0D1B4C" strokeWidth={2} /></View>
                <Text style={styles.accountSettingsText}>Account Settings</Text>
              </View>
              <View accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="chevron-right" size={20} color="#9CA3AF" strokeWidth={2} /></View>
            </View>
            <View style={styles.row8}>
              <View style={styles.row9}>
                <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="bell" size={22} color="#0D1B4C" strokeWidth={2} /></View>
                <Text style={styles.notificationsText}>Notifications</Text>
              </View>
              <View style={styles.row10}>
                <View style={styles.center2}>
                  <Text style={styles.text3Text}>3</Text>
                </View>
                <View accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="chevron-right" size={20} color="#9CA3AF" strokeWidth={2} /></View>
              </View>
            </View>
            <View style={styles.row11}>
              <View style={styles.row12}>
                <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="shield-check" size={22} color="#0D1B4C" strokeWidth={2} /></View>
                <Text style={styles.securityPrivacyText}>Security & Privacy</Text>
              </View>
              <View accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="chevron-right" size={20} color="#9CA3AF" strokeWidth={2} /></View>
            </View>
            <View style={styles.row13}>
              <View style={styles.row14}>
                <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="circle-help" size={22} color="#0D1B4C" strokeWidth={2} /></View>
                <Text style={styles.helpSupportText}>Help & Support</Text>
              </View>
              <View accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="chevron-right" size={20} color="#9CA3AF" strokeWidth={2} /></View>
            </View>
            <View style={styles.row15}>
              <View style={styles.row16}>
                <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="info" size={22} color="#0D1B4C" strokeWidth={2} /></View>
                <Text style={styles.aboutSkyBankText}>About SkyBank</Text>
              </View>
              <View accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="chevron-right" size={20} color="#9CA3AF" strokeWidth={2} /></View>
            </View>
          </View>
          <TouchableOpacity testID="Profile_Row" accessible={true} accessibilityRole="button" style={styles.row17} activeOpacity={0.7} onPress={nf.safely(() => { app.navigate("Login"); })}>
            <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="log-out" size={22} color="#D92D20" strokeWidth={2} /></View>
            <Text style={styles.logOutText}>Log Out</Text>
          </TouchableOpacity>
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
    backgroundColor: '#F5F7FB',
  },
  container: {
    flex: 1,
    backgroundColor: '#F3F5F9',
    overflow: 'visible',
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
  row: {
    width: '100%',
  },
  rowContent: {
    flexGrow: 1,
    alignSelf: 'stretch',
    paddingTop: 45,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    justifyContent: 'flex-start',
    alignItems: 'center',
    gap: 20,
    flexWrap: 'nowrap',
    flexDirection: 'row',
  },
  icon: {
    color: '#000000',
  },
  profileHeading: {
    color: '#0D1B4C',
    fontWeight: '800',
    fontSize: 28,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  column: {
    gap: 20,
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
  row2: {
    padding: 20,
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
  row3: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 12,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center: {
    width: 64,
    height: 64,
    alignItems: 'center',
    borderRadius: 32,
    justifyContent: 'center',
    backgroundColor: '#D6E4FB',
  },
  text: {
    color: '#0D1B4C',
    fontSize: 20,
    fontWeight: '700',
  },
  column2: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  prahaladMadepallyText: {
    color: '#0D1B4C',
    fontSize: 18,
    fontWeight: '700',
  },
  customerID12345678Text: {
    color: '#6B7280',
    fontSize: 14,
  },
  icon2: {
    color: '#9CA3AF',
  },
  column3: {
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.05},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.05)',
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    gap: 0,
  },
  row4: {
    alignItems: 'stretch',
    paddingTop: 18,
    borderColor: '#F0F1F3',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 18,
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  row5: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 12,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  icon3: {
    color: '#0D1B4C',
  },
  personalDetailsText: {
    color: '#0D1B4C',
    fontSize: 17,
    fontWeight: '600',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  icon4: {
    color: '#9CA3AF',
  },
  row6: {
    alignItems: 'stretch',
    paddingTop: 18,
    borderColor: '#F0F1F3',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 18,
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  row7: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 12,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  icon5: {
    color: '#0D1B4C',
  },
  accountSettingsText: {
    color: '#0D1B4C',
    fontSize: 17,
    fontWeight: '600',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  icon6: {
    color: '#9CA3AF',
  },
  row8: {
    alignItems: 'stretch',
    paddingTop: 18,
    borderColor: '#F0F1F3',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 18,
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  row9: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 12,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  icon7: {
    color: '#0D1B4C',
  },
  notificationsText: {
    color: '#0D1B4C',
    fontSize: 17,
    fontWeight: '600',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  row10: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 6,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center2: {
    width: 26,
    height: 26,
    alignItems: 'center',
    borderRadius: 13,
    justifyContent: 'center',
    backgroundColor: '#D92D20',
  },
  text3Text: {
    color: '#FFFFFF',
    fontSize: 13,
    fontWeight: '700',
  },
  icon8: {
    color: '#9CA3AF',
  },
  row11: {
    alignItems: 'stretch',
    paddingTop: 18,
    borderColor: '#F0F1F3',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 18,
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  row12: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 12,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  icon9: {
    color: '#0D1B4C',
  },
  securityPrivacyText: {
    color: '#0D1B4C',
    fontSize: 17,
    fontWeight: '600',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  icon10: {
    color: '#9CA3AF',
  },
  row13: {
    alignItems: 'stretch',
    paddingTop: 18,
    borderColor: '#F0F1F3',
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 18,
    justifyContent: 'flex-start',
    borderBottomWidth: 1,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  row14: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 12,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  icon11: {
    color: '#0D1B4C',
  },
  helpSupportText: {
    color: '#0D1B4C',
    fontSize: 17,
    fontWeight: '600',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  icon12: {
    color: '#9CA3AF',
  },
  row15: {
    alignItems: 'stretch',
    paddingTop: 18,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 18,
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  row16: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 12,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  icon13: {
    color: '#0D1B4C',
  },
  aboutSkyBankText: {
    color: '#0D1B4C',
    fontSize: 17,
    fontWeight: '600',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  icon14: {
    color: '#9CA3AF',
  },
  row17: {
    padding: 20,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.05},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.05)',
    alignItems: 'stretch',
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },
  icon15: {
    color: '#D92D20',
  },
  logOutText: {
    color: '#D92D20',
    fontSize: 17,
    fontWeight: '700',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
});


export default function ProfileGuarded(props: any) {
  return <Can permissions={[]} redirectTo={"Login"}><Profile {...props} /></Can>;
}
