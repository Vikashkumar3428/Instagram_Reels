import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyBPuSw_1PGWN7hzT1dxyQJhloea8VUuvak",
    authDomain: "ig-reels-3cfc4.firebaseapp.com",
    projectId: "ig-reels-3cfc4",
    storageBucket: "ig-reels-3cfc4.appspot.com",
    messagingSenderId: "415183262282",
    appId: "1:415183262282:web:1aa48cba4cf66794e2ccb3",
    measurementId: "G-BWV0FHS0D6"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();

  export default db;