import { useEffect, useState } from 'react';
import NativeInstalledApps from '../specs/NativeInstalledApps';

type App = {
  appName: string;
  packageName: string;
  versionName: string;
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
      .then((installedApps) => {
        console.log('Installed Apps:', JSON.stringify(installedApps));
        setApps(installedApps);
      })
      .catch((e) => setError(e.message))
      .finally(() => setLoading(false));
  }, []);

  return { apps, loading, error };
}
