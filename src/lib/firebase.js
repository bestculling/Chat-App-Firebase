// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: "chat-app-3b664.firebaseapp.com",
  projectId: "chat-app-3b664",
  storageBucket: "chat-app-3b664.appspot.com",
  messagingSenderId: "1073877403073",
  appId: "1:1073877403073:web:f7e8749a34bfd532311b40",
  measurementId: "G-4ZSXHX2Z7T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth()
export const db = getFirestore()
export const storage = getStorage()