import { getToken } from 'firebase/messaging';

export const getTokenFirebase = async (messaging: any) => {
  try {
    return await getToken(messaging, {
      vapidKey: process.env.NEXT_PUBLIC_VAPID_KEY,
    });
  } catch (error) {
    console.log('error get token notification: ', error);
  }
};
