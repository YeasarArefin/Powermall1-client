import { initializeApp } from "firebase/app";

const firebaseConfig = {
    // apiKey: process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID
    apiKey: "AIzaSyDwZhp1DFWfIfs40AWGxhy3nPu1jjvPh5Q",
    authDomain: "powermall-1291a.firebaseapp.com",
    projectId: "powermall-1291a",
    storageBucket: "powermall-1291a.appspot.com",
    messagingSenderId: "125417358657",
    appId: "1:125417358657:web:cb98684c89784200c44dc0"
};

// Initialize Firebase
const initializeAuthentication = () => {
    return initializeApp(firebaseConfig);
};

export default initializeAuthentication;