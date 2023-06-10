import "./input.styles.scss";

const Input: React.FC<{
  htmlFor: string;
  labelName: string;
  id: string;
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
        id={props.id}
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
