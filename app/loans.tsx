import { Can } from '@/components/Can';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, ActivityIndicator } from 'react-native';
import { default as LucideDynamic } from '../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { appRuntime as app } from '../lib/app';
import * as nf from '../lib/runtime';

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
          <Text accessibilityRole="header" style={styles.loansCreditHeading}>Loans & Credit</Text>
          <View style={styles.box}>
            <View style={styles.box2} />
            <View style={styles.column2}>
              <Text style={styles.preApprovedLoanOfferText}>Pre-approved loan offer</Text>
              <View style={styles.row}>
                <Text style={styles.upTo5000Text}>Up to ₹ 50,00,000</Text>
                <View style={styles.center}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="shield" size={24} color="#34D399" strokeWidth={2} /></View>
                </View>
              </View>
              <Text style={styles.attractiveInterestRatesText}>Attractive interest rates</Text>
              <TouchableOpacity testID="Loans_CheckEligibilityButton" accessible={true} accessibilityRole="button" accessibilityLabel="Check eligibility" style={[styles.checkEligibilityButton, { backgroundColor: '#FFFFFF', borderRadius: 24, paddingVertical: 12, paddingHorizontal: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]} activeOpacity={0.7}>
                <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#0F1E4D', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Check eligibility</Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text accessibilityRole="header" style={styles.creditScoreHeading}>Credit Score</Text>
          <View style={styles.row2}>
            <View style={styles.center2}>
              <View style={styles.column3}>
                <Text style={styles.text782Text}>782</Text>
                <Text style={styles.excellentText}>Excellent</Text>
              </View>
            </View>
            <View style={styles.column4}>
              <Text style={styles.updated2DaysAgoText}>Updated 2 days ago. Your score is in the top range.</Text>
              <Text testID="Loans_ViewDetailsLink" accessible={true} accessibilityRole="link" accessibilityLabel="View details" style={[styles.viewDetailsLink, { color: '#0077E6', textDecorationLine: 'underline' }]}>View details</Text>
            </View>
          </View>
          <TouchableOpacity testID="Loans_Row" accessible={true} accessibilityRole="button" style={styles.row3} activeOpacity={0.7} onPress={nf.safely(() => { app.navigate("Home"); })}>
            <View style={styles.row4}>
              <View style={styles.center3}>
                <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="calculator" size={22} color="#2952CC" strokeWidth={2} /></View>
              </View>
              <View style={styles.column5}>
                <Text style={styles.eMICalculatorText}>EMI Calculator</Text>
                <Text style={styles.planYourLoanEasilyText}>Plan your loan easily</Text>
              </View>
            </View>
            <View accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="chevron-right" size={20} color="#9CA3AF" strokeWidth={2} /></View>
          </TouchableOpacity>
          <View style={styles.row5} />
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
    gap: 20,
    paddingTop: 45,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  loansCreditHeading: {
    color: '#0F1E4D',
    fontSize: 30,
    fontWeight: '800',
  },
  box: {
    padding: 24,
    overflow: 'visible',
    position: 'relative',
    borderRadius: 20,
    backgroundColor: '#122A6E',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
  },
  box2: {
    right: -40,
    width: 160,
    bottom: -40,
    height: 160,
    padding: 0,
    position: 'absolute',
    borderRadius: 80,
    backgroundColor: 'rgba(255,255,255,0.06)',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  column2: {
    gap: 8,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  preApprovedLoanOfferText: {
    color: '#C7D2E8',
    fontSize: 15,
  },
  row: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  upTo5000Text: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '800',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  center: {
    width: 48,
    height: 48,
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  icon: {
    color: '#34D399',
  },
  attractiveInterestRatesText: {
    color: '#C7D2E8',
    fontSize: 14,
    marginTop: 2,
  },
  checkEligibilityButton: {
    color: '#0F1E4D',
    alignSelf: 'flex-start',
    marginTop: 12,
    paddingTop: 12,
    paddingLeft: 24,
    borderRadius: 24,
    paddingRight: 24,
    paddingBottom: 12,
    backgroundColor: '#FFFFFF',
  },
  creditScoreHeading: {
    color: '#111827',
    fontSize: 20,
    fontWeight: '700',
  },
  row2: {
    gap: 20,
    padding: 20,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.05},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.05)',
    alignItems: 'stretch',
    borderRadius: 16,
    justifyContent: 'flex-start',
    backgroundColor: '#FFFFFF',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  center2: {
    width: 120,
    height: 120,
    alignItems: 'center',
    borderColor: '#1FA463',
    borderWidth: 10,
    borderRadius: 60,
    justifyContent: 'center',
  },
  column3: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    gap: 0,
  },
  text782Text: {
    color: '#0F1E4D',
    fontSize: 28,
    fontWeight: '800',
  },
  excellentText: {
    color: '#1FA463',
    fontSize: 13,
    fontWeight: '600',
  },
  column4: {
    gap: 6,
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
  updated2DaysAgoText: {
    color: '#4B5563',
    fontSize: 14,
  },
  viewDetailsLink: {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: '700',
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
    gap: 14,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  center3: {
    width: 44,
    height: 44,
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'center',
    backgroundColor: '#DCE7FF',
  },
  icon2: {
    color: '#2952CC',
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
  eMICalculatorText: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '700',
  },
  planYourLoanEasilyText: {
    color: '#6B7280',
    fontSize: 13,
  },
  icon3: {
    color: '#9CA3AF',
  },
  row5: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
});


export default function LoansGuarded(props: any) {
  return <Can permissions={[]} redirectTo={"Login"}><Loans {...props} /></Can>;
}
