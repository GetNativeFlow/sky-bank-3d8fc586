import React, { useEffect } from 'react';
import { Stack } from 'expo-router';
import * as Linking from 'expo-linking';
import { useRouter } from 'expo-router';
import { NativeFlowThemeProvider } from '../lib/theme/NativeFlowThemeProvider';
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
    <NativeFlowThemeProvider>
    <Stack screenOptions={{ headerShown: true }}>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen
        name="login"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="loans"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="transactions"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="welcome"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="profile"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="forgotpassword"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="checkemail"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
    </NativeFlowThemeProvider>
    </AuthGate>
  );
}
