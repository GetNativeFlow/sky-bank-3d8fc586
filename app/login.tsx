import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, TextInput, ActivityIndicator, Alert } from 'react-native';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { useAuthActions } from '../lib/auth/useAuth';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { appRuntime as app } from '../lib/app';

export default function Login() {
  const authActions = useAuthActions();
  const router = useRouter();
  const routeParams = useLocalSearchParams();
  const [state_2b49034b_4b85_4cd5_85eb_6e73de00d9d4, setState_2b49034b_4b85_4cd5_85eb_6e73de00d9d4] = useState({ text: "", isFocused: false, errorMessage: "", isValid: true });
  const [state_6fb1352c_4505_465a_b2bd_4ecfd94a50a1, setState_6fb1352c_4505_465a_b2bd_4ecfd94a50a1] = useState({ text: "", isFocused: false, errorMessage: "", isValid: true });
  const [state_cdefa296_7a29_45c4_a32d_a4e00e1c142d, setState_cdefa296_7a29_45c4_a32d_a4e00e1c142d] = useState({ isChecked: false });

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <View style={styles.node_661e98f1_3a50_4afe_bb3c_9750424aa13a}>
              <View style={styles.node_c7df108d_d91b_4202_a1cb_7738440ac82b}>
                        <View style={{ width: 32, height: 32, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={32} height={32} fill="none"><G stroke="#2447B5" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></Path><Path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></Path></G></Svg></View>
                        <Text style={styles.node_4e2ed523_d7e6_4651_8dbb_6eb8fce81b67}>SkyBank</Text>
              </View>
              <Text style={styles.node_de0f8c28_4c84_4be4_93e9_24252abd55f0}>Welcome back</Text>
              <Text style={styles.node_1f44cd38_30a8_438e_9f28_de0b19241565}>Sign in to your account</Text>
              <View style={styles.node_cdfdadfb_4782_4eec_96bf_fce9c2cebfe7}>
                        <View style={styles.node_3cabfc49_f277_4273_b37a_c09674c93cdd}>
                                    <View style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={20} height={20} fill="none"><G stroke="#6B7280" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></Path></G></Svg></View>
                                    <TextInput style={[styles.node_2b49034b_4b85_4cd5_85eb_6e73de00d9d4, { borderWidth: 1, borderColor: 'rgba(209, 213, 219, 0.00)', borderRadius: 6, padding: 10, fontSize: 16, backgroundColor: '#fff' }]} placeholder="Mobile number or username" value={typeof state_2b49034b_4b85_4cd5_85eb_6e73de00d9d4 !== 'undefined' ? (state_2b49034b_4b85_4cd5_85eb_6e73de00d9d4.text ?? '') : ''} onChangeText={(v) => { if (typeof setState_2b49034b_4b85_4cd5_85eb_6e73de00d9d4 === 'function') setState_2b49034b_4b85_4cd5_85eb_6e73de00d9d4(prev => ({...prev, text: v})); }} />
                        </View>
              </View>
              <View style={styles.node_d0b320c2_42cb_4a85_b384_ebe349c5159e}>
                        <View style={styles.node_0683ecaa_f45b_4379_925e_05305f60a886}>
                                    <View style={styles.node_af683456_d7f9_4eaf_9847_cc01b006cd60}>
                                                  <View style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={20} height={20} fill="none"><G stroke="#6B7280" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Rect width="18" height="11" x="3" y="11" rx="2" ry="2"></Rect><Path d="M7 11V7a5 5 0 0 1 10 0v4"></Path></G></Svg></View>
                                                  <TextInput style={[styles.node_6fb1352c_4505_465a_b2bd_4ecfd94a50a1, { borderWidth: 1, borderColor: 'rgba(209, 213, 219, 0.00)', borderRadius: 6, padding: 10, fontSize: 16, backgroundColor: '#fff' }]} placeholder="Password" secureTextEntry value={typeof state_6fb1352c_4505_465a_b2bd_4ecfd94a50a1 !== 'undefined' ? (state_6fb1352c_4505_465a_b2bd_4ecfd94a50a1.text ?? '') : ''} onChangeText={(v) => { if (typeof setState_6fb1352c_4505_465a_b2bd_4ecfd94a50a1 === 'function') setState_6fb1352c_4505_465a_b2bd_4ecfd94a50a1(prev => ({...prev, text: v})); }} />
                                                  <View style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={20} height={20} fill="none"><G stroke="#6B7280" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></Path><Circle cx="12" cy="12" r="3"></Circle></G></Svg></View>
                                    </View>
                        </View>
              </View>
              <View style={styles.node_00165f70_0953_4eba_aa25_27152fc09fb0}>
                        <View style={styles.node_70ed48f4_d48f_4801_9344_e61f86960306}>
                                    <TouchableOpacity onPress={() => { if (typeof setState_cdefa296_7a29_45c4_a32d_a4e00e1c142d === 'function') setState_cdefa296_7a29_45c4_a32d_a4e00e1c142d(prev => ({...prev, isChecked: !prev.isChecked})); }} style={[styles.node_cdefa296_7a29_45c4_a32d_a4e00e1c142d, { flexDirection: 'row', alignItems: 'center', gap: 8 }]}><View style={{ width: 20, height: 20, borderWidth: 2, borderColor: (typeof state_cdefa296_7a29_45c4_a32d_a4e00e1c142d !== 'undefined' && state_cdefa296_7a29_45c4_a32d_a4e00e1c142d.isChecked) ? '#ffffff' : '#666', borderRadius: 3, backgroundColor: (typeof state_cdefa296_7a29_45c4_a32d_a4e00e1c142d !== 'undefined' && state_cdefa296_7a29_45c4_a32d_a4e00e1c142d.isChecked) ? '#ffffff' : 'transparent', justifyContent: 'center', alignItems: 'center' }}>{(typeof state_cdefa296_7a29_45c4_a32d_a4e00e1c142d !== 'undefined' && state_cdefa296_7a29_45c4_a32d_a4e00e1c142d.isChecked) && <Text style={{ color: '#fff', fontSize: 11, fontWeight: 'bold' }}>✓</Text>}</View><Text>Remember Me</Text></TouchableOpacity>
                        </View>
                        <Text style={[styles.node_bc225577_d6ff_4e85_b014_9a6c42b5e1ec, { color: '#0077E6', textDecorationLine: 'underline' }]}>Forgot password?</Text>
              </View>
              <TouchableOpacity style={[styles.node_d89fbfd6_3f5d_4e4d_9e39_35295024385e, { backgroundColor: '#152B61', borderRadius: 30, paddingVertical: 12, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={async () => {
                  try {
                    try {
                    await authActions.signIn({ email: state_2b49034b_4b85_4cd5_85eb_6e73de00d9d4.text, password: state_6fb1352c_4505_465a_b2bd_4ecfd94a50a1.text });
                    app.navigate("Home");
                  } catch (e) {
                    console.error('[Auth signIn]', e);
                    Alert.alert("Sign in failed", (e && e.message) ? String(e.message) : 'Please try again.');
                  }
                  } catch(e) {
                    console.error('[Action Error]', e);
                  }
                }}>
                <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#fff', fontSize: 16, lineHeight: 24, fontWeight: '600', textAlign: 'center' }}>Sign In</Text>
              </TouchableOpacity>
              <View style={styles.node_6c54dce9_5c1b_46bd_bb96_29a078d1d579}>
                        <View style={[styles.node_7f3545f7_3759_4926_a42b_7e130d85aa56, { height: 0.01, backgroundColor: '#E5E7EB', alignSelf: 'stretch' }]} />
                        <Text style={styles.node_f47e7341_4e31_4cbb_a4c6_82cc1bba35cf}>Or continue with</Text>
                        <View style={[styles.node_a348f3d4_381e_4fb4_b8c0_6e0e3b1a7919, { height: 1, backgroundColor: '#E5E7EB', alignSelf: 'stretch' }]} />
              </View>
              <View style={styles.node_d680f5e2_76bc_466f_a265_85de3b3fcefd}>
                        <View style={styles.node_dfcbb083_1455_4f46_be65_56cf14ab34e7}>
                                    <View style={styles.node_04477521_d666_494b_b67c_4f983e54224d}>
                                                  <View style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={24} height={24} fill="none"><G stroke="#9CA3AF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Circle cx="12" cy="12" r="10"></Circle><Circle cx="12" cy="12" r="4"></Circle><Line x1="21.17" x2="12" y1="8" y2="8"></Line><Line x1="3.95" x2="8.54" y1="6.06" y2="14"></Line><Line x1="10.88" x2="15.46" y1="21.94" y2="14"></Line></G></Svg></View>
                                    </View>
                                    <Text style={styles.node_3aebd030_f1b2_4a74_859d_2b4fd57bb4f3}>Google</Text>
                        </View>
                        <View style={styles.node_c8cf3fd9_9c5d_40d9_8083_4992a451b218}>
                                    <View style={styles.node_b357a4ad_320e_43bd_a9ce_02da47e7c294}>
                                                  <View style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={24} height={24} fill="none"><G stroke="#9CA3AF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></Path><Path d="M10 2c1 .5 2 2 2 5"></Path></G></Svg></View>
                                    </View>
                                    <Text style={styles.node_1df8922c_5752_4491_a68e_4d983e86bd32}>Apple</Text>
                        </View>
                        <View style={styles.node_3fd3f1a3_eb11_47d4_bcfd_6cee19cb9d7e}>
                                    <View style={styles.node_051ffd5d_2b54_4474_9495_7159892d262c}>
                                                  <View style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={24} height={24} fill="none"><G stroke="#111827" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></Path><Path d="M14 13.12c0 2.38 0 6.38-1 8.88"></Path><Path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></Path><Path d="M2 12a10 10 0 0 1 18-6"></Path><Path d="M2 16h.01"></Path><Path d="M21.8 16c.2-2 .131-5.354 0-6"></Path><Path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></Path><Path d="M8.65 22c.21-.66.45-1.32.57-2"></Path><Path d="M9 6.8a6 6 0 0 1 9 5.2v2"></Path></G></Svg></View>
                                    </View>
                                    <Text style={styles.node_b8c35985_327f_4354_bfad_04f0cb63baf1}>Biometric</Text>
                        </View>
              </View>
              <View style={styles.node_74ca7292_7eef_455b_883c_7de2255a5d33}>
                        <Text style={styles.node_1e749a4e_1e0f_45fc_b1df_08c1cb0198c0}>Don't have an account? </Text>
                        <Text style={[styles.node_706183d7_5807_4eac_9dd0_a34101ca13b8, { color: '#0077E6', textDecorationLine: 'underline' }]}>Open an account</Text>
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
    backgroundColor: '#F5F7FB',
  },
  container: {
    flex: 1,
    backgroundColor: '#F3F5F9',
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
  node_661e98f1_3a50_4afe_bb3c_9750424aa13a: {
    gap: 0,
    paddingTop: 45,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24,
    backgroundColor: '#F5F7FB',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_c7df108d_d91b_4202_a1cb_7738440ac82b: {
    gap: 8,
    marginBottom: 32,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_20665179_677c_47c6_be76_5a976c3858a2: {
    color: '#2447B5',
  },
  node_4e2ed523_d7e6_4651_8dbb_6eb8fce81b67: {
    color: '#152B61',
    fontSize: 28,
    fontWeight: '800',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_de0f8c28_4c84_4be4_93e9_24252abd55f0: {
    color: '#152B61',
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 4,
  },
  node_1f44cd38_30a8_438e_9f28_de0b19241565: {
    color: '#6B7280',
    fontSize: 16,
    marginBottom: 24,
  },
  node_cdfdadfb_4782_4eec_96bf_fce9c2cebfe7: {
    paddingTop: 16,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    paddingLeft: 16,
    borderRadius: 16,
    marginBottom: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_3cabfc49_f277_4273_b37a_c09674c93cdd: {
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_bed1bf66_ac38_40d0_9ecb_cc7cd98646ab: {
    color: '#6B7280',
  },
  node_2b49034b_4b85_4cd5_85eb_6e73de00d9d4: {
    color: '#111827',
    fontSize: 16,
    borderColor: 'rgba(209, 213, 219, 0.00)',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  node_d0b320c2_42cb_4a85_b384_ebe349c5159e: {
    paddingTop: 16,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    paddingLeft: 16,
    borderRadius: 16,
    marginBottom: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_0683ecaa_f45b_4379_925e_05305f60a886: {
    gap: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_af683456_d7f9_4eaf_9847_cc01b006cd60: {
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_a518d52a_a78c_4bfe_8a8e_8e15a3a15fd3: {
    color: '#6B7280',
  },
  node_6fb1352c_4505_465a_b2bd_4ecfd94a50a1: {
    color: '#111827',
    fontSize: 16,
    borderColor: 'rgba(209, 213, 219, 0.00)',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  node_7a012e50_91f7_4be9_ab53_f87619de7d29: {
    color: '#6B7280',
  },
  node_00165f70_0953_4eba_aa25_27152fc09fb0: {
    marginBottom: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  node_70ed48f4_d48f_4801_9344_e61f86960306: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_cdefa296_7a29_45c4_a32d_a4e00e1c142d: {
    color: '#4B39EF',
    backgroundColor: '#FFFFFF',
  },
  node_bc225577_d6ff_4e85_b014_9a6c42b5e1ec: {
    color: '#2447B5',
    fontSize: 15,
    fontWeight: '700',
  },
  node_d89fbfd6_3f5d_4e4d_9e39_35295024385e: {
    height: 56,
    borderRadius: 30,
    marginBottom: 24,
    backgroundColor: '#152B61',
  },
  node_6c54dce9_5c1b_46bd_bb96_29a078d1d579: {
    gap: 12,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_7f3545f7_3759_4926_a42b_7e130d85aa56: {
    backgroundColor: '#E5E7EB',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  node_f47e7341_4e31_4cbb_a4c6_82cc1bba35cf: {
    color: '#6B7280',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_a348f3d4_381e_4fb4_b8c0_6e0e3b1a7919: {
    backgroundColor: '#E5E7EB',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  node_d680f5e2_76bc_466f_a265_85de3b3fcefd: {
    gap: 20,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_dfcbb083_1455_4f46_be65_56cf14ab34e7: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_04477521_d666_494b_b67c_4f983e54224d: {
    width: 72,
    height: 64,
    alignItems: 'center',
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  node_b7476210_b7db_4d54_9bc2_8cba07a4c546: {
    color: '#9CA3AF',
  },
  node_3aebd030_f1b2_4a74_859d_2b4fd57bb4f3: {
    color: '#374151',
    fontSize: 14,
  },
  node_c8cf3fd9_9c5d_40d9_8083_4992a451b218: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_b357a4ad_320e_43bd_a9ce_02da47e7c294: {
    width: 72,
    height: 64,
    alignItems: 'center',
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  node_10775b17_2970_4963_890c_7d5bb7b3a9b0: {
    color: '#9CA3AF',
  },
  node_1df8922c_5752_4491_a68e_4d983e86bd32: {
    color: '#374151',
    fontSize: 14,
  },
  node_3fd3f1a3_eb11_47d4_bcfd_6cee19cb9d7e: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  node_051ffd5d_2b54_4474_9495_7159892d262c: {
    width: 72,
    height: 64,
    alignItems: 'center',
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  node_45aff530_9a77_4744_b825_f6b9d43b3da3: {
    color: '#111827',
  },
  node_b8c35985_327f_4354_bfad_04f0cb63baf1: {
    color: '#374151',
    fontSize: 14,
  },
  node_74ca7292_7eef_455b_883c_7de2255a5d33: {
    gap: 4,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_1e749a4e_1e0f_45fc_b1df_08c1cb0198c0: {
    color: '#6B7280',
    fontSize: 15,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  node_706183d7_5807_4eac_9dd0_a34101ca13b8: {
    color: '#2447B5',
    fontSize: 15,
    fontWeight: '700',
  },
});

