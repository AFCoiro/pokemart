// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDZqEDtXA6NS_PIYLGLrznK1DagGHAGupk",
  authDomain: "pokemart-63af9.firebaseapp.com",
  projectId: "pokemart-63af9",
  storageBucket: "pokemart-63af9.firebasestorage.app",
  messagingSenderId: "655257107010",
  appId: "1:655257107010:web:63e0bbfa781d84ea85cbdb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

const auth = getAuth(app)

export { db, auth }