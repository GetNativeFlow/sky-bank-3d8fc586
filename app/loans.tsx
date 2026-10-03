import { Can } from '@/components/Can';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, ActivityIndicator } from 'react-native';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';

function Loans() {
  const router = useRouter();
  const routeParams = useLocalSearchParams();

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <View style={styles.node_d2243f86_4921_4884_888c_69869826cbdc}>
              <Text style={styles.node_75ab539f_569f_4ba0_8a6c_98bc0dfd3ae8}>Loans & Credit</Text>
              <View style={styles.node_53d51f3c_1011_449f_8235_bbf05c1b5e55}>
                        <View style={styles.node_085466a3_df58_4f94_bd5b_73039583e229} />
                        <View style={styles.node_e6063d5b_8456_434f_becb_f2519f94a418}>
                                    <Text style={styles.node_32c6dc9c_b8c7_45d1_8971_49e3b9f5c2ff}>Pre-approved loan offer</Text>
                                    <View style={styles.node_10a83cc1_12f7_413c_8714_0bfcb8d271f7}>
                                                  <Text style={styles.node_3dc6b52a_e287_4231_a9bc_73e8a00d6fb3}>Up to ₹ 50,00,000</Text>
                                                  <View style={styles.node_e16de9eb_cfef_4d96_9bc2_0609915a2151}>
                                                                  <View style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={24} height={24} fill="none"><G stroke="#34D399" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></Path></G></Svg></View>
                                                  </View>
                                    </View>
                                    <Text style={styles.node_dcb2d511_158b_4d09_9be2_ba0fed33e34c}>Attractive interest rates</Text>
                                    <TouchableOpacity style={[styles.node_0236fba8_1605_4f66_86f3_df6a96fb588d, { backgroundColor: '#FFFFFF', borderRadius: 24, paddingVertical: 12, paddingHorizontal: 24, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]} activeOpacity={0.7}>
                                      <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#0F1E4D', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Check eligibility</Text>
                                    </TouchableOpacity>
                        </View>
              </View>
              <Text style={styles.node_46864cf8_be65_41bf_97d2_af94eedb5db9}>Credit Score</Text>
              <View style={styles.node_133567e5_87ae_41e1_86bc_008ee623ec9b}>
                        <View style={styles.node_9b3509b8_aa43_42b4_8734_c68f13bcd03e}>
                                    <View style={styles.node_b3ee78ed_bddf_4f94_b73a_e3f11ce383a5}>
                                                  <Text style={styles.node_40171cab_e865_4297_aeac_304034ad3b88}>782</Text>
                                                  <Text style={styles.node_509d92f1_255a_489d_9292_2c0852346a8b}>Excellent</Text>
                                    </View>
                        </View>
                        <View style={styles.node_3d8e27ad_f5e3_4ac7_889b_9fbb781ceabc}>
                                    <Text style={styles.node_66f53620_21d0_4e31_8588_128d4b7d21cc}>Updated 2 days ago. Your score is in the top range.</Text>
                                    <Text style={[styles.node_d43ad0bc_d153_4e64_b616_24336b8c8644, { color: '#0077E6', textDecorationLine: 'underline' }]}>View details</Text>
                        </View>
              </View>
              <View style={styles.node_84f25ef7_f1e0_4028_94af_be234ebcbabb}>
                        <View style={styles.node_f5b4bc1a_f220_473f_9598_4f88b70140b2}>
                                    <View style={styles.node_2cd51d3d_7c85_416b_b71d_958694e8e0fa}>
                                                  <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#2952CC" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Rect width="16" height="20" x="4" y="2" rx="2"></Rect><Line x1="8" x2="16" y1="6" y2="6"></Line><Line x1="16" x2="16" y1="14" y2="18"></Line><Path d="M16 10h.01"></Path><Path d="M12 10h.01"></Path><Path d="M8 10h.01"></Path><Path d="M12 14h.01"></Path><Path d="M8 14h.01"></Path><Path d="M12 18h.01"></Path><Path d="M8 18h.01"></Path></G></Svg></View>
                                    </View>
                                    <View style={styles.node_2f56de5a_e134_42ef_9db3_ab5ba0abcbe7}>
                                                  <Text style={styles.node_64d92fc9_004c_4303_a014_ad08b5077893}>EMI Calculator</Text>
                                                  <Text style={styles.node_08971873_4107_4f8a_96f4_61d34cf86a25}>Plan your loan easily</Text>
                                    </View>
                        </View>
                        <View style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={20} height={20} fill="none"><G stroke="#9CA3AF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m9 18 6-6-6-6"></Path></G></Svg></View>
              </View>
              <View style={styles.node_426684dd_b3f4_48c3_a2ed_6881fa88f118}>
                        <Text style={styles.node_51c71de3_e143_4921_8541_c2efd59eecf0}>Active Loans</Text>
              </View>
      </View>
      </ScrollView>
    </View>
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
  node_d2243f86_4921_4884_888c_69869826cbdc: {
    gap: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  node_75ab539f_569f_4ba0_8a6c_98bc0dfd3ae8: {
    color: '#0F1E4D',
    fontSize: 30,
    fontWeight: '800',
  },
  node_53d51f3c_1011_449f_8235_bbf05c1b5e55: {
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
  node_085466a3_df58_4f94_bd5b_73039583e229: {
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
  node_e6063d5b_8456_434f_becb_f2519f94a418: {
    gap: 8,
    width: '100%',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  node_32c6dc9c_b8c7_45d1_8971_49e3b9f5c2ff: {
    color: '#C7D2E8',
    fontSize: 15,
  },
  node_10a83cc1_12f7_413c_8714_0bfcb8d271f7: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  node_3dc6b52a_e287_4231_a9bc_73e8a00d6fb3: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '800',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_e16de9eb_cfef_4d96_9bc2_0609915a2151: {
    width: 48,
    height: 48,
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.12)',
  },
  node_1253685f_2e1e_4e8f_a79d_c06e635ba0cd: {
    color: '#34D399',
  },
  node_dcb2d511_158b_4d09_9be2_ba0fed33e34c: {
    color: '#C7D2E8',
    fontSize: 14,
    marginTop: 2,
  },
  node_0236fba8_1605_4f66_86f3_df6a96fb588d: {
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
  node_46864cf8_be65_41bf_97d2_af94eedb5db9: {
    color: '#111827',
    fontSize: 20,
    fontWeight: '700',
  },
  node_133567e5_87ae_41e1_86bc_008ee623ec9b: {
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
  node_9b3509b8_aa43_42b4_8734_c68f13bcd03e: {
    width: 120,
    height: 120,
    alignItems: 'center',
    borderColor: '#1FA463',
    borderWidth: 10,
    borderRadius: 60,
    justifyContent: 'center',
  },
  node_b3ee78ed_bddf_4f94_b73a_e3f11ce383a5: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    gap: 0,
  },
  node_40171cab_e865_4297_aeac_304034ad3b88: {
    color: '#0F1E4D',
    fontSize: 28,
    fontWeight: '800',
  },
  node_509d92f1_255a_489d_9292_2c0852346a8b: {
    color: '#1FA463',
    fontSize: 13,
    fontWeight: '600',
  },
  node_3d8e27ad_f5e3_4ac7_889b_9fbb781ceabc: {
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
  node_66f53620_21d0_4e31_8588_128d4b7d21cc: {
    color: '#4B5563',
    fontSize: 14,
  },
  node_d43ad0bc_d153_4e64_b616_24336b8c8644: {
    color: '#2563EB',
    fontSize: 14,
    fontWeight: '700',
  },
  node_84f25ef7_f1e0_4028_94af_be234ebcbabb: {
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
  node_f5b4bc1a_f220_473f_9598_4f88b70140b2: {
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
  node_2cd51d3d_7c85_416b_b71d_958694e8e0fa: {
    width: 44,
    height: 44,
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'center',
    backgroundColor: '#DCE7FF',
  },
  node_14868539_6a27_4872_b128_ebda3cdb342f: {
    color: '#2952CC',
  },
  node_2f56de5a_e134_42ef_9db3_ab5ba0abcbe7: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_64d92fc9_004c_4303_a014_ad08b5077893: {
    color: '#111827',
    fontSize: 16,
    fontWeight: '700',
  },
  node_08971873_4107_4f8a_96f4_61d34cf86a25: {
    color: '#6B7280',
    fontSize: 13,
  },
  node_cf90567a_d58e_40ce_a11d_824ae1610a14: {
    color: '#9CA3AF',
  },
  node_426684dd_b3f4_48c3_a2ed_6881fa88f118: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  node_51c71de3_e143_4921_8541_c2efd59eecf0: {
    color: '#111827',
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
});


export default function LoansGuarded(props: any) {
  return <Can permissions={[]} redirectTo={"Login"}><Loans {...props} /></Can>;
}
