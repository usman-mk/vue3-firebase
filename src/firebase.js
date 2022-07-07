// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCn2L3XzYOV0k0AvxKhBoIo_e3vtzwSID4",
  authDomain: "anc-gift.firebaseapp.com",
  projectId: "anc-gift",
  storageBucket: "anc-gift.appspot.com",
  messagingSenderId: "1087212921355",
  appId: "1:1087212921355:web:1c5c60557a4ada4a2d9d0e",
  measurementId: "G-P1MT579LMS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const drawersColRef = collection(db, 'drawers');

export default drawersColRef;