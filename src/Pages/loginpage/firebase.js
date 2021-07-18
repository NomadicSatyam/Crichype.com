import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCo5amghEe7GDNOIkaPQEe_bFW4gUQuoA8",
    authDomain: "crichype-79915.firebaseapp.com",
    projectId: "crichype-79915",
    storageBucket: "crichype-79915.appspot.com",
    messagingSenderId: "638640547374",
    appId: "1:638640547374:web:f2f3c42d2557b54cc921bf",
    measurementId: "G-N0CGFVZW77"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig); 

const db=firebaseApp.firestore();
const auth=firebase.auth();
const storage = firebaseApp.storage();
  
export {db,auth,storage};  