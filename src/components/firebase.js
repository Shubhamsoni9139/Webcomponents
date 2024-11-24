import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBtbbsf9n6Cpn0aI2W7SlOjSg9Ybx6kbkE",

  authDomain: "my-app-a0dcf.firebaseapp.com",

  projectId: "my-app-a0dcf",

  storageBucket: "my-app-a0dcf.firebasestorage.app",

  messagingSenderId: "495953913896",

  appId: "1:495953913896:web:08fb679c3a9b35e671ad1d",

  measurementId: "G-1Q6FPL5DN4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
