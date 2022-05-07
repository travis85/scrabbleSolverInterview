// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFnh5N5cbjvdkLM1Mbll6fkiqbD04SGMw",
  authDomain: "scabblewords.firebaseapp.com",
  projectId: "scabblewords",
  storageBucket: "scabblewords.appspot.com",
  messagingSenderId: "310258895661",
  appId: "1:310258895661:web:52c7c4c151ff91821fe1a4",
  measurementId: "G-SMCSCKQF7R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);