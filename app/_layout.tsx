import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import {
  SafeAreaView,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';


import { useColorScheme } from '@/hooks/use-color-scheme';
import FloatingTabMain from '@/components/FloatingTab/Main';

export const unstable_settings = {
  anchor: '(tabs)',
};

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const insets = useSafeAreaInsets();

  const paddingB = insets.bottom + 20 + 70; // adding this to maintain floating tab -ft dhyan
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#EBF8FF' }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ contentStyle: { backgroundColor: '#EBF7FF', paddingBottom: paddingB } }}>
          <Stack.Screen name="modal" options={{ headerShown: false, title: 'Modal' }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
      <FloatingTabMain />
    </SafeAreaView>
  );
}
