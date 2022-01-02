import { initializeApp } from "firebase/app";

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID
    apiKey: "AIzaSyCa48CSnWyurO_rlkjpFGoDfsP-TjWwfzk",
    authDomain: "ema-john-9ca17.firebaseapp.com",
    projectId: "ema-john-9ca17",
    storageBucket: "ema-john-9ca17.appspot.com",
    messagingSenderId: "222981343989",
    appId: "1:222981343989:web:9be1b7d6be2e5db8a013bc"
};

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig);
};

export default initializeAuthentication;