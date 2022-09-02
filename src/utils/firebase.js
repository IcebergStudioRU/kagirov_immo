import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAIRtwGJ0nBfAYgeMPvK0Tdl_JvLpmIxMs",
  authDomain: "kagirovimmo.firebaseapp.com",
  projectId: "kagirovimmo",
  storageBucket: "kagirovimmo.appspot.com",
  messagingSenderId: "525629029893",
  appId: "1:525629029893:web:abb1667f279d2da04be66c",
  measurementId: "G-YD8PH26496"
};

initializeApp(firebaseConfig);

const db = getFirestore();

const flatsCol = collection(db, "flats");
const reviewsCol = collection(db, "reviews");

export const getFlats = () => {
  return getDocs(flatsCol).then((response) =>
    response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  );
};

export const getFlat = (id) => {
  const flatRef = doc(db, "flats", id);
  return getDoc(flatRef).then((response) => response.data());
};

export const getReviews = () => {
  return getDocs(reviewsCol).then((response) =>
    response.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
  );
};
