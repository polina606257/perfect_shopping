import {
  getAuth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  User,
} from "firebase/auth";
import firebaseApp from "./firebase_settings";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    createUserInDB(result.user);
  } catch (error: any) {
    console.log("error creating user", error.message);
  }
};

const createUserWithMailAndPassword = async (
  email: string,
  password: string
) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      createUserInDB(userCredential.user);
    })
    .catch((error) => {
      console.log("error creating user", error.message);
    });
};

const signInWithMailAndPassword = async (email: string, password: string) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {})
    .catch((error) => {
      console.log("error login user", error.message);
    });
};

const createUserInDB = async (user: User) => {
  const userRef = doc(db, "users", user.uid);
  const userSnapshot = await getDoc(userRef);
  if (!userSnapshot.exists()) {
    await setDoc(userRef, {
      displayName: user.displayName,
      email: user.email,
      createdAt: new Date(),
    });
  }
};
