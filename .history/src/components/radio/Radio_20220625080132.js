import React from "react";

const Radio = ({ children, checked }) => {
  return (
    <label>
      <input type="radio" className="hidden-input" checked={checked} />
      <div className="input-radio">
        <span>{children}</span>
        <div className="input-radio--checked"></div>
      </div>
    </label>
  );
};

export default Radio;
