import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyAmapZ4HyS11Vh0elY2PWz6_eyHd-wcr5Y",
  authDomain: "booking-app-48201.firebaseapp.com",
  databaseURL: "https://booking-app-48201.firebaseio.com",
  projectId: "booking-app-48201",
  storageBucket: "booking-app-48201.appspot.com",
  messagingSenderId: "362177666940",
  appId: "1:362177666940:web:757c50d77d2f5c5cf60ef9"
});


const auth = firebase.auth();
const db = firebase.auth();
export { auth, db };
// export const auth = app.auth();
export default app;
