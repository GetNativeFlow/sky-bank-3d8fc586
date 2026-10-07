import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, TextInput, ActivityIndicator, Alert } from 'react-native';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { getThemeColors } from '../config/theme';
import { useAuthActions } from '../lib/auth/useAuth';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { appRuntime as app } from '../lib/app';

export default function ForgotPassword() {
  const colors = getThemeColors();
  const authActions = useAuthActions();
  const router = useRouter();
  const routeParams = useLocalSearchParams();
  const [state_8336ce98_4d8a_40c3_b9da_dd600ac18bac, setState_8336ce98_4d8a_40c3_b9da_dd600ac18bac] = useState({ text: "", isFocused: false, errorMessage: "", isValid: true });
  const [errors_node_8336ce98_4d8a_40c3_b9da_dd600ac18bac, setErrors_node_8336ce98_4d8a_40c3_b9da_dd600ac18bac] = useState([]);
  const [touched_node_8336ce98_4d8a_40c3_b9da_dd600ac18bac, setTouched_node_8336ce98_4d8a_40c3_b9da_dd600ac18bac] = useState(false);
  function validate_node_8336ce98_4d8a_40c3_b9da_dd600ac18bac(value) {
    const errs = [];
    if (!value || (typeof value === 'string' && !value.trim())) errs.push('This field is required');
    setErrors_node_8336ce98_4d8a_40c3_b9da_dd600ac18bac(errs);
    return errs;
  }

  return (
    <View style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
      <StatusBar style="auto" />
      <View testID="56a4c6bc-747d-4384-bb34-e2ac47a3cf45" style={styles.node_56a4c6bc_747d_4384_bb34_e2ac47a3cf45}>
              <View testID="a0622782-ce21-4812-8553-5715becb3221" style={styles.node_a0622782_ce21_4812_8553_5715becb3221}>
                        <View testID="57330b3a-e61a-40c7-865f-7ab16e338ca3" accessible={true} accessibilityRole="image" style={{ width: 28, height: 28, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={28} height={28} fill="none"><G stroke="#6366F1" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></Path><Circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></Circle></G></Svg></View>
              </View>
              <View testID="ba17542a-81e8-4e1a-865f-3a0b93397ddd" style={styles.node_ba17542a_81e8_4e1a_865f_3a0b93397ddd}>
                        <Text testID="aa792026-53f1-448a-9d3e-10ecb10fafe3" accessibilityRole="header" style={styles.node_aa792026_53f1_448a_9d3e_10ecb10fafe3}>Reset password</Text>
                        <Text testID="f9b7b12d-acac-42da-a07c-d0a0d5d909a5" style={styles.node_f9b7b12d_acac_42da_a07c_d0a0d5d909a5}>Enter your email and we'll send a reset link</Text>
              </View>
              <View testID="47180343-3ad7-4503-adff-419ac6f729c4" style={styles.node_47180343_3ad7_4503_adff_419ac6f729c4}>
                        <Text testID="5319b115-46c5-4199-aada-98a89cdac50c" style={styles.node_5319b115_46c5_4199_aada_98a89cdac50c}>Email</Text>
                        <View testID="8336ce98-4d8a-40c3-b9da-dd600ac18bac"><TextInput style={[styles.node_8336ce98_4d8a_40c3_b9da_dd600ac18bac, { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, fontSize: 16, backgroundColor: '#fff' }, (touched_node_8336ce98_4d8a_40c3_b9da_dd600ac18bac && errors_node_8336ce98_4d8a_40c3_b9da_dd600ac18bac.length > 0 ? { borderColor: '#dc2626', borderWidth: 2 } : {})]} placeholder="you@example.com" keyboardType="email-address" value={typeof state_8336ce98_4d8a_40c3_b9da_dd600ac18bac !== 'undefined' ? (state_8336ce98_4d8a_40c3_b9da_dd600ac18bac.text ?? '') : ''} onChangeText={(v) => { if (typeof setState_8336ce98_4d8a_40c3_b9da_dd600ac18bac === 'function') setState_8336ce98_4d8a_40c3_b9da_dd600ac18bac(prev => ({...prev, text: v})); }} onBlur={() => { setTouched_node_8336ce98_4d8a_40c3_b9da_dd600ac18bac(true); validate_node_8336ce98_4d8a_40c3_b9da_dd600ac18bac(typeof state_8336ce98_4d8a_40c3_b9da_dd600ac18bac !== 'undefined' ? (state_8336ce98_4d8a_40c3_b9da_dd600ac18bac.text ?? '') : ''); }} />
                          {touched_node_8336ce98_4d8a_40c3_b9da_dd600ac18bac && errors_node_8336ce98_4d8a_40c3_b9da_dd600ac18bac.length > 0 && <Text style={{ color: '#dc2626', fontSize: 12, marginTop: 4 }}>{errors_node_8336ce98_4d8a_40c3_b9da_dd600ac18bac[0]}</Text>}
                        </View>
              </View>
              <TouchableOpacity testID="c572e80b-cd02-4d11-a1e0-78163e4d714b" accessible={true} accessibilityRole="button" accessibilityLabel="Send reset link" style={[styles.node_c572e80b_cd02_4d11_a1e0_78163e4d714b, { backgroundColor: '#0077E6', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={() => {
              let _formValid = true;
                setTouched_node_8336ce98_4d8a_40c3_b9da_dd600ac18bac(true);
                if (validate_node_8336ce98_4d8a_40c3_b9da_dd600ac18bac(typeof state_8336ce98_4d8a_40c3_b9da_dd600ac18bac !== 'undefined' ? (state_8336ce98_4d8a_40c3_b9da_dd600ac18bac.text ?? '') : '').length > 0) _formValid = false;
                if (!_formValid) return;
                (async () => {
                  try {
                    try {
                    await authActions.resetPassword({ email: state_8336ce98_4d8a_40c3_b9da_dd600ac18bac.text });
                    app.navigate("Check Email");
                  } catch (e) {
                    console.error('[Auth resetPassword]', e);
                    Alert.alert("Could not send reset link", (e && e.message) ? String(e.message) : 'Please try again.');
                  }
                  } catch(e) {
                    console.error('[Action Error]', e);
                  }
                })();
              }}>
                <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Send reset link</Text>
              </TouchableOpacity>
              <TouchableOpacity testID="d918009d-295f-4968-a9c6-c95c9fc257ec" accessible={true} accessibilityRole="button" accessibilityLabel="Back to sign in" style={[styles.node_d918009d_295f_4968_a9c6_c95c9fc257ec, { backgroundColor: '#0077E6', borderRadius: 8, paddingVertical: 6, paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={() => { try { app.navigate("Login"); } catch(e) { console.error('[Action Error]', e); } }}>
                <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#fff', fontSize: 12, lineHeight: 18, fontWeight: '600', textAlign: 'center' }}>Back to sign in</Text>
              </TouchableOpacity>
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
  node_56a4c6bc_747d_4384_bb34_e2ac47a3cf45: {
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
  node_a0622782_ce21_4812_8553_5715becb3221: {
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
  node_57330b3a_e61a_40c7_865f_7ab16e338ca3: {
    color: '#6366F1',
  },
  node_ba17542a_81e8_4e1a_865f_3a0b93397ddd: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: 6,
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_aa792026_53f1_448a_9d3e_10ecb10fafe3: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  node_f9b7b12d_acac_42da_a07c_d0a0d5d909a5: {
    color: '#6B7280',
    fontSize: 14,
  },
  node_47180343_3ad7_4503_adff_419ac6f729c4: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: 6,
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_5319b115_46c5_4199_aada_98a89cdac50c: {
    color: colors.primarytext,
    fontSize: 14,
    fontWeight: 'bold',
  },
  });
}
