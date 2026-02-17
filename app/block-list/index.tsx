import { StyleSheet } from 'react-native';
import BlockListMain from '@/components/BlockList/BlockListMain';
import PaddedxScrollView from '@/components/padded-scroll-view';

export default function BlockListScreen() {
  return (
    <PaddedxScrollView addStyles={styles.scrollView}>
      <BlockListMain />
    </PaddedxScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
  },

});
