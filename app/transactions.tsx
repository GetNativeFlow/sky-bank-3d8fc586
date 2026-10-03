import { Can } from '@/components/Can';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, TextInput, FlatList } from 'react-native';
import { Svg, Circle, Line, Path, Rect, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as StudioSpinner } from '../components/StudioSpinner';
import { default as LucideDynamic } from '../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { getThemeColors } from '../config/theme';
import { useLocalSearchParams, useRouter } from 'expo-router';

function Transactions() {
  const colors = getThemeColors();
  const router = useRouter();
  const routeParams = useLocalSearchParams();
  const [state_0a329270_7887_48c2_822b_f14e1ac7ecab, setState_0a329270_7887_48c2_822b_f14e1ac7ecab] = useState({ searchText: "", isFocused: false, isDropdownOpen: false, selectedItem: "" });

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <View style={styles.node_555bdfb3_8e43_4a93_b787_3f84eb6d4901}>
              <Text style={styles.node_6794e9f8_5552_4ad8_bca0_8d95761bef2c}>Transactions</Text>
              <View style={{ position: 'relative' }}>
              <View style={[styles.node_0a329270_7887_48c2_822b_f14e1ac7ecab, { flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: '#ccc', borderRadius: 16, backgroundColor: '#FFFFFF', paddingHorizontal: 8 }]}>
                <View style={{ width: 18, height: 18, marginHorizontal: 4 }}><Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><Circle cx={11} cy={11} r={8} /><Line x1={21} y1={21} x2={16.65} y2={16.65} /></Svg></View>
                <TextInput style={{ flex: 1, fontSize: 16, padding: 8, color: '#333' }} placeholder="Search transactions" placeholderTextColor="#9CA3AF" value={typeof state_0a329270_7887_48c2_822b_f14e1ac7ecab !== 'undefined' ? (state_0a329270_7887_48c2_822b_f14e1ac7ecab.searchText ?? '') : ''} onChangeText={(v) => { if (typeof setState_0a329270_7887_48c2_822b_f14e1ac7ecab === 'function') setState_0a329270_7887_48c2_822b_f14e1ac7ecab(prev => ({...prev, searchText: v})); }} onFocus={() => { if (typeof setState_0a329270_7887_48c2_822b_f14e1ac7ecab === 'function') setState_0a329270_7887_48c2_822b_f14e1ac7ecab(prev => ({...prev, isFocused: true, isDropdownOpen: true})); }} onBlur={() => { if (typeof setState_0a329270_7887_48c2_822b_f14e1ac7ecab === 'function') setState_0a329270_7887_48c2_822b_f14e1ac7ecab(prev => ({...prev, isFocused: false})); }} returnKeyType="search" />
                
                  {(typeof state_0a329270_7887_48c2_822b_f14e1ac7ecab !== 'undefined' && state_0a329270_7887_48c2_822b_f14e1ac7ecab.searchText) ? <TouchableOpacity onPress={() => { if (typeof setState_0a329270_7887_48c2_822b_f14e1ac7ecab === 'function') setState_0a329270_7887_48c2_822b_f14e1ac7ecab(prev => ({...prev, searchText: '', selectedItem: ''})); }}><View style={{ width: 18, height: 18, marginHorizontal: 4 }}><Svg width={18} height={18} viewBox="0 0 24 24" fill="none" stroke="#9CA3AF" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><Line x1={18} y1={6} x2={6} y2={18} /><Line x1={6} y1={6} x2={18} y2={18} /></Svg></View></TouchableOpacity> : null}
              </View>
              </View>
              <View style={[styles.node_306639b2_b31a_4245_aa30_d99835890405, styles.node_306639b2_b31a_4245_aa30_d99835890405Content]}>
                {(Array.isArray([{id:'1'},{id:'2'},{id:'3'}]) ? [{id:'1'},{id:'2'},{id:'3'}] : []).map((item, index, arr) => (
                  <View key={index}>
                    <View>
                        <View style={styles.node_a70079d4_dcfe_4c19_a309_e57bee5820b9}>
                                    <View style={styles.node_975fc607_6e3c_4a22_926f_a9d24a4cb7a8}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} fill="none"><G stroke="#10B981" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M10 2v2"></Path><Path d="M14 2v2"></Path><Path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></Path><Path d="M6 2v2"></Path></G></Svg></View>
                                    </View>
                                    <View style={styles.node_7aca105d_d2e6_460f_87fd_b6629d031dfd}>
                                                  <Text style={styles.node_4b3cebd0_60c6_48b9_bd4a_82f22ac6e73f}>Starbucks</Text>
                                                  <Text style={styles.node_a9ba5a69_35ed_4d5a_9a3a_28164f5ede69}>Today · Coffee</Text>
                                    </View>
                                    <View style={styles.node_992f4c02_eced_4526_aed9_c079ea5c340c}>
                                                  <Text style={[styles.node_1627dbfb_9929_4af5_95cb_78ce0da7472b, { "color": ((item.type) === ("credit") ? "#249689" : "#FF5963") }]}>-$5.40</Text>
                                                  <Text style={styles.node_ab7eed4e_f78b_4188_bfcc_2c8c37408250}>Card</Text>
                                    </View>
                                    <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><G stroke="#D1D5DB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m9 18 6-6-6-6"></Path></G></Svg></View>
                        </View>
                    </View>
                    {index < arr.length - 1 && <View style={{ height: 1, backgroundColor: '#F0F1F4', marginVertical: 0 }} />}
                  </View>
                ))}
              </View>
      </View>
      </ScrollView>
    </View>
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
  node_555bdfb3_8e43_4a93_b787_3f84eb6d4901: {
    gap: 16,
    paddingTop: 20,
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
  node_6794e9f8_5552_4ad8_bca0_8d95761bef2c: {
    color: '#1E2A5A',
    fontWeight: '800',
    fontSize: 28,
  },
  node_0a329270_7887_48c2_822b_f14e1ac7ecab: {
    borderRadius: 16,
    backgroundColor: '#FFFFFF',
  },
  node_306639b2_b31a_4245_aa30_d99835890405: {
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":8,"shadowOpacity":0.05},
    boxShadow: '0px 2px 8px rgba(0,0,0,0.05)',
    minHeight: 60,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_306639b2_b31a_4245_aa30_d99835890405Content: {
    paddingTop: 8,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 8,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
  },
  node_a70079d4_dcfe_4c19_a309_e57bee5820b9: {
    padding: 10,
    minHeight: 56,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    width: '100%',
  },
  node_975fc607_6e3c_4a22_926f_a9d24a4cb7a8: {
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
  node_968e697f_b45a_4cc4_a834_7072041ba259: {
    color: '#10B981',
  },
  node_7aca105d_d2e6_460f_87fd_b6629d031dfd: {
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
  node_4b3cebd0_60c6_48b9_bd4a_82f22ac6e73f: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  node_a9ba5a69_35ed_4d5a_9a3a_28164f5ede69: {
    color: '#6B7280',
    fontSize: 12,
  },
  node_992f4c02_eced_4526_aed9_c079ea5c340c: {
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
  node_1627dbfb_9929_4af5_95cb_78ce0da7472b: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  node_ab7eed4e_f78b_4188_bfcc_2c8c37408250: {
    color: '#9CA3AF',
    fontSize: 12,
  },
  node_203e8cf8_29a9_47ad_b245_f0d3ae8c1947: {
    color: '#D1D5DB',
  },
  });
}

export default function TransactionsGuarded(props: any) {
  return <Can permissions={[]} redirectTo={"Login"}><Transactions {...props} /></Can>;
}
