import { getAuth, GoogleAuthProvider, User } from "firebase/auth";
import firebaseApp from "./firebase_settings";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

export const auth = getAuth(firebaseApp);
export const db = getFirestore(firebaseApp);
export const provider = new GoogleAuthProvider();

export const createUserInDB = async (user: User) => {
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
