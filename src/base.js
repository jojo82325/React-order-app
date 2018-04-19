import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyCNoAeXjiKV56SPS-eHdTn847AmAXwjb2Y",
  authDomain: "react-order-app-alicia.firebaseapp.com",
  databaseURL: "https://react-order-app-alicia.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp};

// This is a default export
export default base;