import React from "react";

const StatsCard = ({ icon: Icon, label, value, color }) => {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all`}
    >
      <div className="flex items-center space-x-4">
        <div className={`p-4 rounded-2xl bg-gradient-to-br ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-gray-600">{label}</p>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
