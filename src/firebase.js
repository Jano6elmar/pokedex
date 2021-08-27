import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore' 
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyCxNLlNx4OUssxOkApuFTx8n9B1RYvsVKA",
    authDomain: "crud-firestore-jan1.firebaseapp.com",
    projectId: "crud-firestore-jan1",
    storageBucket: "crud-firestore-jan1.appspot.com",
    messagingSenderId: "627890849333",
    appId: "1:627890849333:web:c7eb7749e56b3f8b6e937c"
  };


firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()
const storage = firebase.storage()

export {auth, firebase, db, storage}