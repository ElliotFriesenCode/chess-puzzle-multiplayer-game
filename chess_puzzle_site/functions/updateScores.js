import { getFirestore, collection, addDoc, setDoc, doc, getDoc, updateDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

import {app, db} from './main.js';
export async function updateScores(gamecode, scores, times, pA){

try {
  const gamesRef = doc(db, "games", gamecode);

    const docRef = await updateDoc(gamesRef, {
      scores: scores,
      times: times,
      userPositions: pA
  });
   // window.location.href = './hostgame.html?gamecode=' + gamecode;
   // console.log("Document written with ID: ", docRef.);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
