// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import 'firebase/firestore';



// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCGUFdnYXUrKaqyeE_iajXqmO6D-u0NOEI",
  authDomain: "graduation-87109.firebaseapp.com",
  projectId: "graduation-87109",
  storageBucket: "graduation-87109.appspot.com",
  messagingSenderId: "582869528567",
  appId: "1:582869528567:web:0b625e5a61a0ac54ef88f2"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
