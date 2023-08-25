import { getTokenFirebase } from './token';
import { writeUserToken } from './database';

export const getTokenNotification = async (messaging: any) => {
  try {
    const token = await getTokenFirebase(messaging);
    console.log(token);

    if (token) {
      localStorage.setItem('my-token-notification', token);
      writeUserToken(token);
    }
  } catch (error) {
    console.log('error get and write token for notification: ', error);
  }
};

export const requestPermission: () => Promise<boolean> = async () => {
  console.log('Requesting permission...');

  if (typeof window !== 'undefined')
    if ('Notification' in window) {
      const permission = await Notification.requestPermission();

      if (permission === 'granted') {
        console.log('Notification permission granted.');

        return true;
      } else {
        console.log('Do not have permission!');
        // TODO: fixing cara hapus token dari database
        // try {
        //   const token = await getTokenFirebase(messaging);
        //   console.log(token);

        //   if (token) await deleteUserToken(token);
        // } catch (error) {
        //   console.log(error);
        // }
        return false;
      }
    } else {
      console.log('Notification API is not available.');
      return false;
    }
  return false;
};
