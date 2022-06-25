import React from "react";

const LabelStatus = ({ children, type = "" }) => {
  let styleClassname = "status-default";
  switch (type) {
    case "success":
      styleClassname = "status-sucesss";
      break;
    case "warning":
      styleClassname = "status-warning";
      break;
    case "danger":
      styleClassname = "status-danger";
      break;
    default:
      break;
  }
  return <div className={styleClassname}>{children}</div>;
};

export default LabelStatus;
