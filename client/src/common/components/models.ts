import React from "react";

export type ImgButtonProps = {
  img: React.ReactNode;
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
  placeholder: string;
  name: string;
  type: string;
  value?: string;
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    name: string
  ) => void;
};
