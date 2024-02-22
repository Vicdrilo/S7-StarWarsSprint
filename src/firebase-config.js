import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAgQWWBqFi18UFWA24m8e85oVc3MfbV3bc",
  authDomain: "react-sw-sprint7.firebaseapp.com",
  projectId: "react-sw-sprint7",
  storageBucket: "react-sw-sprint7.appspot.com",
  messagingSenderId: "282484195424",
  appId: "1:282484195424:web:e0af41f63bd00cfea04305",
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
