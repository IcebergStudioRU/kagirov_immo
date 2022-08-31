import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCXrkxja7AGsVkqL3QWbV8TXdU9lxStL1o",
  authDomain: "testproject-10747.firebaseapp.com",
  projectId: "testproject-10747",
  storageBucket: "testproject-10747.appspot.com",
  messagingSenderId: "531058832857",
  appId: "1:531058832857:web:3d16b14516a4427e3915c8",
  measurementId: "G-S6G7PYZ02S",
};

initializeApp(firebaseConfig);

const db = getFirestore();

const flatsCol = collection(db, "flats");
const reviewsCol = collection(db, "review");

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
