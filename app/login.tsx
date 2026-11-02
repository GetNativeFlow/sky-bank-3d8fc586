import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, TextInput, ActivityIndicator, Alert } from 'react-native';
import { default as LucideDynamic } from '../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useAuthActions } from '../lib/auth/useAuth';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { appRuntime as app } from '../lib/app';
import { bindUi } from '../lib/ui';
import * as nf from '../lib/runtime';

export default function Login() {
  const authActions = useAuthActions();
  const router = useRouter();
  const routeParams = useLocalSearchParams();
  const [input9876543210Input, setInput9876543210Input] = useState({ text: "", isFocused: false, errorMessage: "", isValid: true });
  const [enterYourPasswordInput, setEnterYourPasswordInput] = useState({ text: "", isFocused: false, errorMessage: "", isValid: true });
  const [checkbox, setCheckbox] = useState({ isChecked: false });
  const [_uiOv, _setUiOv] = useState({});
  const ui = bindUi(_uiOv, _setUiOv, { "Input 1": "input9876543210Input", "Input 2": "enterYourPasswordInput" }, { input9876543210Input: setInput9876543210Input, enterYourPasswordInput: setEnterYourPasswordInput }, { input9876543210Input: ["text"], enterYourPasswordInput: ["text"] }, { input9876543210Input: input9876543210Input, enterYourPasswordInput: enterYourPasswordInput });
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <SafeAreaView edges={["top","bottom","left","right"]} style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
        <StatusBar style="auto" />
        <View style={styles.column}>
          <View style={styles.row}>
            <View style={styles.center}>
              <View accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="leaf" size={20} color="#2447B5" strokeWidth={2} /></View>
            </View>
            <Text testID="Login_SkyBankText" accessible={true} accessibilityLabel="SkyBank" style={styles.skyBankText} onPress={nf.safely(() => { ui.set('Input 1', { text: 'user@bank.in' });
            ui.set('Input 2', { text: '123456' }); })}>SkyBank</Text>
          </View>
          <Text accessibilityRole="header" style={styles.welcomeBackHeading}>Welcome back</Text>
          <Text style={styles.signInToManageText}>Sign in to manage your money securely.</Text>
          <Text style={styles.mobileNumberOrUsernameText}>Mobile number or username</Text>
          <View style={styles.box}>
            <View style={styles.row2}>
              <View accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="smartphone" size={20} color="#5B6478" strokeWidth={2} /></View>
              {(!ui.hidden('input9876543210Input')) && (
                <TextInput testID="Login_9876543210Input" style={[[styles.input9876543210Input, { borderWidth: 0, borderColor: 'rgba(209, 213, 219, 0.00)', borderRadius: 6, padding: 10, fontSize: 16, backgroundColor: 'transparent' }], ui.styleOf('input9876543210Input')]} placeholder="98765 43210" value={typeof input9876543210Input !== 'undefined' ? (input9876543210Input.text ?? '') : ''} onChangeText={(v) => { if (typeof setInput9876543210Input === 'function') setInput9876543210Input(prev => ({...prev, text: v})); }} />
              )}
            </View>
          </View>
          <Text style={styles.passwordText}>Password</Text>
          <View style={styles.box2}>
            <View style={styles.row3}>
              <View style={styles.row4}>
                <View accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="lock" size={20} color="#5B6478" strokeWidth={2} /></View>
                {(!ui.hidden('enterYourPasswordInput')) && (
                  <TextInput testID="Login_EnterYourPasswordInput" style={[[styles.enterYourPasswordInput, { borderWidth: 0, borderColor: 'rgba(209, 213, 219, 0.00)', borderRadius: 6, padding: 10, fontSize: 16, backgroundColor: 'transparent' }], ui.styleOf('enterYourPasswordInput')]} placeholder="Enter your password" secureTextEntry value={typeof enterYourPasswordInput !== 'undefined' ? (enterYourPasswordInput.text ?? '') : ''} onChangeText={(v) => { if (typeof setEnterYourPasswordInput === 'function') setEnterYourPasswordInput(prev => ({...prev, text: v})); }} />
                )}
                <View accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="eye" size={20} color="#5B6478" strokeWidth={2} /></View>
              </View>
            </View>
          </View>
          <View style={styles.row5}>
            <View style={styles.row6}>
              <TouchableOpacity testID="Login_Checkbox" accessible={true} accessibilityRole="checkbox" accessibilityState={{"checked":true}} onPress={() => { if (typeof setCheckbox === 'function') setCheckbox(prev => ({...prev, isChecked: !prev.isChecked})); }} style={[styles.checkbox, { flexDirection: 'row', alignItems: 'center', gap: 8 }]}><View style={{ width: 20, height: 20, borderWidth: 2, borderColor: (typeof checkbox !== 'undefined' && checkbox.isChecked) ? '#FFFFFF' : '#666', borderRadius: 3, backgroundColor: (typeof checkbox !== 'undefined' && checkbox.isChecked) ? '#FFFFFF' : 'transparent', justifyContent: 'center', alignItems: 'center' }}>{(typeof checkbox !== 'undefined' && checkbox.isChecked) && <Text style={{ color: '#fff', fontSize: 11, fontWeight: 'bold' }}>✓</Text>}</View><Text>Remember me</Text></TouchableOpacity>
            </View>
            <Text testID="Login_ForgotPasswordLink" accessible={true} accessibilityRole="link" accessibilityLabel="Forgot password?" style={[styles.forgotPasswordLink, { color: '#0077E6', textDecorationLine: 'underline' }]}>Forgot password?</Text>
          </View>
          <TouchableOpacity testID="Login_SignInButton" accessible={true} accessibilityRole="button" accessibilityLabel="Sign in" style={[styles.signInButton, { backgroundColor: '#0F1F4B', borderRadius: 14, paddingVertical: 12, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }]} activeOpacity={0.7} onPress={nf.safely(async () => {
              try {
                await authActions.signIn({ email: input9876543210Input.text, password: enterYourPasswordInput.text });
                app.navigate("Home");
              } catch (e) {
                console.error('[Auth signIn]', e);
                Alert.alert("Sign in failed", (e && e.message) ? String(e.message) : 'Please try again.');
              }
            })}>
            <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#FFFFFF', fontSize: 16, lineHeight: 24, fontWeight: '700', textAlign: 'center' }}>Sign in</Text>
          </TouchableOpacity>
          <View style={styles.row7}>
            <View style={[styles.divider, { height: 1, backgroundColor: '#E6EAF1', alignSelf: 'stretch' }]} />
            <Text style={styles.orText}>or</Text>
            <View style={[styles.divider2, { height: 1, backgroundColor: '#E6EAF1', alignSelf: 'stretch' }]} />
          </View>
          <View style={styles.row8}>
            <View style={styles.column2}>
              <View style={styles.row9}>
                <View style={styles.center2}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="fingerprint" size={24} color="#111827" strokeWidth={2} /></View>
                </View>
              </View>
              <Text style={styles.biometricText}>Biometric</Text>
            </View>
            <View style={styles.column3}>
              <View style={styles.row10}>
                <View style={styles.center3}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="chrome" size={24} color="#9CA3AF" strokeWidth={2} /></View>
                </View>
              </View>
              <Text style={styles.googleText}>Google</Text>
            </View>
            <View style={styles.column4}>
              <View style={styles.row11}>
                <View style={styles.center4}>
                  <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="apple" size={24} color="#9CA3AF" strokeWidth={2} /></View>
                </View>
              </View>
              <Text style={styles.appleText}>Apple</Text>
            </View>
          </View>
          <View style={styles.row12}>
            <Text style={styles.newToSkyBankText}>New to SkyBank?</Text>
            <Text testID="Login_OpenAnAccountLink" accessible={true} accessibilityRole="link" accessibilityLabel="Open an account" style={[styles.openAnAccountLink, { color: '#0077E6', textDecorationLine: 'underline' }]}>Open an account</Text>
          </View>
          <View style={styles.row13}>
            <View accessible={true} accessibilityRole="image" style={{ width: 14, height: 14, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="shield-check" size={14} color="#2F7D4F" strokeWidth={2} /></View>
            <Text style={styles.text256BitEncryptedRBIText}>256-bit encrypted · RBI regulated</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screenRoot: {
    flex: 1,
    height: '100%',
    width: '100%',
    minWidth: 0,
    alignSelf: 'stretch',
    backgroundColor: '#F4F6FB',
  },
  container: {
    flex: 1,
    backgroundColor: '#F4F6FB',
    flexGrow: 1,
    minHeight: '100%',
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
  column: {
    gap: 0,
    paddingTop: 56,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 24,
    backgroundColor: '#F4F6FB',
    flexGrow: 1,
    minHeight: '100%',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    flexShrink: 0,
  },
  row: {
    gap: 12,
    marginBottom: 24,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  center: {
    width: 40,
    height: 40,
    borderRadius: 12,
    backgroundColor: '#0F1F4B',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    color: '#2447B5',
  },
  skyBankText: {
    color: '#121C42',
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: -0.3,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  welcomeBackHeading: {
    color: '#121C42',
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 4,
    marginTop: 28,
    letterSpacing: -0.8,
  },
  signInToManageText: {
    color: '#5B6478',
    fontSize: 14,
    marginBottom: 24,
    marginTop: 6,
  },
  mobileNumberOrUsernameText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4A5468',
    marginTop: 28,
    marginBottom: 8,
  },
  box: {
    paddingTop: 16,
    borderColor: '#E4E8F0',
    borderWidth: 1,
    paddingLeft: 16,
    borderRadius: 14,
    marginBottom: 16,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    height: 52,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  row2: {
    gap: 12,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  icon2: {
    color: '#5B6478',
  },
  input9876543210Input: {
    color: '#121C42',
    fontSize: 16,
    borderColor: 'rgba(209, 213, 219, 0.00)',
    borderWidth: 0,
    backgroundColor: 'transparent',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  passwordText: {
    fontSize: 13,
    fontWeight: '600',
    color: '#4A5468',
    marginTop: 18,
    marginBottom: 8,
  },
  box2: {
    paddingTop: 16,
    borderColor: '#E4E8F0',
    borderWidth: 1,
    paddingLeft: 16,
    borderRadius: 14,
    marginBottom: 20,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    marginTop: 8,
    height: 52,
    justifyContent: 'center',
    flexDirection: 'column',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  row3: {
    gap: 12,
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  row4: {
    gap: 12,
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  icon3: {
    color: '#5B6478',
  },
  enterYourPasswordInput: {
    color: '#121C42',
    fontSize: 16,
    borderColor: 'rgba(209, 213, 219, 0.00)',
    borderWidth: 0,
    backgroundColor: 'transparent',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  icon4: {
    color: '#5B6478',
  },
  row5: {
    marginBottom: 22,
    marginTop: 18,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    gap: 0,
    width: '100%',
  },
  row6: {
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
  checkbox: {
    color: '#4A5468',
    backgroundColor: '#FFFFFF',
    fontSize: 15,
  },
  forgotPasswordLink: {
    color: '#3558E0',
    fontSize: 15,
    fontWeight: '700',
    textDecorationLine: 'none',
  },
  signInButton: {
    height: 52,
    borderRadius: 14,
    marginBottom: 24,
    backgroundColor: '#0F1F4B',
    marginTop: 24,
    color: '#FFFFFF',
    fontWeight: '700',
    fontSize: 16,
    width: '100%',
  },
  row7: {
    gap: 12,
    marginBottom: 20,
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  divider: {
    backgroundColor: '#E6EAF1',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  orText: {
    color: '#6B7385',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  divider2: {
    backgroundColor: '#E6EAF1',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  row8: {
    gap: 12,
    marginBottom: 40,
    marginTop: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'wrap',
    flexDirection: 'row',
    width: '100%',
  },
  column2: {
    gap: 8,
    width: '100%',
    height: 54,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#CFD6F7',
    backgroundColor: '#EEF1FE',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  row9: {
    gap: 12,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  center2: {
    width: 72,
    height: 64,
    alignItems: 'center',
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  icon5: {
    color: '#111827',
  },
  biometricText: {
    color: '#374151',
    fontSize: 14,
  },
  column3: {
    gap: 8,
    width: '100%',
    height: 54,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#6B7280',
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  row10: {
    gap: 12,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  center3: {
    width: 72,
    height: 64,
    alignItems: 'center',
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  icon6: {
    color: '#9CA3AF',
  },
  googleText: {
    color: '#374151',
    fontSize: 14,
  },
  column4: {
    gap: 8,
    width: '100%',
    height: 54,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#000000',
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
  },
  row11: {
    gap: 12,
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  center4: {
    width: 72,
    height: 64,
    alignItems: 'center',
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 16,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  icon7: {
    color: '#9CA3AF',
  },
  appleText: {
    color: '#374151',
    fontSize: 14,
  },
  row12: {
    gap: 4,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  newToSkyBankText: {
    color: '#4B5468',
    fontSize: 15,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  openAnAccountLink: {
    color: '#3B5BDB',
    fontSize: 15,
    fontWeight: '700',
  },
  row13: {
    gap: 6,
    marginTop: 14,
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  icon8: {
    color: '#2F7D4F',
  },
  text256BitEncryptedRBIText: {
    fontSize: 13,
    color: '#6B7385',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
});

