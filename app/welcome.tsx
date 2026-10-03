import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, Image, Text, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { useLocalSearchParams, useRouter } from 'expo-router';

export default function Welcome() {
  const router = useRouter();
  const routeParams = useLocalSearchParams();

  return (
    <View style={styles.screenRoot}>
      <StatusBar style="auto" />
      <View style={styles.container}>
      <View style={styles.node_484aaeb6_260c_433d_99b1_62300a1fcfd5}>
              <Image source={{ uri: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' fill='none'%3E%3Crect width='600' height='400' fill='%23E2E8F0' rx='4'/%3E%3Ccircle cx='220' cy='150' r='40' fill='%23CBD5E1'/%3E%3Cpath d='M100 300l120-140 100 80 80-60 120 120H100z' fill='%23CBD5E1'/%3E%3C/svg%3E" }} accessibilityLabel="Mountain sunset" resizeMode="cover" style={[styles.node_108509df_5f7b_409e_8c4a_2f4df69cb7a4, { width: '100%', height: 200, alignSelf: 'center' }]} />
              <View style={styles.node_cd46c681_759f_43e2_94b1_7529dbc5f352}>
                        <View style={styles.node_ac45a41f_7298_4389_af64_2a73934e246c}>
                                    <View style={{ width: 40, height: 40, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><Svg viewBox="0 0 24 24" width={40} height={40} fill="none"><G stroke="#FFFFFF" strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M12 5a3 3 0 1 1 3 3m-3-3a3 3 0 1 0-3 3m3-3v1M9 8a3 3 0 1 0 3 3M9 8h1m5 0a3 3 0 1 1-3 3m3-3h-1m-2 3v-1"></Path><Circle cx="12" cy="8" r="2"></Circle><Path d="M12 10v12"></Path><Path d="M12 22c4.2 0 7-1.667 7-5-4.2 0-7 1.667-7 5Z"></Path><Path d="M12 22c-4.2 0-7-1.667-7-5 4.2 0 7 1.667 7 5Z"></Path></G></Svg></View>
                                    <Text style={styles.node_9490fcf4_f865_4e7e_979d_46463397a8da}>SkyBank</Text>
                                    <View style={styles.node_4b1a0706_090c_4228_ba63_18c1c11d748b} />
                                    <Text style={styles.node_21b70f07_4f95_48f4_9308_369f962e8715}>Banking for a brighter tomorrow</Text>
                                    <Text style={styles.node_c9eaff2d_6de8_4232_b2c6_43e5e84f1a27}>Simple. Secure. Always with you.</Text>
                        </View>
                        <View style={styles.node_e13493c2_e5c4_4a7a_a05a_d87af87fb040}>
                                    <TouchableOpacity style={[styles.node_8d2188dd_9cb0_4728_855b_4739ed31f3bc, { backgroundColor: '#FFFFFF', borderRadius: 999, paddingVertical: 16, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                                      <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#1E3A6E', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>Get Started</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={[styles.node_0bfdd9aa_6488_4000_ae77_95cd3e8a4c9a, { backgroundColor: 'transparent', borderRadius: 999, paddingVertical: 16, paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', borderWidth: 1.5, borderColor: 'rgba(255,255,255,0.6)', alignSelf: 'stretch' }]} activeOpacity={0.7}>
                                      <Text style={{ flexGrow: 1, flexShrink: 1, flexBasis: 'auto', color: '#FFFFFF', fontSize: 14, lineHeight: 21, fontWeight: '600', textAlign: 'center' }}>I already have an account</Text>
                                    </TouchableOpacity>
                        </View>
              </View>
      </View>
      </View>
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
  node_484aaeb6_260c_433d_99b1_62300a1fcfd5: {
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
  node_108509df_5f7b_409e_8c4a_2f4df69cb7a4: {
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    bottom: 0,
    height: '100%',
    position: 'absolute',
  },
  node_cd46c681_759f_43e2_94b1_7529dbc5f352: {
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
  node_ac45a41f_7298_4389_af64_2a73934e246c: {
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  node_ac7180d0_09c0_4dd6_b2e8_f6325dec24c7: {
    color: '#FFFFFF',
  },
  node_9490fcf4_f865_4e7e_979d_46463397a8da: {
    color: '#FFFFFF',
    fontSize: 34,
    fontWeight: 'bold',
  },
  node_4b1a0706_090c_4228_ba63_18c1c11d748b: {
    height: 24,
    padding: 0,
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_21b70f07_4f95_48f4_9308_369f962e8715: {
    color: '#FFFFFF',
    fontSize: 36,
    lineHeight: 42,
    fontWeight: 'bold',
  },
  node_c9eaff2d_6de8_4232_b2c6_43e5e84f1a27: {
    color: 'rgba(255,255,255,0.85)',
    fontSize: 17,
  },
  node_e13493c2_e5c4_4a7a_a05a_d87af87fb040: {
    gap: 12,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  node_8d2188dd_9cb0_4728_855b_4739ed31f3bc: {
    color: '#1E3A6E',
    paddingTop: 16,
    borderRadius: 999,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  node_0bfdd9aa_6488_4000_ae77_95cd3e8a4c9a: {
    color: '#FFFFFF',
    paddingTop: 16,
    borderColor: 'rgba(255,255,255,0.6)',
    borderWidth: 1.5,
    borderRadius: 999,
    paddingBottom: 16,
    backgroundColor: 'transparent',
  },
});

