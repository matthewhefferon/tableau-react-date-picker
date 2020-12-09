import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCGWwbpnUcE_T0YGKaN5aJ4UWxereQi8Yc",
  authDomain: "tableau-react-date-picker.firebaseapp.com",
  projectId: "tableau-react-date-picker",
  storageBucket: "tableau-react-date-picker.appspot.com",
  messagingSenderId: "1012163997925",
  appId: "1:1012163997925:web:cea3cdd605ec0083d2240c",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;
