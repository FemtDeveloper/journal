import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyDDpkSK7bphdBAEYRGuG2wAPKkYyJIF920",
  authDomain: "journal-10f89.firebaseapp.com",
  projectId: "journal-10f89",
  storageBucket: "journal-10f89.appspot.com",
  messagingSenderId: "1083666620",
  appId: "1:1083666620:web:36da023dcd1e06bc36e0b9",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
