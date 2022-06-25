import React from "react";
import { useController } from "react-hook-form";

const Radio = ({ name, control, children, checked, ...rest }) => {
  const { field } = useController({
    name,
    control,
    defaultValue: "",
  });
  return (
    <label>
      <input
        type="radio"
        className="hidden-input"
        {...rest}
        {...field}
        checked={checked}
      />
      <div className="input-select">
        <span>{children}</span>
        <div
          className={`input-radio ${
            checked ? "input-radio--active" : "input-radio--checked"
          }`}
        ></div>
      </div>
    </label>
  );
};

export default Radio;
