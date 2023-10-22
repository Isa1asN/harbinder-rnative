import * as firebase from firebase
import 'firebase/firestore'
import 'firebase/auth'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAPfKmMXQNwM4XNP5lizuhM1_pF8-CAVvM",
    authDomain: "harbinder-39.firebaseapp.com",
    projectId: "harbinder-39",
    storageBucket: "harbinder-39.appspot.com",
    messagingSenderId: "643891075615",
    appId: "1:643891075615:web:380492ac18668b4496532a",
    measurementId: "G-T91CRH3EDJ"
  };

  let app;

  if (firebase.apps.length === 0) {
      app = firebase.initializeApp(firebaseConfig)
  } else {
      app = firebase.app()
  }

  const db = app.firestore()
  const auth = firebase.auth()
  export { db, auth }