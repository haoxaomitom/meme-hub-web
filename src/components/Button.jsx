import React from "react";

const Button = ({ title, icon, onClick }) => {
  return (
    <div>
      <button
        onClick={onClick}
        className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all font-medium flex items-center space-x-2"
      >
        {icon && icon}
        <span>{title}</span>
      </button>
    </div>
  );
};

export default Button;
