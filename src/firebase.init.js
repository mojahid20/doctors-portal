// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBIAEQVTBl3I32GcpEPUGs_Aj1FcvtM42s",
  authDomain: "doctors-portal-7fc55.firebaseapp.com",
  projectId: "doctors-portal-7fc55",
  storageBucket: "doctors-portal-7fc55.appspot.com",
  messagingSenderId: "997651773069",
  appId: "1:997651773069:web:9eedfabee1e99e79fe54c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth =getAuth(app);
export default auth;
