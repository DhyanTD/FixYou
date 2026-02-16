import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';
import {
  SafeAreaView,
} from 'react-native-safe-area-context';
import { useColorScheme } from '@/hooks/use-color-scheme';
import FloatingTabMain from '@/components/FloatingTab/Main';
import { PlayfairDisplay_400Regular_Italic } from '@expo-google-fonts/playfair-display/400Regular_Italic';
import { useFonts } from '@expo-google-fonts/inter';
import { Inter_400Regular } from '@expo-google-fonts/inter/400Regular';



export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [fontsLoaded] = useFonts({
    PlayfairDisplay_400Regular_Italic,
    Inter_400Regular
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#EBF8FF', position: 'relative' }}>
      <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack screenOptions={{ contentStyle: { backgroundColor: '#EBF7FF' } }}>
          <Stack.Screen name="index" options={{ headerShown: false, title: 'Home' }} />
        </Stack>
        <StatusBar style="auto" />
      </ThemeProvider>
      <FloatingTabMain />
    </SafeAreaView>
  );
}
