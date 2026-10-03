import { Can } from '@/components/Can';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text } from 'react-native';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { getThemeColors } from '../../config/theme';
import { useLocalSearchParams, useRouter } from 'expo-router';

function Payments() {
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
      <View style={styles.node_b4e83f84_e9b9_48d8_81f5_c7133f8b54ab}>
              <Text style={styles.node_40a8910a_03ee_451b_b1f3_750eb87bd46e}>Payments</Text>
              <View style={styles.node_05b48d9c_ae20_4caa_b0e0_0c792a06cb7b}>
                        <View style={styles.node_42cecc13_4be1_477c_ad03_bc6fae65cfde}>
                                    <View style={styles.node_5ed68932_309f_4ca9_ac45_cea741abfaaf}>
                                                  <View style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={24} height={24} fill="none"><G stroke="#2541B2" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Circle cx="12" cy="12" r="4"></Circle><Path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></Path></G></Svg></View>
                                    </View>
                                    <Text style={styles.node_a2fc6d2a_8cf9_455c_a70b_1c9f15706049}>UPI</Text>
                        </View>
                        <View style={styles.node_5f95ffb0_c56a_4752_9571_77b5195eb296}>
                                    <View style={styles.node_db5b1f7b_b599_42b1_bb59_6f76e85b803d}>
                                                  <View style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={24} height={24} fill="none"><G stroke="#2541B2" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M3 7V5a2 2 0 0 1 2-2h2"></Path><Path d="M17 3h2a2 2 0 0 1 2 2v2"></Path><Path d="M21 17v2a2 2 0 0 1-2 2h-2"></Path><Path d="M7 21H5a2 2 0 0 1-2-2v-2"></Path></G></Svg></View>
                                    </View>
                                    <Text style={styles.node_eb0abe27_bb91_4e92_8162_ae6369119666}>Scan & Pay</Text>
                        </View>
                        <View style={styles.node_54f79af6_fbb4_4b50_8a56_4cb521196cd9}>
                                    <View style={styles.node_d744334b_f15c_4304_820f_53768ef8db47}>
                                                  <View style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={24} height={24} fill="none"><G stroke="#2541B2" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></Path><Path d="m21.854 2.147-10.94 10.939"></Path></G></Svg></View>
                                    </View>
                                    <Text style={styles.node_e6f92fb0_b077_4e9d_adee_006a5d1d581b}>Send</Text>
                        </View>
                        <View style={styles.node_4ed42e1f_cb69_424e_b396_03f0f38fa756}>
                                    <View style={styles.node_f233f8eb_da96_4b0d_8a62_043d01a61c5f}>
                                                  <View style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={24} height={24} fill="none"><G stroke="#2541B2" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Polyline points="14 15 9 20 4 15"></Polyline><Path d="M20 4h-7a4 4 0 0 0-4 4v12"></Path></G></Svg></View>
                                    </View>
                                    <Text style={styles.node_e2dd8236_039b_4598_a490_2e507532a3d1}>Request</Text>
                        </View>
              </View>
              <View style={styles.node_d0e272c1_d590_43d3_976c_8d99aa4eaca2}>
                        <View style={styles.node_3dd91219_a10d_44b5_b18a_ee1d6216df61}>
                                    <Text style={styles.node_958453d1_6760_4a1e_b489_bc7fb8bbd849}>UPI</Text>
                                    <Text style={styles.node_72923042_c795_491f_ad69_f9052418870a}>View all</Text>
                        </View>
                        <View style={styles.node_5ac9d05e_18ed_4a1a_8167_1d1f8ca02c2d}>
                                    <View style={styles.node_172ffb1f_f0cd_491c_9c1a_9c2e5d1f336f}>
                                                  <View style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={20} height={20} fill="none"><G stroke="#FFFFFF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Circle cx="12" cy="12" r="4"></Circle><Path d="M16 8v5a3 3 0 0 0 6 0v-1a10 10 0 1 0-4 8"></Path></G></Svg></View>
                                    </View>
                                    <View style={styles.node_bc19dfc9_0926_41d0_aced_d167320da912}>
                                                  <Text style={styles.node_834929a7_22fe_414e_aead_a4a5d534eec3}>alice@upi</Text>
                                                  <Text style={styles.node_056b0130_6147_4816_b521_0f7047199b41}>₹ 8,45,230.00</Text>
                                    </View>
                        </View>
              </View>
              <View style={styles.node_d30c075a_cd61_4e79_87cb_54fa3cc5fa3d}>
                        <Text style={styles.node_8a7eda24_3c99_4b78_87c5_353c43822fcf}>Bill Payments</Text>
                        <View style={styles.node_dbed5305_c674_4e4d_848d_4c5644e1f104}>
                                    <View style={styles.node_e8fa959a_4398_4fa6_8b2f_1a205f6cd221}>
                                                  <View style={styles.node_aa25f87d_d637_441c_a6bb_41195cf5a543}>
                                                                  <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#2541B2" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></Path></G></Svg></View>
                                                  </View>
                                                  <Text style={styles.node_404ffd57_1949_4425_a0ff_e7d1b9277fea}>Electricity</Text>
                                    </View>
                                    <View style={styles.node_f21d6a22_1d4e_45fe_b447_e1c1c535f73e}>
                                                  <View style={styles.node_72f8f403_3187_43a3_afe2_22b7ecb04fca}>
                                                                  <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#2541B2" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"></Path></G></Svg></View>
                                                  </View>
                                                  <Text style={styles.node_98c503c1_c7f4_4fe1_a061_515ca60bc9b2}>Water</Text>
                                    </View>
                                    <View style={styles.node_44448f44_2105_4087_89a0_22d6ca9d7795}>
                                                  <View style={styles.node_70ab1a5d_b9f0_4720_b76e_bbd125f9aa00}>
                                                                  <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#2541B2" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Rect width="14" height="20" x="5" y="2" rx="2" ry="2"></Rect><Path d="M12 18h.01"></Path></G></Svg></View>
                                                  </View>
                                                  <Text style={styles.node_b0cdadaf_19ef_4101_900a_2842b57d6ec8}>Mobile</Text>
                                    </View>
                                    <View style={styles.node_6a16ed29_6488_4b33_9ca9_6a8415452570}>
                                                  <View style={styles.node_2082f3da_e156_4715_bb63_4ebbf948c918}>
                                                                  <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#2541B2" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Rect width="20" height="15" x="2" y="7" rx="2" ry="2"></Rect><Polyline points="17 2 12 7 7 2"></Polyline></G></Svg></View>
                                                  </View>
                                                  <Text style={styles.node_5cafce6d_7964_4050_940e_5f9558b825b1}>DTH</Text>
                                    </View>
                        </View>
                        <View style={styles.node_2b491640_25c5_44a2_b866_f77d3f27a4c9}>
                                    <View style={styles.node_f6fef555_fcdc_4a8b_93a6_2a2a36e39661}>
                                                  <View style={styles.node_03fa7890_4476_4b88_bcee_b55d68af18ee}>
                                                                  <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#2541B2" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M12 20h.01"></Path><Path d="M2 8.82a15 15 0 0 1 20 0"></Path><Path d="M5 12.859a10 10 0 0 1 14 0"></Path><Path d="M8.5 16.429a5 5 0 0 1 7 0"></Path></G></Svg></View>
                                                  </View>
                                                  <Text style={styles.node_7d5e511c_bf13_401a_8c14_717131466c2f}>Broadband</Text>
                                    </View>
                                    <View style={styles.node_d78e342f_5bf4_421f_a9f6_aa0e606ed615}>
                                                  <View style={styles.node_4ebc3949_9229_47b0_9d96_46b07c55b055}>
                                                                  <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#2541B2" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z"></Path></G></Svg></View>
                                                  </View>
                                                  <Text style={styles.node_37c9f520_b40b_4c31_83c7_ec62c3ec4147}>Gas</Text>
                                    </View>
                                    <View style={styles.node_7ceefec9_b6d0_4e47_8008_6d5fedfcfd5a}>
                                                  <View style={styles.node_46c2d57b_6c22_4ce7_b221_464de0b740e6}>
                                                                  <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#2541B2" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Rect width="20" height="14" x="2" y="5" rx="2"></Rect><Line x1="2" x2="22" y1="10" y2="10"></Line></G></Svg></View>
                                                  </View>
                                                  <Text style={styles.node_e0c2aeb0_8506_42c4_8eae_0aaedd50598a}>Credit Card</Text>
                                    </View>
                                    <View style={styles.node_2645401c_62c8_4d1c_a9cf_cb25453393c6}>
                                                  <View style={styles.node_b5e060d6_6570_4c20_8f64_931459760e73}>
                                                                  <View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke="#2541B2" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Circle cx="12" cy="12" r="1"></Circle><Circle cx="19" cy="12" r="1"></Circle><Circle cx="5" cy="12" r="1"></Circle></G></Svg></View>
                                                  </View>
                                                  <Text style={styles.node_5541029f_e02f_413e_9f16_13c3e1299754}>More</Text>
                                    </View>
                        </View>
              </View>
              <View style={styles.node_5334f6ae_2d49_4c79_aa28_0d6b996925f8}>
                        <View style={styles.node_518d5a98_2f99_4e23_a85b_0747ce456a7d}>
                                    <View style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={20} height={20} fill="none"><G stroke="#2541B2" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m17 2 4 4-4 4"></Path><Path d="M3 11v-1a4 4 0 0 1 4-4h14"></Path><Path d="m7 22-4-4 4-4"></Path><Path d="M21 13v1a4 4 0 0 1-4 4H3"></Path></G></Svg></View>
                        </View>
                        <View style={styles.node_c3ec7a99_4ca9_4a7d_9703_760f2f8a80cb}>
                                    <Text style={styles.node_aead18c6_64a5_41a1_81c3_b243cbb31307}>Save time with UPI AutoPay</Text>
                                    <Text style={styles.node_e34d8f2f_894b_4763_b6e6_66daaed711cb}>Set up recurring payments for bills & more.</Text>
                        </View>
                        <View style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={20} height={20} fill="none"><G stroke="#6B7280" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="m9 18 6-6-6-6"></Path></G></Svg></View>
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
    backgroundColor: '#F5F7FB',
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
  node_b4e83f84_e9b9_48d8_81f5_c7133f8b54ab: {
    gap: 20,
    paddingTop: 20,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 32,
    backgroundColor: colors.background,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_40a8910a_03ee_451b_b1f3_750eb87bd46e: {
    color: colors.primaryText,
    fontSize: 32,
    fontWeight: '800',
  },
  node_05b48d9c_ae20_4caa_b0e0_0c792a06cb7b: {
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_42cecc13_4be1_477c_ad03_bc6fae65cfde: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_5ed68932_309f_4ca9_ac45_cea741abfaaf: {
    width: 64,
    height: 64,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.06},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.06)',
    alignItems: 'center',
    borderRadius: 32,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  node_8cd952c1_4578_405f_b006_e7505103de33: {
    color: '#2541B2',
  },
  node_a2fc6d2a_8cf9_455c_a70b_1c9f15706049: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  node_5f95ffb0_c56a_4752_9571_77b5195eb296: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_db5b1f7b_b599_42b1_bb59_6f76e85b803d: {
    width: 64,
    height: 64,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.06},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.06)',
    alignItems: 'center',
    borderRadius: 32,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  node_5110f842_8689_4f3c_8d52_dcd37aba3485: {
    color: '#2541B2',
  },
  node_eb0abe27_bb91_4e92_8162_ae6369119666: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  node_54f79af6_fbb4_4b50_8a56_4cb521196cd9: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_d744334b_f15c_4304_820f_53768ef8db47: {
    width: 64,
    height: 64,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.06},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.06)',
    alignItems: 'center',
    borderRadius: 32,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  node_d5d72d9e_dc0a_43d8_b5dd_d3ce9000fe8d: {
    color: '#2541B2',
  },
  node_e6f92fb0_b077_4e9d_adee_006a5d1d581b: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  node_4ed42e1f_cb69_424e_b396_03f0f38fa756: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_f233f8eb_da96_4b0d_8a62_043d01a61c5f: {
    width: 64,
    height: 64,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.06},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.06)',
    alignItems: 'center',
    borderRadius: 32,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  node_3e6aed4f_d052_4bf5_842d_629f2ec5df30: {
    color: '#2541B2',
  },
  node_e2dd8236_039b_4598_a490_2e507532a3d1: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  node_d0e272c1_d590_43d3_976c_8d99aa4eaca2: {
    gap: 12,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.05},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.05)',
    paddingTop: 16,
    paddingLeft: 16,
    borderRadius: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  node_3dd91219_a10d_44b5_b18a_ee1d6216df61: {
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_958453d1_6760_4a1e_b489_bc7fb8bbd849: {
    color: colors.primaryText,
    fontSize: 20,
    fontWeight: '700',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_72923042_c795_491f_ad69_f9052418870a: {
    color: '#2541B2',
    fontSize: 15,
    fontWeight: '600',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_5ac9d05e_18ed_4a1a_8167_1d1f8ca02c2d: {
    gap: 12,
    paddingTop: 12,
    paddingLeft: 12,
    borderRadius: 14,
    paddingRight: 12,
    paddingBottom: 12,
    backgroundColor: '#F3F5F9',
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_172ffb1f_f0cd_491c_9c1a_9c2e5d1f336f: {
    width: 48,
    height: 48,
    alignItems: 'center',
    borderRadius: 24,
    justifyContent: 'center',
    backgroundColor: '#0B1E52',
  },
  node_e244f6bc_cee1_46f5_a0d1_714b4fe7c2c0: {
    color: '#FFFFFF',
  },
  node_bc19dfc9_0926_41d0_aced_d167320da912: {
    gap: 2,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_834929a7_22fe_414e_aead_a4a5d534eec3: {
    color: colors.primaryText,
    fontSize: 17,
    fontWeight: '700',
  },
  node_056b0130_6147_4816_b521_0f7047199b41: {
    color: '#6B7280',
    fontSize: 15,
    fontWeight: '400',
  },
  node_d30c075a_cd61_4e79_87cb_54fa3cc5fa3d: {
    gap: 16,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":6,"shadowOpacity":0.05},
    boxShadow: '0px 2px 6px rgba(0,0,0,0.05)',
    paddingTop: 16,
    paddingLeft: 16,
    borderRadius: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  node_8a7eda24_3c99_4b78_87c5_353c43822fcf: {
    color: colors.primaryText,
    fontSize: 20,
    fontWeight: '700',
  },
  node_dbed5305_c674_4e4d_848d_4c5644e1f104: {
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_e8fa959a_4398_4fa6_8b2f_1a205f6cd221: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_aa25f87d_d637_441c_a6bb_41195cf5a543: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#DCE6FB',
  },
  node_6740a869_62dd_4c39_8604_2d8e6a39b3de: {
    color: '#2541B2',
  },
  node_404ffd57_1949_4425_a0ff_e7d1b9277fea: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  node_f21d6a22_1d4e_45fe_b447_e1c1c535f73e: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_72f8f403_3187_43a3_afe2_22b7ecb04fca: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#DCE6FB',
  },
  node_fb8e5c55_4fe8_48e3_bc44_6e49085cf4e7: {
    color: '#2541B2',
  },
  node_98c503c1_c7f4_4fe1_a061_515ca60bc9b2: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  node_44448f44_2105_4087_89a0_22d6ca9d7795: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_70ab1a5d_b9f0_4720_b76e_bbd125f9aa00: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#DCE6FB',
  },
  node_b51b920d_ce7c_4616_9d7d_bdeb04d6387f: {
    color: '#2541B2',
  },
  node_b0cdadaf_19ef_4101_900a_2842b57d6ec8: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  node_6a16ed29_6488_4b33_9ca9_6a8415452570: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_2082f3da_e156_4715_bb63_4ebbf948c918: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#DCE6FB',
  },
  node_fb180ac7_7741_4818_9e92_6379b299a4b4: {
    color: '#2541B2',
  },
  node_5cafce6d_7964_4050_940e_5f9558b825b1: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  node_2b491640_25c5_44a2_b866_f77d3f27a4c9: {
    gap: 8,
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_f6fef555_fcdc_4a8b_93a6_2a2a36e39661: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_03fa7890_4476_4b88_bcee_b55d68af18ee: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#DCE6FB',
  },
  node_21416d9c_bb21_45f0_bc74_a73c1d12b10a: {
    color: '#2541B2',
  },
  node_7d5e511c_bf13_401a_8c14_717131466c2f: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  node_d78e342f_5bf4_421f_a9f6_aa0e606ed615: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_4ebc3949_9229_47b0_9d96_46b07c55b055: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#DCE6FB',
  },
  node_bd8423de_8531_4906_a91a_10e7ecfb9852: {
    color: '#2541B2',
  },
  node_37c9f520_b40b_4c31_83c7_ec62c3ec4147: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  node_7ceefec9_b6d0_4e47_8008_6d5fedfcfd5a: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_46c2d57b_6c22_4ce7_b221_464de0b740e6: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#DCE6FB',
  },
  node_85024a46_a0aa_4368_a3c2_aa71cfc1c9f0: {
    color: '#2541B2',
  },
  node_e0c2aeb0_8506_42c4_8eae_0aaedd50598a: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  node_2645401c_62c8_4d1c_a9cf_cb25453393c6: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_b5e060d6_6570_4c20_8f64_931459760e73: {
    width: 56,
    height: 56,
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#DCE6FB',
  },
  node_40b9c118_0c50_47e5_9360_22906ec1bb50: {
    color: '#2541B2',
  },
  node_5541029f_e02f_413e_9f16_13c3e1299754: {
    color: colors.primaryText,
    fontSize: 13,
    fontWeight: '500',
  },
  node_5334f6ae_2d49_4c79_aa28_0d6b996925f8: {
    gap: 12,
    paddingTop: 16,
    paddingLeft: 16,
    borderRadius: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#E3E9FB',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_518d5a98_2f99_4e23_a85b_0747ce456a7d: {
    width: 44,
    height: 44,
    alignItems: 'center',
    borderRadius: 22,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  node_e47556fe_fc83_4980_9fad_a39ae58ce9ff: {
    color: '#2541B2',
  },
  node_c3ec7a99_4ca9_4a7d_9703_760f2f8a80cb: {
    gap: 4,
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
  node_aead18c6_64a5_41a1_81c3_b243cbb31307: {
    color: colors.primaryText,
    fontSize: 16,
    fontWeight: '700',
  },
  node_e34d8f2f_894b_4763_b6e6_66daaed711cb: {
    color: '#6B7280',
    fontSize: 14,
    fontWeight: '400',
  },
  node_209371b6_5aa4_4453_aa57_bb8c387e3c4f: {
    color: '#6B7280',
  },
  });
}

export default function PaymentsGuarded(props: any) {
  return <Can permissions={[]} redirectTo={"Login"}><Payments {...props} /></Can>;
}
