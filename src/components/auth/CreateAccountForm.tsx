import { AuthButton } from "../Buttons";
import Input from "../Input";
import "./auth_form.styles.scss";
import { useState } from "react";

const CreateAccountForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };

  return (
    <div className="form-container">
      <Input
        htmlFor="name"
        labelName="Display name"
        id="name"
        type="text"
        value={name}
        onChange={handleNameChange}
      />
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
      <Input
        htmlFor="confirm-password"
        labelName="Confirm password"
        id="confirm-password"
        type="password"
        value={confirmPassword}
        onChange={handleConfirmPasswordChange}
      />
      <AuthButton text="Sign up" />
    </div>
  );
};

export default CreateAccountForm;
