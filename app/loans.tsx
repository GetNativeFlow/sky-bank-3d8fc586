import { Can } from '@/components/Can';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, ActivityIndicator } from 'react-native';
import { default as LucideDynamic } from '../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';

function Loans() {
  const router = useRouter();
  const routeParams = useLocalSearchParams();

  return (
    <SafeAreaView edges={["top","bottom","left","right"]} style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
        <StatusBar style="auto" />
        <View style={styles.column}>
          <View style={styles.row}>
            <TouchableOpacity testID="Loans_IconButton" accessible={true} accessibilityRole="button" style={[styles.iconButton, { backgroundColor: 'transparent', borderRadius: 20, padding: 10, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, width: 40, height: 40, alignSelf: 'center' }]} activeOpacity={0.7}>
              <View style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center' }}><LucideDynamic name="arrow-left" size={20} color="" strokeWidth={2} /></View>
            </TouchableOpacity>
            <Text accessibilityRole="header" style={styles.loansCreditHeading}>Loans & Credit</Text>
          </View>
          <View style={styles.box}>
            <View style={styles.column2}>
              <View style={styles.box2}>
                <Text style={styles.pREAPPROVEDText}>PRE-APPROVED</Text>
              </View>
              <Text style={styles.personalLoanUpToText}>Personal loan up to</Text>
              <Text style={styles.text5000000Text}>₹50,00,000</Text>
              <Text style={styles.from1049PText}>From 10.49% p.a. · Money in your account in 10 minutes</Text>
              <TouchableOpacity testID="Loans_CheckMyOfferButton" accessible={true} accessibilityRole="button" accessibilityLabel="Check my offer" style={[styles.checkMyOfferButton, { backgroundColor: '#FFFFFF', borderRadius: 14, paddingVertical: 12, paddingHorizontal: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]} activeOpacity={0.7}>
                <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#3A7A55', fontSize: 18, lineHeight: 27, fontWeight: '700', textAlign: 'center' }}>Check my offer</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.box3}>
            <View style={styles.row2}>
              <View style={styles.center}>
                <Text style={styles.text782Text}>782</Text>
              </View>
              <View style={styles.column3}>
                <Text style={styles.creditScoreCIBILText}>Credit score · CIBIL</Text>
                <Text style={styles.excellentText}>Excellent</Text>
                <Text style={styles.updated1Oct6Text}>Updated 1 Oct · +6 pts</Text>
              </View>
            </View>
          </View>
          <Text accessibilityRole="header" style={styles.activeLoansHeading}>Active loans</Text>
          <View style={styles.box4}>
            <View style={styles.column4}>
              <View style={styles.row3}>
                <View style={styles.center2}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="house" size={24} color="#3B5BDB" strokeWidth={2} /></View>
                </View>
                <View style={styles.column5}>
                  <Text style={styles.homeLoanText}>Home loan</Text>
                  <Text style={styles.text865PAText}>8.65% p.a. · HL ••3321</Text>
                </View>
                <View style={styles.column6}>
                  <Text style={styles.text2850000Text}>₹28,50,000</Text>
                  <Text style={styles.outstandingText}>outstanding</Text>
                </View>
              </View>
              <View style={styles.box5}>
                <View style={styles.box6} />
              </View>
              <View style={styles.row4}>
                <Text style={styles.text43RepaidText}>43% repaid</Text>
                <Text style={styles.nextEMI31420Text}>Next EMI ₹31,420 · 5 Nov</Text>
              </View>
            </View>
          </View>
          <View style={styles.row5}>
            <View style={styles.box7}>
              <View style={styles.column7}>
                <View style={styles.center3}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="calculator" size={22} color="#6D3FC7" strokeWidth={2} /></View>
                </View>
                <Text style={styles.eMICalculatorText}>EMI calculator</Text>
                <Text style={styles.planBeforeYouBorrowText}>Plan before you borrow</Text>
              </View>
            </View>
            <View style={styles.box8}>
              <View style={styles.column8}>
                <View style={styles.center4}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="house" size={22} color="#3B5BDB" strokeWidth={2} /></View>
                </View>
                <Text style={styles.newHomeLoanText}>New home loan</Text>
                <Text style={styles.from850ApprovalText}>From 8.50% · approval in 10 min</Text>
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
    gap: 16,
    paddingTop: 48,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 140,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  row: {
    gap: 16,
    paddingBottom: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  iconButton: {
    width: 40,
    height: 40,
    backgroundColor: 'transparent',
  },
  loansCreditHeading: {
    fontSize: 26,
    fontWeight: '700',
    color: '#14214F',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  box: {
    backgroundColor: '#3A7A55',
    borderRadius: 24,
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  column2: {
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  box2: {
    alignSelf: 'flex-start',
    backgroundColor: 'rgba(255,255,255,0.2)',
    borderRadius: 999,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 14,
    paddingRight: 14,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  pREAPPROVEDText: {
    fontSize: 13,
    fontWeight: '700',
    color: '#FFFFFF',
    letterSpacing: 1,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  personalLoanUpToText: {
    fontSize: 17,
    color: '#FFFFFF',
  },
  text5000000Text: {
    fontSize: 40,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  from1049PText: {
    fontSize: 16,
    color: '#FFFFFF',
  },
  checkMyOfferButton: {
    color: '#3A7A55',
    alignSelf: 'flex-start',
    marginTop: 8,
    paddingTop: 12,
    paddingLeft: 24,
    borderRadius: 14,
    paddingRight: 24,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
    height: 52,
    fontSize: 18,
    fontWeight: '700',
  },
  box3: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E6E9F2',
    paddingTop: 24,
    paddingBottom: 24,
    paddingLeft: 24,
    paddingRight: 24,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  row2: {
    gap: 28,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  center: {
    width: 104,
    height: 104,
    borderRadius: 52,
    borderWidth: 10,
    borderColor: '#3A7A55',
    borderBottomColor: '#E6E9F2',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text782Text: {
    fontSize: 30,
    fontWeight: '700',
    color: '#14214F',
    textAlign: 'center',
  },
  column3: {
    gap: 4,
    justifyContent: 'center',
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
  creditScoreCIBILText: {
    fontSize: 16,
    color: '#6B7280',
  },
  excellentText: {
    fontSize: 26,
    fontWeight: '700',
    color: '#3A7A55',
  },
  updated1Oct6Text: {
    fontSize: 14,
    color: '#6B7280',
  },
  activeLoansHeading: {
    fontSize: 22,
    fontWeight: '700',
    color: '#14214F',
    marginTop: 4,
  },
  box4: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E6E9F2',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  column4: {
    gap: 14,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  row3: {
    gap: 16,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  center2: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#EEF1FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#3B5BDB',
  },
  column5: {
    gap: 2,
    justifyContent: 'center',
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
  homeLoanText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#14214F',
  },
  text865PAText: {
    fontSize: 15,
    color: '#6B7280',
  },
  column6: {
    gap: 2,
    minWidth: 110,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  text2850000Text: {
    fontSize: 18,
    fontWeight: '700',
    color: '#14214F',
    textAlign: 'right',
  },
  outstandingText: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'right',
  },
  box5: {
    padding: 0,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EEF1F9',
    overflow: 'visible',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
  },
  box6: {
    padding: 0,
    width: '43%',
    height: 8,
    borderRadius: 4,
    backgroundColor: '#3B5BDB',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  row4: {
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  text43RepaidText: {
    fontSize: 15,
    color: '#4B5563',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  nextEMI31420Text: {
    fontSize: 15,
    color: '#4B5563',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  row5: {
    gap: 16,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  box7: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E6E9F2',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'hidden',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  column7: {
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  center3: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: '#F0EAFB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon2: {
    color: '#6D3FC7',
  },
  eMICalculatorText: {
    fontSize: 19,
    fontWeight: '700',
    color: '#14214F',
  },
  planBeforeYouBorrowText: {
    fontSize: 15,
    color: '#6B7280',
  },
  box8: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E6E9F2',
    paddingTop: 20,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'hidden',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  column8: {
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  center4: {
    width: 52,
    height: 52,
    borderRadius: 14,
    backgroundColor: '#EEF1FD',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon3: {
    color: '#3B5BDB',
  },
  newHomeLoanText: {
    fontSize: 19,
    fontWeight: '700',
    color: '#14214F',
  },
  from850ApprovalText: {
    fontSize: 15,
    color: '#6B7280',
  },
});


export default function LoansGuarded(props: any) {
  return <Can permissions={[]} redirectTo={"Login"}><Loans {...props} /></Can>;
}
