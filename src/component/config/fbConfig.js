import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyBzqLKRUbiy17lVdH6Y35MMK6GquSJcD0U",
    authDomain: "mpango-app-fca5e.firebaseapp.com",
    databaseURL: "https://mpango-app-fca5e.firebaseio.com",
    projectId: "mpango-app-fca5e",
    storageBucket: "",
    messagingSenderId: "101372503731",
    appId: "1:101372503731:web:9bc37e865e8fa263"
  };  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ timestampsInSnapshots: true });

  export default firebase;