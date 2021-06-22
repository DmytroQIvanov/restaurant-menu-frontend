import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAIlxlzLcMWZDFrQMt9IbqFff7djpxaZJU",
    authDomain: "restaurant-menu-30c98.firebaseapp.com",
    projectId: "restaurant-menu-30c98",
    storageBucket: "restaurant-menu-30c98.appspot.com",
    messagingSenderId: "362454554846",
    appId: "1:362454554846:web:64c1c96f8337f701f74a4f"
};
firebase.initializeApp(firebaseConfig)

const auth = firebase.auth().signInAnonymously();
const firestore = firebase.firestore();

export { auth, firestore }
