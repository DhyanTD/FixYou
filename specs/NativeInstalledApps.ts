import type { TurboModule } from 'react-native';
import { TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
  getInstalledApps(): Promise<Array<{
    appName: string;
    packageName: string;
    versionName: string;
  }>
  >;
}

export default TurboModuleRegistry.get<Spec>('InstalledApps');
