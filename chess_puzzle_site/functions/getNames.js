import { getFirestore, collection, addDoc, setDoc, doc, getDoc, updateDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

import {app, db} from './main.js';
export async function getNames(gamecode){
   let f = [];
try {
  const gamesRef = doc(db, "games", gamecode);

    const docSnap = await getDoc(gamesRef);
    if (docSnap.exists()) {
      f = docSnap.data().names;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
      return docSnap.data().names;

  } catch (e) {
    console.error("Error adding document: ", e);
  }
  return f;
}

