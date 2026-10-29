import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { default as LucideDynamic } from '../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Welcome() {
  const router = useRouter();
  const routeParams = useLocalSearchParams();

  return (
    <SafeAreaView edges={["top","bottom","left","right"]} style={styles.screenRoot}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.box}>
          <Image accessible={true} accessibilityRole="image" source={{ uri: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' fill='none'%3E%3Crect width='600' height='400' fill='%23E2E8F0' rx='4'/%3E%3Ccircle cx='220' cy='150' r='40' fill='%23CBD5E1'/%3E%3Cpath d='M100 300l120-140 100 80 80-60 120 120H100z' fill='%23CBD5E1'/%3E%3C/svg%3E" }} accessibilityLabel="Mountain sunset" resizeMode="cover" style={[styles.mountainSunsetImage, { width: '100%', height: 200, alignSelf: 'center' }]} />
          <View style={styles.box2}>
            <View style={styles.column}>
              <View accessible={true} accessibilityRole="image" style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="flower-2" size={40} color="#FFFFFF" strokeWidth={2} /></View>
              <Text accessibilityRole="header" style={styles.skyBankHeading}>SkyBank</Text>
              <View style={styles.box3} />
              <Text accessibilityRole="header" style={styles.bankingForABrighterHeading}>Banking for a brighter tomorrow</Text>
              <Text style={styles.simpleSecureAlwaysWithText}>Simple. Secure. Always with you.</Text>
            </View>
            <View style={styles.column2}>
              <TouchableOpacity testID="Welcome_GetStartedButton" accessible={true} accessibilityRole="button" accessibilityLabel="Get Started" style={[styles.getStartedButton, { backgroundColor: '#FFFFFF', borderRadius: 999, paddingVertical: 16, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#1E3A6E', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Get Started</Text>
              </TouchableOpacity>
              <TouchableOpacity testID="Welcome_IAlreadyHaveAnButton" accessible={true} accessibilityRole="button" accessibilityLabel="I already have an account" style={[styles.iAlreadyHaveAnButton, { backgroundColor: 'transparent', borderRadius: 999, paddingVertical: 16, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.6)', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#FFFFFF', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>I already have an account</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
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
    backgroundColor: '#2B3F73',
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
    flexGrow: 1,
    minHeight: '100%',
  },
  box: {
    padding: 0,
    overflow: 'visible',
    position: 'relative',
    backgroundColor: '#1E3A6E',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  mountainSunsetImage: {
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    bottom: 0,
    height: '100%',
    position: 'absolute',
  },
  box2: {
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    position: 'absolute',
    paddingTop: 64,
    paddingLeft: 24,
    paddingRight: 24,
    paddingBottom: 40,
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  column: {
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  icon: {
    color: '#FFFFFF',
  },
  skyBankHeading: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: 'bold',
  },
  box3: {
    height: 24,
    padding: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  bankingForABrighterHeading: {
    color: '#FFFFFF',
    fontSize: 36,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  simpleSecureAlwaysWithText: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 17,
  },
  column2: {
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  getStartedButton: {
    color: '#1E3A6E',
    paddingTop: 16,
    borderRadius: 999,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  iAlreadyHaveAnButton: {
    color: '#FFFFFF',
    paddingTop: 16,
    borderColor: 'rgba(255,255,255,0.6)',
    borderWidth: 1.5,
    borderRadius: 999,
    paddingBottom: 16,
    backgroundColor: 'transparent',
  },
});

