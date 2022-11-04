import { initializeApp } from "firebase/app";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCKURJ0kyTlNa0Y75mC6lfrGqJRl6cOweU",
  authDomain: "react-auto-dummy.firebaseapp.com",
  projectId: "react-auto-dummy",
  storageBucket: "react-auto-dummy.appspot.com",
  messagingSenderId: "17357887147",
  appId: "1:17357887147:web:a8350663cba0c4239e09ee",
};

var fire;
if (!firebase.apps.length) {
  fire = firebase.initializeApp(firebaseConfig);
} else {
  fire = firebase.app(); // if already initialized, use that one
}
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = fire.firestore();
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.log(error);
    });
};
// export { auth, db };
// Initialize Firebase
// const fire = initializeApp(firebaseConfig);

export default fire;
