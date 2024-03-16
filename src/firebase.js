// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOYRY7v42WOAuGXtZkxg3DGe9-9Ya2lGc",
  authDomain: "facebook-clone-64399.firebaseapp.com",
  databaseURL:
    "https://facebook-clone-64399-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "facebook-clone-64399",
  storageBucket: "facebook-clone-64399.appspot.com",
  messagingSenderId: "158517232630",
  appId: "1:158517232630:web:1cf3008fae074685703dd7",
  measurementId: "G-FRXJNTMXDK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
