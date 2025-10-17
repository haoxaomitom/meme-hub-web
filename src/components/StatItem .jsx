import React from "react";

const StatItem = ({ value, label }) => {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold">{value}</div>
      <div className="text-pink-200 text-sm">{label}</div>
    </div>
  );
};

export default StatItem;
