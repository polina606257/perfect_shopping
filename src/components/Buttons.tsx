import React from "react";
import "./buttons.styles.scss";

export const AuthButton: React.FC<{ text: string; className?: string }> = (
  props
) => {
  const buttonClassName = `button ${props.className}`;
  return <button className={buttonClassName}>{props.text}</button>;
};
