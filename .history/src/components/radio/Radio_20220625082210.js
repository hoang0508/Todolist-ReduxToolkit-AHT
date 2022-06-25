import React from "react";
const Radio = ({ children, checked, ...rest }) => {
  return (
    <label>
      <input
        type="radio"
        className="hidden-input"
        {...rest}
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
