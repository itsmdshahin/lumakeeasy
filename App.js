import { StatusBar } from 'expo-status-bar';
import { Button, SafeAreaView, StyleSheet, Text, View } from 'react-native'; 
import StartPage from './components/startpage/StartPage'; 
import { getAuth } from 'firebase/auth';
import firebase, { firestore } from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; 
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

export const db = getFirestore(app);
export const auth = getAuth();

export default function App() {
  return (
    <SafeAreaView style={styles.getContainer}>
      <StatusBar style="auto" /> 
      <StartPage /> 

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  getContainer: {
    flex: 1,
    backgroundColor: '#F6F0F0',
    //alignItems: 'center',
    //justifyContent: 'center',
    //paddingTop:500,
  }
});
