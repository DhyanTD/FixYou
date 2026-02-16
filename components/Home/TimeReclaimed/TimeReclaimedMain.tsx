import { Text } from '@react-navigation/elements';
import { View } from 'react-native';
import styles from './TimeReclaimed.styles';
import Feather from '@expo/vector-icons/Feather';

function secondsToWords(d: number) {
  d = Number(d);
  const day = Math.floor(d / 86400);
  const h = Math.floor((d % 86400) / 3600);
  const m = Math.floor((d % 3600) / 60);

  let dayPart = day > 0 ? day + "d" + ",\n" : "";

  let timeParts = [];
  if (h > 0) timeParts.push(h + "h");
  if (m > 0) timeParts.push(m + "m");

  let timePart = timeParts.join(" ");

  return dayPart + timePart;
}

export default function TimeReclaimedMain() {
  const timeReclaimedInSeconds = 40000;
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Time Reclaimed</Text>
      <Text style={styles.text2}>{secondsToWords(timeReclaimedInSeconds)}</Text>

      <View style={styles.progressBlock}>
        <Feather name="trending-up" size={20} color="rgb(185 217 235 /  1)" />
        <Text style={styles.text3}>12% more than yesterday</Text>
      </View>
    </View>
  );
}

