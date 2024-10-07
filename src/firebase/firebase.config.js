import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyBBpPn0hFf3IJ73oY4kxj5kq3j1_EjhhMM",
    authDomain: "real-state-ass.firebaseapp.com",
    projectId: "real-state-ass",
    storageBucket: "real-state-ass.appspot.com",
    messagingSenderId: "1096348750645",
    appId: "1:1096348750645:web:4a9a6f026890e214ddb27c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;