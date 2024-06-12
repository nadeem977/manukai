import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB_wwH870GkMH4cfEGBMvM5nDML4T100kM",
  authDomain: "manukai-396100.firebaseapp.com",
  projectId: "manukai-396100",
  storageBucket: "manukai-396100.appspot.com",
  messagingSenderId: "576925536162",
  appId: "1:576925536162:web:e14a95be91768bbafaacfb"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
