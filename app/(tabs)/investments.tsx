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
          <Text accessibilityRole="header" style={styles.investmentsHeading}>Investments</Text>
          <View style={styles.column2}>
            <Text style={styles.totalPortfolioValueText}>Total portfolio value</Text>
            <Text accessibilityRole="header" style={styles.heading43256000Heading}>₹4,32,560.00</Text>
            <View style={styles.row}>
              <View accessible={true} accessibilityRole="image" style={{ width: 15, height: 15, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="arrow-up" size={15} color="#2F7D4F" strokeWidth={2} /></View>
              <Text style={styles.text3389085Text}>₹33,890 (8.5%)</Text>
              <Text style={styles.thisMonthText}>this month</Text>
            </View>
            <NativeFlowGiftedChart accessible={true} accessibilityRole="image" plan={{"nodeId":"836fe9de-057b-4225-86ef-9801ab5ccee2","component":"LineChart","width":300,"height":170,"titleColor":"#14181B","backgroundColor":"#FFFFFF","props":{"width":300,"height":170,"isAnimated":true,"hideRules":false,"rulesColor":"#E0E3E7","rulesType":"solid","xAxisColor":"#E0E3E7","yAxisColor":"#E0E3E7","xAxisThickness":0,"yAxisThickness":0,"hideYAxisText":true,"yAxisTextStyle":{"color":"#14181B","fontSize":10},"xAxisLabelTextStyle":{"color":"#14181B","fontSize":10},"maxValue":80,"noOfSections":4,"stepValue":20,"data":[{"value":20,"label":"","frontColor":"#3B5BFD"},{"value":35,"label":"","frontColor":"#3B5BFD"},{"value":18,"label":"","frontColor":"#3B5BFD"},{"value":38,"label":"","frontColor":"#3B5BFD"},{"value":30,"label":"","frontColor":"#3B5BFD"},{"value":48,"label":"","frontColor":"#3B5BFD"},{"value":40,"label":"","frontColor":"#3B5BFD"},{"value":55,"label":"","frontColor":"#3B5BFD"},{"value":50,"label":"","frontColor":"#3B5BFD"},{"value":62,"label":"","frontColor":"#3B5BFD"},{"value":58,"label":"","frontColor":"#3B5BFD"},{"value":75,"label":"","frontColor":"#3B5BFD"}],"color1":"#3B5BFD","curved":false,"areaChart":true,"thickness":3,"hideDataPoints":true,"dataPointsColor":"#4B39EF","dataPointsRadius":3,"focusedDataPointColor":"#FFFFFF","startFillColor":"#4B39EF","endFillColor":"#4B39EF","startOpacity":0.12,"endOpacity":0.05},"notes":[]}} style={styles.areaChart} />
            <View style={styles.row2}>
              <View style={styles.center}>
                <Text style={styles.text1MText}>1M</Text>
              </View>
              <View style={styles.center2}>
                <Text style={styles.text3MText}>3M</Text>
              </View>
              <View style={styles.center3}>
                <Text style={styles.text6MText}>6M</Text>
              </View>
              <View style={styles.center4}>
                <Text style={styles.text1YText}>1Y</Text>
              </View>
              <View style={styles.center5}>
                <Text style={styles.allText}>All</Text>
              </View>
            </View>
          </View>
          <View style={styles.row3}>
            <Text accessibilityRole="header" style={styles.holdingsHeading}>Holdings</Text>
            <Text testID="Investments_ViewAllLink" accessible={true} accessibilityRole="link" accessibilityLabel="View all" style={[styles.viewAllLink, { color: '#0077E6', textDecorationLine: 'underline' }]}>View all</Text>
          </View>
          <View style={styles.column3}>
            <View style={styles.row4}>
              <View style={styles.center6}>
                <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="chart-pie" size={24} color="#2F4DE0" strokeWidth={2} /></View>
              </View>
              <View style={styles.column4}>
                <Text style={styles.mutualFundsText}>Mutual funds</Text>
                <Text style={styles.text4SIPsActiveText}>4 SIPs active</Text>
              </View>
              <View style={styles.column5}>
                <Text style={styles.text24000000Text}>₹2,40,000.00</Text>
                <Text style={styles.text2080095Text}>+₹20,800 (9.5%)</Text>
              </View>
            </View>
            <View style={[styles.divider, { height: 1, backgroundColor: '#EEF0F5', alignSelf: 'stretch' }]} />
            <View style={styles.row5}>
              <View style={styles.center7}>
                <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="trending-up" size={24} color="#6D43C9" strokeWidth={2} /></View>
              </View>
              <View style={styles.column6}>
                <Text style={styles.stocksText}>Stocks</Text>
                <Text style={styles.demat12HoldingsText}>Demat · 12 holdings</Text>
              </View>
              <View style={styles.column7}>
                <Text style={styles.text10512000Text}>₹1,05,120.00</Text>
                <Text style={styles.text124Text}>+12.4%</Text>
              </View>
            </View>
            <View style={[styles.divider2, { height: 1, backgroundColor: '#EEF0F5', alignSelf: 'stretch' }]} />
            <View style={styles.row6}>
              <View style={styles.center8}>
                <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="indian-rupee" size={24} color="#B45A1A" strokeWidth={2} /></View>
              </View>
              <View style={styles.column8}>
                <Text style={styles.sovereignGoldBondsText}>Sovereign Gold Bonds</Text>
                <Text style={styles.text2TranchesText}>2 tranches</Text>
              </View>
              <View style={styles.column9}>
                <Text style={styles.text8744000Text}>₹87,440.00</Text>
                <Text style={styles.text61Text}>+6.1%</Text>
              </View>
            </View>
          </View>
          <View style={styles.column10}>
            <View style={styles.row7}>
              <View style={styles.center9}>
                <View accessible={true} accessibilityRole="image" style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="sparkles" size={18} color="#6EDB9C" strokeWidth={2} /></View>
              </View>
              <Text accessibilityRole="header" style={styles.mintlyInsightHeading}>Mintly insight</Text>
            </View>
            <Text style={styles.equityIsNow79Text}>Equity is now 79% of your portfolio. Moving part of it into debt funds could lower your risk.</Text>
            <TouchableOpacity testID="Investments_SeeSuggestionsButton" accessible={true} accessibilityRole="button" accessibilityLabel="See suggestions" style={[styles.seeSuggestionsButton, { backgroundColor: '#6EDB9C', borderRadius: 14, paddingVertical: 14, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]} activeOpacity={0.7}>
              <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#0F1E4D', fontSize: 17, lineHeight: 26, fontWeight: '700', textAlign: 'center' }}>See suggestions</Text>
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
    backgroundColor: '#F3F5F9',
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
    gap: 20,
    paddingTop: 28,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 130,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  investmentsHeading: {
    fontSize: 32,
    fontWeight: '800',
    color: colors.primaryText,
    marginBottom: 0,
  },
  column2: {
    gap: 6,
    backgroundColor: colors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E8EBF2',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    boxShadow: '0px 2px 8px rgba(15,30,77,0.05)',
    _rnShadow: {"shadowColor":"#0F1E4D","shadowOffset":{"width":0,"height":2},"shadowOpacity":0.05,"shadowRadius":8},
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  totalPortfolioValueText: {
    fontSize: 15,
    color: '#6B7280',
  },
  heading43256000Heading: {
    fontSize: 38,
    fontWeight: '800',
    color: colors.primaryText,
  },
  row: {
    gap: 8,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    marginBottom: 12,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  icon: {
    color: '#2F7D4F',
  },
  text3389085Text: {
    fontSize: 15,
    fontWeight: '700',
    color: '#2F7D4F',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  thisMonthText: {
    fontSize: 15,
    color: '#6B7280',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  areaChart: {
    alignSelf: 'center',
  },
  row2: {
    gap: 4,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    backgroundColor: '#F1F3F9',
    borderRadius: 16,
    paddingTop: 4,
    paddingBottom: 4,
    paddingLeft: 4,
    paddingRight: 4,
    marginTop: 12,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  center: {
    height: 44,
    borderRadius: 12,
    backgroundColor: colors.surface,
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 2px 6px rgba(15,30,77,0.10)',
    _rnShadow: {"shadowColor":"#0F1E4D","shadowOffset":{"width":0,"height":2},"shadowOpacity":0.1,"shadowRadius":6},
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  text1MText: {
    color: '#0F1E4D',
    fontSize: 16,
    fontWeight: '700',
  },
  center2: {
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  text3MText: {
    color: '#6B7280',
    fontSize: 16,
    fontWeight: '700',
  },
  center3: {
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  text6MText: {
    color: '#6B7280',
    fontSize: 16,
    fontWeight: '700',
  },
  center4: {
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  text1YText: {
    color: '#6B7280',
    fontSize: 16,
    fontWeight: '700',
  },
  center5: {
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  allText: {
    color: '#6B7280',
    fontSize: 16,
    fontWeight: '700',
  },
  row3: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    marginTop: 4,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  holdingsHeading: {
    fontSize: 21,
    fontWeight: '700',
    color: colors.primaryText,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  viewAllLink: {
    color: '#2F4DE0',
    fontSize: 16,
    fontWeight: '700',
  },
  column3: {
    gap: 0,
    backgroundColor: colors.surface,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E8EBF2',
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 20,
    paddingRight: 20,
    boxShadow: '0px 2px 8px rgba(15,30,77,0.05)',
    _rnShadow: {"shadowColor":"#0F1E4D","shadowOffset":{"width":0,"height":2},"shadowOpacity":0.05,"shadowRadius":8},
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  row4: {
    gap: 14,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: 16,
    paddingBottom: 16,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  center6: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#EEF1FE',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon2: {
    color: '#2F4DE0',
  },
  column4: {
    gap: 3,
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
  mutualFundsText: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.primaryText,
  },
  text4SIPsActiveText: {
    fontSize: 15,
    color: '#6B7280',
  },
  column5: {
    gap: 3,
    minWidth: 120,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  text24000000Text: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.primaryText,
    textAlign: 'right',
  },
  text2080095Text: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2F7D4F',
    textAlign: 'right',
  },
  divider: {
    backgroundColor: '#EEF0F5',
  },
  row5: {
    gap: 14,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: 16,
    paddingBottom: 16,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  center7: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#F0EBFB',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon3: {
    color: '#6D43C9',
  },
  column6: {
    gap: 3,
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
  stocksText: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.primaryText,
  },
  demat12HoldingsText: {
    fontSize: 15,
    color: '#6B7280',
  },
  column7: {
    gap: 3,
    minWidth: 120,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  text10512000Text: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.primaryText,
    textAlign: 'right',
  },
  text124Text: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2F7D4F',
    textAlign: 'right',
  },
  divider2: {
    backgroundColor: '#EEF0F5',
  },
  row6: {
    gap: 14,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    paddingTop: 16,
    paddingBottom: 16,
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  center8: {
    width: 56,
    height: 56,
    borderRadius: 16,
    backgroundColor: '#FDF1E3',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon4: {
    color: '#B45A1A',
  },
  column8: {
    gap: 3,
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
  sovereignGoldBondsText: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.primaryText,
  },
  text2TranchesText: {
    fontSize: 15,
    color: '#6B7280',
  },
  column9: {
    gap: 3,
    minWidth: 104,
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  text8744000Text: {
    fontSize: 17,
    fontWeight: '700',
    color: colors.primaryText,
    textAlign: 'right',
  },
  text61Text: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2F7D4F',
    textAlign: 'right',
  },
  column10: {
    gap: 14,
    backgroundColor: '#17296B',
    borderRadius: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  row7: {
    gap: 12,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  center9: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: '#0F1E4D',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon5: {
    color: '#6EDB9C',
  },
  mintlyInsightHeading: {
    fontSize: 19,
    fontWeight: '700',
    color: '#FFFFFF',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  equityIsNow79Text: {
    fontSize: 16,
    lineHeight: 24,
    color: '#E4E8F5',
  },
  seeSuggestionsButton: {
    paddingTop: 14,
    borderRadius: 14,
    paddingBottom: 14,
    backgroundColor: '#6EDB9C',
    color: '#0F1E4D',
    height: 54,
    fontSize: 17,
    fontWeight: '700',
    alignSelf: 'stretch',
  },
  });
}

export default function InvestmentsGuarded(props: any) {
  return <Can permissions={[]} redirectTo={"Login"}><Investments {...props} /></Can>;
}
