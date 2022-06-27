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
  const childrenBtn = isLoading ? <Loading /> : children;
  return (
    <button
      className={`button ${className}`}
      onClick={onClick}
      disabled={disabled}
      {...props}
    >
      {childrenBtn}
    </button>
  );
};

export default Button;
