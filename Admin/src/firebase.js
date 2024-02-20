import firebase from 'firebase/compat/app'
import   "firebase/compat/storage"

 
const firebaseConfig = {
    apiKey: "AIzaSyAD7V1FI6mMb4-XhF_unpaGUJcls9HNCGw",
    authDomain: "snowbird-3ff54.firebaseapp.com",
    projectId: "snowbird-3ff54",
    storageBucket: "snowbird-3ff54.appspot.com",
    messagingSenderId: "93864580903",
    appId: "1:93864580903:web:9ce31270a6820dea297b02",
    measurementId: "G-W8K0NCC7TE"
  };


firebase.initializeApp(firebaseConfig)
const storage = firebase.storage()
export default storage