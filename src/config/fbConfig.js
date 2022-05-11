import { initializeApp} from "firebase/app";
import firebase from 'firebase/compat/app'
// import firebase from "firebase";
import 'firebase/compat/firestore'; // important
// import * as firebase from 'firebase/app'
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyB3xik1SAB14rp_hD09TN1twVACBrHTBM4",
    authDomain: "evernote-bcbe0.firebaseapp.com",
    projectId: "evernote-bcbe0",
    storageBucket: "evernote-bcbe0.appspot.com",
    messagingSenderId: "387723438912",
    appId: "1:387723438912:web:3c986ac1e0ab42d508a8a5"
  };

  // Initialize Firebase
 
   const fbApp = firebase.initializeApp(firebaseConfig);
  //  const firestore = getFirestore(fbApp);
   export default getFirestore();
  

// const db = app.firestore();
// export default db;
//  const app = firebase.default.initializeApp(firebaseConfig)
  

//   const db = app.firestore();
// export default app;

