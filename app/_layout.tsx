import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';
import { AuthGate } from '../lib/auth/AuthGate';

export default function RootLayout() {
  const router = useRouter();

  useEffect(() => {
    // Handle deep links when app is already open
    const subscription = Linking.addEventListener('url', ({ url }) => {
      const parsed = Linking.parse(url);
      if (parsed.path) {
        router.push(parsed.path as any);
      }
    });

    // Handle deep link that opened the app
    Linking.getInitialURL().then((url) => {
      if (url) {
        const parsed = Linking.parse(url);
        if (parsed.path) {
          router.push(parsed.path as any);
        }
      }
    });

    return () => subscription.remove();
  }, []);

  return (
    <AuthGate>
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="loans"
        options={{
          headerShown: true,
            title: 'Loans & Credit',
            headerBackVisible: true,
            headerTransparent: false,
            headerStyle: { backgroundColor: '#FFFFFF', elevation: 0, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.08)' },
            headerTintColor: '#4F46E5',
            headerTitleStyle: { color: '#111827', fontSize: 18, fontWeight: '600' },
            headerTitleAlign: 'left',
        }}
      />
      <Stack.Screen
        name="transactions"
        options={{
          headerShown: true,
            title: 'Transactions',
            headerBackVisible: true,
            headerTransparent: false,
            headerStyle: { backgroundColor: '#FFFFFF', elevation: 0, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.08)' },
            headerTintColor: '#4F46E5',
            headerTitleStyle: { color: '#111827', fontSize: 18, fontWeight: '600' },
            headerTitleAlign: 'left',
        }}
      />
      <Stack.Screen
        name="login"
        options={{
          headerShown: true,
            title: 'Login',
            headerBackVisible: true,
            headerTransparent: false,
            headerStyle: { backgroundColor: '#FFFFFF', elevation: 0, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.08)' },
            headerTintColor: '#4F46E5',
            headerTitleStyle: { color: '#111827', fontSize: 18, fontWeight: '600' },
            headerTitleAlign: 'left',
        }}
      />
      <Stack.Screen
        name="welcome"
        options={{
          headerShown: true,
            title: 'Welcome',
            headerBackVisible: true,
            headerTransparent: false,
            headerStyle: { backgroundColor: '#FFFFFF', elevation: 0, borderBottomWidth: 1, borderBottomColor: 'rgba(0,0,0,0.08)' },
            headerTintColor: '#4F46E5',
            headerTitleStyle: { color: '#111827', fontSize: 18, fontWeight: '600' },
            headerTitleAlign: 'left',
        }}
      />
    </Stack>
    </AuthGate>
  );
}
