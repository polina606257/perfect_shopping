import TitleContent from "./AuthTitleContent";
import strings from "../../assets/strings/strings";
import CreateAccountForm from "./CreateAccountForm";

const CreateAccountSection: React.FC<{ className?: string }> = (props) => {
  const createAccountSectionClassName = `create-account-section ${props.className}`;
  return (
    <section className={createAccountSectionClassName}>
      <TitleContent
        title={strings.titleNoAccount}
        subTitle={strings.sub_title_no_account}
      />
      <CreateAccountForm />
    </section>
  );
};

export default CreateAccountSection;
