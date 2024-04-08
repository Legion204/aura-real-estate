// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAL0jTqV2trOmpsDopbCHKbb_nohp0gxZ4",
  authDomain: "aura-real-estate.firebaseapp.com",
  projectId: "aura-real-estate",
  storageBucket: "aura-real-estate.appspot.com",
  messagingSenderId: "335932395004",
  appId: "1:335932395004:web:f8e6d83484fe22275cb679"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;