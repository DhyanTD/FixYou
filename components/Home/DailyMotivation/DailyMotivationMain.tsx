import { View } from 'react-native';
import styles from './DailyMotivation.styles';
import { Text } from '@react-navigation/elements';


export default function DailyMotivationMain() {
  const value = '"The best time to plant a tree was 20 years ago.The second best time is now."'
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}

