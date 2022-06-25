import React from "react";
const Radio = ({ children, checked }) => {
  return (
    <label>
      <input type="radio" className="hidden-input" checked={checked} />
      <div className="input-select">
        <span>{children}</span>
        <div
          className={`input-radio ${
            checked ? "input-active" : "input-checked"
          }`}
        ></div>
      </div>
    </label>
  );
};

export default Radio;
