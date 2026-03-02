import { useEffect, useState } from 'react';
import NativeInstalledApps from '../specs/NativeInstalledApps';
import { AppItem } from '@/components/BlockList/AppCategoryList/AppRow';

type App = {
  appName: any;
  packageName: string;
  versionName: string;
  id: string;
  title: string;
  apps: AppItem[];

};

export function useInstalledApps() {
  const [apps, setApps] = useState<App[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!NativeInstalledApps) {
      setError('Native module not available');
      setLoading(false);
      return;
    }

    NativeInstalledApps.getInstalledApps()
      .then(setApps)
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, [NativeInstalledApps]);

  return { apps, loading, error };
}
