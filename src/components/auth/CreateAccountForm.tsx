import { AuthButton } from "../Buttons";
import Input from "../Input";
import "./auth_form.styles.scss";
import { useState } from "react";
import { auth, createUserInDB } from "../../utils/auth/sign_in_logic";
import { createUserWithEmailAndPassword } from "firebase/auth";
import strings from "../../assets/strings/strings";

const CreateAccountForm = () => {
  const [formInput, setFormInput] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [inputErrors, setInputErrors] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });
  let formIsValid = true;

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInput((prevInput) => ({ ...prevInput, name: e.target.value }));
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInput((prevInput) => ({ ...prevInput, email: e.target.value }));
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormInput((prevInput) => ({ ...prevInput, password: e.target.value }));
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormInput((prevInput) => ({
      ...prevInput,
      confirmPassword: e.target.value,
    }));
  };

  const createUserWithMailAndPassword = async (
    email: string,
    password: string
  ) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = {
          ...userCredential.user,
          displayName: formInput.name,
          createdAt: new Date(),
        };
        createUserInDB(user);
      })
      .catch((error) => {
        setInputErrors((prevErrors) => ({
          ...prevErrors,
          emailError: strings.already_registered_email_error,
        }));
      });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    findErrorsValidatingForm();
    if (formIsValid) {
      createUserWithMailAndPassword(formInput.email, formInput.password);
    }
  };

  const findErrorsValidatingForm = () => {
    setInputErrors({
      nameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
    });

    if (formInput.name.length < 2) {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        nameError: strings.name_error,
      }));
      formIsValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formInput.email)) {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        emailError: strings.wrong_email_error,
      }));
      formIsValid = false;
    }

    if (formInput.password.length < 6) {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        passwordError: strings.password_error,
      }));
      formIsValid = false;
    }

    if (formInput.confirmPassword !== formInput.password) {
      setInputErrors((prevErrors) => ({
        ...prevErrors,
        confirmPasswordError: strings.password_confirm_error,
      }));
      formIsValid = false;
    }
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <Input
        htmlFor="name"
        labelName="Display name"
        id="name"
        type="text"
        value={formInput.name}
        onChange={handleNameChange}
        error={inputErrors.nameError}
      />
      <Input
        htmlFor="email"
        labelName="Email"
        id="email"
        type="email"
        value={formInput.email}
        onChange={handleEmailChange}
        error={inputErrors.emailError}
      />
      <Input
        htmlFor="password"
        labelName="Password"
        id="password"
        type="password"
        value={formInput.password}
        onChange={handlePasswordChange}
        error={inputErrors.passwordError}
      />
      <Input
        htmlFor="confirm-password"
        labelName="Confirm password"
        id="confirm-password"
        type="password"
        value={formInput.confirmPassword}
        onChange={handleConfirmPasswordChange}
        error={inputErrors.confirmPasswordError}
      />
      <div className="button-container">
        <AuthButton onSubmit={onSubmit} text="Sign up" />
      </div>
    </form>
  );
};

export default CreateAccountForm;
