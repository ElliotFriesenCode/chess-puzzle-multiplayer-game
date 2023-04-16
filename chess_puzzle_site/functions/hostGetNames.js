import { getFirestore, collection, addDoc, setDoc, doc, getDoc, updateDoc, arrayUnion, onSnapshot } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

import {app, db} from './main.js';

export async function hostGetNames(gamecode){
   
try {
  const gamesRef = doc(db, "games", gamecode);

    const docSnap = await getDoc(gamesRef);
    if (docSnap.exists()) {
        var obj = {
      names: docSnap.data().names,
      scores: docSnap.data().scores,
      puzzleCount: docSnap.data().fenArray.length,
      gameLength: docSnap.data().time
        }
        return obj;
      } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
      }
    

  } catch (e) {
    console.error("Error adding document: ", e);
  }
  
}    