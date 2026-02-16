import React from 'react';
import { View, Text } from 'react-native';
import styles from './DailyPeak.styles';
import Feather from '@expo/vector-icons/Feather';

export default function DailyPeakMain() {

  const title = 'Daily Peak';
  const category = 'Social Media';
  const thresholdValue = '45m';
  const progress = 0.7;

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <View style={styles.iconBox}>
          <Feather name="grid" size={24} color="#2D3748" />
        </View>

        <View style={styles.titleArea}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.subTitleText}>{category}</Text>
        </View>

        <View style={styles.valueArea}>
          <Text style={styles.valueText}>{thresholdValue}</Text>
          <Text style={styles.thresholdText}>THRESHOLD MET</Text>
        </View>
      </View>

      <View style={styles.progressTrack}>
        <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
      </View>
    </View>
  );

}

