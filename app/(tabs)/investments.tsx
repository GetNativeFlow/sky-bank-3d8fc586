import { Can } from '@/components/Can';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, ActivityIndicator } from 'react-native';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../../components/LucideDynamic';
import { default as NativeFlowGiftedChart } from '../../components/NativeFlowGiftedChart';
import { StatusBar } from 'expo-status-bar';
import { getThemeColors } from '../../config/theme';
import { useLocalSearchParams, useRouter } from 'expo-router';

function Investments() {
  const colors = getThemeColors();
  const router = useRouter();
  const routeParams = useLocalSearchParams();

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <View testID="f774876a-875d-467e-a39b-916d97147a52" style={styles.node_f774876a_875d_467e_a39b_916d97147a52}>
              <View testID="4d8e4574-2908-4e47-918f-ec1228016514" style={styles.node_4d8e4574_2908_4e47_918f_ec1228016514}>
                        <View testID="2d375000-fd11-4e8d-8577-d6e6429290a4" accessible={true} accessibilityRole="image" style={{ width: 26, height: 26, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={26} height={26} fill="none"><G stroke="#111827" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m15 18-6-6 6-6"></Path></G></Svg></View>
                        <Text testID="67bae998-0367-432d-bc4e-f97880150316" accessibilityRole="header" style={styles.node_67bae998_0367_432d_bc4e_f97880150316}>Investments</Text>
              </View>
              <View testID="1ccff2d5-91c8-491c-a5d9-b0682d3dbc5d" style={styles.node_1ccff2d5_91c8_491c_a5d9_b0682d3dbc5d}>
                        <Text testID="40007a0a-4dae-446f-b062-2093402cff39" style={styles.node_40007a0a_4dae_446f_b062_2093402cff39}>Total Investment Value</Text>
                        <Text testID="d7e16e77-5fd6-4fd9-850c-575dfd71a4ba" accessibilityRole="header" style={styles.node_d7e16e77_5fd6_4fd9_850c_575dfd71a4ba}>₹ 4,32,560.00</Text>
                        <View testID="ffdc1824-87c5-422e-8e24-0dc83ebf4c19" style={styles.node_ffdc1824_87c5_422e_8e24_0dc83ebf4c19}>
                                    <View testID="99e742ce-8f3e-4230-b286-c9a47dfb22cd" accessible={true} accessibilityRole="image" style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><G stroke="#16A34A" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m5 12 7-7 7 7"></Path><Path d="M12 19V5"></Path></G></Svg></View>
                                    <Text testID="944fc00c-02a4-4d9d-8371-bb5d6bade7ef" style={styles.node_944fc00c_02a4_4d9d_8371_bb5d6bade7ef}>8.5%</Text>
                                    <Text testID="d3cf462d-7203-48b7-928d-08394ffc4a26" style={styles.node_d3cf462d_7203_48b7_928d_08394ffc4a26}>vs last month</Text>
                        </View>
                        <NativeFlowGiftedChart testID="836fe9de-057b-4225-86ef-9801ab5ccee2" accessible={true} accessibilityRole="image" plan={{"nodeId":"836fe9de-057b-4225-86ef-9801ab5ccee2","component":"LineChart","width":320,"height":170,"titleColor":"#14181B","backgroundColor":"#FFFFFF","props":{"width":320,"height":170,"isAnimated":true,"hideRules":false,"rulesColor":"#E0E3E7","rulesType":"solid","xAxisColor":"#E0E3E7","yAxisColor":"#E0E3E7","xAxisThickness":0,"yAxisThickness":0,"hideYAxisText":true,"yAxisTextStyle":{"color":"#14181B","fontSize":10},"xAxisLabelTextStyle":{"color":"#14181B","fontSize":10},"maxValue":80,"noOfSections":4,"stepValue":20,"data":[{"value":20,"label":"","frontColor":"#3B5BFD"},{"value":35,"label":"","frontColor":"#3B5BFD"},{"value":18,"label":"","frontColor":"#3B5BFD"},{"value":38,"label":"","frontColor":"#3B5BFD"},{"value":30,"label":"","frontColor":"#3B5BFD"},{"value":48,"label":"","frontColor":"#3B5BFD"},{"value":40,"label":"","frontColor":"#3B5BFD"},{"value":55,"label":"","frontColor":"#3B5BFD"},{"value":50,"label":"","frontColor":"#3B5BFD"},{"value":62,"label":"","frontColor":"#3B5BFD"},{"value":58,"label":"","frontColor":"#3B5BFD"},{"value":75,"label":"","frontColor":"#3B5BFD"}],"color1":"#3B5BFD","curved":false,"areaChart":true,"thickness":3,"hideDataPoints":true,"dataPointsColor":"#4B39EF","dataPointsRadius":3,"focusedDataPointColor":"#FFFFFF","startFillColor":"#4B39EF","endFillColor":"#4B39EF","startOpacity":0.15,"endOpacity":0.05},"notes":[]}} style={styles.node_836fe9de_057b_4225_86ef_9801ab5ccee2} />
                        <View testID="639c2b52-83c2-43e9-9b5d-ce127de368b7" style={styles.node_639c2b52_83c2_43e9_9b5d_ce127de368b7}>
                                    <View testID="3ef07bd1-3b83-41ea-816f-8c71dfd3bb7d" style={styles.node_3ef07bd1_3b83_41ea_816f_8c71dfd3bb7d}>
                                                  <Text testID="9c5609f8-a64d-4d42-a884-7b70e95c7bd5" style={styles.node_9c5609f8_a64d_4d42_a884_7b70e95c7bd5}>1M</Text>
                                    </View>
                                    <Text testID="e147c087-1690-4084-a99e-30f74673af09" style={styles.node_e147c087_1690_4084_a99e_30f74673af09}>3M</Text>
                                    <Text testID="1d7dba80-33f7-4b07-b403-8b4a57258f8e" style={styles.node_1d7dba80_33f7_4b07_b403_8b4a57258f8e}>6M</Text>
                                    <Text testID="2223cd83-6851-42ea-8489-fc8e39a9215c" style={styles.node_2223cd83_6851_42ea_8489_fc8e39a9215c}>1Y</Text>
                                    <Text testID="c42e4ed4-2ab4-450f-be37-6f86f6b99133" style={styles.node_c42e4ed4_2ab4_450f_be37_6f86f6b99133}>All</Text>
                        </View>
              </View>
              <View testID="45af1f7c-827d-43ec-b035-d5c4d58d85fe" style={styles.node_45af1f7c_827d_43ec_b035_d5c4d58d85fe}>
                        <Text testID="f6ce2200-7eed-42df-aadd-77b58ab88d5a" accessibilityRole="header" style={styles.node_f6ce2200_7eed_42df_aadd_77b58ab88d5a}>Mutual Funds</Text>
                        <Text testID="6de1a961-bcc0-48df-afb2-b0749ce6f82b" accessible={true} accessibilityRole="link" accessibilityLabel="View all" style={[styles.node_6de1a961_bcc0_48df_afb2_b0749ce6f82b, { color: '#0077E6', textDecorationLine: 'underline' }]}>View all</Text>
              </View>
              <View testID="95eceb8e-9ba5-4cb6-9a43-985073389670" style={styles.node_95eceb8e_9ba5_4cb6_9a43_985073389670}>
                        <View testID="a4360efe-6cef-44c4-8135-6b8c7b87551e" style={styles.node_a4360efe_6cef_44c4_8135_6b8c7b87551e}>
                                    <View testID="4fb3c00f-000e-4609-9e21-f48265504f55" style={styles.node_4fb3c00f_000e_4609_9e21_f48265504f55}>
                                                  <View testID="49f51e7f-bdfb-455e-8dc5-3ae17a8a0db1" accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#3B5BFD" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M21 12c.552 0 1.005-.449.95-.998a10 10 0 0 0-8.953-8.951c-.55-.055-.998.398-.998.95v8a1 1 0 0 0 1 1z"></Path><Path d="M21.21 15.89A10 10 0 1 1 8 2.83"></Path></G></Svg></View>
                                    </View>
                                    <View testID="5b262d7f-7cc7-4162-9c40-396624e430ad" style={styles.node_5b262d7f_7cc7_4162_9c40_396624e430ad}>
                                                  <Text testID="bc613b5e-9eb6-4829-97e9-6cd8b68e90ac" style={styles.node_bc613b5e_9eb6_4829_97e9_6cd8b68e90ac}>Mutual Funds</Text>
                                                  <Text testID="ecb1941e-43f6-44d1-9674-d080a594f433" style={styles.node_ecb1941e_43f6_44d1_9674_d080a594f433}>SIP · Active</Text>
                                    </View>
                                    <View testID="35c29548-a53c-4f35-aa79-dc5651c4e11b" style={styles.node_35c29548_a53c_4f35_aa79_dc5651c4e11b}>
                                                  <Text testID="e4fd5d08-4e03-4b54-9c44-ccc8dd6182f2" style={styles.node_e4fd5d08_4e03_4b54_9c44_ccc8dd6182f2}>₹ 2,40,000.00</Text>
                                                  <Text testID="98ede9c9-48f4-4571-a350-d027541c009c" style={styles.node_98ede9c9_48f4_4571_a350_d027541c009c}>+ ₹ 20,800.00</Text>
                                    </View>
                        </View>
                        <View testID="42c3c430-3252-4f45-875f-56fcd7d56023" style={[styles.node_42c3c430_3252_4f45_875f_56fcd7d56023, { height: 1, backgroundColor: '#F0F1F5', alignSelf: 'stretch' }]} />
                        <View testID="37599847-7dd8-490f-9976-9431552d1d3e" style={styles.node_37599847_7dd8_490f_9976_9431552d1d3e}>
                                    <View testID="84bfda4c-7948-4965-9312-b259f2a5e42c" style={styles.node_84bfda4c_7948_4965_9312_b259f2a5e42c}>
                                                  <View testID="c028dfcf-02c8-4707-ae03-4bde2ed96993" accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#3B5BFD" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></Polyline><Polyline points="16 7 22 7 22 13"></Polyline></G></Svg></View>
                                    </View>
                                    <View testID="a6e25b05-0e5d-49e4-845f-3c0ca4db60c2" style={styles.node_a6e25b05_0e5d_49e4_845f_3c0ca4db60c2}>
                                                  <Text testID="610cdcc1-a3c3-424a-b9a9-22ec61602743" style={styles.node_610cdcc1_a3c3_424a_b9a9_22ec61602743}>Stocks</Text>
                                                  <Text testID="75d69337-0c44-4dc9-9e80-b5a182c6c1cc" style={styles.node_75d69337_0c44_4dc9_9e80_b5a182c6c1cc}>Demat · Active</Text>
                                    </View>
                                    <View testID="f4fe4007-3835-478b-b6c7-c47c34d0c958" style={styles.node_f4fe4007_3835_478b_b6c7_c47c34d0c958}>
                                                  <Text testID="348730a4-b491-48ef-b1f7-f9b819c32de5" style={styles.node_348730a4_b491_48ef_b1f7_f9b819c32de5}>₹ 1,05,120.00</Text>
                                                  <Text testID="d9eed0ce-e19e-4573-b98a-3b2e4e1f8815" style={styles.node_d9eed0ce_e19e_4573_b98a_3b2e4e1f8815}>+ 12.4%</Text>
                                    </View>
                        </View>
              </View>
              <View testID="6baa2beb-9440-48c5-ad36-848593f3aabb" style={styles.node_6baa2beb_9440_48c5_ad36_848593f3aabb}>
                        <View testID="da3581f3-fe6e-43d9-a594-c3d81d9355d2" style={styles.node_da3581f3_fe6e_43d9_a594_c3d81d9355d2}>
                                    <View testID="175d2af3-3c37-4c18-8a47-16506a7de0c6" style={styles.node_175d2af3_3c37_4c18_8a47_16506a7de0c6}>
                                                  <View testID="fdf1174f-7230-4928-81b4-8037e8381433" accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#0B1A4D" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M12 8V4H8"></Path><Rect width="16" height="12" x="4" y="8" rx="2"></Rect><Path d="M2 14h2"></Path><Path d="M20 14h2"></Path><Path d="M15 13v2"></Path><Path d="M9 13v2"></Path></G></Svg></View>
                                    </View>
                                    <Text testID="6a69fcc9-6327-46f7-a39b-22fc311aa4c2" accessibilityRole="header" style={styles.node_6a69fcc9_6327_46f7_a39b_22fc311aa4c2}>Mintly Insight</Text>
                        </View>
                        <Text testID="48eeebad-404b-4406-bae9-d4ff96445381" style={styles.node_48eeebad_404b_4406_bae9_d4ff96445381}>Your portfolio is up 12%. A small shift towards debt funds could balance your risk.</Text>
                        <TouchableOpacity testID="daa72bdc-2e37-4506-a83a-b36bf5e1fd66" accessible={true} accessibilityRole="button" accessibilityLabel="View recommendations" style={[styles.node_daa72bdc_2e37_4506_a83a_b36bf5e1fd66, { backgroundColor: '#3B5BFD', borderRadius: 30, paddingVertical: 14, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                          <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>View recommendations</Text>
                        </TouchableOpacity>
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
  node_f774876a_875d_467e_a39b_916d97147a52: {
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
  node_4d8e4574_2908_4e47_918f_ec1228016514: {
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
  node_2d375000_fd11_4e8d_8577_d6e6429290a4: {
    color: '#111827',
  },
  node_67bae998_0367_432d_bc4e_f97880150316: {
    color: '#0B1A4D',
    fontWeight: '800',
    fontSize: 24,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_1ccff2d5_91c8_491c_a5d9_b0682d3dbc5d: {
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
  node_40007a0a_4dae_446f_b062_2093402cff39: {
    color: '#6B7280',
    fontSize: 15,
  },
  node_d7e16e77_5fd6_4fd9_850c_575dfd71a4ba: {
    color: '#0B1A4D',
    marginTop: 8,
    fontWeight: '800',
    fontSize: 28,
  },
  node_ffdc1824_87c5_422e_8e24_0dc83ebf4c19: {
    gap: 6,
    marginTop: 8,
    alignItems: 'stretch',
    marginBottom: 12,
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_99e742ce_8f3e_4230_b286_c9a47dfb22cd: {
    color: '#16A34A',
  },
  node_944fc00c_02a4_4d9d_8371_bb5d6bade7ef: {
    color: '#16A34A',
    fontSize: 14,
    fontWeight: '700',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_d3cf462d_7203_48b7_928d_08394ffc4a26: {
    color: '#9CA3AF',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_836fe9de_057b_4225_86ef_9801ab5ccee2: {
    alignSelf: 'stretch',
  },
  node_639c2b52_83c2_43e9_9b5d_ce127de368b7: {
    gap: 0,
    marginTop: 12,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_3ef07bd1_3b83_41ea_816f_8c71dfd3bb7d: {
    width: 56,
    height: 36,
    alignItems: 'center',
    borderRadius: 18,
    justifyContent: 'center',
    backgroundColor: '#3B5BFD',
  },
  node_9c5609f8_a64d_4d42_a884_7b70e95c7bd5: {
    color: '#FFFFFF',
    fontSize: 14,
    fontWeight: '700',
  },
  node_e147c087_1690_4084_a99e_30f74673af09: {
    color: '#6B7280',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_1d7dba80_33f7_4b07_b403_8b4a57258f8e: {
    color: '#6B7280',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_2223cd83_6851_42ea_8489_fc8e39a9215c: {
    color: '#6B7280',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_c42e4ed4_2ab4_450f_be37_6f86f6b99133: {
    color: '#6B7280',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_45af1f7c_827d_43ec_b035_d5c4d58d85fe: {
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
  node_f6ce2200_7eed_42df_aadd_77b58ab88d5a: {
    color: '#0B1A4D',
    fontWeight: '800',
    fontSize: 18,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_6de1a961_bcc0_48df_afb2_b0749ce6f82b: {
    color: '#3B5BFD',
    fontSize: 15,
    fontWeight: '600',
  },
  node_95eceb8e_9ba5_4cb6_9a43_985073389670: {
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
  node_a4360efe_6cef_44c4_8135_6b8c7b87551e: {
    gap: 12,
    padding: 12,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_4fb3c00f_000e_4609_9e21_f48265504f55: {
    width: 48,
    height: 48,
    alignItems: 'center',
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: '#E8EEFF',
  },
  node_49f51e7f_bdfb_455e_8dc5_3ae17a8a0db1: {
    color: '#3B5BFD',
  },
  node_5b262d7f_7cc7_4162_9c40_396624e430ad: {
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
  node_bc613b5e_9eb6_4829_97e9_6cd8b68e90ac: {
    color: '#0B1A4D',
    fontSize: 17,
    fontWeight: '700',
  },
  node_ecb1941e_43f6_44d1_9674_d080a594f433: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  node_35c29548_a53c_4f35_aa79_dc5651c4e11b: {
    gap: 2,
    minWidth: 120,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  node_e4fd5d08_4e03_4b54_9c44_ccc8dd6182f2: {
    color: '#0B1A4D',
    fontSize: 17,
    textAlign: 'right',
    fontWeight: '700',
  },
  node_98ede9c9_48f4_4571_a350_d027541c009c: {
    color: '#16A34A',
    fontSize: 14,
    textAlign: 'right',
    fontWeight: '700',
  },
  node_42c3c430_3252_4f45_875f_56fcd7d56023: {
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: '#F0F1F5',
  },
  node_37599847_7dd8_490f_9976_9431552d1d3e: {
    gap: 12,
    padding: 12,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_84bfda4c_7948_4965_9312_b259f2a5e42c: {
    width: 48,
    height: 48,
    alignItems: 'center',
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: '#E8EEFF',
  },
  node_c028dfcf_02c8_4707_ae03_4bde2ed96993: {
    color: '#3B5BFD',
  },
  node_a6e25b05_0e5d_49e4_845f_3c0ca4db60c2: {
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
  node_610cdcc1_a3c3_424a_b9a9_22ec61602743: {
    color: '#0B1A4D',
    fontSize: 17,
    fontWeight: '700',
  },
  node_75d69337_0c44_4dc9_9e80_b5a182c6c1cc: {
    color: '#9CA3AF',
    fontSize: 14,
  },
  node_f4fe4007_3835_478b_b6c7_c47c34d0c958: {
    gap: 2,
    minWidth: 120,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  node_348730a4_b491_48ef_b1f7_f9b819c32de5: {
    color: '#0B1A4D',
    fontSize: 17,
    textAlign: 'right',
    fontWeight: '700',
  },
  node_d9eed0ce_e19e_4573_b98a_3b2e4e1f8815: {
    color: '#16A34A',
    fontSize: 14,
    textAlign: 'right',
    fontWeight: '700',
  },
  node_6baa2beb_9440_48c5_ad36_848593f3aabb: {
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
  node_da3581f3_fe6e_43d9_a594_c3d81d9355d2: {
    gap: 12,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_175d2af3_3c37_4c18_8a47_16506a7de0c6: {
    width: 44,
    height: 44,
    alignItems: 'center',
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  node_fdf1174f_7230_4928_81b4_8037e8381433: {
    color: '#0B1A4D',
  },
  node_6a69fcc9_6327_46f7_a39b_22fc311aa4c2: {
    color: '#0B1A4D',
    fontWeight: '800',
    fontSize: 18,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_48eeebad_404b_4406_bae9_d4ff96445381: {
    color: '#374151',
    fontSize: 15,
    lineHeight: 21,
  },
  node_daa72bdc_2e37_4506_a83a_b36bf5e1fd66: {
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
