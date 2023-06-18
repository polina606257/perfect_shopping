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

  const inputsConfig = {
    name: {
      htmlFor: "name",
      labelName: "Display name",
      id: "name",
      type: "text",
      value: () => formInput.name,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleChange("name", e),
      validator: (value: string) => value.length >= 2,
      errorText: t("name_error"),
    },
    email: {
      htmlFor: "email",
      labelName: "Email",
      id: "email",
      type: "email",
      value: () => formInput.email,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleChange("email", e),
      validator: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
      errorText: t("wrong_email_error"),
    },
    password: {
      htmlFor: "password",
      labelName: "Password",
      id: "password",
      type: "password",
      value: () => formInput.password,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleChange("password", e),
      validator: (value: string) => value.length >= 6,
      errorText: t("password_error"),
    },
    confirmPassword: {
      htmlFor: "confirm-password",
      labelName: "Confirm password",
      id: "confirm-password",
      type: "password",
      value: () => formInput.confirmPassword,
      onChange: (e: React.ChangeEvent<HTMLInputElement>) =>
        handleChange("confirmPassword", e),
      validator: (value: string) => value === formInput.password,
      errorText: t("password_confirm_error"),
    },
  };

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

    Object.entries(inputsConfig).forEach(([fieldName, config]) => {
      const { validator, errorText } = config;
      const fieldValue = formInput[fieldName as keyof typeof formInput];
      let isValid = true;

      if (typeof validator === "function") {
        isValid = validator(fieldValue);
      } else if (validator instanceof RegExp) {
        isValid = validator.test(fieldValue);
      }

      if (!isValid) {
        handleError(`${fieldName}Error`, errorText);
        formIsValidRef.current = false;
      }
    });

    if (formIsValidRef.current) submit();
  };

  return (
    <form className="form-container" onSubmit={onSubmit}>
      {Object.entries(inputsConfig).map(([fieldName, config]) => (
        <Input
          key={fieldName}
          htmlFor={config.htmlFor}
          labelName={config.labelName}
          id={config.id}
          type={config.type}
          value={config.value()}
          onChange={config.onChange}
          error={inputErrors[`${fieldName}Error` as keyof typeof inputErrors]}
        />
      ))}
      <div className="button-container">
        <BaseSignButton onClick={onSubmit} text="Sign up" />
      </div>
    </form>
  );
};

export default CreateAccountForm;
