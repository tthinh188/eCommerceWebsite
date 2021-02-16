import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAjSIA2GyM0zI4yPkpLSvTHZr2OO4UvLTs",
    authDomain: "clone-96fac.firebaseapp.com",
    projectId: "clone-96fac",
    storageBucket: "clone-96fac.appspot.com",
    messagingSenderId: "431728097284",
    appId: "1:431728097284:web:837cffe1ef3c143a5d1d51",
    measurementId: "G-3QP71WEKW8"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };