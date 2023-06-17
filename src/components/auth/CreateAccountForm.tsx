import { BaseSignButton } from "../Buttons";
import Input from "../Input";
import "./auth_form.styles.scss";
import { useState, useRef } from "react";
import { createUserInDB } from "../../utils/auth/sign_in";
import { auth } from "../../utils/auth/firebase_settings";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useTranslation } from "react-i18next";

const CreateAccountForm = () => {
  const { t } = useTranslation();
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

  const handleError = (fieldName: string, error: string) =>
    setInputErrors((prevErrors) => ({
      ...prevErrors,
      [fieldName]: error,
    }));

  const formIsValidRef = useRef(true);

  const handleChange = (
    fieldName: string,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormInput((prevInput) => ({
      ...prevInput,
      [fieldName]: e.target.value,
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
        handleError("emailError", t("already_registered_email_error"));
      });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    validateFormAndSubmitIfValid(() => {
      createUserWithMailAndPassword(formInput.email, formInput.password);
    });
  };

  const validateFormAndSubmitIfValid = (submit: () => void) => {
    setInputErrors({
      nameError: "",
      emailError: "",
      passwordError: "",
      confirmPasswordError: "",
    });
    formIsValidRef.current = true;

    if (formInput.name.length < 2) {
      handleError("nameError", t("name_error"));
      formIsValidRef.current = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formInput.email)) {
      handleError("emailError", t("wrong_email_error"));
      formIsValidRef.current = false;
    }

    if (formInput.password.length < 6) {
      handleError("passwordError", t("password_error"));
      formIsValidRef.current = false;
    }

    if (formInput.confirmPassword !== formInput.password) {
      handleError("confirmPasswordError", t("password_confirm_error"));
      formIsValidRef.current = false;
    }
    if (formIsValidRef.current) submit();
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      <Input
        htmlFor="name"
        labelName="Display name"
        id="name"
        type="text"
        value={formInput.name}
        onChange={(e) => handleChange("name", e)}
        error={inputErrors.nameError}
      />
      <Input
        htmlFor="email"
        labelName="Email"
        id="email"
        type="email"
        value={formInput.email}
        onChange={(e) => handleChange("email", e)}
        error={inputErrors.emailError}
      />
      <Input
        htmlFor="password"
        labelName="Password"
        id="password"
        type="password"
        value={formInput.password}
        onChange={(e) => handleChange("password", e)}
        error={inputErrors.passwordError}
      />
      <Input
        htmlFor="confirm-password"
        labelName="Confirm password"
        id="confirm-password"
        type="password"
        value={formInput.confirmPassword}
        onChange={(e) => handleChange("confirmPassword", e)}
        error={inputErrors.confirmPasswordError}
      />
      <div className="button-container">
        <BaseSignButton onClick={onSubmit} text="Sign up" />
      </div>
    </form>
  );
};

export default CreateAccountForm;
