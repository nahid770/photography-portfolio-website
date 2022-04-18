// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBZas_enVZvGjOHOnIWuZrDMq5swkP2gbc",
  authDomain: "photographer-portfolio-836b8.firebaseapp.com",
  projectId: "photographer-portfolio-836b8",
  storageBucket: "photographer-portfolio-836b8.appspot.com",
  messagingSenderId: "858702266451",
  appId: "1:858702266451:web:e0db213239117cf5cdc6a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;