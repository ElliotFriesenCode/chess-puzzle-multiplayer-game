import { initializeApp } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyCowa4ar8zsf5oakxrckDoB8ToL4lzSVok",
    authDomain: "chessfirebase-436cc.firebaseapp.com",
    projectId: "chessfirebase-436cc",
    storageBucket: "chessfirebase-436cc.appspot.com",
    messagingSenderId: "878803939774",
    appId: "1:878803939774:web:38516a054fec897aa0c9ef"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);

  export {app, db};