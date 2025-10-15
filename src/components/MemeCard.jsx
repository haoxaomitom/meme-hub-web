import { Eye, Heart, TrendingUp } from "lucide-react";

// Meme Card Component
const MemeCard = ({ meme, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="relative overflow-hidden rounded-2xl group cursor-pointer aspect-square bg-gray-100"
    >
      <img
        src={meme.image}
        alt={meme.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      {/* Overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-bold text-base mb-3 line-clamp-2">
            {meme.title}
          </h3>
          <div className="flex items-center justify-between text-white/90 text-sm">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Eye size={16} />
                <span>{meme.views}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart size={16} />
                <span>{meme.likes}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <img
                src={meme.authorAvatar}
                alt={meme.author}
                className="w-6 h-6 rounded-full border-2 border-white"
              />
              <span className="font-medium">{meme.author}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Trending Badge */}
      {meme.isTrending && (
        <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
          <TrendingUp size={14} />
          <span>Hot</span>
        </div>
      )}
    </div>
  );
};

export default MemeCard;
