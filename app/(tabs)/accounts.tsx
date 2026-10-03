import { Can } from '@/components/Can';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { appRuntime as app } from '../../lib/app';

function Accounts() {
  const router = useRouter();
  const routeParams = useLocalSearchParams();

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <View style={styles.node_b162845d_9870_419b_a69b_56891e84177c}>
              <Text style={styles.node_8dfa70bf_7050_43df_bfd0_5f3aa33027d0}>Accounts</Text>
              <View style={styles.node_f460cc10_d8d8_454c_bfc5_3bb6ad8e431f}>
                        <View style={styles.node_dc36b80f_7c9c_4718_a8b2_0ebad9837737}>
                                    <View style={styles.node_99636dc5_4558_4a30_b364_0fe1f0581fcf}>
                                                  <View style={styles.node_15d204bc_1b8c_486f_b22a_2d3987234801}>
                                                                  <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#2554E8" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Rect width="20" height="14" x="2" y="5" rx="2"></Rect><Line x1="2" x2="22" y1="10" y2="10"></Line></G></Svg></View>
                                                  </View>
                                                  <View style={styles.node_44834177_c21a_4512_9031_6368fe86127f}>
                                                                  <Text style={styles.node_4c108132_6f84_42a7_8a39_ef4d6139329f}>Savings Account</Text>
                                                                  <Text style={styles.node_377e2383_67c0_463c_94f4_b2ae5ee30db7}>XXXX 1001</Text>
                                                  </View>
                                    </View>
                                    <View style={styles.node_6fcfdd89_0cf9_4796_8f64_4d6376dc0cc9}>
                                                  <Text style={styles.node_b021fbe0_cc1e_479b_9764_ef4786296d4e}>₹ 8,45,230.00</Text>
                                                  <Text style={styles.node_bc9863ff_d459_45fa_add2_6a9f117bbf49}>Available balance</Text>
                                    </View>
                        </View>
                        <View style={styles.node_e6b6854b_b41d_4bf1_a1ba_125d79a28a36}>
                                    <View style={styles.node_7dbd99b4_5e55_438a_a641_e03690ab235d}>
                                                  <View style={styles.node_21209365_bac9_433b_9082_f6e8e509f175}>
                                                                  <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#2554E8" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></Path><Rect width="20" height="14" x="2" y="6" rx="2"></Rect></G></Svg></View>
                                                  </View>
                                                  <View style={styles.node_c2398949_0fc3_44df_b19e_e1acb8e27cd9}>
                                                                  <Text style={styles.node_cf6ae041_85ee_4f80_874b_9e00a90be859}>Current Account</Text>
                                                                  <Text style={styles.node_20919358_dc71_42fa_908a_ec4a09a1e89d}>XXXX 5678</Text>
                                                  </View>
                                    </View>
                                    <View style={styles.node_75d33d9c_1cb6_484d_8b02_ba89f47a0e20}>
                                                  <Text style={styles.node_dc42ff94_6313_428f_b0bb_432b5846d52c}>₹ 3,02,450.00</Text>
                                                  <Text style={styles.node_4526d2d5_2b60_4f32_8bc9_92b0d587a181}>Available balance</Text>
                                    </View>
                        </View>
                        <View style={styles.node_30f8ed68_89a3_4d82_b1ec_bf070e0ef8f8}>
                                    <View style={styles.node_f64e14fa_0c4a_4938_9c6c_66c002021416}>
                                                  <View style={styles.node_343f1774_1451_414d_9974_089026bd4a43}>
                                                                  <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#B9690A" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Circle cx="12" cy="12" r="10"></Circle><Polyline points="12 6 12 12 16 14"></Polyline></G></Svg></View>
                                                  </View>
                                                  <View style={styles.node_3d2cbc00_5103_4f2d_9695_f7308f0c1aa2}>
                                                                  <Text style={styles.node_8698799f_8c79_4f9e_8e9b_2c4a5759b8d3}>Fixed Deposit</Text>
                                                                  <Text style={styles.node_e21b514b_c678_45ff_b2d4_b73083e26b13}>FDXXXX 9012</Text>
                                                  </View>
                                    </View>
                                    <View style={styles.node_19f72dd7_fe1d_4f37_8e90_5d7de0b86745}>
                                                  <Text style={styles.node_b17165e6_88f8_454e_94c1_30617dbaaa60}>₹ 5,00,000.00</Text>
                                                  <Text style={styles.node_fc2338f0_79f5_4bc2_a087_59738bc207ad}>Matures in 120 days</Text>
                                    </View>
                        </View>
              </View>
              <View style={styles.node_83b1ebd7_39be_469e_bbce_1fbe8ebfd17e}>
                        <Text style={styles.node_79d3afcf_9fde_4a11_95b3_0b00851d81cc}>Recent Transactions</Text>
                        <Text style={styles.node_25e50913_5a1e_4a66_bbaa_4c7a2d045552} onPress={() => { try { app.navigate("Transactions"); } catch(e) { console.error('[Action Error]', e); } }}>View all</Text>
              </View>
              <View style={styles.node_358fcf03_a5a0_41b4_9d8e_323cac25fd98}>
                        <View style={styles.node_16518aff_3347_49b5_bfff_7cbd6e749268}>
                                    <View style={styles.node_49a927e4_c935_4c9c_bc29_28ea59efe350}>
                                                  <View style={styles.node_efa0e42e_85d7_460c_9846_3fe64f1fa3ce}>
                                                                  <View style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={20} height={20} fill="none"><G stroke="#B9690A" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></Path><Path d="M3 6h18"></Path><Path d="M16 10a4 4 0 0 1-8 0"></Path></G></Svg></View>
                                                  </View>
                                                  <View style={styles.node_ee380dc2_7bf2_4204_a3c2_44f4f4cc3452}>
                                                                  <Text style={styles.node_df335606_fdc6_4c65_b985_32a8f990f878}>Amazon</Text>
                                                                  <Text style={styles.node_94a6c23a_beea_4d54_b96a_0427cfb10743}>Shopping</Text>
                                                  </View>
                                    </View>
                                    <View style={styles.node_94f84188_8175_4fe3_9584_b9e2ea7e81c8}>
                                                  <Text style={styles.node_b82f2910_ad80_4e26_bd64_fa7e763b3bf4}>- ₹ 2,499.00</Text>
                                                  <Text style={styles.node_86702664_2188_44f6_8731_b130f0d1d748}>Today</Text>
                                    </View>
                        </View>
                        <View style={[styles.node_44537f9e_54b3_4d58_b88c_f4943c890198, { height: 1, backgroundColor: '#EEF0F4', alignSelf: 'stretch' }]} />
                        <View style={styles.node_6662a08a_0f91_4cf4_8a51_67162ed5e680}>
                                    <View style={styles.node_3a9c005e_fe1c_4bb8_a3bd_b14cbd91f97b}>
                                                  <View style={styles.node_6bbe1ead_6623_4226_badf_859adde98ac7}>
                                                                  <View style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={20} height={20} fill="none"><G stroke="#1E8A4C" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></Path><Rect width="20" height="14" x="2" y="6" rx="2"></Rect></G></Svg></View>
                                                  </View>
                                                  <View style={styles.node_f69bb7af_0b2f_4d0d_bd0a_2c75a0655ae1}>
                                                                  <Text style={styles.node_5697f71b_864b_4973_81ea_e86900797892}>Salary Credit</Text>
                                                                  <Text style={styles.node_61ac234a_7979_434d_8b56_e39b3252d21c}>Employer</Text>
                                                  </View>
                                    </View>
                                    <View style={styles.node_38b3863f_20c8_46bc_8ae6_cd6c916c76ff}>
                                                  <Text style={styles.node_388c10cc_44e3_4fed_9e2a_73c4b9636885}>+ ₹ 1,20,000.00</Text>
                                                  <Text style={styles.node_826df505_b869_401a_bb76_54467f4f8c54}>Yesterday</Text>
                                    </View>
                        </View>
                        <View style={[styles.node_379068ab_f12c_4781_b857_d720aa9d5a3b, { height: 1, backgroundColor: '#EEF0F4', alignSelf: 'stretch' }]} />
                        <View style={styles.node_3596d520_778f_4083_8298_43cd7e821371}>
                                    <View style={styles.node_e8372cf4_d10c_4131_bf3d_d689ab4e457a}>
                                                  <View style={styles.node_8756ef9d_be3c_4f0c_8f89_54f581321268}>
                                                                  <View style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={20} height={20} fill="none"><G stroke="#C23636" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></Path><Path d="M7 2v20"></Path><Path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></Path></G></Svg></View>
                                                  </View>
                                                  <View style={styles.node_a4e5d405_cb86_4fbf_9f56_8d7a101370df}>
                                                                  <Text style={styles.node_681b0ee1_d2c5_4d57_83a3_96495bf06500}>Zomato</Text>
                                                                  <Text style={styles.node_9233d9e0_b0c8_4891_8568_4fb148b2ba40}>Food & Dining</Text>
                                                  </View>
                                    </View>
                                    <View style={styles.node_a5045ba2_0396_4b94_98dd_2b542612eebe}>
                                                  <Text style={styles.node_d8b0e4ba_3a09_45cb_9cbe_0d4f3e18dd51}>- ₹ 749.00</Text>
                                                  <Text style={styles.node_b700ab85_82f4_4a43_9c25_07ad216a8aa4}>12 Sep 2025</Text>
                                    </View>
                        </View>
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
  node_b162845d_9870_419b_a69b_56891e84177c: {
    gap: 0,
    paddingTop: 20,
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
  node_8dfa70bf_7050_43df_bfd0_5f3aa33027d0: {
    color: '#0F1E4D',
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 20,
  },
  node_f460cc10_d8d8_454c_bfc5_3bb6ad8e431f: {
    gap: 14,
    marginBottom: 28,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  node_dc36b80f_7c9c_4718_a8b2_0ebad9837737: {
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
  node_99636dc5_4558_4a30_b364_0fe1f0581fcf: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_15d204bc_1b8c_486f_b22a_2d3987234801: {
    width: 48,
    height: 48,
    alignItems: 'center',
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: '#DCE7FF',
  },
  node_ad09b9a7_d7ee_4119_9e61_c2dc7b8e74f7: {
    color: '#2554E8',
  },
  node_44834177_c21a_4512_9031_6368fe86127f: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_4c108132_6f84_42a7_8a39_ef4d6139329f: {
    color: '#0F1E4D',
    fontSize: 17,
    fontWeight: '700',
  },
  node_377e2383_67c0_463c_94f4_b2ae5ee30db7: {
    color: '#8A93A6',
    fontSize: 13,
  },
  node_6fcfdd89_0cf9_4796_8f64_4d6376dc0cc9: {
    gap: 2,
    minWidth: 150,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  node_b021fbe0_cc1e_479b_9764_ef4786296d4e: {
    color: '#0F1E4D',
    fontSize: 17,
    textAlign: 'right',
    fontWeight: '800',
  },
  node_bc9863ff_d459_45fa_add2_6a9f117bbf49: {
    color: '#8A93A6',
    fontSize: 12,
    textAlign: 'right',
  },
  node_e6b6854b_b41d_4bf1_a1ba_125d79a28a36: {
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
  node_7dbd99b4_5e55_438a_a641_e03690ab235d: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_21209365_bac9_433b_9082_f6e8e509f175: {
    width: 48,
    height: 48,
    alignItems: 'center',
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: '#DCE7FF',
  },
  node_3b100685_d30b_4718_a67f_a01d982a00a0: {
    color: '#2554E8',
  },
  node_c2398949_0fc3_44df_b19e_e1acb8e27cd9: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_cf6ae041_85ee_4f80_874b_9e00a90be859: {
    color: '#0F1E4D',
    fontSize: 17,
    fontWeight: '700',
  },
  node_20919358_dc71_42fa_908a_ec4a09a1e89d: {
    color: '#8A93A6',
    fontSize: 13,
  },
  node_75d33d9c_1cb6_484d_8b02_ba89f47a0e20: {
    gap: 2,
    minWidth: 150,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  node_dc42ff94_6313_428f_b0bb_432b5846d52c: {
    color: '#0F1E4D',
    fontSize: 17,
    textAlign: 'right',
    fontWeight: '800',
  },
  node_4526d2d5_2b60_4f32_8bc9_92b0d587a181: {
    color: '#8A93A6',
    fontSize: 12,
    textAlign: 'right',
  },
  node_30f8ed68_89a3_4d82_b1ec_bf070e0ef8f8: {
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
  node_f64e14fa_0c4a_4938_9c6c_66c002021416: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_343f1774_1451_414d_9974_089026bd4a43: {
    width: 48,
    height: 48,
    alignItems: 'center',
    borderRadius: 14,
    justifyContent: 'center',
    backgroundColor: '#FBE6C8',
  },
  node_1cda5acf_49e2_43a8_bd9e_58884393458b: {
    color: '#B9690A',
  },
  node_3d2cbc00_5103_4f2d_9695_f7308f0c1aa2: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_8698799f_8c79_4f9e_8e9b_2c4a5759b8d3: {
    color: '#0F1E4D',
    fontSize: 17,
    fontWeight: '700',
  },
  node_e21b514b_c678_45ff_b2d4_b73083e26b13: {
    color: '#8A93A6',
    fontSize: 13,
  },
  node_19f72dd7_fe1d_4f37_8e90_5d7de0b86745: {
    gap: 2,
    minWidth: 150,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  node_b17165e6_88f8_454e_94c1_30617dbaaa60: {
    color: '#0F1E4D',
    fontSize: 17,
    textAlign: 'right',
    fontWeight: '800',
  },
  node_fc2338f0_79f5_4bc2_a087_59738bc207ad: {
    color: '#8A93A6',
    fontSize: 12,
    textAlign: 'right',
  },
  node_83b1ebd7_39be_469e_bbce_1fbe8ebfd17e: {
    alignItems: 'stretch',
    marginBottom: 14,
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  node_79d3afcf_9fde_4a11_95b3_0b00851d81cc: {
    color: '#0F1E4D',
    fontSize: 20,
    fontWeight: '800',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_25e50913_5a1e_4a66_bbaa_4c7a2d045552: {
    color: '#2554E8',
    fontSize: 15,
    fontWeight: '600',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_358fcf03_a5a0_41b4_9d8e_323cac25fd98: {
    gap: 0,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.05},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.05)',
    paddingTop: 6,
    paddingLeft: 16,
    borderRadius: 16,
    paddingRight: 16,
    paddingBottom: 6,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  node_16518aff_3347_49b5_bfff_7cbd6e749268: {
    alignItems: 'stretch',
    paddingTop: 14,
    paddingBottom: 14,
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  node_49a927e4_c935_4c9c_bc29_28ea59efe350: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_efa0e42e_85d7_460c_9846_3fe64f1fa3ce: {
    width: 44,
    height: 44,
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'center',
    backgroundColor: '#FBE6C8',
  },
  node_68b0ff8a_4045_41a0_8e8e_54fc992b7f5e: {
    color: '#B9690A',
  },
  node_ee380dc2_7bf2_4204_a3c2_44f4f4cc3452: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_df335606_fdc6_4c65_b985_32a8f990f878: {
    color: '#0F1E4D',
    fontSize: 16,
    fontWeight: '700',
  },
  node_94a6c23a_beea_4d54_b96a_0427cfb10743: {
    color: '#8A93A6',
    fontSize: 13,
  },
  node_94f84188_8175_4fe3_9584_b9e2ea7e81c8: {
    gap: 2,
    minWidth: 120,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  node_b82f2910_ad80_4e26_bd64_fa7e763b3bf4: {
    color: '#0F1E4D',
    fontSize: 16,
    textAlign: 'right',
    fontWeight: '700',
  },
  node_86702664_2188_44f6_8731_b130f0d1d748: {
    color: '#8A93A6',
    fontSize: 12,
    textAlign: 'right',
  },
  node_44537f9e_54b3_4d58_b88c_f4943c890198: {
    height: 1,
    backgroundColor: '#EEF0F4',
  },
  node_6662a08a_0f91_4cf4_8a51_67162ed5e680: {
    alignItems: 'stretch',
    paddingTop: 14,
    paddingBottom: 14,
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  node_3a9c005e_fe1c_4bb8_a3bd_b14cbd91f97b: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_6bbe1ead_6623_4226_badf_859adde98ac7: {
    width: 44,
    height: 44,
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'center',
    backgroundColor: '#D3F0DE',
  },
  node_e8be2322_f3d4_4a72_a805_afee76c3729c: {
    color: '#1E8A4C',
  },
  node_f69bb7af_0b2f_4d0d_bd0a_2c75a0655ae1: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_5697f71b_864b_4973_81ea_e86900797892: {
    color: '#0F1E4D',
    fontSize: 16,
    fontWeight: '700',
  },
  node_61ac234a_7979_434d_8b56_e39b3252d21c: {
    color: '#8A93A6',
    fontSize: 13,
  },
  node_38b3863f_20c8_46bc_8ae6_cd6c916c76ff: {
    gap: 2,
    minWidth: 120,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  node_388c10cc_44e3_4fed_9e2a_73c4b9636885: {
    color: '#1E8A4C',
    fontSize: 16,
    textAlign: 'right',
    fontWeight: '700',
  },
  node_826df505_b869_401a_bb76_54467f4f8c54: {
    color: '#8A93A6',
    fontSize: 12,
    textAlign: 'right',
  },
  node_379068ab_f12c_4781_b857_d720aa9d5a3b: {
    height: 1,
    backgroundColor: '#EEF0F4',
  },
  node_3596d520_778f_4083_8298_43cd7e821371: {
    alignItems: 'stretch',
    paddingTop: 14,
    paddingBottom: 14,
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  node_e8372cf4_d10c_4131_bf3d_d689ab4e457a: {
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 8,
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_8756ef9d_be3c_4f0c_8f89_54f581321268: {
    width: 44,
    height: 44,
    alignItems: 'center',
    borderRadius: 12,
    justifyContent: 'center',
    backgroundColor: '#FBDADA',
  },
  node_7cba9b74_cb9f_4dcb_acc7_6a6d086968bf: {
    color: '#C23636',
  },
  node_a4e5d405_cb86_4fbf_9f56_8d7a101370df: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_681b0ee1_d2c5_4d57_83a3_96495bf06500: {
    color: '#0F1E4D',
    fontSize: 16,
    fontWeight: '700',
  },
  node_9233d9e0_b0c8_4891_8568_4fb148b2ba40: {
    color: '#8A93A6',
    fontSize: 13,
  },
  node_a5045ba2_0396_4b94_98dd_2b542612eebe: {
    gap: 2,
    minWidth: 120,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
  },
  node_d8b0e4ba_3a09_45cb_9cbe_0d4f3e18dd51: {
    color: '#0F1E4D',
    fontSize: 16,
    textAlign: 'right',
    fontWeight: '700',
  },
  node_b700ab85_82f4_4a43_9c25_07ad216a8aa4: {
    color: '#8A93A6',
    fontSize: 12,
    textAlign: 'right',
  },
});


export default function AccountsGuarded(props: any) {
  return <Can permissions={[]} redirectTo={"Login"}><Accounts {...props} /></Can>;
}
