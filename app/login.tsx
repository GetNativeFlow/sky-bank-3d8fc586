import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, TextInput, ActivityIndicator, Alert } from 'react-native';
import { default as LucideDynamic } from '../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getThemeColors } from '../config/theme';
import { useAuthActions } from '../lib/auth/useAuth';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { appRuntime as app } from '../lib/app';
import { bindUi } from '../lib/ui';
import * as nf from '../lib/runtime';

export default function Login() {
  const colors = getThemeColors();
  const authActions = useAuthActions();
  const router = useRouter();
  const routeParams = useLocalSearchParams();
  const [mobileNumberOrUsernameInput, setMobileNumberOrUsernameInput] = useState({ text: "", isFocused: false, errorMessage: "", isValid: true });
  const [passwordInput, setPasswordInput] = useState({ text: "", isFocused: false, errorMessage: "", isValid: true });
  const [checkbox, setCheckbox] = useState({ isChecked: false });
  const [_uiOv, _setUiOv] = useState({});
  const ui = bindUi(_uiOv, _setUiOv, { "Input 1": "mobileNumberOrUsernameInput", "Input 2": "passwordInput" }, { mobileNumberOrUsernameInput: setMobileNumberOrUsernameInput, passwordInput: setPasswordInput }, { mobileNumberOrUsernameInput: ["text"], passwordInput: ["text"] }, { mobileNumberOrUsernameInput: mobileNumberOrUsernameInput, passwordInput: passwordInput });
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
            <View accessible={true} accessibilityRole="image" style={{ width: 32, height: 32, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="leaf" size={32} color="#2447B5" strokeWidth={2} /></View>
            <Text testID="Login_SkyBankText" accessible={true} accessibilityLabel="SkyBank" style={styles.skyBankText} onPress={nf.safely(() => { ui.set('Input 1', { text: 'user@bank.in' });
            ui.set('Input 2', { text: '123456' }); })}>SkyBank</Text>
          </View>
          <Text accessibilityRole="header" style={styles.welcomeBackHeading}>Welcome back</Text>
          <Text style={styles.signInToYourText}>Sign in to your account</Text>
          <View style={styles.box}>
            <View style={styles.row2}>
              <View accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="phone" size={20} color="#6B7280" strokeWidth={2} /></View>
              {(!ui.hidden('mobileNumberOrUsernameInput')) && (
                <TextInput testID="Login_MobileNumberOrUsernameInput" style={[[styles.mobileNumberOrUsernameInput, { borderWidth: 1, borderColor: 'rgba(209, 213, 219, 0.00)', borderRadius: 6, padding: 10, fontSize: 16, backgroundColor: '#fff' }], ui.styleOf('mobileNumberOrUsernameInput')]} placeholder="Mobile number or username" value={typeof mobileNumberOrUsernameInput !== 'undefined' ? (mobileNumberOrUsernameInput.text ?? '') : ''} onChangeText={(v) => { if (typeof setMobileNumberOrUsernameInput === 'function') setMobileNumberOrUsernameInput(prev => ({...prev, text: v})); }} />
              )}
            </View>
          </View>
          <View style={styles.box2}>
            <View style={styles.row3}>
              <View style={styles.row4}>
                <View accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="lock" size={20} color="#6B7280" strokeWidth={2} /></View>
                {(!ui.hidden('passwordInput')) && (
                  <TextInput testID="Login_PasswordInput" style={[[styles.passwordInput, { borderWidth: 1, borderColor: 'rgba(209, 213, 219, 0.00)', borderRadius: 6, padding: 10, fontSize: 16, backgroundColor: '#fff' }], ui.styleOf('passwordInput')]} placeholder="Password" secureTextEntry value={typeof passwordInput !== 'undefined' ? (passwordInput.text ?? '') : ''} onChangeText={(v) => { if (typeof setPasswordInput === 'function') setPasswordInput(prev => ({...prev, text: v})); }} />
                )}
                <View accessible={true} accessibilityRole="image" style={{ width: 20, height: 20, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="eye" size={20} color="#6B7280" strokeWidth={2} /></View>
              </View>
            </View>
          </View>
          <View style={styles.row5}>
            <View style={styles.row6}>
              <TouchableOpacity testID="Login_Checkbox" accessible={true} accessibilityRole="checkbox" accessibilityState={{"checked":false}} onPress={() => { if (typeof setCheckbox === 'function') setCheckbox(prev => ({...prev, isChecked: !prev.isChecked})); }} style={[styles.checkbox, { flexDirection: 'row', alignItems: 'center', gap: 8 }]}><View style={{ width: 20, height: 20, borderWidth: 2, borderColor: (typeof checkbox !== 'undefined' && checkbox.isChecked) ? colors.primary : '#666', borderRadius: 3, backgroundColor: (typeof checkbox !== 'undefined' && checkbox.isChecked) ? colors.primary : 'transparent', justifyContent: 'center', alignItems: 'center' }}>{(typeof checkbox !== 'undefined' && checkbox.isChecked) && <Text style={{ color: '#fff', fontSize: 11, fontWeight: 'bold' }}>✓</Text>}</View><Text>Remember Me</Text></TouchableOpacity>
            </View>
            <Text testID="Login_ForgotPasswordLink" accessible={true} accessibilityRole="link" accessibilityLabel="Forgot password?" style={[styles.forgotPasswordLink, { color: '#0077E6', textDecorationLine: 'underline' }]}>Forgot password?</Text>
          </View>
          <TouchableOpacity testID="Login_SignInButton" accessible={true} accessibilityRole="button" accessibilityLabel="Sign In" style={[styles.signInButton, { backgroundColor: '#152B61', borderRadius: 30, paddingVertical: 12, paddingHorizontal: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={nf.safely(async () => {
              try {
                await authActions.signIn({ email: mobileNumberOrUsernameInput.text, password: passwordInput.text });
                app.navigate("Home");
              } catch (e) {
                console.error('[Auth signIn]', e);
                Alert.alert("Sign in failed", (e && e.message) ? String(e.message) : 'Please try again.');
              }
            })}>
            <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#fff', fontSize: 16, lineHeight: 24, fontWeight: '600', textAlign: 'center' }}>Sign In</Text>
          </TouchableOpacity>
          <View style={styles.row7}>
            <View style={[styles.divider, { height: 0.01, backgroundColor: '#E5E7EB', alignSelf: 'stretch' }]} />
            <Text style={styles.orContinueWithText}>Or continue with</Text>
            <View style={[styles.divider2, { height: 1, backgroundColor: '#E5E7EB', alignSelf: 'stretch' }]} />
          </View>
          <View style={styles.row8}>
            <View style={styles.column2}>
              <View style={styles.center}>
                <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="chrome" size={24} color="#9CA3AF" strokeWidth={2} /></View>
              </View>
              <Text style={styles.googleText}>Google</Text>
            </View>
            <View style={styles.column3}>
              <View style={styles.center2}>
                <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="apple" size={24} color="#9CA3AF" strokeWidth={2} /></View>
              </View>
              <Text style={styles.appleText}>Apple</Text>
            </View>
            <View style={styles.column4}>
              <View style={styles.center3}>
                <View accessible={true} accessibilityRole="image" style={{ width: 24, height: 24, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="fingerprint" size={24} color="#111827" strokeWidth={2} /></View>
              </View>
              <Text style={styles.biometricText}>Biometric</Text>
            </View>
          </View>
          <View style={styles.row9}>
            <Text style={styles.donTHaveAnText}>Don't have an account? </Text>
            <Text testID="Login_OpenAnAccountLink" accessible={true} accessibilityRole="link" accessibilityLabel="Open an account" style={[styles.openAnAccountLink, { color: '#0077E6', textDecorationLine: 'underline' }]}>Open an account</Text>
          </View>
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
    backgroundColor: '#FFFFFF',
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
  column: {
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
  row: {
    gap: 8,
    marginBottom: 32,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  icon: {
    color: '#2447B5',
  },
  skyBankText: {
    color: '#152B61',
    fontSize: 28,
    fontWeight: '800',
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  welcomeBackHeading: {
    color: '#152B61',
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 4,
  },
  signInToYourText: {
    color: '#6B7280',
    fontSize: 16,
    marginBottom: 24,
  },
  box: {
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
  row2: {
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  icon2: {
    color: '#6B7280',
  },
  mobileNumberOrUsernameInput: {
    color: '#111827',
    fontSize: 16,
    borderColor: 'rgba(209, 213, 219, 0.00)',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  box2: {
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
  row3: {
    gap: 12,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  row4: {
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
  icon3: {
    color: '#6B7280',
  },
  passwordInput: {
    color: '#111827',
    fontSize: 16,
    borderColor: 'rgba(209, 213, 219, 0.00)',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  icon4: {
    color: '#6B7280',
  },
  row5: {
    marginBottom: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
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
    color: '#4B39EF',
    backgroundColor: '#FFFFFF',
  },
  forgotPasswordLink: {
    color: '#2447B5',
    fontSize: 15,
    fontWeight: '700',
  },
  signInButton: {
    height: 56,
    borderRadius: 30,
    marginBottom: 24,
    backgroundColor: '#152B61',
  },
  row7: {
    gap: 12,
    marginBottom: 24,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  divider: {
    backgroundColor: '#E5E7EB',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  orContinueWithText: {
    color: '#6B7280',
    fontSize: 14,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  divider2: {
    backgroundColor: '#E5E7EB',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  row8: {
    gap: 20,
    marginBottom: 40,
    justifyContent: 'center',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  column2: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
  },
  center: {
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
    color: '#9CA3AF',
  },
  googleText: {
    color: '#374151',
    fontSize: 14,
  },
  column3: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
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
  icon6: {
    color: '#9CA3AF',
  },
  appleText: {
    color: '#374151',
    fontSize: 14,
  },
  column4: {
    gap: 8,
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexShrink: 1,
    minWidth: 0,
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
  icon7: {
    color: '#111827',
  },
  biometricText: {
    color: '#374151',
    fontSize: 14,
  },
  row9: {
    gap: 4,
    paddingTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  donTHaveAnText: {
    color: '#6B7280',
    fontSize: 15,
    alignSelf: 'flex-start',
    flexShrink: 0,
  },
  openAnAccountLink: {
    color: '#2447B5',
    fontSize: 15,
    fontWeight: '700',
  },
  });
}
