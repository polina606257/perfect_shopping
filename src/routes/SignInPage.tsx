import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import firebaseApp from "../utils/FirebaseSettings";

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const user = result.user;
    // Handle successful sign-in
  } catch (error: any) {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    // Handle error
  }
};

const SignIn = () => {
  return <button onClick={signInWithGoogle}>Sign in with google</button>;
};

export default SignIn;
