// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLfnao2QiHkI2dGgAxk4cZl7sFN_bd3LI",
  authDomain: "netflix-gpt-8bfe9.firebaseapp.com",
  projectId: "netflix-gpt-8bfe9",
  storageBucket: "netflix-gpt-8bfe9.firebasestorage.app",
  messagingSenderId: "852626527386",
  appId: "1:852626527386:web:aa54c07cc65a22a634bb23",
  measurementId: "G-F0RB7QQ4QT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics();

export const auth = getAuth();