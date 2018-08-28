import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyCb6bnuNb0HZD6mCvTNG1QXs3cgl3LFtH8',
  authDomain: 'codebuddy-fe.firebaseapp.com',
  databaseURL: 'https://codebuddy-fe.firebaseio.com',
  projectId: 'codebuddy-fe',
  storageBucket: 'codebuddy-fe.appspot.com',
  messagingSenderId: '1042384412046',
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
