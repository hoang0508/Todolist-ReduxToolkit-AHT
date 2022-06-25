import React from "react";
import Label from "../label/Label";
import "./input.scss";
const Input = () => {
  return (
    <div className="input">
      <Label>Name</Label>
      <input type="text" className="input-search" />
    </div>
  );
};

export default Input;
