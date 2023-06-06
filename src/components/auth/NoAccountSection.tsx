import TitleContent from "./AuthTitleContent";
import strings from "../../assets/strings/strings";
import CreateAccountForm from "./CreateAccountForm";

const NoAccountSection = () => {
  return (
    <section className="no-account-section">
      <TitleContent
        title={strings.titleNoAccount}
        subTitle={strings.sub_title_no_account}
      />
      <CreateAccountForm />
    </section>
  );
};

export default NoAccountSection;
