import { Can } from '@/components/Can';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, ActivityIndicator } from 'react-native';
import { default as LucideDynamic } from '../../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getThemeColors } from '../../config/theme';
import { useLocalSearchParams, useRouter } from 'expo-router';

function Payments() {
  const colors = getThemeColors();
  const router = useRouter();
  const routeParams = useLocalSearchParams();

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
                <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="scan" size={24} color="#FFFFFF" strokeWidth={2} /></View>
              </View>
              <Text style={styles.scanPayText}>Scan & Pay</Text>
            </View>
            <View style={styles.column3}>
              <View style={styles.center2}>
                <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="send" size={24} color="#FFFFFF" strokeWidth={2} /></View>
              </View>
              <Text style={styles.sendText}>Send</Text>
            </View>
            <View style={styles.column4}>
              <View style={styles.center3}>
                <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="corner-left-down" size={24} color="#FFFFFF" strokeWidth={2} /></View>
              </View>
              <Text style={styles.requestText}>Request</Text>
            </View>
            <View style={styles.column5}>
              <View style={styles.center4}>
                <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="at-sign" size={24} color="#FFFFFF" strokeWidth={2} /></View>
              </View>
              <Text style={styles.uPIIDText}>UPI ID</Text>
            </View>
          </View>
          <View style={styles.row2}>
            <View style={styles.center5}>
              <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="at-sign" size={22} color="#FFFFFF" strokeWidth={2} /></View>
            </View>
            <View style={styles.column6}>
              <Text style={styles.prahaladSkybankText}>prahalad@skybank</Text>
              <Text style={styles.linkedToSavingsAccountText}>Linked to savings account</Text>
            </View>
            <TouchableOpacity testID="Payments_MyQRButton" accessible={true} accessibilityRole="button" accessibilityLabel="My QR" style={[styles.myQRButton, { backgroundColor: 'transparent', borderRadius: 20, paddingVertical: 6, paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#C7D0F5', alignSelf: 'stretch' }]} activeOpacity={0.7}>
              <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: colors.primary, fontSize: 12, lineHeight: 18, fontWeight: '600', textAlign: 'center' }}>My QR</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.row3}>
            <Text style={styles.payAgainText}>Pay again</Text>
            <Text style={styles.seeAllText}>See all</Text>
          </View>
          <View style={styles.row4}>
            <View style={styles.column7}>
              <View style={styles.center6}>
                <Text style={styles.rKText}>RK</Text>
              </View>
              <Text style={styles.raviKumarText}>Ravi Kumar</Text>
            </View>
            <View style={styles.column8}>
              <View style={styles.center7}>
                <Text style={styles.aSText}>AS</Text>
              </View>
              <Text style={styles.anitaSText}>Anita S.</Text>
            </View>
            <View style={styles.column9}>
              <View style={styles.center8}>
                <Text style={styles.mRText}>MR</Text>
              </View>
              <Text style={styles.momText}>Mom</Text>
            </View>
            <View style={styles.column10}>
              <View style={styles.center9}>
                <Text style={styles.kPText}>KP</Text>
              </View>
              <Text style={styles.kiranPText}>Kiran P.</Text>
            </View>
            <View style={styles.column11}>
              <View style={styles.center10}>
                <View accessible={true} accessibilityRole="image" style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="plus" size={18} color="#4B5563" strokeWidth={2} /></View>
              </View>
              <Text style={styles.newText}>New</Text>
            </View>
          </View>
          <View style={styles.row5}>
            <View style={styles.center11}>
              <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="zap" size={22} color="#9A5B1E" strokeWidth={2} /></View>
            </View>
            <View style={styles.column12}>
              <Text style={styles.electricity1240Text}>Electricity · ₹1,240</Text>
              <Text style={styles.dueTomorrow31OctText}>Due tomorrow, 31 Oct</Text>
            </View>
            <TouchableOpacity testID="Payments_PayNowButton" accessible={true} accessibilityRole="button" accessibilityLabel="Pay now" style={[styles.payNowButton, { backgroundColor: '#0F1E4D', borderRadius: 10, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
              <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#FFFFFF', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Pay now</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.column13}>
            <Text style={styles.billsRechargesText}>Bills & recharges</Text>
            <View style={styles.row6}>
              <View style={styles.column14}>
                <View style={styles.center12}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="zap" size={24} color="$Primary" strokeWidth={2} /></View>
                </View>
                <Text style={styles.electricityText}>Electricity</Text>
              </View>
              <View style={styles.column15}>
                <View style={styles.center13}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="droplet" size={24} color="$Primary" strokeWidth={2} /></View>
                </View>
                <Text style={styles.waterText}>Water</Text>
              </View>
              <View style={styles.column16}>
                <View style={styles.center14}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="smartphone" size={24} color="$Primary" strokeWidth={2} /></View>
                </View>
                <Text style={styles.mobileText}>Mobile</Text>
              </View>
              <View style={styles.column17}>
                <View style={styles.center15}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="tv" size={24} color="$Primary" strokeWidth={2} /></View>
                </View>
                <Text style={styles.dTHText}>DTH</Text>
              </View>
            </View>
            <View style={styles.row7}>
              <View style={styles.column18}>
                <View style={styles.center16}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="wifi" size={24} color="$Primary" strokeWidth={2} /></View>
                </View>
                <Text style={styles.broadbandText}>Broadband</Text>
              </View>
              <View style={styles.column19}>
                <View style={styles.center17}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="flame" size={24} color="$Primary" strokeWidth={2} /></View>
                </View>
                <Text style={styles.gasText}>Gas</Text>
              </View>
              <View style={styles.column20}>
                <View style={styles.center18}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="credit-card" size={24} color="$Primary" strokeWidth={2} /></View>
                </View>
                <Text style={styles.creditCardText}>Credit card</Text>
              </View>
              <View style={styles.column21}>
                <View style={styles.center19}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="ellipsis" size={24} color="$Primary" strokeWidth={2} /></View>
                </View>
                <Text style={styles.moreText}>More</Text>
              </View>
            </View>
          </View>
          <View style={styles.row8}>
            <View style={styles.center20}>
              <View accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="repeat" size={20} color="$Primary" strokeWidth={2} /></View>
            </View>
            <View style={styles.column22}>
              <Text style={styles.setUpUPIAutoPayText}>Set up UPI AutoPay</Text>
              <Text style={styles.neverMissABillText}>Never miss a bill or SIP again</Text>
            </View>
            <View accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="chevron-right" size={20} color="$Primary" strokeWidth={2} /></View>
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
    paddingTop: 24,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 120,
    backgroundColor: '#F3F5F9',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  paymentsText: {
    fontSize: 30,
    fontWeight: '800',
    color: '#0F1E4D',
  },
  row: {
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  column2: {
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#FFFFFF',
  },
  scanPayText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0F1E4D',
    textAlign: 'center',
  },
  column3: {
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center2: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon2: {
    color: '#FFFFFF',
  },
  sendText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0F1E4D',
    textAlign: 'center',
  },
  column4: {
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center3: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon3: {
    color: '#FFFFFF',
  },
  requestText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0F1E4D',
    textAlign: 'center',
  },
  column5: {
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center4: {
    width: 58,
    height: 58,
    borderRadius: 29,
    backgroundColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon4: {
    color: '#FFFFFF',
  },
  uPIIDText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#0F1E4D',
    textAlign: 'center',
  },
  row2: {
    gap: 12,
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E6E9F2',
    boxShadow: '0px 2px 8px rgba(15,30,77,0.06)',
    _rnShadow: {"shadowColor":"#0F1E4D","shadowOffset":{"width":0,"height":2},"shadowOpacity":0.06,"shadowRadius":8},
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  center5: {
    width: 48,
    height: 48,
    borderRadius: 24,
    backgroundColor: '#0F1E4D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon5: {
    color: '#FFFFFF',
  },
  column6: {
    gap: 2,
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
  prahaladSkybankText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F1E4D',
  },
  linkedToSavingsAccountText: {
    fontSize: 13,
    color: '#6B7280',
  },
  myQRButton: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#C7D0F5',
    backgroundColor: 'transparent',
    color: colors.primary,
    fontWeight: '600',
  },
  row3: {
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  payAgainText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F1E4D',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  seeAllText: {
    fontSize: 15,
    fontWeight: '600',
    color: colors.primary,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  row4: {
    gap: 6,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  column7: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center6: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#EEF1FE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rKText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F1E4D',
  },
  raviKumarText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  column8: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center7: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#EFE9FB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aSText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#6B3FD0',
  },
  anitaSText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  column9: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center8: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#E6F4EC',
    justifyContent: 'center',
    alignItems: 'center',
  },
  mRText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#2E7D4F',
  },
  momText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  column10: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center9: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#FCF1E3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  kPText: {
    fontSize: 17,
    fontWeight: '700',
    color: '#9A5B1E',
  },
  kiranPText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  column11: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center10: {
    width: 52,
    height: 52,
    borderRadius: 26,
    backgroundColor: '#ECEDEF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon6: {
    color: '#4B5563',
  },
  newText: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'center',
  },
  row5: {
    gap: 12,
    padding: 14,
    backgroundColor: '#FDF3E7',
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#F5DDB8',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  center11: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon7: {
    color: '#9A5B1E',
  },
  column12: {
    gap: 2,
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
  electricity1240Text: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F1E4D',
  },
  dueTomorrow31OctText: {
    fontSize: 13,
    color: '#9A5B1E',
  },
  payNowButton: {
    backgroundColor: '#0F1E4D',
    color: '#FFFFFF',
    borderRadius: 10,
    fontWeight: '600',
  },
  column13: {
    gap: 18,
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E6E9F2',
    boxShadow: '0px 2px 8px rgba(15,30,77,0.06)',
    _rnShadow: {"shadowColor":"#0F1E4D","shadowOffset":{"width":0,"height":2},"shadowOpacity":0.06,"shadowRadius":8},
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  billsRechargesText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F1E4D',
  },
  row6: {
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  column14: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center12: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#EEF1FE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon8: {
    color: colors.primary,
  },
  electricityText: {
    fontSize: 12,
    color: '#4B5563',
    textAlign: 'center',
  },
  column15: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center13: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#EEF1FE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon9: {
    color: colors.primary,
  },
  waterText: {
    fontSize: 12,
    color: '#4B5563',
    textAlign: 'center',
  },
  column16: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center14: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#EEF1FE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon10: {
    color: colors.primary,
  },
  mobileText: {
    fontSize: 12,
    color: '#4B5563',
    textAlign: 'center',
  },
  column17: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center15: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#EEF1FE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon11: {
    color: colors.primary,
  },
  dTHText: {
    fontSize: 12,
    color: '#4B5563',
    textAlign: 'center',
  },
  row7: {
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  column18: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center16: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#EEF1FE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon12: {
    color: colors.primary,
  },
  broadbandText: {
    fontSize: 12,
    color: '#4B5563',
    textAlign: 'center',
  },
  column19: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center17: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#EEF1FE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon13: {
    color: colors.primary,
  },
  gasText: {
    fontSize: 12,
    color: '#4B5563',
    textAlign: 'center',
  },
  column20: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center18: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#EEF1FE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon14: {
    color: colors.primary,
  },
  creditCardText: {
    fontSize: 12,
    color: '#4B5563',
    textAlign: 'center',
  },
  column21: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center19: {
    width: 60,
    height: 60,
    borderRadius: 16,
    backgroundColor: '#EEF1FE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon15: {
    color: colors.primary,
  },
  moreText: {
    fontSize: 12,
    color: '#4B5563',
    textAlign: 'center',
  },
  row8: {
    gap: 12,
    padding: 16,
    backgroundColor: '#EEF1FE',
    borderRadius: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  center20: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon16: {
    color: colors.primary,
  },
  column22: {
    gap: 2,
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
  setUpUPIAutoPayText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#0F1E4D',
  },
  neverMissABillText: {
    fontSize: 13,
    color: '#4B5563',
  },
  icon17: {
    color: colors.primary,
  },
  });
}

export default function PaymentsGuarded(props: any) {
  return <Can permissions={[]} redirectTo={"Login"}><Payments {...props} /></Can>;
}
