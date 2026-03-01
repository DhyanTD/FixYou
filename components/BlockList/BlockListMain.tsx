import { View } from 'react-native';
import BlockListHeaderMain from './Header/BlockListHeaderMain';
import AppCategoryListMain from './AppCategoryList/AppCategoryListMain';
import { AppItem } from './AppCategoryList/AppRow';
import { useState } from 'react';
import { NativeModules } from 'react-native'

const blockCategories = [
  {
    id: 'social',
    title: 'SOCIAL',
    apps: [
      {
        id: 'instagram',
        name: 'Instagram',
        icon: 'instagram',
        usageTodayMinutes: 42,
        isBlocked: true,
      },
      {
        id: 'tiktok',
        name: 'TikTok',
        icon: 'tiktok',
        usageTodayMinutes: 72,
        isBlocked: true,
      },
    ],
  },
  {
    id: 'gaming',
    title: 'GAMING',
    apps: [
      {
        id: 'roblox',
        name: 'Roblox',
        icon: 'roblox',
        usageTodayMinutes: 30,
        isBlocked: false,
      },
    ],
  },
  {
    id: 'entertainment',
    title: 'ENTERTAINMENT',
    apps: [
      {
        id: 'youtube',
        name: 'YouTube',
        icon: 'youtube',
        usageTodayMinutes: 125,
        isBlocked: true,
      },
      {
        id: 'netflix',
        name: 'Netflix',
        icon: 'netflix',
        usageTodayMinutes: 0,
        isBlocked: false,
      },
    ],
  },
]

export interface BlockCategory {
  id: string;
  title: string;
  apps: AppItem[];
}

const { InstalledApps } = NativeModules

export default function BlockListMain() {

  console.log('NativeModules:', NativeModules, NativeModules.InstalledApps)

  InstalledApps.getInstalledApps().then(console.log)
  const [categories, setCategories] = useState<BlockCategory[]>(blockCategories);

  const handleToggle = (categoryId: string, appId: string, value: boolean) => {
    setCategories((prev) =>
      prev.map((cat) =>
        cat.id !== categoryId
          ? cat
          : {
            ...cat,
            apps: cat.apps.map((app) =>
              app.id !== appId ? app : { ...app, isBlocked: value }
            ),
          }
      )
    );
  };
  console.log(categories);
  return (
    <View >
      <BlockListHeaderMain />
      <View style={{ width: '90%', marginHorizontal: 'auto', marginTop: 32 }}>
        {categories.map((cat) => (
          <AppCategoryListMain key={cat.id} category={cat} onToggle={handleToggle} />
        ))}
      </View>
    </View>
  );
}

