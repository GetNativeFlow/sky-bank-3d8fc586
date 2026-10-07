import React, { useState, useEffect } from 'react';
import { StyleSheet, ScrollView, View, TouchableOpacity, Text, ActivityIndicator } from 'react-native';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { getThemeColors } from '../config/theme';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { appRuntime as app } from '../lib/app';

export default function CheckEmail() {
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
      <View testID="551db6c0-9448-4988-b5bb-717630afdfc0" style={styles.node_551db6c0_9448_4988_b5bb_717630afdfc0}>
              <View testID="b87cc221-d397-4e17-9dac-6be4a659ad85" style={styles.node_b87cc221_d397_4e17_9dac_6be4a659ad85}>
                        <View testID="062a8e06-6583-4881-826c-4bb2066738f6" accessible={true} accessibilityRole="image" style={{ width: 28, height: 28, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={28} height={28} fill="none"><G stroke="#6366F1" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Rect width="20" height="16" x="2" y="4" rx="2"></Rect><Path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></Path></G></Svg></View>
              </View>
              <View testID="7359f0cc-1386-4224-a122-cb15c262e514" style={styles.node_7359f0cc_1386_4224_a122_cb15c262e514}>
                        <Text testID="a6dac983-540d-4b59-86e3-d14de0586d47" accessibilityRole="header" style={styles.node_a6dac983_540d_4b59_86e3_d14de0586d47}>Check email</Text>
                        <Text testID="fb86c0e2-2a58-45c6-8f60-8744639afa4a" style={styles.node_fb86c0e2_2a58_45c6_8f60_8744639afa4a}>We sent a reset link to your inbox</Text>
              </View>
              <Text testID="006dad13-63f1-40d3-8445-193b080944cc" style={styles.node_006dad13_63f1_40d3_8445_193b080944cc}>Link expires in 60 minutes</Text>
              <TouchableOpacity testID="3d898b6d-7b12-4119-aaa3-41cdeb974788" accessible={true} accessibilityRole="button" accessibilityLabel="Back to sign in" style={[styles.node_3d898b6d_7b12_4119_aaa3_41cdeb974788, { backgroundColor: '#0077E6', borderRadius: 8, paddingVertical: 6, paddingHorizontal: 12, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7} onPress={() => { try { app.navigate("Login"); } catch(e) { console.error('[Action Error]', e); } }}>
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
  node_551db6c0_9448_4988_b5bb_717630afdfc0: {
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
  node_b87cc221_d397_4e17_9dac_6be4a659ad85: {
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
  node_062a8e06_6583_4881_826c_4bb2066738f6: {
    color: '#6366F1',
  },
  node_7359f0cc_1386_4224_a122_cb15c262e514: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: 6,
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_a6dac983_540d_4b59_86e3_d14de0586d47: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  node_fb86c0e2_2a58_45c6_8f60_8744639afa4a: {
    color: '#6B7280',
    fontSize: 14,
  },
  node_006dad13_63f1_40d3_8445_193b080944cc: {
    color: '#6B7280',
    fontSize: 14,
  },
  });
}
