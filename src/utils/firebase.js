import { initializeApp } from 'firebase/app'
import { getFirestore, collection, getDocs} from 'firebase/firestore'
// const firebaseConfig = {
//     apiKey: "AIzaSyAIRtwGJ0nBfAYgeMPvK0Tdl_JvLpmIxMs",
//     authDomain: "kagirovimmo.firebaseapp.com",
//     projectId: "kagirovimmo",
//     storageBucket: "kagirovimmo.appspot.com",
//     messagingSenderId: "525629029893",
//     appId: "1:525629029893:web:abb1667f279d2da04be66c",
//     measurementId: "G-YD8PH26496"
// };
const firebaseConfig = {
    apiKey: "AIzaSyCXrkxja7AGsVkqL3QWbV8TXdU9lxStL1o",
    authDomain: "testproject-10747.firebaseapp.com",
    projectId: "testproject-10747",
    storageBucket: "testproject-10747.appspot.com",
    messagingSenderId: "531058832857",
    appId: "1:531058832857:web:3d16b14516a4427e3915c8",
    measurementId: "G-S6G7PYZ02S"
};
initializeApp(firebaseConfig)

const db = getFirestore()

const flatsCol = collection(db, 'flats')

export const getFlats = () => {
    return getDocs(flatsCol).then((response) => response.docs.map((doc) => ({...doc.data(), id: doc.id})))
}