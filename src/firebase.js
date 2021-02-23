// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseApp =firebase.initializeApp(
 {
    apiKey: "AIzaSyCjEuzVw3tGGKTkepGsZBG0QsQgX14WDzo",
    authDomain: "instagram-clone-355eb.firebaseapp.com",
    projectId: "instagram-clone-355eb",
    storageBucket: "instagram-clone-355eb.appspot.com",
    messagingSenderId: "289834749607",
    appId: "1:289834749607:web:ef023bee9d1f1220639582",
    measurementId: "G-RLXDHH7F7S"
  });
  
  const db=firebaseApp.firestore();
  const auth=firebase.auth();
  const storage=firebase.storage();

  export {db,auth, storage};

  //export default db;