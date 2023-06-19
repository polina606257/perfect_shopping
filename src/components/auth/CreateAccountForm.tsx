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
      key: "name",
      labelName: "Display name",
      type: "text",
      validator: (value: string) => value.length >= 2,
    },
    email: {
      key: "email",
      labelName: "Email",
      type: "email",
      validator: (value: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value),
    },
    password: {
      key: "password",
      labelName: "Password",
      type: "password",
      validator: (value: string) => value.length >= 6,
    },
    confirmPassword: {
      key: "confirm_password",
      labelName: "Confirm password",
      type: "password",
      validator: (value: string) => value === formInput.password,
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
      const errorText = t(`${fieldName}_error`);
      const { validator } = config;
      const fieldValue = formInput[fieldName as keyof typeof formInput];

      if (!validator(fieldValue)) {
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
          htmlFor={config.key}
          labelName={config.labelName}
          type={config.type}
          value={formInput[config.key as keyof typeof formInput]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange(fieldName, e)
          }
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
