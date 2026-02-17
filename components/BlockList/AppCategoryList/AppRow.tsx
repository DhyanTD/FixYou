import React, { useState } from 'react';
import {
  View,
  Text,
  Switch,
  Platform,
} from 'react-native';
import styles from './AppCategory.style';



export interface AppItem {
  id: string;
  name: string;
  icon: string;
  usageTodayMinutes: number;
  isBlocked: boolean;
}

export interface AppRowProps {
  app: AppItem;
  isLast: boolean;
  onToggle: (id: string, value: boolean) => void;
}

function formatUsage(minutes: number): string {
  if (minutes === 0) return 'No usage today';
  if (minutes < 60) return `${minutes}m used today`;
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return m > 0 ? `${h}h ${m}m used today` : `${h}h used today`;
}

//thanks to gemini
const APP_META: Record<string, { emoji: string; bg: string }> = {
  instagram: { emoji: '📸', bg: '#f97316' },
  tiktok: { emoji: '🎵', bg: '#18181b' },
  roblox: { emoji: '🎮', bg: '#ef4444' },
  youtube: { emoji: '▶️', bg: '#dc2626' },
  netflix: { emoji: '🎬', bg: '#b91c1c' },
};

export default function AppRow({ app, isLast, onToggle }: AppRowProps) {
  const meta = APP_META[app.icon] ?? { emoji: '📱', bg: '#6366f1' };

  return (
    <View style={[styles.row]}>
      <View style={[styles.iconWrap, { backgroundColor: meta.bg }]}>
        <Text style={styles.iconEmoji}></Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.appName}>{app.name}</Text>
        <Text style={[styles.usage]}>
          {formatUsage(app.usageTodayMinutes)}
        </Text>
      </View>

      <Switch
        value={app.isBlocked}
        onValueChange={(v) => onToggle(app.id, v)}
        trackColor={{ false: '#e2e8f0', true: 'rgb(158, 209, 238)' }}
        thumbColor={Platform.OS === 'android' ? (app.isBlocked ? '#F8FAFC' : '#F8FAFC') : '#fff'}
      // ios_backgroundColor="#e2e8f0"
      />
    </View>
  );
};
