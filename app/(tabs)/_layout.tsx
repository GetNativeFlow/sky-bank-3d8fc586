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
        tabBarActiveTintColor: Platform.select({ ios: '#007AFF', default: '#2196F3' }),
        tabBarStyle: {"width":"100%","alignSelf":"stretch","marginHorizontal":0,"paddingHorizontal":0},
        tabBarItemStyle: {"flex":1,"maxWidth":"100%","marginHorizontal":0},
      }}>
        <Tabs.Screen
          name="index"
          options={{
            title: 'Home',
            headerShown: true,
            title: 'Home',
            headerBackVisible: false,
            headerTransparent: false,
            headerStyle: { backgroundColor: '#FFFFFF', elevation: 0, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.08)' },
            headerTintColor: '#4F46E5',
            headerTitleStyle: { color: '#111827', fontSize: 18, fontWeight: '600' },
            headerTitleAlign: 'left',
            tabBarIcon: ({ color }) => <LucideDynamic size={20} name="house" color={color} />,
          }}
        />
        <Tabs.Screen
          name="accounts"
          options={{
            title: 'Accounts',
            headerShown: true,
            title: 'Accounts',
            headerBackVisible: true,
            headerTransparent: false,
            headerStyle: { backgroundColor: '#FFFFFF', elevation: 0, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.08)' },
            headerTintColor: '#4F46E5',
            headerTitleStyle: { color: '#111827', fontSize: 18, fontWeight: '600' },
            headerTitleAlign: 'left',
            tabBarIcon: ({ color }) => <LucideDynamic size={20} name="credit-card" color={color} />,
          }}
        />
        <Tabs.Screen
          name="investments"
          options={{
            title: 'Investments',
            headerShown: true,
            title: 'Investments',
            headerBackVisible: true,
            headerTransparent: false,
            headerStyle: { backgroundColor: '#FFFFFF', elevation: 0, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.08)' },
            headerTintColor: '#4F46E5',
            headerTitleStyle: { color: '#111827', fontSize: 18, fontWeight: '600' },
            headerTitleAlign: 'left',
            tabBarIcon: ({ color }) => <LucideDynamic size={20} name="layout-grid" color={color} />,
          }}
        />
        <Tabs.Screen
          name="payments"
          options={{
            title: 'Payments',
            headerShown: true,
            title: 'Payments',
            headerBackVisible: true,
            headerTransparent: false,
            headerStyle: { backgroundColor: '#FFFFFF', elevation: 0, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.08)' },
            headerTintColor: '#4F46E5',
            headerTitleStyle: { color: '#111827', fontSize: 18, fontWeight: '600' },
            headerTitleAlign: 'left',
            tabBarIcon: ({ color }) => <LucideDynamic size={20} name="arrow-left-right" color={color} />,
          }}
        />
        <Tabs.Screen
          name="aimintly"
          options={{
            title: 'AI Mintly',
            headerShown: true,
            title: 'AI Mintly',
            headerBackVisible: true,
            headerTransparent: false,
            headerStyle: { backgroundColor: '#FFFFFF', elevation: 0, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.08)' },
            headerTintColor: '#4F46E5',
            headerTitleStyle: { color: '#111827', fontSize: 18, fontWeight: '600' },
            headerTitleAlign: 'left',
            tabBarIcon: ({ color }) => <LucideDynamic size={20} name="sparkles" color={color} />,
          }}
        />
    </Tabs>
  );
}
