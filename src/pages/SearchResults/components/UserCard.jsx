import React from "react";

const UserCard = ({ user, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
    >
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-16 h-16 rounded-full border-4 border-pink-100"
        />
        <div className="flex-1">
          <h3 className="font-bold text-gray-800 text-lg">{user.name}</h3>
          <p className="text-gray-500 text-sm">@{user.username}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-pink-50 rounded-xl p-3 text-center">
          <p className="text-xl font-bold text-pink-600">{user.memes}</p>
          <p className="text-xs text-gray-600">Memes</p>
        </div>
        <div className="bg-purple-50 rounded-xl p-3 text-center">
          <p className="text-xl font-bold text-purple-600">{user.followers}</p>
          <p className="text-xs text-gray-600">Followers</p>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
