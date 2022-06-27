import React from "react";
import Loading from "../loading/Loading";
import "./Button.scss";
const Button = ({
  children,
  className = "",
  disabled,
  isLoading,
  onClick = () => {},
  ...props
}) => {
  const children = isLoading ? <Loading /> : children;
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      children
    </button>
  );
};

export default Button;
