import { getToken } from 'firebase/messaging';

export const getTokenFirebase = async (messaging: any) =>
  await getToken(messaging, {
    vapidKey:
      'BAabWopEO8meNzSX97klBoTn3ZuLMUV9B5OPjdX3Uyv4c00UCjBWxR2FoXVp89EsOY290D8ouk4jER9BiZ08i4c',
  });
