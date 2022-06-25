import React from "react";
import Label from "../label/Label";
import "./input.scss";
const Input = ({ name = "", type = "", ...props }) => {
  return (
    <div className="input">
      <Label>Name</Label>
      <input name={name} type={type} {...props} className="input-search" />
    </div>
  );
};

export default Input;
