import React from "react";

export type ImgButtonProps = {
  /**
   * The image of the button
   */
  img: React.ReactNode;
  /**
   * Optional click handler
   */
  onClick?: () => void;
};

export type ButtonProps = {
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

export type InputProps = {
  /**
   * The placeholder text when no value is supplied
   */
  placeholder: string;
  /**
   * The label for the input
   */
  name: string;
  /**
   * Type of input
   */
  type: "number" | "password" | "text" | "email";
  /**
   * The initial value for the field
   */
  value?: string;
  /**
   * The callback function when change is detected
   */
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => void;
};

export type SnackbarProps = {
  /**
   * The message to be displayed
   */
  message: string;
  /**
   * The type of snackbar background color
   */
  type: "info" | "success" | "warning" | "error";
};

export type TransactionCardProps = {
  /**
   * The address of receipient
   */
  addressTo: string;
  /**
   * The address of sender
   */
  addressFrom: string;
  /**
   * Time where transaction occurred
   */
  timestamp: string;
  /**
   * The message attached for the transaction
   */
  message: string;
  /**
   * The keyword attached for the transaction
   */
  keyword: string;
  /**
   * The amount of Ethers sent
   */
  amount: string;
};
