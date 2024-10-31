// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-75762.firebaseapp.com",
  projectId: "mern-blog-75762",
  storageBucket: "mern-blog-75762.firebasestorage.app",
  messagingSenderId: "99549948145",
  appId: "1:99549948145:web:1324a547e7a2ba69376150",
  measurementId: "G-J3JRJF1SR9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);