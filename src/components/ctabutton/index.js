import React from "react";
import "./CtaButton.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

const CtaButton = ({ children, padding = "regular", icon, fullWidth }) => {
  return (
    <button
      className={`cta-button-css cta-button cta-button-padding-${padding} ${
        fullWidth ? "w-full" : ""
      }`}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {children}
    </button>
  );
};

export default CtaButton;
