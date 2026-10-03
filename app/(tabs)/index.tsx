import { Can } from '@/components/Can';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { getThemeColors } from '../../config/theme';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { appRuntime as app } from '../../lib/app';

function Home() {
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
      <View style={styles.node_674797b6_91b2_4f93_a1ed_7f597896113a}>
              <View style={styles.node_550c67ad_fe28_46ed_a7e8_70d3ba3d66fa}>
                        <View style={styles.node_8f45e273_f4f2_4cce_a77c_904a2c9f0dca}>
                                    <View style={styles.node_6bf15950_2359_4b79_a307_de6ebe58d435}>
                                                  <Text style={styles.node_2693e9df_5ad9_47eb_adb0_6e8de495dc3d}>Good morning,</Text>
                                                  <Text style={styles.node_ae9e58bd_c2fc_432d_8aab_866381219168}>Prahalad</Text>
                                    </View>
                                    <View style={styles.node_29329194_26cb_4a00_a8e7_e23c52d380e1}>
                                                  <View style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={24} height={24} fill="none"><G stroke="#FFFFFF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M10.268 21a2 2 0 0 0 3.464 0"></Path><Path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></Path></G></Svg></View>
                                                  <View style={styles.node_f21254a5_68fa_4cc1_8922_34dd510c1fb6}>
                                                                  <Text style={styles.node_cfcd6517_7523_4acd_b2d3_7093f9753f5f}>A</Text>
                                                  </View>
                                    </View>
                        </View>
                        <View style={styles.node_4d925c88_9f05_4160_90ac_140b52dbd832}>
                                    <View style={styles.node_ab2c207f_64a9_4e20_82f0_1ad07c0be52a}>
                                                  <Text style={styles.node_b89b4fd3_c267_4c78_a81f_ba6247fed765}>Total Balance</Text>
                                                  <View style={{ width: 16, height: 16, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={16} height={16} fill="none"><G stroke="#C7D0E8" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></Path><Circle cx="12" cy="12" r="3"></Circle></G></Svg></View>
                                    </View>
                                    <Text style={styles.node_f5d2b28c_e515_498e_a076_21d6e9437f67}>₹ 12,48,320.00</Text>
                                    <View style={styles.node_93da11d8_8ed5_4db8_a30c_cf009dae29e0}>
                                                  <View style={styles.node_d7a2374c_21fc_4a8e_80ef_9ecc2ea45718}>
                                                                  <View style={{ width: 14, height: 14, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={14} height={14} fill="none"><G stroke="#34D399" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m5 12 7-7 7 7"></Path><Path d="M12 19V5"></Path></G></Svg></View>
                                                                  <Text style={styles.node_5e1336e6_fb19_4730_9622_f304e213572a}>2.4%</Text>
                                                  </View>
                                                  <Text style={styles.node_bf8f22b8_aa91_416a_8f91_2422f0271216}>vs last month</Text>
                                    </View>
                        </View>
                        <View style={styles.node_21287377_44c7_4753_b7ef_cd9daa203882}>
                                    <View style={styles.node_edacb374_8d60_4c26_affa_c7c80826c447} />
                                    <View style={styles.node_5049f1ff_0a68_41a0_aa6e_0a575ccb57aa} />
                        </View>
              </View>
              <View style={styles.node_260b42e9_49f9_46a6_a029_b685180e6101}>
                        <View style={styles.node_21d1ea39_7214_4ccc_b47a_ae8c4bb4fe65}>
                                    <View style={styles.node_6ec1a7a2_65ac_4306_8e8c_c2bda7afc8e4}>
                                                  <View style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={24} height={24} fill="none"><G stroke="#2563EB" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></Path><Path d="m21.854 2.147-10.94 10.939"></Path></G></Svg></View>
                                    </View>
                                    <Text style={styles.node_ed13024f_35f4_42c3_a5cf_d7b826479a17}>Send</Text>
                        </View>
                        <View style={styles.node_47ff0519_64d6_4721_809f_0b8c7c40cc98}>
                                    <View style={styles.node_a33bc9ac_e766_46b3_b3be_ecb8aa3c0bc3}>
                                                  <View style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={24} height={24} fill="none"><G stroke="#7C3AED" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Polyline points="14 15 9 20 4 15"></Polyline><Path d="M20 4h-7a4 4 0 0 0-4 4v12"></Path></G></Svg></View>
                                    </View>
                                    <Text style={styles.node_7c3e73ec_df5a_4318_9b38_fea7300ccb33}>Request</Text>
                        </View>
                        <View style={styles.node_62f68c21_825a_4401_9c80_6c73c0858332}>
                                    <View style={styles.node_4cc6e769_8b21_412a_931a_3879393a3ded}>
                                                  <View style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={24} height={24} fill="none"><G stroke="#EA580C" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M3 7V5a2 2 0 0 1 2-2h2"></Path><Path d="M17 3h2a2 2 0 0 1 2 2v2"></Path><Path d="M21 17v2a2 2 0 0 1-2 2h-2"></Path><Path d="M7 21H5a2 2 0 0 1-2-2v-2"></Path><Path d="M7 12h10"></Path></G></Svg></View>
                                    </View>
                                    <Text style={styles.node_89320d68_9591_458f_9c5b_6a028087a7a0}>Scan & Pay</Text>
                        </View>
                        <View style={styles.node_41f2aac2_f907_432a_8909_cb84d9686916}>
                                    <View style={styles.node_72f8169b_001d_43ce_8733_c66e6fd3aec0}>
                                                  <View style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={24} height={24} fill="none"><G stroke="#059669" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M12 3v18"></Path><Path d="M3 12h18"></Path><Rect x="3" y="3" width="18" height="18" rx="2"></Rect></G></Svg></View>
                                    </View>
                                    <Text style={styles.node_eebaed6d_f96d_463e_a9f1_c7c1d774c38b}>More</Text>
                        </View>
              </View>
              <View style={styles.node_37b7ee4d_61ab_4d81_ad01_ec5daef46d77}>
                        <View style={styles.node_55d48b15_bbb2_40ad_a2b5_1824abb6f634}>
                                    <View style={styles.node_ed00a153_b818_4d1a_86f5_35023e8166b4}>
                                                  <View style={styles.node_9ad7a278_89cd_4416_b9f1_ee0ef71f5265}>
                                                                  <View style={styles.node_21d3b4fc_497b_40da_8bee_c5132895f3d7}>
                                                                                    <View style={styles.node_80a68370_8e4b_44f3_8aba_acf14ec03bdf} />
                                                                                    <View style={styles.node_12006d2e_3c77_4252_92e2_856d83310d49} />
                                                                  </View>
                                                  </View>
                                    </View>
                                    <View style={styles.node_d0e12e58_ae9e_43d1_9134_de09878d8b6c}>
                                                  <Text style={styles.node_45ce676c_f1aa_4e16_8ca0_3e913ba2453f}>Meet</Text>
                                                  <Text style={styles.node_eee544d1_b47b_411d_90bf_449f7ec7f3b8}>Mintly</Text>
                                    </View>
                        </View>
                        <Text style={styles.node_ca0a11e0_ad46_4bc6_94d0_ce774015d39e}>Ask anything, get instant answers, make transactions and more.</Text>
                        <TouchableOpacity style={styles.node_aeadfb60_59bf_45ed_bd10_f889e54056a4} activeOpacity={0.7} onPress={() => { try { app.navigate("AI Mintly"); } catch(e) { console.error('[Action Error]', e); } }}>
                                    <View style={styles.node_6af9c5ee_26f4_4bbb_b238_8bc21fe2ba88}>
                                                  <View style={{ width: 18, height: 18, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={18} height={18} fill="none"><G stroke="#FFFFFF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"></Path><Path d="M20 3v4"></Path><Path d="M22 5h-4"></Path><Path d="M4 17v2"></Path><Path d="M5 18H3"></Path></G></Svg></View>
                                                  <Text style={styles.node_c1f8bf33_af24_4727_b2a6_e2b207087433} onPress={() => { try { app.navigate("AI Mintly"); } catch(e) { console.error('[Action Error]', e); } }}>Chat with Mintly</Text>
                                    </View>
                        </TouchableOpacity>
              </View>
              <View style={styles.node_984d2606_af7c_4031_94a9_caf923465aa8}>
                        <View style={styles.node_b168b333_ffc5_43c9_a78f_3335d51b85ea}>
                                    <TouchableOpacity style={styles.node_6e99c40c_e3a0_4a2e_8dd3_19fcbaf9fcc8} activeOpacity={0.7} onPress={() => { try { app.navigate("Payments"); } catch(e) { console.error('[Action Error]', e); } }}>
                                                  <View style={styles.node_960148f4_9c70_4157_abce_a0b90d49b486}>
                                                                  <Text style={styles.node_b8ae2fc6_f977_4137_ac49_c50438378bd9}>Payments</Text>
                                                                  <Text style={styles.node_3dbd1794_1169_4577_8474_81a126291a95}>Bills, UPI & more</Text>
                                                  </View>
                                                  <View style={styles.node_1418e75e_dabd_4718_be69_68772892c3d5}>
                                                                  <View style={{ width: 34, height: 34, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={34} height={34} fill="none"><G stroke="#2B1B00" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></Path><Path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></Path><Path d="M12 17.5v-11"></Path></G></Svg></View>
                                                  </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.node_abc99fc6_aca7_4d10_b4c9_5477876a1f8a} activeOpacity={0.7} onPress={() => { try { app.navigate("Loans"); } catch(e) { console.error('[Action Error]', e); } }}>
                                                  <View style={styles.node_92798dc9_f7ff_462c_b61e_12a7412915ea}>
                                                                  <Text style={styles.node_e2448ff0_164e_4604_8d3b_713a9b5e9654}>Loans & Credit</Text>
                                                                  <Text style={styles.node_d9bf73f2_dcf1_4719_91ba_3ee88a7261e9}>Pre-approved up to ₹50L</Text>
                                                  </View>
                                                  <View style={styles.node_c8b92f92_c2f4_4c04_a199_b14bc17ecc1d}>
                                                                  <View style={{ width: 34, height: 34, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={34} height={34} fill="none"><G stroke="#B9F6CA" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></Path><Path d="m9 12 2 2 4-4"></Path></G></Svg></View>
                                                  </View>
                                    </TouchableOpacity>
                        </View>
                        <View style={styles.node_2c96e34b_5153_4f54_9680_905946aa4eb5}>
                                    <TouchableOpacity style={styles.node_88702662_964c_4a37_95ae_1bbad37dce27} activeOpacity={0.7} onPress={() => { try { app.navigate("Accounts"); } catch(e) { console.error('[Action Error]', e); } }}>
                                                  <View style={styles.node_ca3902f1_4cd4_4cc4_8e63_b7298731f4c0}>
                                                                  <Text style={styles.node_4fe1a4bd_ed0f_426f_83b1_b7e526075b70}>Accounts</Text>
                                                                  <Text style={styles.node_4e7e9c7f_c8a9_40e7_9c3b_c5ad0a0071a7}>Savings, Current & FD</Text>
                                                  </View>
                                                  <View style={styles.node_dcbd8fd9_607b_4f56_b5cb_1bfdcf142df7}>
                                                                  <View style={{ width: 34, height: 34, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={34} height={34} fill="none"><G stroke="#F3D4D0" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Line x1="3" x2="21" y1="22" y2="22"></Line><Line x1="6" x2="6" y1="18" y2="11"></Line><Line x1="10" x2="10" y1="18" y2="11"></Line><Line x1="14" x2="14" y1="18" y2="11"></Line><Line x1="18" x2="18" y1="18" y2="11"></Line><Polygon points="12 2 20 7 4 7"></Polygon></G></Svg></View>
                                                  </View>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.node_f5bca464_4913_4f08_ba5a_a109ad0e6999} activeOpacity={0.7} onPress={() => { try { app.navigate("Investments"); } catch(e) { console.error('[Action Error]', e); } }}>
                                                  <View style={styles.node_7fdb243a_f46f_42d0_8da2_73ade02d2b05}>
                                                                  <Text style={styles.node_6bad1250_a88d_4aed_9fd2_f98b9e69d46e}>Investments</Text>
                                                                  <Text style={styles.node_2a063c9a_8b92_4bef_9ac7_b9714f3b708c}>Funds & stocks</Text>
                                                  </View>
                                                  <View style={styles.node_50fa9507_1959_4f61_948e_d4617bc4df14}>
                                                                  <View style={{ width: 34, height: 34, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={34} height={34} fill="none"><G stroke="#F5C542" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M6 3h12l4 6-10 13L2 9Z"></Path><Path d="M11 3 8 9l4 13 4-13-3-6"></Path><Path d="M2 9h20"></Path></G></Svg></View>
                                                  </View>
                                    </TouchableOpacity>
                        </View>
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
  node_674797b6_91b2_4f93_a1ed_7f597896113a: {
    gap: 0,
    backgroundColor: colors.background,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_550c67ad_fe28_46ed_a7e8_70d3ba3d66fa: {
    gap: 20,
    overflow: 'hidden',
    position: 'relative',
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 20,
    backgroundColor: '#19255A',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  node_8f45e273_f4f2_4cce_a77c_904a2c9f0dca: {
    gap: 0,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_6bf15950_2359_4b79_a307_de6ebe58d435: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_2693e9df_5ad9_47eb_adb0_6e8de495dc3d: {
    color: '#AEB8E0',
    fontSize: 15,
  },
  node_ae9e58bd_c2fc_432d_8aab_866381219168: {
    color: '#FFFFFF',
    fontSize: 28,
    fontWeight: '700',
  },
  node_29329194_26cb_4a00_a8e7_e23c52d380e1: {
    gap: 16,
    alignItems: 'center',
    justifyContent: 'flex-end',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_39208365_2bb7_49b7_a53f_7d6d937c2fd5: {
    color: '#FFFFFF',
    paddingTop: 10,
  },
  node_f21254a5_68fa_4cc1_8922_34dd510c1fb6: {
    width: 40,
    height: 40,
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#EDEFFA',
  },
  node_cfcd6517_7523_4acd_b2d3_7093f9753f5f: {
    color: '#19255A',
    fontSize: 15,
    fontWeight: '700',
  },
  node_4d925c88_9f05_4160_90ac_140b52dbd832: {
    gap: 10,
    marginTop: 12,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  node_ab2c207f_64a9_4e20_82f0_1ad07c0be52a: {
    gap: 6,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_b89b4fd3_c267_4c78_a81f_ba6247fed765: {
    color: '#AEB8E0',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_52dddddc_75a9_4912_a154_d6e80e00c1e3: {
    color: '#C7D0E8',
  },
  node_f5d2b28c_e515_498e_a076_21d6e9437f67: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: '800',
  },
  node_93da11d8_8ed5_4db8_a30c_cf009dae29e0: {
    gap: 8,
    marginTop: 4,
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_d7a2374c_21fc_4a8e_80ef_9ecc2ea45718: {
    gap: 4,
    alignItems: 'flex-end',
    paddingTop: 4,
    paddingLeft: 10,
    borderRadius: 20,
    paddingRight: 10,
    paddingBottom: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.12)',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    overflow: 'visible',
    flexDirection: 'row',
  },
  node_1603efcb_008f_495b_8bbe_f5d4d4e792c5: {
    color: '#34D399',
  },
  node_5e1336e6_fb19_4730_9622_f304e213572a: {
    color: '#4ADE80',
    fontSize: 13,
    fontWeight: '700',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_bf8f22b8_aa91_416a_8f91_2422f0271216: {
    color: '#AEB8E0',
    fontSize: 13,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_21287377_44c7_4753_b7ef_cd9daa203882: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    padding: 0,
    overflow: 'visible',
    position: 'absolute',
    borderRadius: 4,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
  },
  node_edacb374_8d60_4c26_affa_c7c80826c447: {
    top: -50,
    right: -40,
    width: 170,
    height: 170,
    padding: 0,
    position: 'absolute',
    borderRadius: 85,
    backgroundColor: 'rgba(255,255,255,0.06)',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_5049f1ff_0a68_41a0_aa6e_0a575ccb57aa: {
    top: 40,
    right: 70,
    width: 90,
    height: 90,
    padding: 0,
    position: 'absolute',
    borderRadius: 45,
    backgroundColor: 'rgba(255,255,255,0.05)',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_260b42e9_49f9_46a6_a029_b685180e6101: {
    gap: 0,
    paddingTop: 24,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_21d1ea39_7214_4ccc_b47a_ae8c4bb4fe65: {
    gap: 8,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_6ec1a7a2_65ac_4306_8e8c_c2bda7afc8e4: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  node_e12c6c26_7192_4062_b3d8_a3059402510c: {
    color: '#2563EB',
  },
  node_ed13024f_35f4_42c3_a5cf_d7b826479a17: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '500',
  },
  node_47ff0519_64d6_4721_809f_0b8c7c40cc98: {
    gap: 8,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_a33bc9ac_e766_46b3_b3be_ecb8aa3c0bc3: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  node_062a6a57_ace0_48b7_8189_276064574e99: {
    color: '#7C3AED',
  },
  node_7c3e73ec_df5a_4318_9b38_fea7300ccb33: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '500',
  },
  node_62f68c21_825a_4401_9c80_6c73c0858332: {
    gap: 8,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_4cc6e769_8b21_412a_931a_3879393a3ded: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  node_a4326e3d_7a7a_4729_ab24_2f450657bc5f: {
    color: '#EA580C',
  },
  node_89320d68_9591_458f_9c5b_6a028087a7a0: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '500',
  },
  node_41f2aac2_f907_432a_8909_cb84d9686916: {
    gap: 8,
    alignItems: 'stretch',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_72f8169b_001d_43ce_8733_c66e6fd3aec0: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  node_507dceab_dc4d_4661_9491_419de8ed266f: {
    color: '#059669',
  },
  node_eebaed6d_f96d_463e_a9f1_c7c1d774c38b: {
    color: '#374151',
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'center',
  },
  node_37b7ee4d_61ab_4d81_ad01_ec5daef46d77: {
    gap: 16,
    padding: 20,
    borderRadius: 20,
    backgroundColor: '#E6EBFB',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  node_55d48b15_bbb2_40ad_a2b5_1824abb6f634: {
    gap: 16,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_ed00a153_b818_4d1a_86f5_35023e8166b4: {
    width: 56,
    height: 56,
    _rnShadow: {"shadowColor":"#000000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.08},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.08)',
    alignItems: 'center',
    borderRadius: 18,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  node_9ad7a278_89cd_4416_b9f1_ee0ef71f5265: {
    width: 40,
    height: 26,
    alignItems: 'center',
    borderRadius: 13,
    justifyContent: 'center',
    backgroundColor: '#0F1A4A',
  },
  node_21d3b4fc_497b_40da_8bee_c5132895f3d7: {
    gap: 6,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_80a68370_8e4b_44f3_8aba_acf14ec03bdf: {
    width: 7,
    height: 7,
    padding: 0,
    borderRadius: 4,
    backgroundColor: '#6EE7B7',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_12006d2e_3c77_4252_92e2_856d83310d49: {
    width: 7,
    height: 7,
    padding: 0,
    borderRadius: 4,
    backgroundColor: '#6EE7B7',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_d0e12e58_ae9e_43d1_9134_de09878d8b6c: {
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
  node_45ce676c_f1aa_4e16_8ca0_3e913ba2453f: {
    color: '#6B7280',
    fontSize: 18,
  },
  node_eee544d1_b47b_411d_90bf_449f7ec7f3b8: {
    color: '#1E2A5E',
    fontSize: 26,
    fontWeight: '800',
  },
  node_ca0a11e0_ad46_4bc6_94d0_ce774015d39e: {
    color: '#6B7280',
    fontSize: 15,
    lineHeight: 20,
  },
  node_aeadfb60_59bf_45ed_bd10_f889e54056a4: {
    alignItems: 'center',
    paddingTop: 14,
    borderRadius: 999,
    paddingBottom: 14,
    justifyContent: 'center',
    backgroundColor: '#3B4FE0',
  },
  node_6af9c5ee_26f4_4bbb_b238_8bc21fe2ba88: {
    gap: 8,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_d242c87c_b914_4497_b825_c4693d7af066: {
    color: '#FFFFFF',
  },
  node_c1f8bf33_af24_4727_b2a6_e2b207087433: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_984d2606_af7c_4031_94a9_caf923465aa8: {
    gap: 16,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 24,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  node_b168b333_ffc5_43c9_a78f_3335d51b85ea: {
    gap: 16,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_6e99c40c_e3a0_4a2e_8dd3_19fcbaf9fcc8: {
    gap: 0,
    height: 150,
    padding: 18,
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: '#E0A43A',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  node_960148f4_9c70_4157_abce_a0b90d49b486: {
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  node_b8ae2fc6_f977_4137_ac49_c50438378bd9: {
    color: '#2B1B00',
    fontSize: 19,
    fontWeight: '800',
  },
  node_3dbd1794_1169_4577_8474_81a126291a95: {
    color: '#4A3200',
    fontSize: 13,
  },
  node_1418e75e_dabd_4718_be69_68772892c3d5: {
    gap: 0,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_1f6fe1f4_42b9_4520_82e0_846b838857da: {
    color: '#2B1B00',
  },
  node_abc99fc6_aca7_4d10_b4c9_5477876a1f8a: {
    gap: 0,
    height: 150,
    padding: 18,
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: '#3B5A41',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  node_92798dc9_f7ff_462c_b61e_12a7412915ea: {
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  node_e2448ff0_164e_4604_8d3b_713a9b5e9654: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '800',
  },
  node_d9bf73f2_dcf1_4719_91ba_3ee88a7261e9: {
    color: '#D7E6DA',
    fontSize: 13,
  },
  node_c8b92f92_c2f4_4c04_a199_b14bc17ecc1d: {
    gap: 0,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_7edae0c2_0573_435e_aead_7d4c054a23d6: {
    color: '#B9F6CA',
  },
  node_2c96e34b_5153_4f54_9680_905946aa4eb5: {
    gap: 16,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_88702662_964c_4a37_95ae_1bbad37dce27: {
    gap: 0,
    height: 150,
    padding: 18,
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: '#8A2A22',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  node_ca3902f1_4cd4_4cc4_8e63_b7298731f4c0: {
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  node_4fe1a4bd_ed0f_426f_83b1_b7e526075b70: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '800',
  },
  node_4e7e9c7f_c8a9_40e7_9c3b_c5ad0a0071a7: {
    color: '#F3D4D0',
    fontSize: 13,
  },
  node_dcbd8fd9_607b_4f56_b5cb_1bfdcf142df7: {
    gap: 0,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_7fd02c94_1399_432b_938c_43e8f94bf506: {
    color: '#F3D4D0',
  },
  node_f5bca464_4913_4f08_ba5a_a109ad0e6999: {
    gap: 0,
    height: 150,
    padding: 18,
    overflow: 'hidden',
    borderRadius: 20,
    backgroundColor: '#111827',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  node_7fdb243a_f46f_42d0_8da2_73ade02d2b05: {
    gap: 4,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  node_6bad1250_a88d_4aed_9fd2_f98b9e69d46e: {
    color: '#FFFFFF',
    fontSize: 19,
    fontWeight: '800',
  },
  node_2a063c9a_8b92_4bef_9ac7_b9714f3b708c: {
    color: '#C9CED6',
    fontSize: 13,
  },
  node_50fa9507_1959_4f61_948e_d4617bc4df14: {
    gap: 0,
    justifyContent: 'flex-end',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_f967bcb4_ea8a_4bd6_9d0f_008983d33d39: {
    color: '#F5C542',
  },
  });
}

export default function HomeGuarded(props: any) {
  return <Can permissions={[]} redirectTo={"Login"}><Home {...props} /></Can>;
}
