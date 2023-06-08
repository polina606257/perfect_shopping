import strings from "../../assets/strings/strings";
import LoginForm from "./LoginForm";
import TitleContent from "./AuthTitleContent";
import "./login_section.styles.scss";

const LoginSection: React.FC<{ className?: string }> = (props) => {
  const loginSectionClassName = `login-section ${props.className}`;
  return (
    <section className={loginSectionClassName}>
      <TitleContent
        title={strings.titleHaveAccount}
        subTitle={strings.sub_title_have_account}
      />
      <LoginForm />
    </section>
  );
};

export default LoginSection;
