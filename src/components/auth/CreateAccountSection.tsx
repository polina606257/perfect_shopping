import TitleContent from "./AuthTitleContent";
import { useTranslation } from "react-i18next";
import CreateAccountForm from "./CreateAccountForm";

const CreateAccountSection: React.FC<{ className?: string }> = (props) => {
  const createAccountSectionClassName = `create-account-section ${props.className}`;
  const { t } = useTranslation();

  return (
    <section className={createAccountSectionClassName}>
      <TitleContent
        title={t("title_no_account")}
        subTitle={t("sub_title_no_account")}
      />
      <CreateAccountForm />
    </section>
  );
};

export default CreateAccountSection;
