// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // make sure this line is present
import { getAuth } from "firebase/auth"; // <-- important!


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCwCYfbmdoGChjqPt1hTCOsUkGn0R5QHxQ",
  authDomain: "bit-dhobi.firebaseapp.com",
  projectId: "bit-dhobi",
  storageBucket: "bit-dhobi.firebasestorage.app",
  messagingSenderId: "59866045333",
  appId: "1:59866045333:web:2d9a6d7ea956f061e0349c",
  measurementId: "G-R6QCDWC8J7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Firestore reference
export const db = getFirestore(app);
export const auth = getAuth(app); // <-- new
