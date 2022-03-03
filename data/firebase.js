
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBoXoRR2uG9B4V7eWbZE39GFPoLhpYRpCk",
  authDomain: "instagram-clone-rn-f1c80.firebaseapp.com",
  projectId: "instagram-clone-rn-f1c80",
  storageBucket: "instagram-clone-rn-f1c80.appspot.com",
  messagingSenderId: "648161257982",
  appId: "1:648161257982:web:7535368366a4c0e2f1b8af"
};

!firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = firebase.firestore();

export {firebase, db}