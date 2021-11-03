import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
  apiKey: "AIzaSyC0pJ5nZT7G9HuKlFWZ6HRq0o3tdg5wRvo",
  authDomain: "crwn-db-61094.firebaseapp.com",
  projectId: "crwn-db-61094",
  storageBucket: "crwn-db-61094.appspot.com",
  messagingSenderId: "370898957967",
  appId: "1:370898957967:web:ea35a302161970a8fca2fa"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
