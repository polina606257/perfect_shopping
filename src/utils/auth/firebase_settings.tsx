import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBIgqYbs02pzKqLe4XF0pya2_Oe15xTYhk",
  authDomain: "perfect-shopping-743bf.firebaseapp.com",
  projectId: "perfect-shopping-743bf",
  storageBucket: "perfect-shopping-743bf.appspot.com",
  messagingSenderId: "778510791195",
  appId: "1:778510791195:web:7c104ae864358c8bf97ebe",
};

const firebaseApp = initializeApp(firebaseConfig);

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const provider = new GoogleAuthProvider();

export default firebaseApp;
