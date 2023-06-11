import React, { useState } from "react";
import "./auth_form.styles.scss";
import { AuthButton, GoogleSignInButton } from "../Buttons";
import "../../components/buttons.styles.scss";
import Input from "../Input";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider, createUserInDB } from "../../utils/auth/sign_in_logic";

const Form: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      createUserInDB(result.user);
    } catch (error: any) {
      console.log("error creating user", error.message);
    }
  };

  const signInWithMailAndPassword = async (email: string, password: string) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential.user);
      })
      .catch((error) => {
        alert("Wrong e-mail or password");
      });
  };

  return (
    <form className="form-container" onSubmit={(e) => e.preventDefault()}>
      <Input
        htmlFor="email"
        labelName="Email"
        id="email"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        htmlFor="password"
        labelName="Password"
        id="password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <div className="button-container">
        <AuthButton
          text="Sign in"
          onSubmit={() => {
            signInWithMailAndPassword(email, password);
          }}
        />
        <GoogleSignInButton
          onClick={signInWithGoogle}
          className="sign-with-google-button"
          text="Sign in with Google"
        />
      </div>
    </form>
  );
};

export default Form;
