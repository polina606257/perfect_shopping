import React from "react";
import "./buttons.styles.scss";

export const AuthButton: React.FC<{ text: string; className?: string }> = (
  props
) => {
  const buttonClassName = `button ${props.className}`;
  return <button className={buttonClassName}>{props.text}</button>;
};

export const ToggleButton: React.FC<{
  text1: string;
  text2: string;
  isShowing: boolean;
  className?: string;
  onToggle: () => void;
}> = (props) => {
  return (
    <button className={props.className} onClick={props.onToggle}>
      {props.isShowing ? props.text1 : props.text2}
    </button>
  );
};
