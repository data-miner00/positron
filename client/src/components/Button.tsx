import "./Button.css";

type Props = {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "normal" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Type of button
   */
  type?: "button" | "submit" | "reset";
};

function Button({
  primary,
  backgroundColor,
  size = "normal",
  label,
  type = "button",
  onClick,
}: Props) {
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
