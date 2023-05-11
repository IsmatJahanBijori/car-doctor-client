// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2GWL15JYp-cXXuFuw-85wB6VPusExOic",
  authDomain: "car-doctor-client-8bb0f.firebaseapp.com",
  projectId: "car-doctor-client-8bb0f",
  storageBucket: "car-doctor-client-8bb0f.appspot.com",
  messagingSenderId: "200545963905",
  appId: "1:200545963905:web:469471c30badfc8453a280"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;