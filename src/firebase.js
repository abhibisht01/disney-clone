import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
const firebaseConfig = {
   add Yours
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();    // for database
const auth = firebase.auth();    //for authentication
const provider = new firebase.auth.GoogleAuthProvider();// for login google authentication
const storage = firebase.storage(); //for storage of videos in the databse.

export { auth, provider, storage };
export default db;






