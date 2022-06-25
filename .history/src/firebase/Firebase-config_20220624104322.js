import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZvlcZqIsmPyIKa9lUKTD7MzjcblPzR7A",
  authDomain: "todolist-redux-6e48f.firebaseapp.com",
  projectId: "todolist-redux-6e48f",
  storageBucket: "todolist-redux-6e48f.appspot.com",
  messagingSenderId: "262639916642",
  appId: "1:262639916642:web:1cb901b2dacad1660ca33b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
