import React from "react";

const ActionButton = ({ icon: Icon, label, gradient }) => {
  return (
    <button
      className={`flex flex-col items-center gap-2 px-4 py-3 ${gradient} 
      text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
    >
      <Icon size={20} fill="currentColor" />
      <span className="text-xs font-semibold">{label}</span>
    </button>
  );
};

export default ActionButton;
