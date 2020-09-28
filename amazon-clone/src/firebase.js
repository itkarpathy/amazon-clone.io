import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "",
  authDomain: "clone-82f1f.firebaseapp.com",
  databaseURL: "https://clone-82f1f.firebaseio.com",
  projectId: "clone-82f1f",
  storageBucket: "clone-82f1f.appspot.com",
  messagingSenderId: "157308094013",
  appId: "1:157308094013:web:4c6b73876c0e60948acc54",
  measurementId: "G-F9J75P5LRH",
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
