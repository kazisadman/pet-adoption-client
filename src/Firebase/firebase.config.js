// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB0QU2syqvfuDKZ9PuEaQ20z1Xmdh57HnQ",
  authDomain: "pet-adoption-767df.firebaseapp.com",
  projectId: "pet-adoption-767df",
  storageBucket: "pet-adoption-767df.appspot.com",
  messagingSenderId: "481535392865",
  appId: "1:481535392865:web:66e8852a92959de5c73e20",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
