import { Can } from '@/components/Can';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, TextInput } from 'react-native';
import { Svg, Path, Circle, Rect, Line, G, Polyline, Polygon, Ellipse } from 'react-native-svg';
import { default as LucideDynamic } from '../../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { getThemeColors } from '../../config/theme';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { bindUi } from '../../lib/ui';
import * as nfDynamicUi from '../../lib/dynamicUi';
import * as nfVoice from '../../lib/voice';

function AIMintly() {
  const colors = getThemeColors();
  const router = useRouter();
  const routeParams = useLocalSearchParams();
  const [state_c58f0af1_09d2_4b97_8329_6a67b9fd0bfb, setState_c58f0af1_09d2_4b97_8329_6a67b9fd0bfb] = useState({ isBusy: false });
  const [state_400551d6_073b_49ef_9023_97e45ce65507, setState_400551d6_073b_49ef_9023_97e45ce65507] = useState({ text: "", isFocused: false, errorMessage: "", isValid: true });
  const [_uiOv, _setUiOv] = useState({});
  const ui = bindUi(_uiOv, _setUiOv, { "Column 1": "node_25f4b4cd_128c_4d38_b0aa_044a8ba55f53", "Row 1": "node_197618e6_6a58_4ff5_86b2_ec4abf21a149", "Center 1": "node_7cf473f0_9fb3_46c9_b6ea_e1d2adc97516", "Center 2": "node_60b603f5_bc9d_4110_acff_2279c9cb9aab", "Row 2": "node_f03922b6_b9f8_4981_848e_50e17b7a1538", "Box 2": "node_91cb14db_ad0c_47a1_b4a9_3a921a1960fe", "Box 3": "node_1fb014ad_bc4b_46fb_bd13_2e2c1b9ff2c0", "Column 2": "node_dc9e4259_a235_4772_81c9_fcb47ccf56e7", "Text 1": "node_407f530f_19be_46f2_9d7b_92c1fcd94f11", "Text 2": "node_5c4f9d0f_7313_40ef_bc75_1a412cc0fc87", "Column 3": "node_fed856f6_d758_4f41_a0c8_c7ac50b2f8c3", "Center 3": "node_034e1270_f38f_4206_b461_0e16d7e4e62c", "Center 4": "node_01612518_844b_4c2e_8b84_8603fba727eb", "Center 5": "node_d5dc431e_a232_4268_a578_517897205629", "Row 3": "node_7212e92a_8f2d_4270_b88b_9c2f16c7e898", "Box 4": "node_1d848026_6fda_4902_ae90_2853c53d7d5b", "Box 5": "node_f38b9a4c_32be_4e33_887e_7318a11b5c03", "Box 6": "node_495b5e6f_5e31_4e3c_ad39_44cd6dfafc14", "Text 3": "node_faadea75_6825_4237_ad62_4393e1b62883", "Text 4": "node_ead86d71_556a_453d_b04b_bd401f2e9c22", "Column 4": "node_1e6a29ee_b2fc_4769_9d82_c3b35bf7fb05", "Row 4": "node_5e9453b1_412b_406f_8bc2_eeffb3554791", "Pressable 1": "node_53ed257d_9186_489b_b18e_89d3b6825dd2", "Text 5": "node_334ff4cc_398e_4744_b9e6_8919a476c60a", "Pressable 2": "node_ec37f844_1ef8_4a2f_a0f8_43dce9bfefed", "Text 6": "node_601ce714_2405_4fa5_a9b7_299fd0076aa8", "Row 5": "node_03b7e77e_434b_45c3_8f1d_c26a8c461847", "Pressable 3": "node_57cd631b_e1dc_45e1_8c85_91816e0819c7", "Text 7": "node_af306bfa_a0b8_46a9_8286_af021045b709", "Pressable 4": "node_b7630fd2_1d27_4a2f_bf3d_de755742b0ec", "Text 8": "node_58907809_e352_413c_95b9_1bd1bdbba21e", "Dynamic UI": "node_c58f0af1_09d2_4b97_8329_6a67b9fd0bfb", "Row 6": "node_d872f965_2885_414e_a83e_8f899d906701", "Input": "node_400551d6_073b_49ef_9023_97e45ce65507", "Pressable 5": "node_7d0f2c4e_5b1a_4e8f_9c3d_2a6b8e1f4c70", "Icon 1": "node_5e3a9c1d_7f2b_4d6e_8a4c_9b1f3e7d2a65", "Pressable 6": "node_f51b634d_2c63_42b3_bb8a_88e6bd8830f6", "Icon 2": "node_fcef7438_a598_46a0_a976_aac5ea9ce19a", "Text 9": "node_ce1ce562_5a51_4f23_bca1_b668a565c6c7" }, { node_400551d6_073b_49ef_9023_97e45ce65507: setState_400551d6_073b_49ef_9023_97e45ce65507 }, { node_400551d6_073b_49ef_9023_97e45ce65507: ["text"] }, { node_400551d6_073b_49ef_9023_97e45ce65507: state_400551d6_073b_49ef_9023_97e45ce65507 });
  const [question, setQuestion] = useState("");

  return (
    <View style={styles.screenRoot}>
      <StatusBar style="auto" />
      <View style={styles.container}>
      {(!(_uiOv.node_25f4b4cd_128c_4d38_b0aa_044a8ba55f53 && _uiOv.node_25f4b4cd_128c_4d38_b0aa_044a8ba55f53.hidden)) && (
      <View testID="25f4b4cd-128c-4d38-b0aa-044a8ba55f53" style={[styles.node_25f4b4cd_128c_4d38_b0aa_044a8ba55f53, _uiOv.node_25f4b4cd_128c_4d38_b0aa_044a8ba55f53 && _uiOv.node_25f4b4cd_128c_4d38_b0aa_044a8ba55f53.style]}>
              {(!(_uiOv.node_197618e6_6a58_4ff5_86b2_ec4abf21a149 && _uiOv.node_197618e6_6a58_4ff5_86b2_ec4abf21a149.hidden)) && (
              <View testID="197618e6-6a58-4ff5-86b2-ec4abf21a149" style={[styles.node_197618e6_6a58_4ff5_86b2_ec4abf21a149, _uiOv.node_197618e6_6a58_4ff5_86b2_ec4abf21a149 && _uiOv.node_197618e6_6a58_4ff5_86b2_ec4abf21a149.style]}>
                        {(!(_uiOv.node_7cf473f0_9fb3_46c9_b6ea_e1d2adc97516 && _uiOv.node_7cf473f0_9fb3_46c9_b6ea_e1d2adc97516.hidden)) && (
                        <View testID="7cf473f0-9fb3-46c9-b6ea-e1d2adc97516" style={[styles.node_7cf473f0_9fb3_46c9_b6ea_e1d2adc97516, _uiOv.node_7cf473f0_9fb3_46c9_b6ea_e1d2adc97516 && _uiOv.node_7cf473f0_9fb3_46c9_b6ea_e1d2adc97516.style]}>
                                    {(!(_uiOv.node_60b603f5_bc9d_4110_acff_2279c9cb9aab && _uiOv.node_60b603f5_bc9d_4110_acff_2279c9cb9aab.hidden)) && (
                                    <View testID="60b603f5-bc9d-4110-acff-2279c9cb9aab" style={[styles.node_60b603f5_bc9d_4110_acff_2279c9cb9aab, _uiOv.node_60b603f5_bc9d_4110_acff_2279c9cb9aab && _uiOv.node_60b603f5_bc9d_4110_acff_2279c9cb9aab.style]}>
                                                  {(!(_uiOv.node_f03922b6_b9f8_4981_848e_50e17b7a1538 && _uiOv.node_f03922b6_b9f8_4981_848e_50e17b7a1538.hidden)) && (
                                                  <View testID="f03922b6-b9f8-4981-848e-50e17b7a1538" style={[styles.node_f03922b6_b9f8_4981_848e_50e17b7a1538, _uiOv.node_f03922b6_b9f8_4981_848e_50e17b7a1538 && _uiOv.node_f03922b6_b9f8_4981_848e_50e17b7a1538.style]}>
                                                                  {(!(_uiOv.node_91cb14db_ad0c_47a1_b4a9_3a921a1960fe && _uiOv.node_91cb14db_ad0c_47a1_b4a9_3a921a1960fe.hidden)) && (
                                                                  <View testID="91cb14db-ad0c-47a1-b4a9-3a921a1960fe" style={[styles.node_91cb14db_ad0c_47a1_b4a9_3a921a1960fe, _uiOv.node_91cb14db_ad0c_47a1_b4a9_3a921a1960fe && _uiOv.node_91cb14db_ad0c_47a1_b4a9_3a921a1960fe.style]} />
                                                                  )}
                                                                  {(!(_uiOv.node_1fb014ad_bc4b_46fb_bd13_2e2c1b9ff2c0 && _uiOv.node_1fb014ad_bc4b_46fb_bd13_2e2c1b9ff2c0.hidden)) && (
                                                                  <View testID="1fb014ad-bc4b-46fb-bd13-2e2c1b9ff2c0" style={[styles.node_1fb014ad_bc4b_46fb_bd13_2e2c1b9ff2c0, _uiOv.node_1fb014ad_bc4b_46fb_bd13_2e2c1b9ff2c0 && _uiOv.node_1fb014ad_bc4b_46fb_bd13_2e2c1b9ff2c0.style]} />
                                                                  )}
                                                  </View>
                                                  )}
                                    </View>
                                    )}
                        </View>
                        )}
                        {(!(_uiOv.node_dc9e4259_a235_4772_81c9_fcb47ccf56e7 && _uiOv.node_dc9e4259_a235_4772_81c9_fcb47ccf56e7.hidden)) && (
                        <View testID="dc9e4259-a235-4772-81c9-fcb47ccf56e7" style={[styles.node_dc9e4259_a235_4772_81c9_fcb47ccf56e7, _uiOv.node_dc9e4259_a235_4772_81c9_fcb47ccf56e7 && _uiOv.node_dc9e4259_a235_4772_81c9_fcb47ccf56e7.style]}>
                                    {(!(_uiOv.node_407f530f_19be_46f2_9d7b_92c1fcd94f11 && _uiOv.node_407f530f_19be_46f2_9d7b_92c1fcd94f11.hidden)) && (
                                    <Text testID="407f530f-19be-46f2-9d7b-92c1fcd94f11" style={[styles.node_407f530f_19be_46f2_9d7b_92c1fcd94f11, _uiOv.node_407f530f_19be_46f2_9d7b_92c1fcd94f11 && _uiOv.node_407f530f_19be_46f2_9d7b_92c1fcd94f11.style]}>Mintly</Text>
                                    )}
                                    {(!(_uiOv.node_5c4f9d0f_7313_40ef_bc75_1a412cc0fc87 && _uiOv.node_5c4f9d0f_7313_40ef_bc75_1a412cc0fc87.hidden)) && (
                                    <Text testID="5c4f9d0f-7313-40ef-bc75-1a412cc0fc87" style={[styles.node_5c4f9d0f_7313_40ef_bc75_1a412cc0fc87, _uiOv.node_5c4f9d0f_7313_40ef_bc75_1a412cc0fc87 && _uiOv.node_5c4f9d0f_7313_40ef_bc75_1a412cc0fc87.style]}>Your personal money assistant</Text>
                                    )}
                        </View>
                        )}
              </View>
              )}
              {(!(_uiOv.node_fed856f6_d758_4f41_a0c8_c7ac50b2f8c3 && _uiOv.node_fed856f6_d758_4f41_a0c8_c7ac50b2f8c3.hidden)) && (
              <View testID="fed856f6-d758-4f41-a0c8-c7ac50b2f8c3" style={[styles.node_fed856f6_d758_4f41_a0c8_c7ac50b2f8c3, _uiOv.node_fed856f6_d758_4f41_a0c8_c7ac50b2f8c3 && _uiOv.node_fed856f6_d758_4f41_a0c8_c7ac50b2f8c3.style]}>
                        {(!(_uiOv.node_034e1270_f38f_4206_b461_0e16d7e4e62c && _uiOv.node_034e1270_f38f_4206_b461_0e16d7e4e62c.hidden)) && (
                        <View testID="034e1270-f38f-4206-b461-0e16d7e4e62c" style={[styles.node_034e1270_f38f_4206_b461_0e16d7e4e62c, _uiOv.node_034e1270_f38f_4206_b461_0e16d7e4e62c && _uiOv.node_034e1270_f38f_4206_b461_0e16d7e4e62c.style]}>
                                    {(!(_uiOv.node_01612518_844b_4c2e_8b84_8603fba727eb && _uiOv.node_01612518_844b_4c2e_8b84_8603fba727eb.hidden)) && (
                                    <View testID="01612518-844b-4c2e-8b84-8603fba727eb" style={[styles.node_01612518_844b_4c2e_8b84_8603fba727eb, _uiOv.node_01612518_844b_4c2e_8b84_8603fba727eb && _uiOv.node_01612518_844b_4c2e_8b84_8603fba727eb.style]}>
                                                  {(!(_uiOv.node_d5dc431e_a232_4268_a578_517897205629 && _uiOv.node_d5dc431e_a232_4268_a578_517897205629.hidden)) && (
                                                  <View testID="d5dc431e-a232-4268-a578-517897205629" style={[styles.node_d5dc431e_a232_4268_a578_517897205629, _uiOv.node_d5dc431e_a232_4268_a578_517897205629 && _uiOv.node_d5dc431e_a232_4268_a578_517897205629.style]}>
                                                                  {(!(_uiOv.node_7212e92a_8f2d_4270_b88b_9c2f16c7e898 && _uiOv.node_7212e92a_8f2d_4270_b88b_9c2f16c7e898.hidden)) && (
                                                                  <View testID="7212e92a-8f2d-4270-b88b-9c2f16c7e898" style={[styles.node_7212e92a_8f2d_4270_b88b_9c2f16c7e898, _uiOv.node_7212e92a_8f2d_4270_b88b_9c2f16c7e898 && _uiOv.node_7212e92a_8f2d_4270_b88b_9c2f16c7e898.style]}>
                                                                                    {(!(_uiOv.node_1d848026_6fda_4902_ae90_2853c53d7d5b && _uiOv.node_1d848026_6fda_4902_ae90_2853c53d7d5b.hidden)) && (
                                                                                    <View testID="1d848026-6fda-4902-ae90-2853c53d7d5b" style={[styles.node_1d848026_6fda_4902_ae90_2853c53d7d5b, _uiOv.node_1d848026_6fda_4902_ae90_2853c53d7d5b && _uiOv.node_1d848026_6fda_4902_ae90_2853c53d7d5b.style]} />
                                                                                    )}
                                                                                    {(!(_uiOv.node_f38b9a4c_32be_4e33_887e_7318a11b5c03 && _uiOv.node_f38b9a4c_32be_4e33_887e_7318a11b5c03.hidden)) && (
                                                                                    <View testID="f38b9a4c-32be-4e33-887e-7318a11b5c03" style={[styles.node_f38b9a4c_32be_4e33_887e_7318a11b5c03, _uiOv.node_f38b9a4c_32be_4e33_887e_7318a11b5c03 && _uiOv.node_f38b9a4c_32be_4e33_887e_7318a11b5c03.style]} />
                                                                                    )}
                                                                  </View>
                                                                  )}
                                                  </View>
                                                  )}
                                    </View>
                                    )}
                        </View>
                        )}
                        {(!(_uiOv.node_495b5e6f_5e31_4e3c_ad39_44cd6dfafc14 && _uiOv.node_495b5e6f_5e31_4e3c_ad39_44cd6dfafc14.hidden)) && (
                        <View testID="495b5e6f-5e31-4e3c-ad39-44cd6dfafc14" style={[styles.node_495b5e6f_5e31_4e3c_ad39_44cd6dfafc14, _uiOv.node_495b5e6f_5e31_4e3c_ad39_44cd6dfafc14 && _uiOv.node_495b5e6f_5e31_4e3c_ad39_44cd6dfafc14.style]}>
                                    {(!(_uiOv.node_faadea75_6825_4237_ad62_4393e1b62883 && _uiOv.node_faadea75_6825_4237_ad62_4393e1b62883.hidden)) && (
                                    <Text testID="faadea75-6825-4237-ad62-4393e1b62883" style={[styles.node_faadea75_6825_4237_ad62_4393e1b62883, _uiOv.node_faadea75_6825_4237_ad62_4393e1b62883 && _uiOv.node_faadea75_6825_4237_ad62_4393e1b62883.style]}>Hi Prahalad!</Text>
                                    )}
                                    {(!(_uiOv.node_ead86d71_556a_453d_b04b_bd401f2e9c22 && _uiOv.node_ead86d71_556a_453d_b04b_bd401f2e9c22.hidden)) && (
                                    <Text testID="ead86d71-556a-453d-b04b-bd401f2e9c22" style={[styles.node_ead86d71_556a_453d_b04b_bd401f2e9c22, _uiOv.node_ead86d71_556a_453d_b04b_bd401f2e9c22 && _uiOv.node_ead86d71_556a_453d_b04b_bd401f2e9c22.style]}>I'm Mintly, your AI banking assistant. How can I help you today?</Text>
                                    )}
                        </View>
                        )}
                        {(!(_uiOv.node_1e6a29ee_b2fc_4769_9d82_c3b35bf7fb05 && _uiOv.node_1e6a29ee_b2fc_4769_9d82_c3b35bf7fb05.hidden)) && (
                        <View testID="1e6a29ee-b2fc-4769-9d82-c3b35bf7fb05" style={[styles.node_1e6a29ee_b2fc_4769_9d82_c3b35bf7fb05, _uiOv.node_1e6a29ee_b2fc_4769_9d82_c3b35bf7fb05 && _uiOv.node_1e6a29ee_b2fc_4769_9d82_c3b35bf7fb05.style]}>
                                    {(!(_uiOv.node_5e9453b1_412b_406f_8bc2_eeffb3554791 && _uiOv.node_5e9453b1_412b_406f_8bc2_eeffb3554791.hidden)) && (
                                    <View testID="5e9453b1-412b-406f-8bc2-eeffb3554791" style={[styles.node_5e9453b1_412b_406f_8bc2_eeffb3554791, _uiOv.node_5e9453b1_412b_406f_8bc2_eeffb3554791 && _uiOv.node_5e9453b1_412b_406f_8bc2_eeffb3554791.style]}>
                                                  {(!(_uiOv.node_53ed257d_9186_489b_b18e_89d3b6825dd2 && _uiOv.node_53ed257d_9186_489b_b18e_89d3b6825dd2.hidden)) && (
                                                  <TouchableOpacity testID="53ed257d-9186-489b-b18e-89d3b6825dd2" accessible={true} accessibilityRole="button" style={[styles.node_53ed257d_9186_489b_b18e_89d3b6825dd2, _uiOv.node_53ed257d_9186_489b_b18e_89d3b6825dd2 && _uiOv.node_53ed257d_9186_489b_b18e_89d3b6825dd2.style]} activeOpacity={0.7} onPress={() => {
                                                      try {
                                                        nfDynamicUi.ask("c58f0af1-09d2-4b97-8329-6a67b9fd0bfb", "Check my balance");
                                                        ui.hide('fed856f6-d758-4f41-a0c8-c7ac50b2f8c3');
                                                      } catch(e) {
                                                        console.error('[Action Error]', e);
                                                      }
                                                    }}>
                                                                  {(!(_uiOv.node_334ff4cc_398e_4744_b9e6_8919a476c60a && _uiOv.node_334ff4cc_398e_4744_b9e6_8919a476c60a.hidden)) && (
                                                                  <Text testID="334ff4cc-398e-4744-b9e6-8919a476c60a" style={[styles.node_334ff4cc_398e_4744_b9e6_8919a476c60a, _uiOv.node_334ff4cc_398e_4744_b9e6_8919a476c60a && _uiOv.node_334ff4cc_398e_4744_b9e6_8919a476c60a.style]}>Check my balance</Text>
                                                                  )}
                                                  </TouchableOpacity>
                                                  )}
                                                  {(!(_uiOv.node_ec37f844_1ef8_4a2f_a0f8_43dce9bfefed && _uiOv.node_ec37f844_1ef8_4a2f_a0f8_43dce9bfefed.hidden)) && (
                                                  <TouchableOpacity testID="ec37f844-1ef8-4a2f-a0f8-43dce9bfefed" accessible={true} accessibilityRole="button" style={[styles.node_ec37f844_1ef8_4a2f_a0f8_43dce9bfefed, _uiOv.node_ec37f844_1ef8_4a2f_a0f8_43dce9bfefed && _uiOv.node_ec37f844_1ef8_4a2f_a0f8_43dce9bfefed.style]} activeOpacity={0.7} onPress={() => {
                                                      try {
                                                        nfDynamicUi.ask("c58f0af1-09d2-4b97-8329-6a67b9fd0bfb", "Show my recent transactions");
                                                        ui.hide('fed856f6-d758-4f41-a0c8-c7ac50b2f8c3');
                                                      } catch(e) {
                                                        console.error('[Action Error]', e);
                                                      }
                                                    }}>
                                                                  {(!(_uiOv.node_601ce714_2405_4fa5_a9b7_299fd0076aa8 && _uiOv.node_601ce714_2405_4fa5_a9b7_299fd0076aa8.hidden)) && (
                                                                  <Text testID="601ce714-2405-4fa5-a9b7-299fd0076aa8" style={[styles.node_601ce714_2405_4fa5_a9b7_299fd0076aa8, _uiOv.node_601ce714_2405_4fa5_a9b7_299fd0076aa8 && _uiOv.node_601ce714_2405_4fa5_a9b7_299fd0076aa8.style]}>Recent transactions</Text>
                                                                  )}
                                                  </TouchableOpacity>
                                                  )}
                                    </View>
                                    )}
                                    {(!(_uiOv.node_03b7e77e_434b_45c3_8f1d_c26a8c461847 && _uiOv.node_03b7e77e_434b_45c3_8f1d_c26a8c461847.hidden)) && (
                                    <View testID="03b7e77e-434b-45c3-8f1d-c26a8c461847" style={[styles.node_03b7e77e_434b_45c3_8f1d_c26a8c461847, _uiOv.node_03b7e77e_434b_45c3_8f1d_c26a8c461847 && _uiOv.node_03b7e77e_434b_45c3_8f1d_c26a8c461847.style]}>
                                                  {(!(_uiOv.node_57cd631b_e1dc_45e1_8c85_91816e0819c7 && _uiOv.node_57cd631b_e1dc_45e1_8c85_91816e0819c7.hidden)) && (
                                                  <TouchableOpacity testID="57cd631b-e1dc-45e1-8c85-91816e0819c7" accessible={true} accessibilityRole="button" style={[styles.node_57cd631b_e1dc_45e1_8c85_91816e0819c7, _uiOv.node_57cd631b_e1dc_45e1_8c85_91816e0819c7 && _uiOv.node_57cd631b_e1dc_45e1_8c85_91816e0819c7.style]} activeOpacity={0.7} onPress={() => {
                                                      try {
                                                        nfDynamicUi.ask("c58f0af1-09d2-4b97-8329-6a67b9fd0bfb", "Pay a bill");
                                                        ui.hide('fed856f6-d758-4f41-a0c8-c7ac50b2f8c3');
                                                      } catch(e) {
                                                        console.error('[Action Error]', e);
                                                      }
                                                    }}>
                                                                  {(!(_uiOv.node_af306bfa_a0b8_46a9_8286_af021045b709 && _uiOv.node_af306bfa_a0b8_46a9_8286_af021045b709.hidden)) && (
                                                                  <Text testID="af306bfa-a0b8-46a9-8286-af021045b709" style={[styles.node_af306bfa_a0b8_46a9_8286_af021045b709, _uiOv.node_af306bfa_a0b8_46a9_8286_af021045b709 && _uiOv.node_af306bfa_a0b8_46a9_8286_af021045b709.style]}>Pay a bill</Text>
                                                                  )}
                                                  </TouchableOpacity>
                                                  )}
                                                  {(!(_uiOv.node_b7630fd2_1d27_4a2f_bf3d_de755742b0ec && _uiOv.node_b7630fd2_1d27_4a2f_bf3d_de755742b0ec.hidden)) && (
                                                  <TouchableOpacity testID="b7630fd2-1d27-4a2f-bf3d-de755742b0ec" accessible={true} accessibilityRole="button" style={[styles.node_b7630fd2_1d27_4a2f_bf3d_de755742b0ec, _uiOv.node_b7630fd2_1d27_4a2f_bf3d_de755742b0ec && _uiOv.node_b7630fd2_1d27_4a2f_bf3d_de755742b0ec.style]} activeOpacity={0.7} onPress={() => {
                                                      try {
                                                        nfDynamicUi.ask("c58f0af1-09d2-4b97-8329-6a67b9fd0bfb", "Set a savings goal");
                                                        ui.hide('fed856f6-d758-4f41-a0c8-c7ac50b2f8c3');
                                                      } catch(e) {
                                                        console.error('[Action Error]', e);
                                                      }
                                                    }}>
                                                                  {(!(_uiOv.node_58907809_e352_413c_95b9_1bd1bdbba21e && _uiOv.node_58907809_e352_413c_95b9_1bd1bdbba21e.hidden)) && (
                                                                  <Text testID="58907809-e352-413c-95b9-1bd1bdbba21e" style={[styles.node_58907809_e352_413c_95b9_1bd1bdbba21e, _uiOv.node_58907809_e352_413c_95b9_1bd1bdbba21e && _uiOv.node_58907809_e352_413c_95b9_1bd1bdbba21e.style]}>Set a savings goal</Text>
                                                                  )}
                                                  </TouchableOpacity>
                                                  )}
                                    </View>
                                    )}
                        </View>
                        )}
              </View>
              )}
              {(!(_uiOv.node_c58f0af1_09d2_4b97_8329_6a67b9fd0bfb && _uiOv.node_c58f0af1_09d2_4b97_8329_6a67b9fd0bfb.hidden)) && (
              <View testID="c58f0af1-09d2-4b97-8329-6a67b9fd0bfb" style={[styles.node_c58f0af1_09d2_4b97_8329_6a67b9fd0bfb, _uiOv.node_c58f0af1_09d2_4b97_8329_6a67b9fd0bfb && _uiOv.node_c58f0af1_09d2_4b97_8329_6a67b9fd0bfb.style]}><nfDynamicUi.DynamicUI id={"2943c509-94e8-464a-a5ff-8e823c67efc1"} nodeId={"c58f0af1-09d2-4b97-8329-6a67b9fd0bfb"} placeholder={"Type your question..."} questionWidth={"fit"} answerWidth={"full"} questionAlign={"right"} questionStyle={"Question bubble"} answerStyle={"Answer bubble"} showComposer={false} onBusyChange={(b) => setState_c58f0af1_09d2_4b97_8329_6a67b9fd0bfb((s) => ({ ...s, isBusy: b }))} /></View>
              )}
              {(!(_uiOv.node_d872f965_2885_414e_a83e_8f899d906701 && _uiOv.node_d872f965_2885_414e_a83e_8f899d906701.hidden)) && (
              <View testID="d872f965-2885-414e-a83e-8f899d906701" style={[styles.node_d872f965_2885_414e_a83e_8f899d906701, _uiOv.node_d872f965_2885_414e_a83e_8f899d906701 && _uiOv.node_d872f965_2885_414e_a83e_8f899d906701.style]}>
                        {(!(_uiOv.node_400551d6_073b_49ef_9023_97e45ce65507 && _uiOv.node_400551d6_073b_49ef_9023_97e45ce65507.hidden)) && (
                        <TextInput testID="400551d6-073b-49ef-9023-97e45ce65507" accessible={true} accessibilityRole="button" style={[[styles.node_400551d6_073b_49ef_9023_97e45ce65507, { borderWidth: 0, borderColor: '#D1D5DB', borderRadius: 26, padding: 10, fontSize: 16, backgroundColor: 'transparent', maxHeight: 120, textAlignVertical: 'top', fieldSizing: 'content' }], _uiOv.node_400551d6_073b_49ef_9023_97e45ce65507 && _uiOv.node_400551d6_073b_49ef_9023_97e45ce65507.style]} placeholder="Ask anything" multiline value={question ?? ''} onChangeText={(v) => { if (typeof setState_400551d6_073b_49ef_9023_97e45ce65507 === 'function') setState_400551d6_073b_49ef_9023_97e45ce65507(prev => ({...prev, text: v})); setQuestion(v); }} onSubmitEditing={() => {
                            try {
                              nfDynamicUi.ask("c58f0af1-09d2-4b97-8329-6a67b9fd0bfb", question);
                              ui.hide('fed856f6-d758-4f41-a0c8-c7ac50b2f8c3');
                              setQuestion((prev) => Array.isArray(prev) ? [] : (prev && typeof prev === 'object') ? {} : typeof prev === 'number' ? 0 : typeof prev === 'boolean' ? false : '');
                            } catch(e) {
                              console.error('[Action Error]', e);
                            }
                          }} />
                        )}
                        {(!(_uiOv.node_7d0f2c4e_5b1a_4e8f_9c3d_2a6b8e1f4c70 && _uiOv.node_7d0f2c4e_5b1a_4e8f_9c3d_2a6b8e1f4c70.hidden)) && (
                        <TouchableOpacity testID="7d0f2c4e-5b1a-4e8f-9c3d-2a6b8e1f4c70" accessible={true} accessibilityRole="button" style={[styles.node_7d0f2c4e_5b1a_4e8f_9c3d_2a6b8e1f4c70, _uiOv.node_7d0f2c4e_5b1a_4e8f_9c3d_2a6b8e1f4c70 && _uiOv.node_7d0f2c4e_5b1a_4e8f_9c3d_2a6b8e1f4c70.style]} activeOpacity={0.7} onPress={() => { try { void nfVoice.toggle({ lang: undefined, onText: (text) => setQuestion(text) }); } catch(e) { console.error('[Action Error]', e); } }}>
                                    {(!(_uiOv.node_5e3a9c1d_7f2b_4d6e_8a4c_9b1f3e7d2a65 && _uiOv.node_5e3a9c1d_7f2b_4d6e_8a4c_9b1f3e7d2a65.hidden)) && (
                                    <View testID="5e3a9c1d-7f2b-4d6e-8a4c-9b1f3e7d2a65" accessible={true} accessibilityRole="image" style={[{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }, _uiOv.node_5e3a9c1d_7f2b_4d6e_8a4c_9b1f3e7d2a65 && _uiOv.node_5e3a9c1d_7f2b_4d6e_8a4c_9b1f3e7d2a65.style]}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke={((_uiOv.node_5e3a9c1d_7f2b_4d6e_8a4c_9b1f3e7d2a65 && _uiOv.node_5e3a9c1d_7f2b_4d6e_8a4c_9b1f3e7d2a65.style && _uiOv.node_5e3a9c1d_7f2b_4d6e_8a4c_9b1f3e7d2a65.style.color) || '#2541B2')} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"></Path><Path d="M19 10v2a7 7 0 0 1-14 0v-2"></Path><Line x1="12" x2="12" y1="19" y2="22"></Line></G></Svg></View>
                                    )}
                        </TouchableOpacity>
                        )}
                        {(!(_uiOv.node_f51b634d_2c63_42b3_bb8a_88e6bd8830f6 && _uiOv.node_f51b634d_2c63_42b3_bb8a_88e6bd8830f6.hidden)) && (
                        <TouchableOpacity testID="f51b634d-2c63-42b3-bb8a-88e6bd8830f6" accessible={true} accessibilityRole="button" style={[styles.node_f51b634d_2c63_42b3_bb8a_88e6bd8830f6, _uiOv.node_f51b634d_2c63_42b3_bb8a_88e6bd8830f6 && _uiOv.node_f51b634d_2c63_42b3_bb8a_88e6bd8830f6.style]} activeOpacity={0.7} onPress={() => {
                            try {
                              nfDynamicUi.ask("c58f0af1-09d2-4b97-8329-6a67b9fd0bfb", question);
                              ui.hide('fed856f6-d758-4f41-a0c8-c7ac50b2f8c3');
                              setQuestion((prev) => Array.isArray(prev) ? [] : (prev && typeof prev === 'object') ? {} : typeof prev === 'number' ? 0 : typeof prev === 'boolean' ? false : '');
                            } catch(e) {
                              console.error('[Action Error]', e);
                            }
                          }}>
                                    {(!(_uiOv.node_fcef7438_a598_46a0_a976_aac5ea9ce19a && _uiOv.node_fcef7438_a598_46a0_a976_aac5ea9ce19a.hidden)) && (
                                    <View testID="fcef7438-a598-46a0-a976-aac5ea9ce19a" accessible={true} accessibilityRole="image" style={[{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }, _uiOv.node_fcef7438_a598_46a0_a976_aac5ea9ce19a && _uiOv.node_fcef7438_a598_46a0_a976_aac5ea9ce19a.style]}><Svg viewBox="0 0 24 24" width={22} height={22} fill="none"><G stroke={((_uiOv.node_fcef7438_a598_46a0_a976_aac5ea9ce19a && _uiOv.node_fcef7438_a598_46a0_a976_aac5ea9ce19a.style && _uiOv.node_fcef7438_a598_46a0_a976_aac5ea9ce19a.style.color) || '#FFFFFF')} strokeWidth={2} fill="none" strokeLinecap="round" strokeLinejoin="round"><Path d="M5 12h14"></Path><Path d="m12 5 7 7-7 7"></Path></G></Svg></View>
                                    )}
                        </TouchableOpacity>
                        )}
              </View>
              )}
              {(!(_uiOv.node_ce1ce562_5a51_4f23_bca1_b668a565c6c7 && _uiOv.node_ce1ce562_5a51_4f23_bca1_b668a565c6c7.hidden)) && (
              <Text testID="ce1ce562-5a51-4f23-bca1-b668a565c6c7" style={[styles.node_ce1ce562_5a51_4f23_bca1_b668a565c6c7, _uiOv.node_ce1ce562_5a51_4f23_bca1_b668a565c6c7 && _uiOv.node_ce1ce562_5a51_4f23_bca1_b668a565c6c7.style]}>Mintly can make mistakes. Always verify critical information.</Text>
              )}
      </View>
      )}
      </View>
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
    backgroundColor: '#F3F4F8',
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
    flexGrow: 1,
    minHeight: '100%',
  },
  node_25f4b4cd_128c_4d38_b0aa_044a8ba55f53: {
    gap: 0,
    paddingTop: 45,
    backgroundColor: colors.background,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    minHeight: 0,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_197618e6_6a58_4ff5_86b2_ec4abf21a149: {
    gap: 16,
    alignItems: 'stretch',
    paddingTop: 24,
    paddingLeft: 20,
    paddingRight: 20,
    paddingBottom: 8,
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_7cf473f0_9fb3_46c9_b6ea_e1d2adc97516: {
    width: 64,
    height: 64,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":8,"shadowOpacity":0.08},
    boxShadow: '0px 2px 8px rgba(0,0,0,0.08)',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  node_60b603f5_bc9d_4110_acff_2279c9cb9aab: {
    width: 44,
    height: 28,
    alignItems: 'center',
    borderRadius: 16,
    justifyContent: 'center',
    backgroundColor: '#0D1B4C',
  },
  node_f03922b6_b9f8_4981_848e_50e17b7a1538: {
    gap: 6,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_91cb14db_ad0c_47a1_b4a9_3a921a1960fe: {
    width: 7,
    height: 7,
    padding: 0,
    borderRadius: 4,
    backgroundColor: '#3DDC97',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_1fb014ad_bc4b_46fb_bd13_2e2c1b9ff2c0: {
    width: 7,
    height: 7,
    padding: 0,
    borderRadius: 4,
    backgroundColor: '#3DDC97',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_dc9e4259_a235_4772_81c9_fcb47ccf56e7: {
    gap: 2,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
    alignSelf: 'flex-start',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
    overflow: 'hidden',
  },
  node_407f530f_19be_46f2_9d7b_92c1fcd94f11: {
    color: '#0D1B4C',
    fontSize: 28,
    fontWeight: '800',
  },
  node_5c4f9d0f_7313_40ef_bc75_1a412cc0fc87: {
    color: '#6B7280',
    fontSize: 14,
  },
  node_fed856f6_d758_4f41_a0c8_c7ac50b2f8c3: {
    gap: 0,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  node_034e1270_f38f_4206_b461_0e16d7e4e62c: {
    marginTop: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  node_01612518_844b_4c2e_8b84_8603fba727eb: {
    width: 110,
    height: 110,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":4},"shadowRadius":16,"shadowOpacity":0.08},
    boxShadow: '0px 4px 16px rgba(0,0,0,0.08)',
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  node_d5dc431e_a232_4268_a578_517897205629: {
    width: 72,
    height: 46,
    alignItems: 'center',
    borderRadius: 24,
    justifyContent: 'center',
    backgroundColor: '#0D1B4C',
  },
  node_7212e92a_8f2d_4270_b88b_9c2f16c7e898: {
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_1d848026_6fda_4902_ae90_2853c53d7d5b: {
    width: 12,
    height: 12,
    padding: 0,
    borderRadius: 6,
    backgroundColor: '#3DDC97',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_f38b9a4c_32be_4e33_887e_7318a11b5c03: {
    width: 12,
    height: 12,
    padding: 0,
    borderRadius: 6,
    backgroundColor: '#3DDC97',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_495b5e6f_5e31_4e3c_ad39_44cd6dfafc14: {
    padding: 20,
    marginLeft: 20,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    marginRight: 20,
    borderRadius: 20,
    backgroundColor: '#FFFFFF',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    gap: 8,
    flexWrap: 'nowrap',
    overflow: 'visible',
  },
  node_faadea75_6825_4237_ad62_4393e1b62883: {
    color: '#0D1B4C',
    fontSize: 20,
    fontWeight: '700',
  },
  node_ead86d71_556a_453d_b04b_bd401f2e9c22: {
    color: '#374151',
    fontSize: 16,
    lineHeight: 22,
  },
  node_1e6a29ee_b2fc_4769_9d82_c3b35bf7fb05: {
    gap: 10,
    marginTop: 16,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  node_5e9453b1_412b_406f_8bc2_eeffb3554791: {
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_53ed257d_9186_489b_b18e_89d3b6825dd2: {
    paddingTop: 16,
    borderColor: '#C7D2FE',
    borderWidth: 1,
    paddingLeft: 16,
    borderRadius: 24,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  node_334ff4cc_398e_4744_b9e6_8919a476c60a: {
    color: '#1E3A8A',
    fontSize: 15,
    fontWeight: '700',
  },
  node_ec37f844_1ef8_4a2f_a0f8_43dce9bfefed: {
    paddingTop: 16,
    borderColor: '#C7D2FE',
    borderWidth: 1,
    paddingLeft: 16,
    borderRadius: 24,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  node_601ce714_2405_4fa5_a9b7_299fd0076aa8: {
    color: '#1E3A8A',
    fontSize: 15,
    fontWeight: '700',
  },
  node_03b7e77e_434b_45c3_8f1d_c26a8c461847: {
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_57cd631b_e1dc_45e1_8c85_91816e0819c7: {
    paddingTop: 16,
    borderColor: '#C7D2FE',
    borderWidth: 1,
    paddingLeft: 16,
    borderRadius: 24,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  node_af306bfa_a0b8_46a9_8286_af021045b709: {
    color: '#1E3A8A',
    fontSize: 15,
    fontWeight: '700',
  },
  node_b7630fd2_1d27_4a2f_bf3d_de755742b0ec: {
    paddingTop: 16,
    borderColor: '#C7D2FE',
    borderWidth: 1,
    paddingLeft: 16,
    borderRadius: 24,
    paddingRight: 16,
    paddingBottom: 16,
    backgroundColor: '#FFFFFF',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  node_58907809_e352_413c_95b9_1bd1bdbba21e: {
    color: '#1E3A8A',
    fontSize: 15,
    fontWeight: '700',
  },
  node_c58f0af1_09d2_4b97_8329_6a67b9fd0bfb: {
    minHeight: 0,
    paddingTop: 8,
    paddingLeft: 20,
    paddingRight: 20,
    flexGrow: 1,
    flexShrink: 0,
  },
  node_d872f965_2885_414e_a83e_8f899d906701: {
    gap: 8,
    _rnShadow: {"shadowColor":"#000000","shadowOffset":{"width":0,"height":4},"shadowRadius":12,"shadowOpacity":0.12},
    boxShadow: '0px 4px 12px rgba(0,0,0,0.12)',
    alignItems: 'center',
    marginLeft: 4,
    paddingTop: 6,
    marginRight: 4,
    paddingLeft: 6,
    borderRadius: 999,
    marginBottom: 8,
    paddingRight: 6,
    paddingBottom: 6,
    backgroundColor: '#FFFFFF',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  node_400551d6_073b_49ef_9023_97e45ce65507: {
    color: '#111827',
    fontSize: 15,
    minHeight: 36,
    borderColor: '#D1D5DB',
    borderWidth: 0,
    paddingLeft: 10,
    borderRadius: 26,
    backgroundColor: 'transparent',
    flexGrow: 1,
    flexShrink: 1,
    flexBasis: 0,
    minWidth: 0,
  },
  node_7d0f2c4e_5b1a_4e8f_9c3d_2a6b8e1f4c70: {
    width: 36,
    height: 44,
    alignItems: 'center',
    borderColor: '#C7D2FE',
    borderWidth: 1,
    borderRadius: 26,
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  node_5e3a9c1d_7f2b_4d6e_8a4c_9b1f3e7d2a65: {
    color: '#2541B2',
  },
  node_f51b634d_2c63_42b3_bb8a_88e6bd8830f6: {
    width: 44,
    height: 44,
    alignItems: 'center',
    borderRadius: 22,
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  node_fcef7438_a598_46a0_a976_aac5ea9ce19a: {
    color: '#FFFFFF',
  },
  node_ce1ce562_5a51_4f23_bca1_b668a565c6c7: {
    color: '#9CA3AF',
    fontSize: 12,
    textAlign: 'center',
  },
  });
}

export default function AIMintlyGuarded(props: any) {
  return <Can permissions={[]} redirectTo={"Login"}><AIMintly {...props} /></Can>;
}
