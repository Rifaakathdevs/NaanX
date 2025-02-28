import React from "react";

const Button = ({ children, className = "", onClick }) => {
  return (
    <button
      className={`px-4 py-2 bg-blue-500 text-white rounded-md ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;