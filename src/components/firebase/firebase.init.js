// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEWtUwO7uF3k1eTYKHvE_jDBwn5PAI6Oo",
  authDomain: "coffee-store-77e0a.firebaseapp.com",
  projectId: "coffee-store-77e0a",
  storageBucket: "coffee-store-77e0a.firebasestorage.app",
  messagingSenderId: "762353789971",
  appId: "1:762353789971:web:c3f66cbf257b78e38ae3e6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
