import React, { useState } from "react";
import "./auth_form.styles.scss";
import { AuthButton } from "../Buttons";
import "../../components/buttons.styles.scss";
import Input from "../Input";

const Form: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  return (
    <div className="form-container">
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
        <AuthButton text="Sign in" />
        <AuthButton
          className="sign-with-google-button"
          text="Sign in with Google"
        />
      </div>
    </div>
  );
};

export default Form;
