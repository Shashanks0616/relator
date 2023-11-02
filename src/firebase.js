// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxqYOdEWWJijjeU_syF_hYqsTMCpLoHl8",
  authDomain: "relatorclone.firebaseapp.com",
  projectId: "relatorclone",
  storageBucket: "relatorclone.appspot.com",
  messagingSenderId: "233701942562",
  appId: "1:233701942562:web:bacf098586c6b8548df17b",
  measurementId: "G-VYY8WP2P0N"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()