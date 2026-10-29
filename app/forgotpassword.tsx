import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, TextInput, ActivityIndicator, Alert } from 'react-native';
import { default as LucideDynamic } from '../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getThemeColors } from '../config/theme';
import { useAuthActions } from '../lib/auth/useAuth';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { appRuntime as app } from '../lib/app';
import * as nf from '../lib/runtime';

export default function ForgotPassword() {
  const colors = getThemeColors();
  const authActions = useAuthActions();
  const router = useRouter();
  const routeParams = useLocalSearchParams();
  const [youExampleComInput, setYouExampleComInput] = useState({ text: "", isFocused: false, errorMessage: "", isValid: true });
  const [youExampleComInputErrors, setYouExampleComInputErrors] = useState([]);
  const [youExampleComInputTouched, setYouExampleComInputTouched] = useState(false);
  function validateYouExampleComInput(value) {
    const errs = [];
    if (!value || (typeof value === 'string' && !value.trim())) errs.push('This field is required');
    setYouExampleComInputErrors(errs);
    return errs;
  }

  return (
    <SafeAreaView edges={["top","bottom","left","right"]} style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
        <StatusBar style="auto" />
        <View style={styles.form}>
          <View style={styles.box}>
            <View accessible={true} accessibilityRole="image" style={{ width: 28, height: 28, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="key-round" size={28} color="#6366F1" strokeWidth={2} /></View>
          </View>
          <View style={styles.box2}>
            <Text accessibilityRole="header" style={styles.resetPasswordHeading}>Reset password</Text>
            <Text style={styles.enterYourEmailAndText}>Enter your email and we'll send a reset link</Text>
          </View>
          <View style={styles.box3}>
            <Text style={styles.emailText}>Email</Text>
            <View testID="ForgotPassword_YouExampleComInput"><TextInput style={[styles.youExampleComInput, { borderWidth: 1, borderColor: '#ccc', borderRadius: 6, padding: 10, fontSize: 16, backgroundColor: '#fff' }, (youExampleComInputTouched && youExampleComInputErrors.length > 0 ? { borderColor: '#dc2626', borderWidth: 2 } : {})]} placeholder="you@example.com" keyboardType="email-address" value={typeof youExampleComInput !== 'undefined' ? (youExampleComInput.text ?? '') : ''} onChangeText={(v) => { if (typeof setYouExampleComInput === 'function') setYouExampleComInput(prev => ({...prev, text: v})); }} onBlur={() => { setYouExampleComInputTouched(true); validateYouExampleComInput(typeof youExampleComInput !== 'undefined' ? (youExampleComInput.text ?? '') : ''); }} />
              {youExampleComInputTouched && youExampleComInputErrors.length > 0 && <Text style={{ color: '#dc2626', fontSize: 12, marginTop: 4 }}>{youExampleComInputErrors[0]}</Text>}
            </View>
          </View>
          <TouchableOpacity testID="ForgotPassword_SendResetLinkButton" accessible={true} accessibilityRole="button" accessibilityLabel="Send reset link" style={[styles.sendResetLinkButton, { backgroundColor: '#0077E6', borderRadius: 8, paddingVertical: 10, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={() => {
          let _formValid = true;
            setYouExampleComInputTouched(true);
            if (validateYouExampleComInput(typeof youExampleComInput !== 'undefined' ? (youExampleComInput.text ?? '') : '').length > 0) _formValid = false;
            if (!_formValid) return;
            (nf.safely(async () => {
              try {
                await authActions.resetPassword({ email: youExampleComInput.text });
                app.navigate("Check Email");
              } catch (e) {
                console.error('[Auth resetPassword]', e);
                Alert.alert("Could not send reset link", (e && e.message) ? String(e.message) : 'Please try again.');
              }
            }))();
          }}>
            <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#fff', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Send reset link</Text>
          </TouchableOpacity>
          <TouchableOpacity testID="ForgotPassword_BackToSignInButton" accessible={true} accessibilityRole="button" accessibilityLabel="Back to sign in" style={[styles.backToSignInButton, { backgroundColor: '#0077E6', borderRadius: 8, paddingVertical: 6, paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={nf.safely(() => { app.navigate("Login"); })}>
            <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#fff', fontSize: 12, lineHeight: 18, fontWeight: '600', textAlign: 'center' }}>Back to sign in</Text>
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
  form: {
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
  box: {
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
  icon: {
    color: '#6366F1',
  },
  box2: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: 6,
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  resetPasswordHeading: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  enterYourEmailAndText: {
    color: '#6B7280',
    fontSize: 14,
  },
  box3: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: 6,
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  emailText: {
    color: colors.primarytext,
    fontSize: 14,
    fontWeight: 'bold',
  },
  });
}
