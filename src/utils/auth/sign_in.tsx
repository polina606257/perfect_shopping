import { User } from "firebase/auth";
import { db } from "./firebase_settings";
import { doc, setDoc, getDoc } from "firebase/firestore";

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
