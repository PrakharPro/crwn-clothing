import { db } from 'firebase'
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCEn4xMBEsddDR3Cr5WJZYP8yZTyO7dG5c",
    authDomain: "crwn-db-ffac6.firebaseapp.com",
    databaseURL: "https://crwn-db-ffac6.firebaseio.com",
    projectId: "crwn-db-ffac6",
    storageBucket: "",
    messagingSenderId: "206254015701",
    appId: "1:206254015701:web:397e5ea56c255d33"
  };

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;