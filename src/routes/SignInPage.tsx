import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseApp from "../utils/FirebaseSettings";
import { getFirestore, doc, setDoc, getDoc } from "firebase/firestore";

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const userRef = doc(db, "users", result.user.uid);
    const userSnapshot = await getDoc(userRef);
    if (!userSnapshot.exists()) {
      await setDoc(userRef, {
        displayName: result.user.displayName,
        email: result.user.email,
        createdAt: new Date(),
      });
    }
  } catch (error: any) {
    console.log("error creating user", error.message);
  }
};

const SignIn = () => {
  return <button onClick={signInWithGoogle}>Sign in with google</button>;
};

export default SignIn;
