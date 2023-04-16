import { getFirestore, collection, addDoc, setDoc, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.16.0/firebase-firestore.js";

import {app, db} from './main.js';
export async function create(gamecode, fenArray, posArray, time){
try {
    const docRef = await setDoc(doc(db, "games", gamecode), {
      gamecode: gamecode,
      fenArray: fenArray,
      posArray: posArray,
      time: time
    });
  
    window.location.href = './hostgame.html?gamecode=' + gamecode;
   // console.log("Document written with ID: ", docRef.);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
