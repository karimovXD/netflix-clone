// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB59igQNh-7K_pN-VzUIL5Ac0j4vuIuMcY",
  authDomain: "netflix-8f1a0.firebaseapp.com",
  projectId: "netflix-8f1a0",
  storageBucket: "netflix-8f1a0.appspot.com",
  messagingSenderId: "722019626913",
  appId: "1:722019626913:web:62d20d8aa3b2e44c9965e0",
  measurementId: "G-D6MK43YKTM"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const analytics = getAnalytics(app);