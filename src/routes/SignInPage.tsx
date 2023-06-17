import LoginSection from "../components/auth/LoginSection";
import CreateAccountSection from "../components/auth/CreateAccountSection";
import "./sign_in_page.styles.scss";
import { Fragment, useState } from "react";
import { ToggleButton } from "../components/Buttons";

const SignInOptions = () => {
  const [showCreateAccount, setShowCreateAccount] = useState(false);

  const toggleCreateAccountSection = () => {
    setShowCreateAccount(!showCreateAccount);
  };

  return (
    <Fragment>
      <div className="sign-in-container">
        <LoginSection
          className={showCreateAccount ? "hide-section" : "show-section"}
        />
        <CreateAccountSection
          className={showCreateAccount ? "show-section" : "hide-section"}
        />
      </div>
      <ToggleButton
        text1="Log In"
        text2="Create Account"
        isShowing={showCreateAccount}
        className={`button toggle-button`}
        onToggle={toggleCreateAccountSection}
      />
    </Fragment>
  );
};

export default SignInOptions;
