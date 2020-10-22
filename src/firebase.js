import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBgv2CUiZwl7GbGjarWiswbFaJvs2-PX00",
  authDomain: "slack-clone-f90cb.firebaseapp.com",
  databaseURL: "https://slack-clone-f90cb.firebaseio.com",
  projectId: "slack-clone-f90cb",
  storageBucket: "slack-clone-f90cb.appspot.com",
  messagingSenderId: "775835116408",
  appId: "1:775835116408:web:9684ac6f39e2b985d11e8d",
  measurementId: "G-RXHGD0Q5GS"
};

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebaseApp.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const db = firebaseApp.firestore();

  export {auth, provider};
  export default db;