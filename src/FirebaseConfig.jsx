// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-GtOsddTk17CEI2ZS--d_iDrw1quNndU",
  authDomain: "my-education-event-management.firebaseapp.com",
  projectId: "my-education-event-management",
  storageBucket: "my-education-event-management.appspot.com",
  messagingSenderId: "40189792962",
  appId: "1:40189792962:web:7d2944f81d3d374a8c615b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);