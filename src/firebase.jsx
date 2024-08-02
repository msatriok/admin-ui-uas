import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "store-tutorial-fd83e.firebaseapp.com",
  projectId: "store-tutorial-fd83e",
  storageBucket: "store-tutorial-fd83e.appspot.com",
  messagingSenderId: "1032720897113",
  appId: "1:1032720897113:web:55f80fa4b34dc96d204d48"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);