import firebase from 'firebase';
export const config = {
  apiKey: 'AIzaSyAloUSh3ECjpCVF8tw6w6ZntAlnclC1st4',
  authDomain: 'twl-app-fd76e.firebaseapp.com',
  databaseURL: 'https://twl-app-fd76e.firebaseio.com',
  projectId: 'twl-app-fd76e',
  storageBucket: 'twl-app-fd76e.appspot.com',
  messagingSenderId: '406012874299',
};

if (!firebase.apps.length) {
  firebase.initializeApp(config);
}

export const database = firebase.database();

export const auth = firebase.auth();

export const googleProvider = firebase.auth.GoogleAuthProvider.PROVIDER_ID;
