import firebase from "firebase/app";
import "firebase/auth";

const app = firebase.initializeApp({
  apiKey: "*********************************",
  authDomain: "*********************************",
  databaseURL: "*********************************",
  projectId: "*********************************",
  storageBucket: "*********************************",
  messagingSenderId: "*********************************",
  appId: "*********************************"
});


const auth = firebase.auth();
const db = firebase.auth();
export { auth, db };
// export const auth = app.auth();
export default app;
