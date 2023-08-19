import { arrayUnion, updateDoc } from 'firebase/firestore';
import { messaging } from './config';
import { getTokenFirebase } from './token';
import { deleteUserToken, writeUserToken } from './database';

const getTokenNotification = async (messaging: any) => {
  try {
    const token = await getTokenFirebase(messaging);
    console.log(token);

    if (token) writeUserToken(token);
  } catch (error) {
    console.log(error);
  }
};

export const requestPermission = async () => {
  console.log('Requesting permission...');

  if (typeof window !== 'undefined')
    if ('Notification' in window) {
      //   Notification.requestPermission().then(permission => {
      //     if (permission === 'granted') {
      //       console.log('Notification permission granted.');

      //       getToken(messaging, {
      //         vapidKey:
      //           'BAabWopEO8meNzSX97klBoTn3ZuLMUV9B5OPjdX3Uyv4c00UCjBWxR2FoXVp89EsOY290D8ouk4jER9BiZ08i4c',
      //       }).then(async currentToken => {
      //         if (currentToken) {
      //           console.log('currentToken: ', currentToken);
      //           try {
      //             const document = doc(db, 'token_test', 'token');
      //             // Atomically add a new token to the "token" array field.
      //             await updateDoc(document, {
      //               id: arrayUnion(currentToken),
      //             });
      //             console.log('Document written');
      //           } catch (e) {
      //             console.error('Error adding document: ', e);
      //           }
      //         } else {
      //           console.log('Can not get token');
      //         }
      //       });
      //     } else {
      //       console.log('Do not have permission!');
      //     }
      //   });

      const permission = await Notification.requestPermission();

      if (permission === 'granted') {
        console.log('Notification permission granted.');

        getTokenNotification(messaging);
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
      }
    } else {
      console.log('Notification API is not available.');
    }
};
