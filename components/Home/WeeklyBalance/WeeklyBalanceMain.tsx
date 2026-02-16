import { View } from 'react-native';
import styles from './WeeklyBalance.styles';
import { BarChart } from "react-native-gifted-charts";
import { Text } from '@react-navigation/elements';
import Feather from '@expo/vector-icons/Feather';

export function WeeklyBalanceMain() {
  const data = [
    { value: 50, label: 'M' }, { value: 80, label: 'T' },
    { value: 60, label: 'W' }, { value: 90, label: 'T' },
    { value: 110, label: 'F' },
    { value: 130, label: 'S', frontColor: '#A5C3D9' },
    { value: 40, label: 'S' }
  ];

  return (
    <View style={styles.card}>
      <View style={[styles.row, { marginBottom: 20 }]}>
        <Text style={styles.titleText}>Weekly Balance</Text>
        <Feather name="more-horizontal" size={20} color="#CBD5E0" />
      </View>
      <BarChart
        data={data}
        barWidth={35}
        spacing={15}
        roundedTop
        roundedBottom
        hideRules
        hideYAxisText
        yAxisThickness={0}
        xAxisThickness={0}
        frontColor="#F0F4F8"
      />
    </View>
  );
};
