import "./input.styles.scss";

const Input: React.FC<{
  htmlFor: string;
  labelName: string;
  type: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}> = (props) => {
  return (
    <div className="input-container">
      <label htmlFor={props.htmlFor} className="label">
        {props.labelName}
      </label>
      <input
        required
        type={props.type}
        value={props.value}
        onChange={props.onChange}
        className="input"
      />
      {props.error && <div className="error">{props.error}</div>}
    </div>
  );
};

export default Input;
