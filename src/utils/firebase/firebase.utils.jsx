import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIKueZAYD5KDThyStciscQhD4k7kkpXaQ",
  authDomain: "crwn-andres-clothing.firebaseapp.com",
  projectId: "crwn-andres-clothing",
  storageBucket: "crwn-andres-clothing.appspot.com",
  messagingSenderId: "250131470200",
  appId: "1:250131470200:web:4d897f4da6270c9640da8d",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
