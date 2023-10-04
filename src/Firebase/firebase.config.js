// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBb24QF_hNVJOW6DsLwWcSssNSHgJbL2Aw",
    authDomain: "react-dragon-news-5031c.firebaseapp.com",
    projectId: "react-dragon-news-5031c",
    storageBucket: "react-dragon-news-5031c.appspot.com",
    messagingSenderId: "128903064633",
    appId: "1:128903064633:web:828a8ed0daf8522672b1e8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)