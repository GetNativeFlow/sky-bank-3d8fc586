import { Can } from '@/components/Can';
import React, { useState, useEffect } from 'react';
import { StyleSheet, View, TouchableOpacity, ScrollView, Text, TextInput, ActivityIndicator } from 'react-native';
import { default as LucideDynamic } from '../../components/LucideDynamic';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import { getThemeColors } from '../../config/theme';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { bindUi } from '../../lib/ui';
import * as nf from '../../lib/runtime';
import * as nfDynamicUi from '../../lib/dynamicUi';
import * as nfVoice from '../../lib/voice';
import { getThemeColors as nfVoiceColors } from '../../config/theme';

function AIMintly() {
  const colors = getThemeColors();
  const router = useRouter();
  const routeParams = useLocalSearchParams();
  const [typeYourQuestionDynamicUI, setTypeYourQuestionDynamicUI] = useState({ isBusy: false });
  const [askAnythingInput, setAskAnythingInput] = useState({ text: "", isFocused: false, errorMessage: "", isValid: true });
  const [_uiOv, _setUiOv] = useState({});
  const ui = bindUi(_uiOv, _setUiOv, { "Column 3": "column3" }, {  }, {  }, {  }, { "fed856f6-d758-4f41-a0c8-c7ac50b2f8c3": "column3" });
  const voiceState = nfVoice.useVoiceState();
  const voiceColors = nfVoiceColors();
  const [question, setQuestion] = useState("");

  return (
    <SafeAreaView edges={["top","left","right"]} style={styles.screenRoot}>
      <StatusBar style="auto" />
      <View style={styles.container}>
        <View style={styles.column}>
          <View style={styles.row}>
            <View style={styles.center}>
              <View style={styles.center2}>
                <View style={styles.row2}>
                  <View style={styles.box} />
                  <View style={styles.box2} />
                </View>
              </View>
            </View>
            <View style={styles.column2}>
              <Text style={styles.mintlyText}>Mintly</Text>
              <Text style={styles.yourPersonalMoneyAssistantText}>Your personal money assistant</Text>
            </View>
          </View>
          {(!ui.hidden('column3')) && (
            <View style={[styles.column3, ui.styleOf('column3')]}>
              <View style={styles.center3}>
                <View style={styles.center4}>
                  <View style={styles.center5}>
                    <View style={styles.row3}>
                      <View style={styles.box3} />
                      <View style={styles.box4} />
                    </View>
                  </View>
                </View>
              </View>
              <View style={styles.box5}>
                <Text style={styles.hiPrahaladText}>Hi Prahalad!</Text>
                <Text style={styles.iMMintlyYourText}>I'm Mintly, your AI banking assistant. How can I help you today?</Text>
              </View>
              <View style={styles.column4}>
                <View style={styles.row4}>
                  <TouchableOpacity testID="AIMintly_Pressable" accessible={true} accessibilityRole="button" style={styles.pressable} activeOpacity={0.7} onPress={nf.safely(() => {
                      nfDynamicUi.ask("c58f0af1-09d2-4b97-8329-6a67b9fd0bfb", "Check my balance");
                      ui.hide('fed856f6-d758-4f41-a0c8-c7ac50b2f8c3');
                    })}>
                    <Text style={styles.checkMyBalanceText}>Check my balance</Text>
                  </TouchableOpacity>
                  <TouchableOpacity testID="AIMintly_Pressable2" accessible={true} accessibilityRole="button" style={styles.pressable2} activeOpacity={0.7} onPress={nf.safely(() => {
                      nfDynamicUi.ask("c58f0af1-09d2-4b97-8329-6a67b9fd0bfb", "Show my recent transactions");
                      ui.hide('fed856f6-d758-4f41-a0c8-c7ac50b2f8c3');
                    })}>
                    <Text style={styles.recentTransactionsText}>Recent transactions</Text>
                  </TouchableOpacity>
                </View>
                <View style={styles.row5}>
                  <TouchableOpacity testID="AIMintly_Pressable3" accessible={true} accessibilityRole="button" style={styles.pressable3} activeOpacity={0.7} onPress={nf.safely(() => {
                      nfDynamicUi.ask("c58f0af1-09d2-4b97-8329-6a67b9fd0bfb", "Pay a bill");
                      ui.hide('fed856f6-d758-4f41-a0c8-c7ac50b2f8c3');
                    })}>
                    <Text style={styles.payABillText}>Pay a bill</Text>
                  </TouchableOpacity>
                  <TouchableOpacity testID="AIMintly_Pressable4" accessible={true} accessibilityRole="button" style={styles.pressable4} activeOpacity={0.7} onPress={nf.safely(() => {
                      nfDynamicUi.ask("c58f0af1-09d2-4b97-8329-6a67b9fd0bfb", "Set a savings goal");
                      ui.hide('fed856f6-d758-4f41-a0c8-c7ac50b2f8c3');
                    })}>
                    <Text style={styles.setASavingsGoalText}>Set a savings goal</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          )}
          <View style={styles.typeYourQuestionDynamicUI}><nfDynamicUi.DynamicUI id={"2943c509-94e8-464a-a5ff-8e823c67efc1"} nodeId={"c58f0af1-09d2-4b97-8329-6a67b9fd0bfb"} placeholder={"Type your question..."} questionWidth={"fit"} answerWidth={"full"} questionAlign={"right"} questionStyle={"Question bubble"} answerStyle={"Answer bubble"} showComposer={false} onBusyChange={(b) => setTypeYourQuestionDynamicUI((s) => ({ ...s, isBusy: b }))} /></View>
          <View style={styles.row6}>
            <TextInput testID="AIMintly_AskAnythingInput" style={[styles.askAnythingInput, { borderWidth: 0, borderColor: '#D1D5DB', borderRadius: 26, padding: 10, fontSize: 16, backgroundColor: 'transparent', maxHeight: 120, textAlignVertical: 'top', fieldSizing: 'content' }]} placeholder="Ask anything" multiline value={question ?? ''} onChangeText={(v) => { if (typeof setAskAnythingInput === 'function') setAskAnythingInput(prev => ({...prev, text: v})); setQuestion(v); }} onSubmitEditing={nf.safely(() => {
                nfDynamicUi.ask("c58f0af1-09d2-4b97-8329-6a67b9fd0bfb", question);
                ui.hide('fed856f6-d758-4f41-a0c8-c7ac50b2f8c3');
                setQuestion((prev) => Array.isArray(prev) ? [] : (prev && typeof prev === 'object') ? {} : typeof prev === 'number' ? 0 : typeof prev === 'boolean' ? false : '');
              })} />
            <TouchableOpacity testID="AIMintly_IconButton" accessible={true} accessibilityRole="button" style={[styles.iconButton, { backgroundColor: 'transparent', borderRadius: 26, padding: 8, flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 4, width: 38, height: 38, borderWidth: 1, borderColor: '#C7D2FE', alignSelf: 'center' }, voiceState === 'recording' && { backgroundColor: (voiceColors.error || '#DC2626') + '22', borderRadius: 999 }]} activeOpacity={0.7} disabled={voiceState === 'sending'} onPress={nf.safely(() => { void nfVoice.toggle({ lang: undefined, onText: (text) => setQuestion(text) }); })}>
              {voiceState === 'sending' ? <ActivityIndicator size="small" color={'#2541B2'} /> : voiceState === 'recording' ? (<View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center' }}><LucideDynamic name="mic" size={22} color={(voiceColors.error || '#DC2626')} strokeWidth={2} /></View>) : (<View style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center' }}><LucideDynamic name="mic" size={22} color="#2541B2" strokeWidth={2} /></View>)}
            </TouchableOpacity>
            <TouchableOpacity testID="AIMintly_Pressable5" accessible={true} accessibilityRole="button" style={styles.pressable5} activeOpacity={0.7} onPress={nf.safely(() => {
                nfDynamicUi.ask("c58f0af1-09d2-4b97-8329-6a67b9fd0bfb", question);
                ui.hide('fed856f6-d758-4f41-a0c8-c7ac50b2f8c3');
                setQuestion((prev) => Array.isArray(prev) ? [] : (prev && typeof prev === 'object') ? {} : typeof prev === 'number' ? 0 : typeof prev === 'boolean' ? false : '');
              })}>
              <View accessible={true} accessibilityRole="image" style={{ width: 22, height: 22, alignItems: 'center', justifyContent: 'center', alignSelf: 'center' }}><LucideDynamic name="arrow-right" size={22} color="#FFFFFF" strokeWidth={2} /></View>
            </TouchableOpacity>
          </View>
          <Text style={styles.mintlyCanMakeMistakesText}>Mintly can make mistakes. Always verify critical information.</Text>
        </View>
      </View>
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
  column: {
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
  row: {
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
  center: {
    width: 64,
    height: 64,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":2},"shadowRadius":8,"shadowOpacity":0.08},
    boxShadow: '0px 2px 8px rgba(0,0,0,0.08)',
    alignItems: 'center',
    borderRadius: 20,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  center2: {
    width: 44,
    height: 28,
    alignItems: 'center',
    borderRadius: 16,
    justifyContent: 'center',
    backgroundColor: '#0D1B4C',
  },
  row2: {
    gap: 6,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  box: {
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
  box2: {
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
  column2: {
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
  mintlyText: {
    color: '#0D1B4C',
    fontSize: 28,
    fontWeight: '800',
  },
  yourPersonalMoneyAssistantText: {
    color: '#6B7280',
    fontSize: 14,
  },
  column3: {
    gap: 0,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  center3: {
    marginTop: 16,
    marginBottom: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
  center4: {
    width: 110,
    height: 110,
    _rnShadow: {"shadowColor":"#000","shadowOffset":{"width":0,"height":4},"shadowRadius":16,"shadowOpacity":0.08},
    boxShadow: '0px 4px 16px rgba(0,0,0,0.08)',
    alignItems: 'center',
    borderRadius: 28,
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
  },
  center5: {
    width: 72,
    height: 46,
    alignItems: 'center',
    borderRadius: 24,
    justifyContent: 'center',
    backgroundColor: '#0D1B4C',
  },
  row3: {
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  box3: {
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
  box4: {
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
  box5: {
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
  hiPrahaladText: {
    color: '#0D1B4C',
    fontSize: 20,
    fontWeight: '700',
  },
  iMMintlyYourText: {
    color: '#374151',
    fontSize: 16,
    lineHeight: 22,
  },
  column4: {
    gap: 10,
    marginTop: 16,
    paddingLeft: 20,
    paddingRight: 20,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'column',
  },
  row4: {
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  pressable: {
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
  checkMyBalanceText: {
    color: '#1E3A8A',
    fontSize: 15,
    fontWeight: '700',
  },
  pressable2: {
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
  recentTransactionsText: {
    color: '#1E3A8A',
    fontSize: 15,
    fontWeight: '700',
  },
  row5: {
    gap: 10,
    justifyContent: 'flex-start',
    alignItems: 'stretch',
    flexWrap: 'nowrap',
    flexDirection: 'row',
    width: '100%',
  },
  pressable3: {
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
  payABillText: {
    color: '#1E3A8A',
    fontSize: 15,
    fontWeight: '700',
  },
  pressable4: {
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
  setASavingsGoalText: {
    color: '#1E3A8A',
    fontSize: 15,
    fontWeight: '700',
  },
  typeYourQuestionDynamicUI: {
    minHeight: 0,
    paddingTop: 8,
    paddingLeft: 20,
    paddingRight: 20,
    flexGrow: 1,
    flexShrink: 0,
  },
  row6: {
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
  askAnythingInput: {
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
  iconButton: {
    borderColor: '#C7D2FE',
    borderWidth: 1,
    borderRadius: 26,
    backgroundColor: 'transparent',
  },
  pressable5: {
    width: 44,
    height: 44,
    alignItems: 'center',
    borderRadius: 22,
    justifyContent: 'center',
    backgroundColor: colors.primary,
  },
  icon: {
    color: '#FFFFFF',
  },
  mintlyCanMakeMistakesText: {
    color: '#9CA3AF',
    fontSize: 12,
    textAlign: 'center',
  },
  });
}

export default function AIMintlyGuarded(props: any) {
  return <Can permissions={[]} redirectTo={"Login"}><AIMintly {...props} /></Can>;
}
