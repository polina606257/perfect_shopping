import { signInWithGoogle } from "../utils/auth/sign_in_logic";

const SignIn = () => {
  return <button onClick={signInWithGoogle}>Sign in with google</button>;
};

export default SignIn;
