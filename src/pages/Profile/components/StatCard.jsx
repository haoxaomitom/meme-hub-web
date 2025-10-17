import React from "react";

const StatCard = ({ icon, label, value }) => (
  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
    <div className="flex justify-center mb-2 text-pink-500">{icon}</div>
    <div className="text-2xl font-bold text-gray-800 mb-1">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

export default StatCard;
