// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCHYPBJZKieasxJ3Mf6o3ZuitBCKRrXzC0",
  authDomain: "netflixgpt-42b8d.firebaseapp.com",
  projectId: "netflixgpt-42b8d",
  storageBucket: "netflixgpt-42b8d.appspot.com",
  messagingSenderId: "80602164520",
  appId: "1:80602164520:web:e871531315b1490454f41d",
  measurementId: "G-WDT6325ZMT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();