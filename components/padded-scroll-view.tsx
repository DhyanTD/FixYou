import type { PropsWithChildren, ReactElement } from 'react';
import { StyleSheet, ViewStyle } from 'react-native';
import Animated, {
  useAnimatedRef,
} from 'react-native-reanimated';

import { ThemedView } from '@/components/themed-view';
import { useSafeAreaInsets } from 'react-native-safe-area-context';


type Props = PropsWithChildren<{
  addStyles?: StyleSheet.NamedStyles<any>;
}>;

export default function PaddedxScrollView({
  children,
  addStyles,
}: Props) {
  const scrollRef = useAnimatedRef<Animated.ScrollView>();

  const insets = useSafeAreaInsets();
  const paddingB = insets.bottom + 70 + 30; // adding this to maintain floating tab, 70 floating bar height, 20 just extra for safety  -ft dhyan


  return (
    <Animated.ScrollView
      ref={scrollRef}
      style={{ flex: 1 }}
      scrollEventThrottle={16}>
      <ThemedView style={{ ...styles.content, paddingBottom: paddingB, ...addStyles }}>{children}</ThemedView>
    </Animated.ScrollView >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    overflow: 'hidden',
    backgroundColor: '#EBF8FF',
  },
});
