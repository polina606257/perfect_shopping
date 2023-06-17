import LoginForm from "./LoginForm";
import TitleContent from "./AuthTitleContent";
import "./login_section.styles.scss";
import { useTranslation } from "react-i18next";

const LoginSection: React.FC<{ className?: string }> = (props) => {
  const loginSectionClassName = `login-section ${props.className}`;
  const { t } = useTranslation();
  return (
    <section className={loginSectionClassName}>
      <TitleContent
        title={t("strings.title_have_account")}
        subTitle={t("strings.sub_title_have_account")}
      />
      <LoginForm />
    </section>
  );
};

export default LoginSection;
