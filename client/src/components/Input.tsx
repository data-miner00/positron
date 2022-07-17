import React from "react";
import "./Input.css";

type Props = {
  placeholder: string;
  name: string;
  type: string;
  value?: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => void;
};

function Input({
  placeholder,
  name,
  type,
  value,
  handleChange,
  ...props
}: Props) {
  return (
    <input
      placeholder={placeholder}
      type={type}
      step="0.0001"
      value={value}
      onChange={(event) => handleChange(event, name)}
      className="input"
      {...props}
    />
  );
}

export default Input;
