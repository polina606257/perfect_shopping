import "./input.styles.scss";

const Input: React.FC<{
  htmlFor: string;
  labelName: string;
  id: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}> = (props) => {
  return (
    <div className="input-container">
      <label htmlFor={props.htmlFor} className="label">
        {props.labelName}
      </label>
      <input
        id={props.id}
        required
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        className="input"
      />
    </div>
  );
};

export default Input;
