import React from 'react';
import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
// Reuse the same LucideDynamic component the screens render with, so every
// tab icon renders as the intended Lucide glyph — no parallel Ionicons map,
// no silent fallback to a blank circle when a Lucide name isn't in the table.
import LucideDynamic from '../../components/LucideDynamic';


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarActiveTintColor: '#2563EB',
        tabBarInactiveTintColor: '#6B7280',
        tabBarStyle: {"width":"100%","alignSelf":"stretch","marginHorizontal":0,"paddingHorizontal":0,"backgroundColor":"#FFFFFF"},
        tabBarItemStyle: {"flex":1,"maxWidth":"100%","marginHorizontal":0},
      }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerShown: false,
            tabBarIcon: ({ color }) => <LucideDynamic size={20} name="house" color={color} />,
          }}
        />
        <Tabs.Screen
          name="accounts"
          options={{
            title: 'Accounts',
            headerShown: false,
            tabBarIcon: ({ color }) => <LucideDynamic size={20} name="credit-card" color={color} />,
          }}
        />
        <Tabs.Screen
          name="investments"
          options={{
            title: 'Investments',
            headerShown: false,
            tabBarIcon: ({ color }) => <LucideDynamic size={20} name="layout-grid" color={color} />,
          }}
        />
        <Tabs.Screen
          name="payments"
          options={{
            title: 'Payments',
            headerShown: false,
            tabBarIcon: ({ color }) => <LucideDynamic size={20} name="arrow-left-right" color={color} />,
          }}
        />
        <Tabs.Screen
          name="aimintly"
          options={{
            title: 'AI Mintly',
            headerShown: false,
            tabBarIcon: ({ color }) => <LucideDynamic size={20} name="sparkles" color={color} />,
          }}
        />
    </Tabs>
  );
}
