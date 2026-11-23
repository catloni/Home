// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbBau4BYJDZpO2I23AeSQ013M2IO-9aUk",
  authDomain: "home-2785a.firebaseapp.com",
  projectId: "home-2785a",
  storageBucket: "home-2785a.firebasestorage.app",
  messagingSenderId: "940491935384",
  appId: "1:940491935384:web:e6e496536c6e5c76da0aed",
  measurementId: "G-9TBZ0RY33K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
