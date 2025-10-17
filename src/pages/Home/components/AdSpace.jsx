import React from "react";

const AdSpace = ({ className = "" }) => {
  return (
    <div
      className={`bg-white rounded-3xl border-2 border-dashed border-gray-200 flex items-center justify-center ${className}`}
    >
      <span className="text-gray-300 font-medium text-sm">No ads</span>
    </div>
  );
};

export default AdSpace;
