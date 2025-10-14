import { Heart } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const MemeCard = ({ meme }) => {
  const [isLiked, setIsLiked] = useState(false);
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/meme-detail")}
      className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group"
    >
      <div className="relative overflow-hidden aspect-square">
        <img
          src={meme.image}
          alt={meme.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="absolute bottom-4 left-4 right-4">
            <h3 className="text-white font-semibold text-lg mb-1">
              {meme.title}
            </h3>
            <p className="text-white/80 text-sm">{meme.views} views</p>
          </div>
        </div>
      </div>
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center space-x-3">
          <img
            src={meme.authorAvatar}
            alt={meme.author}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium text-gray-700">
            {meme.author}
          </span>
        </div>
        <button
          onClick={() => setIsLiked(!isLiked)}
          className={`flex items-center space-x-1 transition-colors ${
            isLiked ? "text-pink-500" : "text-gray-400 hover:text-pink-500"
          }`}
        >
          <Heart size={20} fill={isLiked ? "currentColor" : "none"} />
          <span className="text-sm font-medium">
            {meme.likes + (isLiked ? 1 : 0)}
          </span>
        </button>
      </div>
    </div>
  );
};

export default MemeCard;
