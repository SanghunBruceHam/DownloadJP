export type Platform = 'android' | 'ios' | 'windows' | 'mac';

export interface PlatformInfo {
  name: string;
  platform: Platform;
  icon: string;
  downloadUrl: string;
  storeIcon: string;
  requirements: string;
}

export function detectPlatform(): Platform {
  const userAgent = navigator.userAgent.toLowerCase();
  
  if (userAgent.includes('android')) {
    return 'android';
  } else if (userAgent.includes('iphone') || userAgent.includes('ipad')) {
    return 'ios';
  } else if (userAgent.includes('windows')) {
    return 'windows';
  } else if (userAgent.includes('mac')) {
    return 'mac';
  }
  
  return 'windows';
}

export function getPlatformInfo(platform: Platform, t: (key: string) => string): PlatformInfo {
  const platformMap: Record<Platform, PlatformInfo> = {
    android: {
      name: t('platforms.android.name'),
      platform: 'android',
      icon: 'fab fa-android',
      downloadUrl: 'https://play.google.com/store/apps/details?id=jp.naver.line.android',
      storeIcon: 'fab fa-google-play',
      requirements: t('platforms.android.requirements'),
    },
    ios: {
      name: t('platforms.ios.name'),
      platform: 'ios',
      icon: 'fab fa-apple',
      downloadUrl: 'https://apps.apple.com/app/line/id443904275',
      storeIcon: 'fab fa-app-store',
      requirements: t('platforms.ios.requirements'),
    },
    windows: {
      name: t('platforms.windows.name'),
      platform: 'windows',
      icon: 'fab fa-windows',
      downloadUrl: 'https://desktop.line-scdn.net/win/new/LineInst.exe',
      storeIcon: 'fas fa-download',
      requirements: t('platforms.windows.requirements'),
    },
    mac: {
      name: t('platforms.mac.name'),
      platform: 'mac',
      icon: 'fab fa-apple',
      downloadUrl: 'https://apps.apple.com/app/line/id539883307',
      storeIcon: 'fab fa-app-store',
      requirements: t('platforms.mac.requirements'),
    },
  };
  
  return platformMap[platform];
}

export function getAllPlatforms(t: (key: string) => string): PlatformInfo[] {
  return (['android', 'ios', 'windows', 'mac'] as Platform[]).map(platform => 
    getPlatformInfo(platform, t)
  );
}
