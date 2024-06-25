// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD-N7CZCYiVHlF2PkGnvAdmoB5BYIVd75g",
  authDomain: "pet-adoption-corner.firebaseapp.com",
  projectId: "pet-adoption-corner",
  storageBucket: "pet-adoption-corner.appspot.com",
  messagingSenderId: "857079126869",
  appId: "1:857079126869:web:433a624e8b284b743b2ddc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;