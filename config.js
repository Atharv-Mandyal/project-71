import firebase from 'firebase'
require("@firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCaCd5ZmlMNHVSrtBYm8-wuOXHNOUACqvY",
  authDomain: "complaint-forum-4088d.firebaseapp.com",
  projectId: "complaint-forum-4088d",
  storageBucket: "complaint-forum-4088d.appspot.com",
  messagingSenderId: "447667651219",
  appId: "1:447667651219:web:9d64aaa433d23606d24366",
  measurementId: "G-DEMQ6J572P"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
  firebase.initializeApp(firebaseConfig);

  export default firebase.firestore()

