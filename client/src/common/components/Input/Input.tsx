import { InputProps } from "../models";
import "./Input.css";

function Input({
  placeholder,
  name,
  type,
  value,
  handleChange,
  ...props
}: InputProps) {
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
