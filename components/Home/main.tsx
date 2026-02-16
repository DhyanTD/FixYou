import { StyleSheet, View } from 'react-native';
import HeadersMain from './Headers/HeadersMain';
import TimeReclaimedMain from './TimeReclaimed/TimeReclaimedMain';
import DailyPeakMain from './DailyPeak/DailyPeakMain';
import { WeeklyBalanceMain } from './WeeklyBalance/WeeklyBalanceMain';
import FocusSessionMain from './FocusSection/FocusSectionMain';
import DailyMotivationMain from './DailyMotivation/DailyMotivationMain';


export default function HomeMain() {
  return (
    <View style={styles.container}>
      <HeadersMain />
      <TimeReclaimedMain />
      <DailyPeakMain />
      <WeeklyBalanceMain />
      <FocusSessionMain />
      <DailyMotivationMain />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontFamily: 'Inter_400Regular',
  }
});

