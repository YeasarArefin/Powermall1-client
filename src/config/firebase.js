import { initializeApp } from "firebase/app";

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID
    apiKey: "AIzaSyAa7qiYFg_XzRMX0f_CgtpsJM83ToXJUPs",
    authDomain: "e-shop-b7ee1.firebaseapp.com",
    projectId: "e-shop-b7ee1",
    storageBucket: "e-shop-b7ee1.appspot.com",
    messagingSenderId: "739244304640",
    appId: "1:739244304640:web:a29b17fccdbb01c246ebe5"
};

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig);
};

export default initializeAuthentication;