
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC4MT-9MAUCYToxtpVbpj-KpuqncM7RZFg",
    authDomain: "clone-medium-ca7c9.firebaseapp.com",
    projectId: "clone-medium-ca7c9",
    storageBucket: "clone-medium-ca7c9.appspot.com",
    messagingSenderId: "1009243827956",
    appId: "1:1009243827956:web:31072c7f2399e9b4b0f8a1",
    measurementId: "G-LSQE7267EG"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };