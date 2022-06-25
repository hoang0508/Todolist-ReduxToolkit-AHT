import React from "react";
import Label from "../label/Label";
import { useController } from "react-hook-form";
import "./input.scss";
const Input = ({ name = "", type = "", control, ...props }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <div className="input">
      <Label>Name</Label>
      <input name={name} type={type} {...props} className="input-search" />
    </div>
  );
};

export default Input;
