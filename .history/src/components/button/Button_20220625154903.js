import React from "react";
import "./Button.scss";
const Button = ({
  children,
  className = "",
  disabled,
  isLoading,
  onClick = () => {},
  ...props
}) => {
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {isLoading ? "" : children}
    </button>
  );
};

export default Button;
