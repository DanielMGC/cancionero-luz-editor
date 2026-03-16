// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcT8AvXDrpX2xfXSuq_fbL427aODsJTog",
  authDomain: "cancionero-luz.firebaseapp.com",
  projectId: "cancionero-luz",
  storageBucket: "cancionero-luz.firebasestorage.app",
  messagingSenderId: "178667276692",
  appId: "1:178667276692:web:d60fa4e009b967c69ca781"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

// Export the database instance so we can use it in our pages
export const db = getFirestore(app);