import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { default as LucideDynamic } from '../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getThemeColors } from '../config/theme';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { appRuntime as app } from '../lib/app';
import * as nf from '../lib/runtime';

export default function CheckEmail() {
  const colors = getThemeColors();
  const router = useRouter();
  const routeParams = useLocalSearchParams();

  return (
    <SafeAreaView edges={["top","bottom","left","right"]} style={styles.screenRoot}>
      <ScrollView
        style={styles.container}
        contentContainerStyle={styles.containerContent}
      >
        <StatusBar style="auto" />
        <View style={styles.form}>
          <View style={styles.box}>
            <View accessible={true} accessibilityRole="image" style={{ width: 28, height: 28, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="mail" size={28} color="#6366F1" strokeWidth={2} /></View>
          </View>
          <View style={styles.box2}>
            <Text accessibilityRole="header" style={styles.checkEmailHeading}>Check email</Text>
            <Text style={styles.weSentAResetText}>We sent a reset link to your inbox</Text>
          </View>
          <Text style={styles.linkExpiresIn60Text}>Link expires in 60 minutes</Text>
          <TouchableOpacity testID="CheckEmail_BackToSignInButton" accessible={true} accessibilityRole="button" accessibilityLabel="Back to sign in" style={[styles.backToSignInButton, { backgroundColor: '#0077E6', borderRadius: 8, paddingVertical: 6, paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={nf.safely(() => { app.navigate("Login"); })}>
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
  checkEmailHeading: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  weSentAResetText: {
    color: '#6B7280',
    fontSize: 14,
  },
  linkExpiresIn60Text: {
    color: '#6B7280',
    fontSize: 14,
  },
  });
}
