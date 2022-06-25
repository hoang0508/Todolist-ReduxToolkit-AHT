import React from "react";

const LabelStatus = ({ children, type = "" }) => {
  let styleClassname = "status status-default";
  switch (type) {
    case "success":
      styleClassname = "status status-sucesss";
      break;
    case "warning":
      styleClassname = "status status-warning";
      break;
    case "danger":
      styleClassname = "status status-danger";
      break;
    default:
      break;
  }
  return <div className={styleClassname}>{children}</div>;
};

export default LabelStatus;
