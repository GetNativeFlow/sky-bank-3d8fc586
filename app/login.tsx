import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, TextInput, ActivityIndicator, Alert } from 'react-native';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { useAuthActions } from '../lib/auth/useAuth';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { appRuntime as app } from '../lib/app';
import { bindUi } from '../lib/ui';

export default function Login() {
  const authActions = useAuthActions();
  const router = useRouter();
  const routeParams = useLocalSearchParams();
  const [state_2b49034b_4b85_4cd5_85eb_6e73de00d9d4, setState_2b49034b_4b85_4cd5_85eb_6e73de00d9d4] = useState({ text: "", isFocused: false, errorMessage: "", isValid: true });
  const [state_6fb1352c_4505_465a_b2bd_4ecfd94a50a1, setState_6fb1352c_4505_465a_b2bd_4ecfd94a50a1] = useState({ text: "", isFocused: false, errorMessage: "", isValid: true });
  const [state_cdefa296_7a29_45c4_a32d_a4e00e1c142d, setState_cdefa296_7a29_45c4_a32d_a4e00e1c142d] = useState({ isChecked: false });
  const [state_d89fbfd6_3f5d_4e4d_9e39_35295024385e, setState_d89fbfd6_3f5d_4e4d_9e39_35295024385e] = useState({ isLoading: false, isDisabled: false, isPressed: false });
  const [_uiOv, _setUiOv] = useState({});
  const ui = bindUi(_uiOv, _setUiOv, { "Column 1": "node_661e98f1_3a50_4afe_bb3c_9750424aa13a", "Row 1": "node_c7df108d_d91b_4202_a1cb_7738440ac82b", "Icon 1": "node_20665179_677c_47c6_be76_5a976c3858a2", "Text 1": "node_4e2ed523_d7e6_4651_8dbb_6eb8fce81b67", "Heading": "node_de0f8c28_4c84_4be4_93e9_24252abd55f0", "Text 2": "node_1f44cd38_30a8_438e_9f28_de0b19241565", "Box 2": "node_cdfdadfb_4782_4eec_96bf_fce9c2cebfe7", "Row 2": "node_3cabfc49_f277_4273_b37a_c09674c93cdd", "Icon 2": "node_bed1bf66_ac38_40d0_9ecb_cc7cd98646ab", "Input 1": "node_2b49034b_4b85_4cd5_85eb_6e73de00d9d4", "Box 3": "node_d0b320c2_42cb_4a85_b384_ebe349c5159e", "Row 3": "node_0683ecaa_f45b_4379_925e_05305f60a886", "Row 4": "node_af683456_d7f9_4eaf_9847_cc01b006cd60", "Icon 3": "node_a518d52a_a78c_4bfe_8a8e_8e15a3a15fd3", "Input 2": "node_6fb1352c_4505_465a_b2bd_4ecfd94a50a1", "Icon 4": "node_7a012e50_91f7_4be9_ab53_f87619de7d29", "Row 5": "node_00165f70_0953_4eba_aa25_27152fc09fb0", "Row 6": "node_70ed48f4_d48f_4801_9344_e61f86960306", "Checkbox": "node_cdefa296_7a29_45c4_a32d_a4e00e1c142d", "Link 1": "node_bc225577_d6ff_4e85_b014_9a6c42b5e1ec", "Button": "node_d89fbfd6_3f5d_4e4d_9e39_35295024385e", "Row 7": "node_6c54dce9_5c1b_46bd_bb96_29a078d1d579", "Divider 1": "node_7f3545f7_3759_4926_a42b_7e130d85aa56", "Text 3": "node_f47e7341_4e31_4cbb_a4c6_82cc1bba35cf", "Divider 2": "node_a348f3d4_381e_4fb4_b8c0_6e0e3b1a7919", "Row 8": "node_d680f5e2_76bc_466f_a265_85de3b3fcefd", "Column 2": "node_dfcbb083_1455_4f46_be65_56cf14ab34e7", "Center 1": "node_04477521_d666_494b_b67c_4f983e54224d", "Icon 5": "node_b7476210_b7db_4d54_9bc2_8cba07a4c546", "Text 4": "node_3aebd030_f1b2_4a74_859d_2b4fd57bb4f3", "Column 3": "node_c8cf3fd9_9c5d_40d9_8083_4992a451b218", "Center 2": "node_b357a4ad_320e_43bd_a9ce_02da47e7c294", "Icon 6": "node_10775b17_2970_4963_890c_7d5bb7b3a9b0", "Text 5": "node_1df8922c_5752_4491_a68e_4d983e86bd32", "Column 4": "node_3fd3f1a3_eb11_47d4_bcfd_6cee19cb9d7e", "Center 3": "node_051ffd5d_2b54_4474_9495_7159892d262c", "Icon 7": "node_45aff530_9a77_4744_b825_f6b9d43b3da3", "Text 6": "node_b8c35985_327f_4354_bfad_04f0cb63baf1", "Row 9": "node_74ca7292_7eef_455b_883c_7de2255a5d33", "Text 7": "node_1e749a4e_1e0f_45fc_b1df_08c1cb0198c0", "Link 2": "node_706183d7_5807_4eac_9dd0_a34101ca13b8" }, { node_2b49034b_4b85_4cd5_85eb_6e73de00d9d4: setState_2b49034b_4b85_4cd5_85eb_6e73de00d9d4, node_6fb1352c_4505_465a_b2bd_4ecfd94a50a1: setState_6fb1352c_4505_465a_b2bd_4ecfd94a50a1, node_cdefa296_7a29_45c4_a32d_a4e00e1c142d: setState_cdefa296_7a29_45c4_a32d_a4e00e1c142d, node_d89fbfd6_3f5d_4e4d_9e39_35295024385e: setState_d89fbfd6_3f5d_4e4d_9e39_35295024385e }, { node_2b49034b_4b85_4cd5_85eb_6e73de00d9d4: ["text"], node_6fb1352c_4505_465a_b2bd_4ecfd94a50a1: ["text"], node_cdefa296_7a29_45c4_a32d_a4e00e1c142d: ["isChecked"], node_d89fbfd6_3f5d_4e4d_9e39_35295024385e: ["isLoading"] }, { node_2b49034b_4b85_4cd5_85eb_6e73de00d9d4: state_2b49034b_4b85_4cd5_85eb_6e73de00d9d4, node_6fb1352c_4505_465a_b2bd_4ecfd94a50a1: state_6fb1352c_4505_465a_b2bd_4ecfd94a50a1, node_cdefa296_7a29_45c4_a32d_a4e00e1c142d: state_cdefa296_7a29_45c4_a32d_a4e00e1c142d, node_d89fbfd6_3f5d_4e4d_9e39_35295024385e: state_d89fbfd6_3f5d_4e4d_9e39_35295024385e });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      {(!(_uiOv.node_661e98f1_3a50_4afe_bb3c_9750424aa13a && _uiOv.node_661e98f1_3a50_4afe_bb3c_9750424aa13a.hidden)) && (
      <View testID="661e98f1-3a50-4afe-bb3c-9750424aa13a" style={[styles.node_661e98f1_3a50_4afe_bb3c_9750424aa13a, _uiOv.node_661e98f1_3a50_4afe_bb3c_9750424aa13a && _uiOv.node_661e98f1_3a50_4afe_bb3c_9750424aa13a.style]}>
              {(!(_uiOv.node_c7df108d_d91b_4202_a1cb_7738440ac82b && _uiOv.node_c7df108d_d91b_4202_a1cb_7738440ac82b.hidden)) && (
              <View testID="c7df108d-d91b-4202-a1cb-7738440ac82b" style={[styles.node_c7df108d_d91b_4202_a1cb_7738440ac82b, _uiOv.node_c7df108d_d91b_4202_a1cb_7738440ac82b && _uiOv.node_c7df108d_d91b_4202_a1cb_7738440ac82b.style]}>
                        {(!(_uiOv.node_20665179_677c_47c6_be76_5a976c3858a2 && _uiOv.node_20665179_677c_47c6_be76_5a976c3858a2.hidden)) && (
                        <View testID="20665179-677c-47c6-be76-5a976c3858a2" accessible={true} accessibilityRole="image" style={[{ width: 32, height: 32, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }, _uiOv.node_20665179_677c_47c6_be76_5a976c3858a2 && _uiOv.node_20665179_677c_47c6_be76_5a976c3858a2.style]}><Svg viewBox="0 0 24 24" width={32} height={32} fill="none"><G stroke={((_uiOv.node_20665179_677c_47c6_be76_5a976c3858a2 && _uiOv.node_20665179_677c_47c6_be76_5a976c3858a2.style && _uiOv.node_20665179_677c_47c6_be76_5a976c3858a2.style.color) || '#2447B5')} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"></Path><Path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></Path></G></Svg></View>
                        )}
                        {(!(_uiOv.node_4e2ed523_d7e6_4651_8dbb_6eb8fce81b67 && _uiOv.node_4e2ed523_d7e6_4651_8dbb_6eb8fce81b67.hidden)) && (
                        <Text testID="4e2ed523-d7e6-4651-8dbb-6eb8fce81b67" accessible={true} accessibilityLabel="SkyBank" style={[styles.node_4e2ed523_d7e6_4651_8dbb_6eb8fce81b67, _uiOv.node_4e2ed523_d7e6_4651_8dbb_6eb8fce81b67 && _uiOv.node_4e2ed523_d7e6_4651_8dbb_6eb8fce81b67.style]} onPress={() => { try { ui.set('Input 1', { text: 'user@bank.in' });
                        ui.set('Input 2', { text: '123456' }); } catch(e) { console.error('[Action Error]', e); } }}>SkyBank</Text>
                        )}
              </View>
              )}
              {(!(_uiOv.node_de0f8c28_4c84_4be4_93e9_24252abd55f0 && _uiOv.node_de0f8c28_4c84_4be4_93e9_24252abd55f0.hidden)) && (
              <Text testID="de0f8c28-4c84-4be4-93e9-24252abd55f0" accessibilityRole="header" style={[styles.node_de0f8c28_4c84_4be4_93e9_24252abd55f0, _uiOv.node_de0f8c28_4c84_4be4_93e9_24252abd55f0 && _uiOv.node_de0f8c28_4c84_4be4_93e9_24252abd55f0.style]}>Welcome back</Text>
              )}
              {(!(_uiOv.node_1f44cd38_30a8_438e_9f28_de0b19241565 && _uiOv.node_1f44cd38_30a8_438e_9f28_de0b19241565.hidden)) && (
              <Text testID="1f44cd38-30a8-438e-9f28-de0b19241565" style={[styles.node_1f44cd38_30a8_438e_9f28_de0b19241565, _uiOv.node_1f44cd38_30a8_438e_9f28_de0b19241565 && _uiOv.node_1f44cd38_30a8_438e_9f28_de0b19241565.style]}>Sign in to your account</Text>
              )}
              {(!(_uiOv.node_cdfdadfb_4782_4eec_96bf_fce9c2cebfe7 && _uiOv.node_cdfdadfb_4782_4eec_96bf_fce9c2cebfe7.hidden)) && (
              <View testID="cdfdadfb-4782-4eec-96bf-fce9c2cebfe7" style={[styles.node_cdfdadfb_4782_4eec_96bf_fce9c2cebfe7, _uiOv.node_cdfdadfb_4782_4eec_96bf_fce9c2cebfe7 && _uiOv.node_cdfdadfb_4782_4eec_96bf_fce9c2cebfe7.style]}>
                        {(!(_uiOv.node_3cabfc49_f277_4273_b37a_c09674c93cdd && _uiOv.node_3cabfc49_f277_4273_b37a_c09674c93cdd.hidden)) && (
                        <View testID="3cabfc49-f277-4273-b37a-c09674c93cdd" style={[styles.node_3cabfc49_f277_4273_b37a_c09674c93cdd, _uiOv.node_3cabfc49_f277_4273_b37a_c09674c93cdd && _uiOv.node_3cabfc49_f277_4273_b37a_c09674c93cdd.style]}>
                                    {(!(_uiOv.node_bed1bf66_ac38_40d0_9ecb_cc7cd98646ab && _uiOv.node_bed1bf66_ac38_40d0_9ecb_cc7cd98646ab.hidden)) && (
                                    <View testID="bed1bf66-ac38-40d0-9ecb-cc7cd98646ab" accessible={true} accessibilityRole="image" style={[{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }, _uiOv.node_bed1bf66_ac38_40d0_9ecb_cc7cd98646ab && _uiOv.node_bed1bf66_ac38_40d0_9ecb_cc7cd98646ab.style]}><Svg viewBox="0 0 24 24" width={20} height={20} fill="none"><G stroke={((_uiOv.node_bed1bf66_ac38_40d0_9ecb_cc7cd98646ab && _uiOv.node_bed1bf66_ac38_40d0_9ecb_cc7cd98646ab.style && _uiOv.node_bed1bf66_ac38_40d0_9ecb_cc7cd98646ab.style.color) || '#6B7280')} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></Path></G></Svg></View>
                                    )}
                                    {(!(_uiOv.node_2b49034b_4b85_4cd5_85eb_6e73de00d9d4 && _uiOv.node_2b49034b_4b85_4cd5_85eb_6e73de00d9d4.hidden)) && (
                                    <TextInput testID="2b49034b-4b85-4cd5-85eb-6e73de00d9d4" style={[[styles.node_2b49034b_4b85_4cd5_85eb_6e73de00d9d4, { borderWidth: 1, borderColor: 'rgba(209, 213, 219, 0.00)', borderRadius: 6, padding: 10, fontSize: 16, backgroundColor: '#fff' }], _uiOv.node_2b49034b_4b85_4cd5_85eb_6e73de00d9d4 && _uiOv.node_2b49034b_4b85_4cd5_85eb_6e73de00d9d4.style]} placeholder="Mobile number or username" value={typeof state_2b49034b_4b85_4cd5_85eb_6e73de00d9d4 !== 'undefined' ? (state_2b49034b_4b85_4cd5_85eb_6e73de00d9d4.text ?? '') : ''} onChangeText={(v) => { if (typeof setState_2b49034b_4b85_4cd5_85eb_6e73de00d9d4 === 'function') setState_2b49034b_4b85_4cd5_85eb_6e73de00d9d4(prev => ({...prev, text: v})); }} />
                                    )}
                        </View>
                        )}
              </View>
              )}
              {(!(_uiOv.node_d0b320c2_42cb_4a85_b384_ebe349c5159e && _uiOv.node_d0b320c2_42cb_4a85_b384_ebe349c5159e.hidden)) && (
              <View testID="d0b320c2-42cb-4a85-b384-ebe349c5159e" style={[styles.node_d0b320c2_42cb_4a85_b384_ebe349c5159e, _uiOv.node_d0b320c2_42cb_4a85_b384_ebe349c5159e && _uiOv.node_d0b320c2_42cb_4a85_b384_ebe349c5159e.style]}>
                        {(!(_uiOv.node_0683ecaa_f45b_4379_925e_05305f60a886 && _uiOv.node_0683ecaa_f45b_4379_925e_05305f60a886.hidden)) && (
                        <View testID="0683ecaa-f45b-4379-925e-05305f60a886" style={[styles.node_0683ecaa_f45b_4379_925e_05305f60a886, _uiOv.node_0683ecaa_f45b_4379_925e_05305f60a886 && _uiOv.node_0683ecaa_f45b_4379_925e_05305f60a886.style]}>
                                    {(!(_uiOv.node_af683456_d7f9_4eaf_9847_cc01b006cd60 && _uiOv.node_af683456_d7f9_4eaf_9847_cc01b006cd60.hidden)) && (
                                    <View testID="af683456-d7f9-4eaf-9847-cc01b006cd60" style={[styles.node_af683456_d7f9_4eaf_9847_cc01b006cd60, _uiOv.node_af683456_d7f9_4eaf_9847_cc01b006cd60 && _uiOv.node_af683456_d7f9_4eaf_9847_cc01b006cd60.style]}>
                                                  {(!(_uiOv.node_a518d52a_a78c_4bfe_8a8e_8e15a3a15fd3 && _uiOv.node_a518d52a_a78c_4bfe_8a8e_8e15a3a15fd3.hidden)) && (
                                                  <View testID="a518d52a-a78c-4bfe-8a8e-8e15a3a15fd3" accessible={true} accessibilityRole="image" style={[{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }, _uiOv.node_a518d52a_a78c_4bfe_8a8e_8e15a3a15fd3 && _uiOv.node_a518d52a_a78c_4bfe_8a8e_8e15a3a15fd3.style]}><Svg viewBox="0 0 24 24" width={20} height={20} fill="none"><G stroke={((_uiOv.node_a518d52a_a78c_4bfe_8a8e_8e15a3a15fd3 && _uiOv.node_a518d52a_a78c_4bfe_8a8e_8e15a3a15fd3.style && _uiOv.node_a518d52a_a78c_4bfe_8a8e_8e15a3a15fd3.style.color) || '#6B7280')} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Rect width="18" height="11" x="3" y="11" rx="2" ry="2"></Rect><Path d="M7 11V7a5 5 0 0 1 10 0v4"></Path></G></Svg></View>
                                                  )}
                                                  {(!(_uiOv.node_6fb1352c_4505_465a_b2bd_4ecfd94a50a1 && _uiOv.node_6fb1352c_4505_465a_b2bd_4ecfd94a50a1.hidden)) && (
                                                  <TextInput testID="6fb1352c-4505-465a-b2bd-4ecfd94a50a1" style={[[styles.node_6fb1352c_4505_465a_b2bd_4ecfd94a50a1, { borderWidth: 1, borderColor: 'rgba(209, 213, 219, 0.00)', borderRadius: 6, padding: 10, fontSize: 16, backgroundColor: '#fff' }], _uiOv.node_6fb1352c_4505_465a_b2bd_4ecfd94a50a1 && _uiOv.node_6fb1352c_4505_465a_b2bd_4ecfd94a50a1.style]} placeholder="Password" secureTextEntry value={typeof state_6fb1352c_4505_465a_b2bd_4ecfd94a50a1 !== 'undefined' ? (state_6fb1352c_4505_465a_b2bd_4ecfd94a50a1.text ?? '') : ''} onChangeText={(v) => { if (typeof setState_6fb1352c_4505_465a_b2bd_4ecfd94a50a1 === 'function') setState_6fb1352c_4505_465a_b2bd_4ecfd94a50a1(prev => ({...prev, text: v})); }} />
                                                  )}
                                                  {(!(_uiOv.node_7a012e50_91f7_4be9_ab53_f87619de7d29 && _uiOv.node_7a012e50_91f7_4be9_ab53_f87619de7d29.hidden)) && (
                                                  <View testID="7a012e50-91f7-4be9-ab53-f87619de7d29" accessible={true} accessibilityRole="image" style={[{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }, _uiOv.node_7a012e50_91f7_4be9_ab53_f87619de7d29 && _uiOv.node_7a012e50_91f7_4be9_ab53_f87619de7d29.style]}><Svg viewBox="0 0 24 24" width={20} height={20} fill="none"><G stroke={((_uiOv.node_7a012e50_91f7_4be9_ab53_f87619de7d29 && _uiOv.node_7a012e50_91f7_4be9_ab53_f87619de7d29.style && _uiOv.node_7a012e50_91f7_4be9_ab53_f87619de7d29.style.color) || '#6B7280')} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></Path><Circle cx="12" cy="12" r="3"></Circle></G></Svg></View>
                                                  )}
                                    </View>
                                    )}
                        </View>
                        )}
              </View>
              )}
              {(!(_uiOv.node_00165f70_0953_4eba_aa25_27152fc09fb0 && _uiOv.node_00165f70_0953_4eba_aa25_27152fc09fb0.hidden)) && (
              <View testID="00165f70-0953-4eba-aa25-27152fc09fb0" style={[styles.node_00165f70_0953_4eba_aa25_27152fc09fb0, _uiOv.node_00165f70_0953_4eba_aa25_27152fc09fb0 && _uiOv.node_00165f70_0953_4eba_aa25_27152fc09fb0.style]}>
                        {(!(_uiOv.node_70ed48f4_d48f_4801_9344_e61f86960306 && _uiOv.node_70ed48f4_d48f_4801_9344_e61f86960306.hidden)) && (
                        <View testID="70ed48f4-d48f-4801-9344-e61f86960306" style={[styles.node_70ed48f4_d48f_4801_9344_e61f86960306, _uiOv.node_70ed48f4_d48f_4801_9344_e61f86960306 && _uiOv.node_70ed48f4_d48f_4801_9344_e61f86960306.style]}>
                                    {(!(_uiOv.node_cdefa296_7a29_45c4_a32d_a4e00e1c142d && _uiOv.node_cdefa296_7a29_45c4_a32d_a4e00e1c142d.hidden)) && (
                                    <TouchableOpacity testID="cdefa296-7a29-45c4-a32d-a4e00e1c142d" accessible={true} accessibilityRole="checkbox" accessibilityState={{"checked":false}} onPress={() => { if (typeof setState_cdefa296_7a29_45c4_a32d_a4e00e1c142d === 'function') setState_cdefa296_7a29_45c4_a32d_a4e00e1c142d(prev => ({...prev, isChecked: !prev.isChecked})); }} style={[[styles.node_cdefa296_7a29_45c4_a32d_a4e00e1c142d, { flexDirection: 'row', alignItems: 'center', gap: 8 }], _uiOv.node_cdefa296_7a29_45c4_a32d_a4e00e1c142d && _uiOv.node_cdefa296_7a29_45c4_a32d_a4e00e1c142d.style]}><View style={{ width: 20, height: 20, borderWidth: 2, borderColor: (typeof state_cdefa296_7a29_45c4_a32d_a4e00e1c142d !== 'undefined' && state_cdefa296_7a29_45c4_a32d_a4e00e1c142d.isChecked) ? '#ffffff' : '#666', borderRadius: 3, backgroundColor: (typeof state_cdefa296_7a29_45c4_a32d_a4e00e1c142d !== 'undefined' && state_cdefa296_7a29_45c4_a32d_a4e00e1c142d.isChecked) ? '#ffffff' : 'transparent', justifyContent: 'center', alignItems: 'center' }}>{(typeof state_cdefa296_7a29_45c4_a32d_a4e00e1c142d !== 'undefined' && state_cdefa296_7a29_45c4_a32d_a4e00e1c142d.isChecked) && <Text style={{ color: '#fff', fontSize: 11, fontWeight: 'bold' }}>✓</Text>}</View><Text>Remember Me</Text></TouchableOpacity>
                                    )}
                        </View>
                        )}
                        {(!(_uiOv.node_bc225577_d6ff_4e85_b014_9a6c42b5e1ec && _uiOv.node_bc225577_d6ff_4e85_b014_9a6c42b5e1ec.hidden)) && (
                        <Text testID="bc225577-d6ff-4e85-b014-9a6c42b5e1ec" accessible={true} accessibilityRole="link" accessibilityLabel="Forgot password?" style={[[styles.node_bc225577_d6ff_4e85_b014_9a6c42b5e1ec, { color: '#0077E6', textDecorationLine: 'underline' }], _uiOv.node_bc225577_d6ff_4e85_b014_9a6c42b5e1ec && _uiOv.node_bc225577_d6ff_4e85_b014_9a6c42b5e1ec.style]}>Forgot password?</Text>
                        )}
              </View>
              )}
              {(!(_uiOv.node_d89fbfd6_3f5d_4e4d_9e39_35295024385e && _uiOv.node_d89fbfd6_3f5d_4e4d_9e39_35295024385e.hidden)) && (
              <TouchableOpacity testID="d89fbfd6-3f5d-4e4d-9e39-35295024385e" accessible={true} accessibilityRole="button" accessibilityLabel="Sign In" style={[[styles.node_d89fbfd6_3f5d_4e4d_9e39_35295024385e, { backgroundColor: '#152B61', borderRadius: 30, paddingVertical: 12, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch', opacity: state_d89fbfd6_3f5d_4e4d_9e39_35295024385e.isLoading ? 0.7 : 1 }], _uiOv.node_d89fbfd6_3f5d_4e4d_9e39_35295024385e && _uiOv.node_d89fbfd6_3f5d_4e4d_9e39_35295024385e.style]} activeOpacity={0.7} disabled={state_d89fbfd6_3f5d_4e4d_9e39_35295024385e.isLoading} onPress={async () => {
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
                <View style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  {state_d89fbfd6_3f5d_4e4d_9e39_35295024385e.isLoading && <ActivityIndicator size="small" color={'#fff'} />}
                  <Text style={{ color: '#fff', fontSize: 16, lineHeight: 24, fontWeight: '600', textAlign: 'center' }}>Sign In</Text>
                </View>
              </TouchableOpacity>
              )}
              {(!(_uiOv.node_6c54dce9_5c1b_46bd_bb96_29a078d1d579 && _uiOv.node_6c54dce9_5c1b_46bd_bb96_29a078d1d579.hidden)) && (
              <View testID="6c54dce9-5c1b-46bd-bb96-29a078d1d579" style={[styles.node_6c54dce9_5c1b_46bd_bb96_29a078d1d579, _uiOv.node_6c54dce9_5c1b_46bd_bb96_29a078d1d579 && _uiOv.node_6c54dce9_5c1b_46bd_bb96_29a078d1d579.style]}>
                        {(!(_uiOv.node_7f3545f7_3759_4926_a42b_7e130d85aa56 && _uiOv.node_7f3545f7_3759_4926_a42b_7e130d85aa56.hidden)) && (
                        <View testID="7f3545f7-3759-4926-a42b-7e130d85aa56" style={[[styles.node_7f3545f7_3759_4926_a42b_7e130d85aa56, { height: 0.01, backgroundColor: '#E5E7EB', alignSelf: 'stretch' }], _uiOv.node_7f3545f7_3759_4926_a42b_7e130d85aa56 && _uiOv.node_7f3545f7_3759_4926_a42b_7e130d85aa56.style]} />
                        )}
                        {(!(_uiOv.node_f47e7341_4e31_4cbb_a4c6_82cc1bba35cf && _uiOv.node_f47e7341_4e31_4cbb_a4c6_82cc1bba35cf.hidden)) && (
                        <Text testID="f47e7341-4e31-4cbb-a4c6-82cc1bba35cf" style={[styles.node_f47e7341_4e31_4cbb_a4c6_82cc1bba35cf, _uiOv.node_f47e7341_4e31_4cbb_a4c6_82cc1bba35cf && _uiOv.node_f47e7341_4e31_4cbb_a4c6_82cc1bba35cf.style]}>Or continue with</Text>
                        )}
                        {(!(_uiOv.node_a348f3d4_381e_4fb4_b8c0_6e0e3b1a7919 && _uiOv.node_a348f3d4_381e_4fb4_b8c0_6e0e3b1a7919.hidden)) && (
                        <View testID="a348f3d4-381e-4fb4-b8c0-6e0e3b1a7919" style={[[styles.node_a348f3d4_381e_4fb4_b8c0_6e0e3b1a7919, { height: 1, backgroundColor: '#E5E7EB', alignSelf: 'stretch' }], _uiOv.node_a348f3d4_381e_4fb4_b8c0_6e0e3b1a7919 && _uiOv.node_a348f3d4_381e_4fb4_b8c0_6e0e3b1a7919.style]} />
                        )}
              </View>
              )}
              {(!(_uiOv.node_d680f5e2_76bc_466f_a265_85de3b3fcefd && _uiOv.node_d680f5e2_76bc_466f_a265_85de3b3fcefd.hidden)) && (
              <View testID="d680f5e2-76bc-466f-a265-85de3b3fcefd" style={[styles.node_d680f5e2_76bc_466f_a265_85de3b3fcefd, _uiOv.node_d680f5e2_76bc_466f_a265_85de3b3fcefd && _uiOv.node_d680f5e2_76bc_466f_a265_85de3b3fcefd.style]}>
                        {(!(_uiOv.node_dfcbb083_1455_4f46_be65_56cf14ab34e7 && _uiOv.node_dfcbb083_1455_4f46_be65_56cf14ab34e7.hidden)) && (
                        <View testID="dfcbb083-1455-4f46-be65-56cf14ab34e7" style={[styles.node_dfcbb083_1455_4f46_be65_56cf14ab34e7, _uiOv.node_dfcbb083_1455_4f46_be65_56cf14ab34e7 && _uiOv.node_dfcbb083_1455_4f46_be65_56cf14ab34e7.style]}>
                                    {(!(_uiOv.node_04477521_d666_494b_b67c_4f983e54224d && _uiOv.node_04477521_d666_494b_b67c_4f983e54224d.hidden)) && (
                                    <View testID="04477521-d666-494b-b67c-4f983e54224d" style={[styles.node_04477521_d666_494b_b67c_4f983e54224d, _uiOv.node_04477521_d666_494b_b67c_4f983e54224d && _uiOv.node_04477521_d666_494b_b67c_4f983e54224d.style]}>
                                                  {(!(_uiOv.node_b7476210_b7db_4d54_9bc2_8cba07a4c546 && _uiOv.node_b7476210_b7db_4d54_9bc2_8cba07a4c546.hidden)) && (
                                                  <View testID="b7476210-b7db-4d54-9bc2-8cba07a4c546" accessible={true} accessibilityRole="image" style={[{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }, _uiOv.node_b7476210_b7db_4d54_9bc2_8cba07a4c546 && _uiOv.node_b7476210_b7db_4d54_9bc2_8cba07a4c546.style]}><Svg viewBox="0 0 24 24" width={24} height={24} fill="none"><G stroke={((_uiOv.node_b7476210_b7db_4d54_9bc2_8cba07a4c546 && _uiOv.node_b7476210_b7db_4d54_9bc2_8cba07a4c546.style && _uiOv.node_b7476210_b7db_4d54_9bc2_8cba07a4c546.style.color) || '#9CA3AF')} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Circle cx="12" cy="12" r="10"></Circle><Circle cx="12" cy="12" r="4"></Circle><Line x1="21.17" x2="12" y1="8" y2="8"></Line><Line x1="3.95" x2="8.54" y1="6.06" y2="14"></Line><Line x1="10.88" x2="15.46" y1="21.94" y2="14"></Line></G></Svg></View>
                                                  )}
                                    </View>
                                    )}
                                    {(!(_uiOv.node_3aebd030_f1b2_4a74_859d_2b4fd57bb4f3 && _uiOv.node_3aebd030_f1b2_4a74_859d_2b4fd57bb4f3.hidden)) && (
                                    <Text testID="3aebd030-f1b2-4a74-859d-2b4fd57bb4f3" style={[styles.node_3aebd030_f1b2_4a74_859d_2b4fd57bb4f3, _uiOv.node_3aebd030_f1b2_4a74_859d_2b4fd57bb4f3 && _uiOv.node_3aebd030_f1b2_4a74_859d_2b4fd57bb4f3.style]}>Google</Text>
                                    )}
                        </View>
                        )}
                        {(!(_uiOv.node_c8cf3fd9_9c5d_40d9_8083_4992a451b218 && _uiOv.node_c8cf3fd9_9c5d_40d9_8083_4992a451b218.hidden)) && (
                        <View testID="c8cf3fd9-9c5d-40d9-8083-4992a451b218" style={[styles.node_c8cf3fd9_9c5d_40d9_8083_4992a451b218, _uiOv.node_c8cf3fd9_9c5d_40d9_8083_4992a451b218 && _uiOv.node_c8cf3fd9_9c5d_40d9_8083_4992a451b218.style]}>
                                    {(!(_uiOv.node_b357a4ad_320e_43bd_a9ce_02da47e7c294 && _uiOv.node_b357a4ad_320e_43bd_a9ce_02da47e7c294.hidden)) && (
                                    <View testID="b357a4ad-320e-43bd-a9ce-02da47e7c294" style={[styles.node_b357a4ad_320e_43bd_a9ce_02da47e7c294, _uiOv.node_b357a4ad_320e_43bd_a9ce_02da47e7c294 && _uiOv.node_b357a4ad_320e_43bd_a9ce_02da47e7c294.style]}>
                                                  {(!(_uiOv.node_10775b17_2970_4963_890c_7d5bb7b3a9b0 && _uiOv.node_10775b17_2970_4963_890c_7d5bb7b3a9b0.hidden)) && (
                                                  <View testID="10775b17-2970-4963-890c-7d5bb7b3a9b0" accessible={true} accessibilityRole="image" style={[{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }, _uiOv.node_10775b17_2970_4963_890c_7d5bb7b3a9b0 && _uiOv.node_10775b17_2970_4963_890c_7d5bb7b3a9b0.style]}><Svg viewBox="0 0 24 24" width={24} height={24} fill="none"><G stroke={((_uiOv.node_10775b17_2970_4963_890c_7d5bb7b3a9b0 && _uiOv.node_10775b17_2970_4963_890c_7d5bb7b3a9b0.style && _uiOv.node_10775b17_2970_4963_890c_7d5bb7b3a9b0.style.color) || '#9CA3AF')} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M12 20.94c1.5 0 2.75 1.06 4 1.06 3 0 6-8 6-12.22A4.91 4.91 0 0 0 17 5c-2.22 0-4 1.44-5 2-1-.56-2.78-2-5-2a4.9 4.9 0 0 0-5 4.78C2 14 5 22 8 22c1.25 0 2.5-1.06 4-1.06Z"></Path><Path d="M10 2c1 .5 2 2 2 5"></Path></G></Svg></View>
                                                  )}
                                    </View>
                                    )}
                                    {(!(_uiOv.node_1df8922c_5752_4491_a68e_4d983e86bd32 && _uiOv.node_1df8922c_5752_4491_a68e_4d983e86bd32.hidden)) && (
                                    <Text testID="1df8922c-5752-4491-a68e-4d983e86bd32" style={[styles.node_1df8922c_5752_4491_a68e_4d983e86bd32, _uiOv.node_1df8922c_5752_4491_a68e_4d983e86bd32 && _uiOv.node_1df8922c_5752_4491_a68e_4d983e86bd32.style]}>Apple</Text>
                                    )}
                        </View>
                        )}
                        {(!(_uiOv.node_3fd3f1a3_eb11_47d4_bcfd_6cee19cb9d7e && _uiOv.node_3fd3f1a3_eb11_47d4_bcfd_6cee19cb9d7e.hidden)) && (
                        <View testID="3fd3f1a3-eb11-47d4-bcfd-6cee19cb9d7e" style={[styles.node_3fd3f1a3_eb11_47d4_bcfd_6cee19cb9d7e, _uiOv.node_3fd3f1a3_eb11_47d4_bcfd_6cee19cb9d7e && _uiOv.node_3fd3f1a3_eb11_47d4_bcfd_6cee19cb9d7e.style]}>
                                    {(!(_uiOv.node_051ffd5d_2b54_4474_9495_7159892d262c && _uiOv.node_051ffd5d_2b54_4474_9495_7159892d262c.hidden)) && (
                                    <View testID="051ffd5d-2b54-4474-9495-7159892d262c" style={[styles.node_051ffd5d_2b54_4474_9495_7159892d262c, _uiOv.node_051ffd5d_2b54_4474_9495_7159892d262c && _uiOv.node_051ffd5d_2b54_4474_9495_7159892d262c.style]}>
                                                  {(!(_uiOv.node_45aff530_9a77_4744_b825_f6b9d43b3da3 && _uiOv.node_45aff530_9a77_4744_b825_f6b9d43b3da3.hidden)) && (
                                                  <View testID="45aff530-9a77-4744-b825-f6b9d43b3da3" accessible={true} accessibilityRole="image" style={[{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }, _uiOv.node_45aff530_9a77_4744_b825_f6b9d43b3da3 && _uiOv.node_45aff530_9a77_4744_b825_f6b9d43b3da3.style]}><Svg viewBox="0 0 24 24" width={24} height={24} fill="none"><G stroke={((_uiOv.node_45aff530_9a77_4744_b825_f6b9d43b3da3 && _uiOv.node_45aff530_9a77_4744_b825_f6b9d43b3da3.style && _uiOv.node_45aff530_9a77_4744_b825_f6b9d43b3da3.style.color) || '#111827')} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M12 10a2 2 0 0 0-2 2c0 1.02-.1 2.51-.26 4"></Path><Path d="M14 13.12c0 2.38 0 6.38-1 8.88"></Path><Path d="M17.29 21.02c.12-.6.43-2.3.5-3.02"></Path><Path d="M2 12a10 10 0 0 1 18-6"></Path><Path d="M2 16h.01"></Path><Path d="M21.8 16c.2-2 .131-5.354 0-6"></Path><Path d="M5 19.5C5.5 18 6 15 6 12a6 6 0 0 1 .34-2"></Path><Path d="M8.65 22c.21-.66.45-1.32.57-2"></Path><Path d="M9 6.8a6 6 0 0 1 9 5.2v2"></Path></G></Svg></View>
                                                  )}
                                    </View>
                                    )}
                                    {(!(_uiOv.node_b8c35985_327f_4354_bfad_04f0cb63baf1 && _uiOv.node_b8c35985_327f_4354_bfad_04f0cb63baf1.hidden)) && (
                                    <Text testID="b8c35985-327f-4354-bfad-04f0cb63baf1" style={[styles.node_b8c35985_327f_4354_bfad_04f0cb63baf1, _uiOv.node_b8c35985_327f_4354_bfad_04f0cb63baf1 && _uiOv.node_b8c35985_327f_4354_bfad_04f0cb63baf1.style]}>Biometric</Text>
                                    )}
                        </View>
                        )}
              </View>
              )}
              {(!(_uiOv.node_74ca7292_7eef_455b_883c_7de2255a5d33 && _uiOv.node_74ca7292_7eef_455b_883c_7de2255a5d33.hidden)) && (
              <View testID="74ca7292-7eef-455b-883c-7de2255a5d33" style={[styles.node_74ca7292_7eef_455b_883c_7de2255a5d33, _uiOv.node_74ca7292_7eef_455b_883c_7de2255a5d33 && _uiOv.node_74ca7292_7eef_455b_883c_7de2255a5d33.style]}>
                        {(!(_uiOv.node_1e749a4e_1e0f_45fc_b1df_08c1cb0198c0 && _uiOv.node_1e749a4e_1e0f_45fc_b1df_08c1cb0198c0.hidden)) && (
                        <Text testID="1e749a4e-1e0f-45fc-b1df-08c1cb0198c0" style={[styles.node_1e749a4e_1e0f_45fc_b1df_08c1cb0198c0, _uiOv.node_1e749a4e_1e0f_45fc_b1df_08c1cb0198c0 && _uiOv.node_1e749a4e_1e0f_45fc_b1df_08c1cb0198c0.style]}>Don't have an account? </Text>
                        )}
                        {(!(_uiOv.node_706183d7_5807_4eac_9dd0_a34101ca13b8 && _uiOv.node_706183d7_5807_4eac_9dd0_a34101ca13b8.hidden)) && (
                        <Text testID="706183d7-5807-4eac-9dd0-a34101ca13b8" accessible={true} accessibilityRole="link" accessibilityLabel="Open an account" style={[[styles.node_706183d7_5807_4eac_9dd0_a34101ca13b8, { color: '#0077E6', textDecorationLine: 'underline' }], _uiOv.node_706183d7_5807_4eac_9dd0_a34101ca13b8 && _uiOv.node_706183d7_5807_4eac_9dd0_a34101ca13b8.style]}>Open an account</Text>
                        )}
              </View>
              )}
      </View>
      )}
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

