// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const FirebaseApp = firebase.initializeApp(
  {

    apiKey: "AIzaSyBAoVwQ4_aDLqXUR1xkTWAWnluTQjOqeJs",
    authDomain: "instagram-clone-7e5f8.firebaseapp.com",
    projectId: "instagram-clone-7e5f8",
    storageBucket: "instagram-clone-7e5f8.appspot.com",
    messagingSenderId: "798498757351",
    appId: "1:798498757351:web:5ba83096bae2e8fe8ae042",
    measurementId: "G-Q3P5YCVTK7"

  });

const db = FirebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

  //export default db;