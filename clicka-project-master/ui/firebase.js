// firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"; // ייבוא נכון של getAuth
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "AIzaSyCbF-hjpnl7L3SGTQdm2jchxZI33OjsoxI",
  authDomain: "clicka-50280.firebaseapp.com",
  projectId: "clicka-50280",
  storageBucket: "clicka-50280.appspot.com",
  messagingSenderId: "868613634026",
  appId: "1:868613634026:web:abcdef123456",
};

// אתחול האפליקציה של Firebase
const app = initializeApp(firebaseConfig);

// קבלת ה-auth של Firebase
const auth = getAuth(app);

// אין צורך להגדיר persistence עם getReactNativePersistence, זה מתבצע אוטומטית עם Firebase SDK
export { auth, signInWithEmailAndPassword };
