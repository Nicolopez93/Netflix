import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC6dLMliOWYMlDXpsgeuQLvT9vdQkE4euM",
  authDomain: "netflix-react-vite.firebaseapp.com",
  projectId: "netflix-react-vite",
  storageBucket: "netflix-react-vite.appspot.com",
  messagingSenderId: "527703627681",
  appId: "1:527703627681:web:5bc5c61b83463368049de0"
};

// Inicializa Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
