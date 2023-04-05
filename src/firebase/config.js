
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD5QrKNXxgr9eTVmd5gp5Di-cAsC5dl7q4",
  authDomain: "ceramicas-lorem.firebaseapp.com",
  projectId: "ceramicas-lorem",
  storageBucket: "ceramicas-lorem.appspot.com",
  messagingSenderId: "814006575818",
  appId: "1:814006575818:web:f4f59dc12ab4a98d644a33"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)