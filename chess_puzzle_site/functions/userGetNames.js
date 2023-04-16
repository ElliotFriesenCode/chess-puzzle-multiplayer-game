import { getFirestore, collection, addDoc, setDoc, doc, getDoc, updateDoc, arrayUnion, onSnapshot } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

import {app, db} from './main.js';

export async function userGetNames(gamecode){

try {
const gamesRef = doc(db, "games", gamecode);

const docSnap = await getDoc(gamesRef);
if (docSnap.exists()) {
    let scores = [];
    let times = [];
    let userPositions = [];
    if(docSnap.data().names){
     scores = docSnap.data().scores,
     times = docSnap.data().times,
     userPositions = docSnap.data().userPositions
        }
        let positionArray = docSnap.data().posArray;
        var obj = {
            names: docSnap.data().names,
            scores: scores,
            times: times,
            userPositions: userPositions,
            positionArray: positionArray
        }
        return obj;
    }
  else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
  return docSnap.data().names;

} catch (e) {
console.error("Error adding document: ", e);
}

}    

