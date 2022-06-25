import React from "react";
import "./Action.scss";
const ActionSave = ({ onClick = () => {} }) => {
  return (
    <div className="action-item action-save" onClick={onClick}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
      </svg>
    </div>
  );
};

export default ActionSave;
