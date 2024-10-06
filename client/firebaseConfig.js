import { initializeApp } from "firebase/app";

import {
	getAuth,
	createUserWithEmailAndPassword,
	signInWithEmailAndPassword,
	signInWithPopup,
} from "firebase/auth";
const firebaseConfig = {
	apiKey: "AIzaSyDOd9UJ5mDEx4QbBobsFM7o3lKuigj2auY",
	authDomain: "codemate-01.firebaseapp.com",
	projectId: "codemate-01",
	storageBucket: "codemate-01.appspot.com",
	messagingSenderId: "776826410761",
	appId: "1:776826410761:web:93518bda9db613f82165d8",
	measurementId: "G-H2L9MVJ6TW",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
