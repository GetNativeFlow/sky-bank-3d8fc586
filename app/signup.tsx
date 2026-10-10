import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, TextInput, ActivityIndicator, Alert } from 'react-native';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getThemeColors } from '../config/theme';
import { useAuthActions } from '../lib/auth/useAuth';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { appRuntime as app } from '../lib/app';

export default function SignUp() {
  const colors = getThemeColors();
  const authActions = useAuthActions();
  const router = useRouter();
  const routeParams = useLocalSearchParams();
  const [state_f7257614_1670_4e8f_8ee6_e8488ccc3dbf, setState_f7257614_1670_4e8f_8ee6_e8488ccc3dbf] = useState({ text: "", isFocused: false, errorMessage: "", isValid: true });
  const [state_d10748d3_31f7_4722_8c96_d9eefea5cfb9, setState_d10748d3_31f7_4722_8c96_d9eefea5cfb9] = useState({ text: "", isFocused: false, errorMessage: "", isValid: true });
  const [state_3f2aa0b8_9531_4f33_8fc4_0382b3e76971, setState_3f2aa0b8_9531_4f33_8fc4_0382b3e76971] = useState({ text: "", isFocused: false, errorMessage: "", isValid: true });
  const [errors_node_f7257614_1670_4e8f_8ee6_e8488ccc3dbf, setErrors_node_f7257614_1670_4e8f_8ee6_e8488ccc3dbf] = useState([]);
  const [touched_node_f7257614_1670_4e8f_8ee6_e8488ccc3dbf, setTouched_node_f7257614_1670_4e8f_8ee6_e8488ccc3dbf] = useState(false);
  function validate_node_f7257614_1670_4e8f_8ee6_e8488ccc3dbf(value) {
    const errs = [];
    if (!value || (typeof value === 'string' && !value.trim())) errs.push('This field is required');
    setErrors_node_f7257614_1670_4e8f_8ee6_e8488ccc3dbf(errs);
    return errs;
  }

  const [errors_node_d10748d3_31f7_4722_8c96_d9eefea5cfb9, setErrors_node_d10748d3_31f7_4722_8c96_d9eefea5cfb9] = useState([]);
  const [touched_node_d10748d3_31f7_4722_8c96_d9eefea5cfb9, setTouched_node_d10748d3_31f7_4722_8c96_d9eefea5cfb9] = useState(false);
  function validate_node_d10748d3_31f7_4722_8c96_d9eefea5cfb9(value) {
    const errs = [];
    if (!value || (typeof value === 'string' && !value.trim())) errs.push('This field is required');
    if (value && value.length < 6) errs.push('Password must be at least 6 characters');
    setErrors_node_d10748d3_31f7_4722_8c96_d9eefea5cfb9(errs);
    return errs;
  }

  const [errors_node_3f2aa0b8_9531_4f33_8fc4_0382b3e76971, setErrors_node_3f2aa0b8_9531_4f33_8fc4_0382b3e76971] = useState([]);
  const [touched_node_3f2aa0b8_9531_4f33_8fc4_0382b3e76971, setTouched_node_3f2aa0b8_9531_4f33_8fc4_0382b3e76971] = useState(false);
  function validate_node_3f2aa0b8_9531_4f33_8fc4_0382b3e76971(value) {
    const errs = [];
    if (!value || (typeof value === 'string' && !value.trim())) errs.push('Please confirm your password');
    setErrors_node_3f2aa0b8_9531_4f33_8fc4_0382b3e76971(errs);
    return errs;
  }

  return (
    <SafeAreaView edges={["top","bottom","left","right"]} style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <View testID="7b0e85c0-4636-46a4-875f-0ef24ff89fa2" style={styles.node_7b0e85c0_4636_46a4_875f_0ef24ff89fa2}>
              <View testID="1420ad38-6ab0-4e9b-a450-3e4e9f3631bf" style={styles.node_1420ad38_6ab0_4e9b_a450_3e4e9f3631bf}>
                        <View testID="92af923e-a078-4f89-82c5-4e20d1b8005c" accessible={true} accessibilityRole="image" style={{ width: 28, height: 28, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={28} height={28} fill="none"><G stroke="#6366F1" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></Path><Circle cx="9" cy="7" r="4"></Circle><Line x1="19" x2="19" y1="8" y2="14"></Line><Line x1="22" x2="16" y1="11" y2="11"></Line></G></Svg></View>
              </View>
              <View testID="34e856fb-e496-4933-b458-56ce4a889ecc" style={styles.node_34e856fb_e496_4933_b458_56ce4a889ecc}>
                        <Text testID="b574bdc2-c297-4d66-be9d-b1af222ec949" accessibilityRole="header" style={styles.node_b574bdc2_c297_4d66_be9d_b1af222ec949}>Create your account</Text>
                        <Text testID="0f8c7c9b-4564-4655-850d-136d1651a5fa" style={styles.node_0f8c7c9b_4564_4655_850d_136d1651a5fa}>It only takes a minute</Text>
              </View>
              <View testID="154f9a7f-f0af-46c2-a45c-23a6b9742d50" style={styles.node_154f9a7f_f0af_46c2_a45c_23a6b9742d50}>
                        <Text testID="4149c6cd-8957-45f6-bc34-3f3e7f7c94a2" style={styles.node_4149c6cd_8957_45f6_bc34_3f3e7f7c94a2}>Email</Text>
                        <View testID="f7257614-1670-4e8f-8ee6-e8488ccc3dbf"><TextInput style={[styles.node_f7257614_1670_4e8f_8ee6_e8488ccc3dbf, { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, fontSize: 16, backgroundColor: '#fff' }, (touched_node_f7257614_1670_4e8f_8ee6_e8488ccc3dbf && errors_node_f7257614_1670_4e8f_8ee6_e8488ccc3dbf.length > 0 ? { borderColor: '#dc2626', borderWidth: 2 } : {})]} placeholder="you@example.com" keyboardType="email-address" value={typeof state_f7257614_1670_4e8f_8ee6_e8488ccc3dbf !== 'undefined' ? (state_f7257614_1670_4e8f_8ee6_e8488ccc3dbf.text ?? '') : ''} onChangeText={(v) => { if (typeof setState_f7257614_1670_4e8f_8ee6_e8488ccc3dbf === 'function') setState_f7257614_1670_4e8f_8ee6_e8488ccc3dbf(prev => ({...prev, text: v})); }} onBlur={() => { setTouched_node_f7257614_1670_4e8f_8ee6_e8488ccc3dbf(true); validate_node_f7257614_1670_4e8f_8ee6_e8488ccc3dbf(typeof state_f7257614_1670_4e8f_8ee6_e8488ccc3dbf !== 'undefined' ? (state_f7257614_1670_4e8f_8ee6_e8488ccc3dbf.text ?? '') : ''); }} />
                          {touched_node_f7257614_1670_4e8f_8ee6_e8488ccc3dbf && errors_node_f7257614_1670_4e8f_8ee6_e8488ccc3dbf.length > 0 && <Text style={{ color: '#dc2626', fontSize: 12, marginTop: 4 }}>{errors_node_f7257614_1670_4e8f_8ee6_e8488ccc3dbf[0]}</Text>}
                        </View>
              </View>
              <View testID="134f9287-512e-4ca1-814e-a792246b475f" style={styles.node_134f9287_512e_4ca1_814e_a792246b475f}>
                        <Text testID="7b20e717-fbc5-4885-8a4a-aaa715fc56a9" style={styles.node_7b20e717_fbc5_4885_8a4a_aaa715fc56a9}>Password</Text>
                        <View testID="d10748d3-31f7-4722-8c96-d9eefea5cfb9"><TextInput style={[styles.node_d10748d3_31f7_4722_8c96_d9eefea5cfb9, { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, fontSize: 16, backgroundColor: '#fff' }, (touched_node_d10748d3_31f7_4722_8c96_d9eefea5cfb9 && errors_node_d10748d3_31f7_4722_8c96_d9eefea5cfb9.length > 0 ? { borderColor: '#dc2626', borderWidth: 2 } : {})]} placeholder="••••••••" secureTextEntry value={typeof state_d10748d3_31f7_4722_8c96_d9eefea5cfb9 !== 'undefined' ? (state_d10748d3_31f7_4722_8c96_d9eefea5cfb9.text ?? '') : ''} onChangeText={(v) => { if (typeof setState_d10748d3_31f7_4722_8c96_d9eefea5cfb9 === 'function') setState_d10748d3_31f7_4722_8c96_d9eefea5cfb9(prev => ({...prev, text: v})); }} onBlur={() => { setTouched_node_d10748d3_31f7_4722_8c96_d9eefea5cfb9(true); validate_node_d10748d3_31f7_4722_8c96_d9eefea5cfb9(typeof state_d10748d3_31f7_4722_8c96_d9eefea5cfb9 !== 'undefined' ? (state_d10748d3_31f7_4722_8c96_d9eefea5cfb9.text ?? '') : ''); }} />
                          {touched_node_d10748d3_31f7_4722_8c96_d9eefea5cfb9 && errors_node_d10748d3_31f7_4722_8c96_d9eefea5cfb9.length > 0 && <Text style={{ color: '#dc2626', fontSize: 12, marginTop: 4 }}>{errors_node_d10748d3_31f7_4722_8c96_d9eefea5cfb9[0]}</Text>}
                        </View>
              </View>
              <View testID="830d4d87-dc91-4f2c-a19c-263d919a8cbe" style={styles.node_830d4d87_dc91_4f2c_a19c_263d919a8cbe}>
                        <Text testID="263d60b9-a25a-43a6-8093-ea04c8f3d8de" style={styles.node_263d60b9_a25a_43a6_8093_ea04c8f3d8de}>Confirm password</Text>
                        <View testID="3f2aa0b8-9531-4f33-8fc4-0382b3e76971"><TextInput style={[styles.node_3f2aa0b8_9531_4f33_8fc4_0382b3e76971, { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, fontSize: 16, backgroundColor: '#fff' }, (touched_node_3f2aa0b8_9531_4f33_8fc4_0382b3e76971 && errors_node_3f2aa0b8_9531_4f33_8fc4_0382b3e76971.length > 0 ? { borderColor: '#dc2626', borderWidth: 2 } : {})]} placeholder="••••••••" secureTextEntry value={typeof state_3f2aa0b8_9531_4f33_8fc4_0382b3e76971 !== 'undefined' ? (state_3f2aa0b8_9531_4f33_8fc4_0382b3e76971.text ?? '') : ''} onChangeText={(v) => { if (typeof setState_3f2aa0b8_9531_4f33_8fc4_0382b3e76971 === 'function') setState_3f2aa0b8_9531_4f33_8fc4_0382b3e76971(prev => ({...prev, text: v})); }} onBlur={() => { setTouched_node_3f2aa0b8_9531_4f33_8fc4_0382b3e76971(true); validate_node_3f2aa0b8_9531_4f33_8fc4_0382b3e76971(typeof state_3f2aa0b8_9531_4f33_8fc4_0382b3e76971 !== 'undefined' ? (state_3f2aa0b8_9531_4f33_8fc4_0382b3e76971.text ?? '') : ''); }} />
                          {touched_node_3f2aa0b8_9531_4f33_8fc4_0382b3e76971 && errors_node_3f2aa0b8_9531_4f33_8fc4_0382b3e76971.length > 0 && <Text style={{ color: '#dc2626', fontSize: 12, marginTop: 4 }}>{errors_node_3f2aa0b8_9531_4f33_8fc4_0382b3e76971[0]}</Text>}
                        </View>
              </View>
              <TouchableOpacity testID="b2632e29-bd9a-4f73-bd9e-58e419a24e9a" accessible={true} accessibilityRole="button" accessibilityLabel="Create account" style={[styles.node_b2632e29_bd9a_4f73_bd9e_58e419a24e9a, { backgroundColor: '#0077E6', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={() => {
              let _formValid = true;
                setTouched_node_f7257614_1670_4e8f_8ee6_e8488ccc3dbf(true);
                if (validate_node_f7257614_1670_4e8f_8ee6_e8488ccc3dbf(typeof state_f7257614_1670_4e8f_8ee6_e8488ccc3dbf !== 'undefined' ? (state_f7257614_1670_4e8f_8ee6_e8488ccc3dbf.text ?? '') : '').length > 0) _formValid = false;
                setTouched_node_d10748d3_31f7_4722_8c96_d9eefea5cfb9(true);
                if (validate_node_d10748d3_31f7_4722_8c96_d9eefea5cfb9(typeof state_d10748d3_31f7_4722_8c96_d9eefea5cfb9 !== 'undefined' ? (state_d10748d3_31f7_4722_8c96_d9eefea5cfb9.text ?? '') : '').length > 0) _formValid = false;
                setTouched_node_3f2aa0b8_9531_4f33_8fc4_0382b3e76971(true);
                if (validate_node_3f2aa0b8_9531_4f33_8fc4_0382b3e76971(typeof state_3f2aa0b8_9531_4f33_8fc4_0382b3e76971 !== 'undefined' ? (state_3f2aa0b8_9531_4f33_8fc4_0382b3e76971.text ?? '') : '').length > 0) _formValid = false;
                if (!_formValid) return;
                (async () => {
                  try {
                    if (state_d10748d3_31f7_4722_8c96_d9eefea5cfb9.text !== state_3f2aa0b8_9531_4f33_8fc4_0382b3e76971.text) {
                    Alert.alert('Passwords do not match', 'Re-enter your password to continue.');
                    return;
                  }
                  try {
                    await authActions.signUp({ email: state_f7257614_1670_4e8f_8ee6_e8488ccc3dbf.text, password: state_d10748d3_31f7_4722_8c96_d9eefea5cfb9.text });
                    app.navigate("Home");
                  } catch (e) {
                    console.error('[Auth signUp]', e);
                    Alert.alert("Could not create account", (e && e.message) ? String(e.message) : 'Please try again.');
                  }
                  } catch(e) {
                    console.error('[Action Error]', e);
                  }
                })();
              }}>
                <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Create account</Text>
              </TouchableOpacity>
              <TouchableOpacity testID="362fedb8-6ba5-463f-ac35-700207839aef" accessible={true} accessibilityRole="button" accessibilityLabel="Already have an account? Sign in" style={[styles.node_362fedb8_6ba5_463f_ac35_700207839aef, { backgroundColor: '#0077E6', borderRadius: 8, paddingVertical: 6, paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={() => { try { app.navigate("Login"); } catch(e) { console.error('[Action Error]', e); } }}>
                <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#fff', fontSize: 12, lineHeight: 18, fontWeight: '600', textAlign: 'center' }}>Already have an account? Sign in</Text>
              </TouchableOpacity>
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
    backgroundColor: '#ffffff',
  },
  container: {
    flex: 1,
    backgroundColor: colors.surface,
    flexWrap: 'nowrap',
    overflow: 'visible',
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
  node_7b0e85c0_4636_46a4_875f_0ef24ff89fa2: {
    justifyContent: 'flex-start',
    flexDirection: 'column',
    alignItems: 'stretch',
    gap: 16,
    flexWrap: 'nowrap',
    overflow: 'visible',
    padding: 24,
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_1420ad38_6ab0_4e9b_a450_3e4e9f3631bf: {
    width: 56,
    height: 56,
    minHeight: 56,
    borderRadius: 12,
    backgroundColor: colors.alternate,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_92af923e_a078_4f89_82c5_4e20d1b8005c: {
    color: '#6366F1',
  },
  node_34e856fb_e496_4933_b458_56ce4a889ecc: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: 6,
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_b574bdc2_c297_4d66_be9d_b1af222ec949: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  node_0f8c7c9b_4564_4655_850d_136d1651a5fa: {
    color: '#6B7280',
    fontSize: 14,
  },
  node_154f9a7f_f0af_46c2_a45c_23a6b9742d50: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: 6,
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_4149c6cd_8957_45f6_bc34_3f3e7f7c94a2: {
    color: colors.primarytext,
    fontSize: 14,
    fontWeight: 'bold',
  },
  node_134f9287_512e_4ca1_814e_a792246b475f: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: 6,
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_7b20e717_fbc5_4885_8a4a_aaa715fc56a9: {
    color: colors.primarytext,
    fontSize: 14,
    fontWeight: 'bold',
  },
  node_830d4d87_dc91_4f2c_a19c_263d919a8cbe: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: 6,
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_263d60b9_a25a_43a6_8093_ea04c8f3d8de: {
    color: colors.primarytext,
    fontSize: 14,
    fontWeight: 'bold',
  },
  });
}
