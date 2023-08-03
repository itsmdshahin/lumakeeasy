/* 
              LU MAKE EASY
ALL COPYRGIHT BY MD SHAHINUR RAHMAN (itsmdshahin) 
LINKDIN: https://www.linkedin.com/in/itsmdshahin
GITHUB : https://github.com/itsmdshahin
*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "yourapi",
  authDomain: "yourapi.firebaseapp.com",
  projectId: "yourapi",
  storageBucket: "yourapi.appspot.com",
  messagingSenderId: "youmessagingSenderId",
  appId: "1:40423275687:web:a1029d01a87b25a6c64ac2",
  measurementId: "G-L2D7M22J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);