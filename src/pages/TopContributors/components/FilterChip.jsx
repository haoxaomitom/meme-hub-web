import React from "react";

const FilterChip = ({ label, isActive, onClick, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
        isActive
          ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg scale-105"
          : "bg-white text-gray-700 border-2 border-gray-200 hover:border-pink-300 hover:bg-pink-50"
      }`}
    >
      {Icon && <Icon size={18} />}
      <span>{label}</span>
    </button>
  );
};

export default FilterChip;
