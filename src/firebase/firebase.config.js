// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCveHX4sIpOUbnPvxWejR-w_4EzeVhzqpM",
  authDomain: "wedding-management-website.firebaseapp.com",
  projectId: "wedding-management-website",
  storageBucket: "wedding-management-website.appspot.com",
  messagingSenderId: "1047627479420",
  appId: "1:1047627479420:web:84fe23aff61809c0b8ccf9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;