import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/firestore';
import 'firebase/auth'; 

const config = {
    apiKey: "AIzaSyD1u6fSbh7EeZA2l3wxBnmIweCPKkfa6vU",
    authDomain: "maletadeflores-d60e0.firebaseapp.com",
    databaseURL: "https://maletadeflores-d60e0.firebaseio.com",
    projectId: "maletadeflores-d60e0",
    storageBucket: "",
    messagingSenderId: "631376653963",
    appId: "1:631376653963:web:e95f36f715e0c757"
};

/* Initialize firebase app */
firebase.initializeApp(config);

/* export firebase modules */
export const auth = firebase.auth();
export const firestore = firebase.firestore();

/* Setup Google auth provider */
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(googleAuthProvider);

export default firebase;