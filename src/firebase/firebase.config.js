// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration



const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID
};


// const firebaseConfig = {
//   apiKey: "AIzaSyDYS4WlO0y2d5BsEhigpwwmjJcD3JgeMRs",
//   authDomain: "restaurent-projectone.firebaseapp.com",
//   projectId: "restaurent-projectone",
//   storageBucket: "restaurent-projectone.appspot.com",
//   messagingSenderId: "197641042378",
//   appId: "1:197641042378:web:c9fa8dc136fde67bee7733"
// };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);