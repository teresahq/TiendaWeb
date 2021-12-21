import * as firebase from 'firebase'

import 'firebase/storage';
import 'firebase/firestore';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyASdKorujrJOg79HLvGBpAL5aYT-BcMX5I",
    authDomain: "listacompras-41c6f.firebaseapp.com",
    projectId: "listacompras-41c6f",
    storageBucket: "listacompras-41c6f.appspot.com",
    messagingSenderId: "427732556568",
    appId: "1:427732556568:web:11b0fec42615d90b8f1c6d"
  };

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage }