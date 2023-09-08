import {getFirestore} from 'firebase/firestore'
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7uXUdSGaKBf1g2ykS8lPe2jpYsYXXgwM",
  authDomain: "proyectofinalreactjs-e351e.firebaseapp.com",
  projectId: "proyectofinalreactjs-e351e",
  storageBucket: "proyectofinalreactjs-e351e.appspot.com",
  messagingSenderId: "1014344436520",
  appId: "1:1014344436520:web:b042cce2ffa7622950de1d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)