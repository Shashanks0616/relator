// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAxR4JGnWKSkRdbfi1sG6k3k-feZn8BNLM",
  authDomain: "relator-clone-58aa1.firebaseapp.com",
  projectId: "relator-clone-58aa1",
  storageBucket: "relator-clone-58aa1.appspot.com",
  messagingSenderId: "675746580128",
  appId: "1:675746580128:web:b25c975275fc054b99ebc5",
  measurementId: "G-YP3SWGQG08"
};

// Initialize Firebase
 initializeApp(firebaseConfig);
export const db = getFirestore()