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
        checked={checked}
        // className="hidden-input"
        onChange={() => {}}
        {...rest}
        {...field}
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
