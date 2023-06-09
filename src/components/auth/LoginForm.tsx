import React, { useState } from "react";
import "./auth_form.styles.scss";
import "../../components/buttons.styles.scss";
import Input from "../Input";
import { signInWithPopup, signInWithEmailAndPassword } from "firebase/auth";
import { auth, provider } from "../../utils/auth/firebase_settings";
import { createUserInDB } from "../../utils/auth/sign_in";
import { useTranslation } from "react-i18next";
import { BaseSignButton } from "../Buttons";

const Form: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { t } = useTranslation();

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
        alert(t("wrong_email_or_password"));
      });
  };

  return (
    <form className="form-container" onSubmit={(e) => e.preventDefault()}>
      <Input
        htmlFor="email"
        labelName="Email"
        type="email"
        value={email}
        onChange={handleEmailChange}
      />
      <Input
        htmlFor="password"
        labelName="Password"
        type="password"
        value={password}
        onChange={handlePasswordChange}
      />
      <div className="button-container">
        <BaseSignButton
          text="Sign in"
          onClick={() => {
            signInWithMailAndPassword(email, password);
          }}
        />
        <BaseSignButton
          onClick={signInWithGoogle}
          className="sign-with-google-button"
          text="Sign in with Google"
        />
      </div>
    </form>
  );
};

export default Form;
