// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import { getFirestore} from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBD6wQqhlhht4Rimm2dmUV6EiHJrTnfpe8",
  authDomain: "job-portal-cfe31.firebaseapp.com",
  projectId: "job-portal-cfe31",
  storageBucket: "job-portal-cfe31.appspot.com",
  messagingSenderId: "538368946793",
  appId: "1:538368946793:web:2ddf05942b30fbbd1528f8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app)
const storage = getStorage(app);
export{db,auth,storage}