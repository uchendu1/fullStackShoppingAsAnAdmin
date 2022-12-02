// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-axF_u6z5W0YJgoFqYyX8wActNEnFH18",
  authDomain: "fullstackshoppingapp.firebaseapp.com",
  projectId: "fullstackshoppingapp",
  storageBucket: "fullstackshoppingapp.appspot.com",
  messagingSenderId: "618380669836",
  appId: "1:618380669836:web:6e859b7816270b304d1ca9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;