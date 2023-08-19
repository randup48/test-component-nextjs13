// // public/sw.js

// importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
// importScripts(
//   'https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js'
// );

/* eslint-disable no-undef */
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts(
  'https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js'
);

firebase.initializeApp({
  apiKey: 'AIzaSyDQkDZ472KPXCvnwc5tw4M7ZlvnMrEEER8',
  authDomain: 'crud-login-376117.firebaseapp.com',
  databaseURL:
    'https://crud-login-376117-default-rtdb.asia-southeast1.firebasedatabase.app',
  projectId: 'crud-login-376117',
  storageBucket: 'crud-login-376117.appspot.com',
  messagingSenderId: '1083298399422',
  appId: '1:1083298399422:web:dba76f7b0aca2ef3670aef',
  measurementId: 'G-EG6B5MZ2B7',
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();

messaging.onBackgroundMessage(payload => {
  console.log(
    '[firebase-messaging-sw.js] Received background message ',
    payload
  );
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  // eslint-disable-next-line no-restricted-globals
  self.registration.showNotification(notificationTitle, notificationOptions);
});
