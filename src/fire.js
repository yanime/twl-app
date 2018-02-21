import firebase from 'firebase';
export const config = {
  apiKey: 'AIzaSyAloUSh3ECjpCVF8tw6w6ZntAlnclC1st4',
  authDomain: 'twl-app-fd76e.firebaseapp.com',
  databaseURL: 'https://twl-app-fd76e.firebaseio.com',
  projectId: 'twl-app-fd76e',
  storageBucket: 'twl-app-fd76e.appspot.com',
  messagingSenderId: '406012874299',
};
firebase.initializeApp(config);

export let database = firebase.database();

export let auth = firebase.auth();

export let googleProvider = firebase.auth.GoogleAuthProvider.PROVIDER_ID;
