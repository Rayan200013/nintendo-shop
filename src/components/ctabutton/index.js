// import React from "react";
// import PropTypes from "prop-types";

// const CtaButton = ({ children, onClick, padding, fullWidth }) => {
//   const buttonStyle = `
//     inline-flex items-center justify-center gap-2 font-medium focus:outline-none
//     transition-transform duration-300 transform hover:scale-105
//     bg-primary font-sans text-white text-xl font-bold py-4 rounded-lg
//     ${fullWidth ? "w-full" : ""}
//     ${padding === "small" ? "px-3" : padding === "large" ? "px-6" : "px-4"}
//   `;

//   return (
//     <button className={buttonStyle} onClick={onClick}>
//       {children}
//     </button>
//   );
// };

// CtaButton.propTypes = {
//   children: PropTypes.node.isRequired,
//   onClick: PropTypes.func,
//   padding: PropTypes.oneOf(["small", "regular", "large"]),
//   fullWidth: PropTypes.bool,
// };

// CtaButton.defaultProps = {
//   padding: "regular",
//   fullWidth: false,
// };

// export default CtaButton;

import React from "react";
import "./CtaButton.css";

const CtaButton = ({ children, padding = "regular" }) => {
  return (
    <button className={`cta-button-css cta-button cta-button-padding-${padding}`}>
      {children}
    </button>
  );
};

export default CtaButton;
