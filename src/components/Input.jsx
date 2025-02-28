import React from "react";

const Input = ({ type = "text", placeholder, className = "" }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`px-4 py-2 border border-gray-300 rounded-md ${className}`}
    />
  );
};

export default Input;