// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcIFALtuJ1iA3xTz8O7I6nGt4VSlSChe0",
  authDomain: "project-9-2b223.firebaseapp.com",
  projectId: "project-9-2b223",
  storageBucket: "project-9-2b223.appspot.com",
  messagingSenderId: "114375426067",
  appId: "1:114375426067:web:5e1b5b2c72a8473a4b3fe6"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app) ;