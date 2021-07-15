import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBFgfEsXV2MbT0J0q3WChGQZgRtE-KFZ48",
  authDomain: "arg-almundo.firebaseapp.com",
  projectId: "arg-almundo",
  storageBucket: "arg-almundo.appspot.com",
  messagingSenderId: "1093467696048",
  appId: "1:1093467696048:web:6dd7bc9ca0ea33037c0475",
};

const fb = firebase.initializeApp(firebaseConfig);

export const getFirebase = () => fb;
export const getFireStore = () => firebase.firestore(fb);
