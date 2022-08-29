// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCinNDWZOBkjrqx1r0Hb6KGWc7Te4cvYNM",
    authDomain: "image-uploader-553e1.firebaseapp.com",
    projectId: "image-uploader-553e1",
    storageBucket: "image-uploader-553e1.appspot.com",
    messagingSenderId: "320483593667",
    appId: "1:320483593667:web:b48c82135b6d4e79958176"
  };
// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);