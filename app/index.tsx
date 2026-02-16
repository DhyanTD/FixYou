import { StyleSheet } from 'react-native';
import PaddedxScrollView from '@/components/padded-scroll-view';
import HomeMain from '@/components/Home/main';

export default function HomeScreen() {
  return (
    <PaddedxScrollView addStyles={styles.scrollView}>
      <HomeMain />
    </PaddedxScrollView>)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
  },
  text: {
    color: 'black',
    fontSize: 42,
    padding: 12,
  },
});
