import React from "react";

const Button = ({ title, onClick, disabled }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
        disabled
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-pink-500 hover:bg-pink-600 text-white shadow-md hover:shadow-lg"
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
