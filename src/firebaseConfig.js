// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAjCl6VQj3uZM1Dk_NpEuCXebluwHIQ_ng",
  authDomain: "todo-85050.firebaseapp.com",
  projectId: "todo-85050",
  storageBucket: "todo-85050.firebasestorage.app",
  messagingSenderId: "1063715075277",
  appId: "1:1063715075277:web:94dd1d17a7426acbb3e584",
  databaseURL: "https://todo-85050-default-rtdb.europe-west1.firebasedatabase.app/"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Datatbase
const db = getDatabase(app);

//Initialize Firebase Auth
const auth = getAuth(app);

// Export Database
export { db };

// Export Auth
export { auth };

// Export App
export { app }
