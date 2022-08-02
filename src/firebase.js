import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
    apiKey: "AIzaSyDGZWeN49tuLpCrgDlhBinPkMUgEBvztQ0",
    authDomain: "disney-clone-9c479.firebaseapp.com",
    projectId: "disney-clone-9c479",
    storageBucket: "disney-clone-9c479.appspot.com",
    messagingSenderId: "773111862473",
    appId: "1:773111862473:web:631a0a1ea2c078d33ee918",
    measurementId: "G-3JX8W85JB6"
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();    // for database
const auth = firebase.auth();    //for authentication
const provider = new firebase.auth.GoogleAuthProvider();// for login google authentication
const storage = firebase.storage(); //for storage of videos in the databse.

export { auth, provider, storage };
export default db;






