import { arrayRemove, arrayUnion, doc, updateDoc } from 'firebase/firestore';
import { db } from './config';

export const writeUserToken = async (token: string) => {
  try {
    await updateDoc(doc(db, 'token_test', 'token'), { id: arrayUnion(token) });
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserToken = async (token: string) => {
  try {
    await updateDoc(doc(db, 'token_test', 'token'), { id: arrayRemove(token) });
  } catch (error) {
    console.log(error);
  }
};
