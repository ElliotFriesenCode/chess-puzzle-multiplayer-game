import { getFirestore, collection, addDoc, setDoc, doc, getDoc, updateDoc, arrayUnion, onSnapshot } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

import {app, db} from './main.js';

export async function getUserData(gamecode, name){

try {
const gamesRef = doc(db, "games", gamecode);

const docSnap = await getDoc(gamesRef);
if (docSnap.exists()) {

     let id = docSnap.data().names.indexOf(name);
     let posArray = [];
     for(let i = 0; i < docSnap.data().posArray.length; i++){
       posArray.push(docSnap.data().userPositions[id * docSnap.data().posArray.length + i]);
     }
     var obj = {
        time: docSnap.data().times[id],
        pastMoves: docSnap.data().userPositions,
        playerMoves: posArray,
        rightMoves: docSnap.data().posArray
      };
     return obj;
  } else {
    // doc.data() will be undefined in this case
    console.log("No such document!");
  }
 

} catch (e) {
console.error("Error adding document: ", e);
}

}    