import React from 'react';
import { Tabs } from 'expo-router';
import { makeHeader, makeTabBar, makeDrawerContent } from '../../components/system/SystemChrome';
import SysHeader1 from '../../components/system/SysHeader1';
import SysBottomBar from '../../components/system/SysBottomBar';

const AppTabBar = makeTabBar(SysBottomBar, {
  "index": { pageId: "0c287a5d-f853-4a53-bf43-689ad97ecc57", label: "Home", icon: "house" },
  "accounts": { pageId: "54c9bf2f-c22c-4014-80ce-d30365b1ade8", label: "Accounts", icon: "credit-card" },
  "aimintly": { pageId: "f4cd0440-7bf9-4b16-9948-57f8eecfa30e", label: "AI Mintly", icon: "sparkles" },
  "investments": { pageId: "934c139f-33ab-4eb2-b6f8-31d45f7f8d40", label: "Investments", icon: "layout-grid" },
  "payments": { pageId: "9a327574-76df-49d2-8288-b3061e36aae1", label: "Payments", icon: "arrow-left-right" }
}, {"background":"#FFFFFF","active":"#2563EB","inactive":"#6B7280"});

export default function TabLayout() {
  return (
    <Tabs tabBar={(props) => <AppTabBar {...props} />} screenOptions={{ headerShown: false }}>
      <Tabs.Screen name="index" options={{ headerShown: false }} />
      <Tabs.Screen name="accounts" options={{ headerShown: false }} />
      <Tabs.Screen name="investments" options={{ headerShown: false }} />
      <Tabs.Screen name="payments" options={{ headerShown: false }} />
      <Tabs.Screen name="aimintly" options={{ headerShown: false }} />
    </Tabs>
  );
}
