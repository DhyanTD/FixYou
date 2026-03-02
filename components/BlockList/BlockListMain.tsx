import { useInstalledApps } from '@/hooks/useInstalledApps';
import { useEffect, useState } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import AppCategoryListMain from './AppCategoryList/AppCategoryListMain';
import { AppItem } from './AppCategoryList/AppRow';
import BlockListHeaderMain from './Header/BlockListHeaderMain';

export interface BlockCategory {
  id: string;
  title: string;
  apps: AppItem[];
}


export default function BlockListMain() {
  const { apps: installedApps, loading, error } = useInstalledApps();
  const [categories, setCategories] = useState<BlockCategory[]>([]);

  useEffect(() => {
    if (installedApps.length === 0) return;

    const appItems: AppItem[] = installedApps.map((app) => ({
      id: app.packageName,
      name: app.appName,
      icon: app.packageName,
      usageTodayMinutes: 0,
      isBlocked: false,
    }));

    setCategories([
      {
        id: 'installed',
        title: 'INSTALLED APPS',
        apps: appItems,
      },
    ]);
  }, [installedApps]);

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

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 64 }}>
        <ActivityIndicator size="large" color="#64B5F6" />
        <Text style={{ marginTop: 12, color: '#94A3B8', fontSize: 14 }}>Loading apps...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', marginTop: 64 }}>
        <Text style={{ color: '#EF4444', fontSize: 14 }}>{error}</Text>
      </View>
    );
  }

  return (
    <View>
      <BlockListHeaderMain />
      <View style={{ width: '90%', marginHorizontal: 'auto', marginTop: 32 }}>
        {categories.map((cat) => (
          <AppCategoryListMain key={cat.id} category={cat} onToggle={handleToggle} />
        ))}
      </View>
    </View>
  );
}
