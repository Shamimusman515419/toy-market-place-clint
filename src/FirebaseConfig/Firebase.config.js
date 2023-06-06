// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzUzrYGe0EIZV-3hdmncZA_MQZOHJzTTY",
  authDomain: "music-school-3a36d.firebaseapp.com",
  projectId: "music-school-3a36d",
  storageBucket: "music-school-3a36d.appspot.com",
  messagingSenderId: "24814760843",
  appId: "1:24814760843:web:eb221219fc801b7a3d758e",
  measurementId: "G-3BPHQ1X5FB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;