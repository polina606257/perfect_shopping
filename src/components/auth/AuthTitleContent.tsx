import "./auth_title_content.styles.scss";

const TitleContent: React.FC<{ title: string; subTitle: string }> = (props) => {
  return (
    <div>
      <Title content={props.title} />
      <SubTitle content={props.subTitle} />
    </div>
  );
};

const Title: React.FC<{ content: string }> = (props) => {
  return <h2 className="title">{props.content}</h2>;
};

const SubTitle: React.FC<{ content: string }> = (props) => {
  return <div className="sub-title">{props.content}</div>;
};

export default TitleContent;
