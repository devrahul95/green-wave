// src/firebaseConfig.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCJOWF8Gw7O6aXLAawJJkjzSBS2lvymRww",
  authDomain: "react-firbase-login.firebaseapp.com",
  projectId: "react-firbase-login",
  storageBucket: "react-firbase-login.appspot.com",
  messagingSenderId: "832091143484",
  appId: "1:832091143484:web:a8ae07a78611e29990f239",
  measurementId: "G-0S5DJ6L29R"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
