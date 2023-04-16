import { getFirestore, collection, addDoc, setDoc, doc, getDoc, updateDoc, arrayUnion } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

import {app, db} from './main.js';
export async function addName(gamecode, name, arr, arr2, arr3, length){
  arr.push(-1);
  arr2.push(-1);
  let x;
  if(arr3.length > 0){
    x = arr3;
  }
  else{
    x = [];
  }
  for(let i = 0; i < length; i++){
    x.push(-1);
  }
 
try {
  const gamesRef = doc(db, "games", gamecode);

    const docRef = await updateDoc(gamesRef, {
      names: arrayUnion(name),
      scores: arr,
      times: arr2,
      userPositions: x
  });
   // window.location.href = './hostgame.html?gamecode=' + gamecode;
   // console.log("Document written with ID: ", docRef.);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
