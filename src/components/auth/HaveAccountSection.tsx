import strings from "../../assets/strings/strings";
import LoginForm from "./LoginForm";
import TitleContent from "./AuthTitleContent";
import "./have_account_section.styles.scss";

const HaveAccountSection = () => {
  return (
    <section className="have-account-section">
      <TitleContent
        title={strings.titleHaveAccount}
        subTitle={strings.sub_title_have_account}
      />
      <LoginForm />
    </section>
  );
};

export default HaveAccountSection;
