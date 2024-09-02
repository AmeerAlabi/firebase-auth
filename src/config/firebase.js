// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, } from 'firebase/auth';

// {getAuth}
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDk3v1ponRsCR3dJsC1Yra-8ekJspy_858",
  authDomain: "auth-6613d.firebaseapp.com",
  projectId: "auth-6613d",
  storageBucket: "auth-6613d.appspot.com",
  messagingSenderId: "299284100252",
  appId: "1:299284100252:web:82adf7cd22773a2d46e959",
  measurementId: "G-KCL0YXBJDG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const analytics = getAnalytics(app);


export {auth , googleProvider};