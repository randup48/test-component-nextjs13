import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from 'firebase/firestore';
import { db } from '../../utils/firebase/config';

export const getTokenCollection = async () => {
  try {
    return await getDoc(doc(db, 'token_test', 'token'));
  } catch (error) {
    console.log('error get token collection from db: ', error);
  }
};

export const writeUserToken = async (token: string) => {
  try {
    await updateDoc(doc(db, 'token_test', 'token'), { id: arrayUnion(token) });
  } catch (error) {
    console.log('error write token user to db: ', error);
  }
};

export const deleteUserToken = async (token: string) => {
  try {
    await updateDoc(doc(db, 'token_test', 'token'), { id: arrayRemove(token) });
  } catch (error) {
    console.log('error delete token user to db: ', error);
  }
};
