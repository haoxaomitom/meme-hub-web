import React from "react";

const StatItem = ({ icon: Icon, label, value, iconClass }) => {
  return (
    <div className="flex items-center gap-2">
      <div className="p-2 bg-white rounded-full shadow-sm">
        <Icon size={18} className={iconClass} />
      </div>
      <div className="text-left">
        <p className="text-xs text-gray-500 font-medium">{label}</p>
        <p className="text-sm font-bold text-gray-800">{value}</p>
      </div>
    </div>
  );
};

export default StatItem;
