// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDJvNZ3ke2MseSWQc8UR9E3NdMC3kByLEo",
  authDomain: "netflixgpt-de679.firebaseapp.com",
  projectId: "netflixgpt-de679",
  storageBucket: "netflixgpt-de679.appspot.com",
  messagingSenderId: "941298380634",
  appId: "1:941298380634:web:c2800670af27e86885cd63",
  measurementId: "G-82TDRKW2FC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth=getAuth();