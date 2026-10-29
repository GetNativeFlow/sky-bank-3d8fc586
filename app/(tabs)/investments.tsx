import { Can } from '@/components/Can';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, ActivityIndicator } from 'react-native';
import { default as LucideDynamic } from '../../components/LucideDynamic';
import { default as NativeFlowGiftedChart } from '../../components/NativeFlowGiftedChart';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getThemeColors } from '../../config/theme';
import { useLocalSearchParams, useRouter } from 'expo-router';

function Investments() {
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
          <View style={styles.row}>
            <View accessible={true} accessibilityRole="image" style={{ width: 26, height: 26, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="chevron-left" size={26} color="#111827" strokeWidth={2} /></View>
            <Text accessibilityRole="header" style={styles.investmentsHeading}>Investments</Text>
          </View>
          <View style={styles.box}>
            <Text style={styles.totalInvestmentValueText}>Total Investment Value</Text>
            <Text accessibilityRole="header" style={styles.heading43256000Heading}>₹ 4,32,560.00</Text>
            <View style={styles.row2}>
              <View accessible={true} accessibilityRole="image" style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="arrow-up" size={16} color="#16A34A" strokeWidth={2} /></View>
              <Text style={styles.text85Text}>8.5%</Text>
              <Text style={styles.vsLastMonthText}>vs last month</Text>
            </View>
            <NativeFlowGiftedChart accessible={true} accessibilityRole="image" plan={{"nodeId":"836fe9de-057b-4225-86ef-9801ab5ccee2","component":"LineChart","width":320,"height":170,"titleColor":"#14181B","backgroundColor":"#FFFFFF","props":{"width":320,"height":170,"isAnimated":true,"hideRules":false,"rulesColor":"#E0E3E7","rulesType":"solid","xAxisColor":"#E0E3E7","yAxisColor":"#E0E3E7","xAxisThickness":0,"yAxisThickness":0,"hideYAxisText":true,"yAxisTextStyle":{"color":"#14181B","fontSize":10},"xAxisLabelTextStyle":{"color":"#14181B","fontSize":10},"maxValue":80,"noOfSections":4,"stepValue":20,"data":[{"value":20,"label":"","frontColor":"#3B5BFD"},{"value":35,"label":"","frontColor":"#3B5BFD"},{"value":18,"label":"","frontColor":"#3B5BFD"},{"value":38,"label":"","frontColor":"#3B5BFD"},{"value":30,"label":"","frontColor":"#3B5BFD"},{"value":48,"label":"","frontColor":"#3B5BFD"},{"value":40,"label":"","frontColor":"#3B5BFD"},{"value":55,"label":"","frontColor":"#3B5BFD"},{"value":50,"label":"","frontColor":"#3B5BFD"},{"value":62,"label":"","frontColor":"#3B5BFD"},{"value":58,"label":"","frontColor":"#3B5BFD"},{"value":75,"label":"","frontColor":"#3B5BFD"}],"color1":"#3B5BFD","curved":false,"areaChart":true,"thickness":3,"hideDataPoints":true,"dataPointsColor":"#4B39EF","dataPointsRadius":3,"focusedDataPointColor":"#FFFFFF","startFillColor":"#4B39EF","endFillColor":"#4B39EF","startOpacity":0.15,"endOpacity":0.05},"notes":[]}} style={styles.areaChart} />
            <View style={styles.row3}>
              <View style={styles.center}>
                <Text style={styles.text1MText}>1M</Text>
              </View>
              <Text style={styles.text3MText}>3M</Text>
              <Text style={styles.text6MText}>6M</Text>
              <Text style={styles.text1YText}>1Y</Text>
              <Text style={styles.allText}>All</Text>
            </View>
          </View>
          <View style={styles.row4}>
            <Text accessibilityRole="header" style={styles.mutualFundsHeading}>Mutual Funds</Text>
            <Text testID="Investments_ViewAllLink" accessible={true} accessibilityRole="link" accessibilityLabel="View all" style={[styles.viewAllLink, { color: '#0077E6', textDecorationLine: 'underline' }]}>View all</Text>
          </View>
          <View style={styles.box2}>
            <View style={styles.row5}>
              <View style={styles.center2}>
                <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="chart-pie" size={22} color="#3B5BFD" strokeWidth={2} /></View>
              </View>
              <View style={styles.column2}>
                <Text style={styles.mutualFundsText}>Mutual Funds</Text>
                <Text style={styles.sIPActiveText}>SIP · Active</Text>
              </View>
              <View style={styles.column3}>
                <Text style={styles.text24000000Text}>₹ 2,40,000.00</Text>
                <Text style={styles.text2080000Text}>+ ₹ 20,800.00</Text>
              </View>
            </View>
            <View style={[styles.divider, { height: 1, backgroundColor: '#F0F1F5', alignSelf: 'stretch' }]} />
            <View style={styles.row6}>
              <View style={styles.center3}>
                <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="trending-up" size={22} color="#3B5BFD" strokeWidth={2} /></View>
              </View>
              <View style={styles.column4}>
                <Text style={styles.stocksText}>Stocks</Text>
                <Text style={styles.dematActiveText}>Demat · Active</Text>
              </View>
              <View style={styles.column5}>
                <Text style={styles.text10512000Text}>₹ 1,05,120.00</Text>
                <Text style={styles.text124Text}>+ 12.4%</Text>
              </View>
            </View>
          </View>
          <View style={styles.box3}>
            <View style={styles.row7}>
              <View style={styles.center4}>
                <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="bot" size={22} color="#0B1A4D" strokeWidth={2} /></View>
              </View>
              <Text accessibilityRole="header" style={styles.mintlyInsightHeading}>Mintly Insight</Text>
            </View>
            <Text style={styles.yourPortfolioIsUpText}>Your portfolio is up 12%. A small shift towards debt funds could balance your risk.</Text>
            <TouchableOpacity testID="Investments_ViewRecommendationsButton" accessible={true} accessibilityRole="button" accessibilityLabel="View recommendations" style={[styles.viewRecommendationsButton, { backgroundColor: '#3B5BFD', borderRadius: 30, paddingVertical: 14, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
              <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>View recommendations</Text>
            </TouchableOpacity>
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
    backgroundColor: '#F5F7FA',
  },
  container: {
    flex: 1,
    backgroundColor: '#',
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
    backgroundColor: colors.background,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  row: {
    gap: 12,
    alignItems: 'stretch',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 12,
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  icon: {
    color: '#111827',
  },
  investmentsHeading: {
    color: '#0B1A4D',
    fontWeight: '800',
    fontSize: 24,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  box: {
    padding: 20,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":8,"shadowOpacity":0.05},
    boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
    marginTop: 4,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  totalInvestmentValueText: {
    color: '#6B7280',
    fontSize: 15,
  },
  heading43256000Heading: {
    color: '#0B1A4D',
    marginTop: 8,
    fontWeight: '800',
    fontSize: 28,
  },
  row2: {
    gap: 6,
    marginTop: 8,
    alignItems: 'stretch',
    marginBottom: 12,
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  icon2: {
    color: '#16A34A',
  },
  text85Text: {
    color: '#16A34A',
    fontSize: 14,
    fontWeight: '700',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  vsLastMonthText: {
    color: '#9CA3AF',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  areaChart: {
    alignSelf: 'stretch',
  },
  row3: {
    gap: 0,
    marginTop: 12,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  center: {
    width: 56,
    height: 36,
    alignItems: 'center',
    borderRadius: 18,
    justifyContent: 'center',
    backgroundColor: '#3B5BFD',
  },
  text1MText: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  text3MText: {
    color: '#6B7280',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  text6MText: {
    color: '#6B7280',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  text1YText: {
    color: '#6B7280',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  allText: {
    color: '#6B7280',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  row4: {
    gap: 0,
    alignItems: 'stretch',
    paddingLeft: 20,
    marginBottom: 10,
    paddingRight: 20,
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  mutualFundsHeading: {
    color: '#0B1A4D',
    fontWeight: '800',
    fontSize: 18,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  viewAllLink: {
    color: '#3B5BFD',
    fontSize: 15,
    fontWeight: '600',
  },
  box2: {
    padding: 8,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":8,"shadowOpacity":0.05},
    boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 20,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  row5: {
    gap: 12,
    padding: 12,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  center2: {
    width: 48,
    height: 48,
    alignItems: 'center',
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: '#E8EEFF',
  },
  icon3: {
    color: '#3B5BFD',
  },
  column2: {
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
  mutualFundsText: {
    color: '#0B1A4D',
    fontSize: 17,
    fontWeight: '700',
  },
  sIPActiveText: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  column3: {
    gap: 2,
    minWidth: 120,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  text24000000Text: {
    color: '#0B1A4D',
    fontSize: 17,
    textAlign: 'right',
    fontWeight: '700',
  },
  text2080000Text: {
    color: '#16A34A',
    fontSize: 14,
    textAlign: 'right',
    fontWeight: '700',
  },
  divider: {
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: '#F0F1F5',
  },
  row6: {
    gap: 12,
    padding: 12,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  center3: {
    width: 48,
    height: 48,
    alignItems: 'center',
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: '#E8EEFF',
  },
  icon4: {
    color: '#3B5BFD',
  },
  column4: {
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
  stocksText: {
    color: '#0B1A4D',
    fontSize: 17,
    fontWeight: '700',
  },
  dematActiveText: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  column5: {
    gap: 2,
    minWidth: 120,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  text10512000Text: {
    color: '#0B1A4D',
    fontSize: 17,
    textAlign: 'right',
    fontWeight: '700',
  },
  text124Text: {
    color: '#16A34A',
    fontSize: 14,
    textAlign: 'right',
    fontWeight: '700',
  },
  box3: {
    padding: 20,
    marginLeft: 20,
    borderColor: '#DCE2F9',
    borderWidth: 1,
    marginRight: 20,
    borderRadius: 20,
    marginBottom: 24,
    backgroundColor: '#EAEEFD',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: 14,
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  row7: {
    gap: 12,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  center4: {
    width: 44,
    height: 44,
    alignItems: 'center',
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  icon5: {
    color: '#0B1A4D',
  },
  mintlyInsightHeading: {
    color: '#0B1A4D',
    fontWeight: '800',
    fontSize: 18,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  yourPortfolioIsUpText: {
    color: '#374151',
    fontSize: 15,
    lineHeight: 21,
  },
  viewRecommendationsButton: {
    paddingTop: 14,
    borderRadius: 30,
    paddingBottom: 14,
    backgroundColor: '#3B5BFD',
  },
  });
}

export default function InvestmentsGuarded(props: any) {
  return <Can permissions={[]} redirectTo={"Login"}><Investments {...props} /></Can>;
}
