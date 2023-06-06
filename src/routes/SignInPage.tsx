import HaveAccountSection from "../components/auth/HaveAccountSection";
import NoAccountSection from "../components/auth/NoAccountSection";
import { signInWithGoogle } from "../utils/auth/sign_in_logic";
import "./sign_in_page.styles.scss";

const SignInOption = () => {
  return (
    <div className="sign-in-container">
      <HaveAccountSection />
      <NoAccountSection />
    </div>
  );
};

const SignIn = () => {
  return <button onClick={signInWithGoogle}>Sign in with google</button>;
};

export default SignInOption;
