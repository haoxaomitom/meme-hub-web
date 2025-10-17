import React from "react";

const TopContributor = ({ user, rank, onClick }) => {
  const rankColors = {
    1: "from-yellow-400 to-yellow-600",
    2: "from-gray-300 to-gray-500",
    3: "from-orange-400 to-orange-600",
  };

  return (
    <div
      onClick={onClick}
      className="flex items-center space-x-4 p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-pink-300 hover:shadow-md transition-all cursor-pointer group"
    >
      <div className="relative">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-14 h-14 rounded-full border-4 border-pink-100"
        />
        <div
          className={`absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br ${
            rankColors[rank] || "from-pink-400 to-purple-600"
          } flex items-center justify-center text-white text-xs font-bold shadow-lg`}
        >
          {rank}
        </div>
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-gray-900 group-hover:text-pink-600 transition-all">
          {user.name}
        </h4>
        <p className="text-sm text-gray-500">@{user.username}</p>
      </div>
      <div className="text-right">
        <p className="font-bold text-pink-600">{user.posts}</p>
        <p className="text-xs text-gray-500">posts</p>
      </div>
    </div>
  );
};

export default TopContributor;
