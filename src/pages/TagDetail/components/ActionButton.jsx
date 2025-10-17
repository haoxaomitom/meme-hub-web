import { Heart, Share2 } from "lucide-react";

const ActionButton = ({ handleFollowTag, isFollowing }) => {
  return (
    <div className="flex items-center space-x-3 ml-6">
      <button
        onClick={handleFollowTag}
        className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all shadow-lg ${
          isFollowing
            ? "bg-white border-2 border-pink-500 text-pink-600 hover:bg-pink-50"
            : "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
        }`}
      >
        <Heart size={20} className={isFollowing ? "fill-current" : ""} />
        <span>{isFollowing ? "Following" : "Follow Tag"}</span>
      </button>
      <button className="p-3 bg-white border-2 border-gray-200 rounded-xl hover:border-pink-300 hover:bg-pink-50 transition-all">
        <Share2 size={20} className="text-gray-600" />
      </button>
    </div>
  );
};

export default ActionButton;
