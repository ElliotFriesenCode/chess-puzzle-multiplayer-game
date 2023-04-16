import { getFirestore, collection, addDoc, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

import {app, db} from './main.js';
export async function write(f, l, a){
try {
    const docRef = await setDoc(doc(db, "games", "01012"), {
      firstName: f,
      lastName: l,
      age: a
    });
   // console.log("Document written with ID: ", docRef.);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
