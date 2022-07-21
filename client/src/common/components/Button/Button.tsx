import { ButtonProps } from "../models";
import "./Button.css";

function Button({
  primary,
  backgroundColor,
  size = "normal",
  label,
  type = "button",
  onClick,
}: ButtonProps) {
  const className = ["button", primary ? "primary" : "", size];

  return (
    <button
      style={{ backgroundColor }}
      className={className.join(" ")}
      type={type}
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default Button;
