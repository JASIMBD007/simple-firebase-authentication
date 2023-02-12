// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAZQcHjU-Di89_dkU9qsfqoSsUdmNzbY8A",
    authDomain: "simple-firebase-authenti-36b37.firebaseapp.com",
    projectId: "simple-firebase-authenti-36b37",
    storageBucket: "simple-firebase-authenti-36b37.appspot.com",
    messagingSenderId: "441429110535",
    appId: "1:441429110535:web:3e30de180d7361226a5fa2",
    measurementId: "G-7JT2TVDN9W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;