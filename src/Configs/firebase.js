// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig1 = {
  apiKey: "AIzaSyC8i1FJ107uGyw1J4Q68PNLdYXd5hJyfQY",
  authDomain: "react-app-ed528.firebaseapp.com",
  projectId: "react-app-ed528",
  storageBucket: "react-app-ed528.appspot.com",
  messagingSenderId: "956153301651",
  appId: "1:956153301651:web:19cc16c9e72d5c7caadb66",
  measurementId: "G-78EYZB1TQR"
};

// Initialize Firebase
 const app = initializeApp(firebaseConfig1);
 const db=getFirestore(app);
  export {db};