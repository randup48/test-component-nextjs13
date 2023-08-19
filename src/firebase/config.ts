import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getMessaging } from 'firebase/messaging';

const firebaseConfig = {
  apiKey: 'AIzaSyDQkDZ472KPXCvnwc5tw4M7ZlvnMrEEER8',
  authDomain: 'crud-login-376117.firebaseapp.com',
  databaseURL:
    'https://crud-login-376117-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'crud-login-376117',
  storageBucket: 'crud-login-376117.appspot.com',
  messagingSenderId: '1083298399422',
  appId: '1:1083298399422:web:dba76f7b0aca2ef3670aef',
  measurementId: 'G-EG6B5MZ2B7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db: any = typeof window !== 'undefined' ? getFirestore(app) : null;

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth();

// Initialize Firebase Cloud Messaging and get a reference to the service
export const messaging: any =
  typeof window !== 'undefined' ? getMessaging(app) : null;
