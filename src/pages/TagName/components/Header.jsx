import { Heart, Star } from "lucide-react";

const Header = () => {
  return (
    <div className="text-center mb-10">
      <div className="flex justify-center items-center gap-3 mb-4">
        <div
          className="bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl p-3 shadow-lg animate-bounce"
          style={{ animationDuration: "2s" }}
        >
          <Heart className="w-8 h-8 text-white fill-white" />
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
          Create Your Tag
        </h1>
        <Star
          className="w-6 h-6 text-yellow-400 fill-yellow-400 animate-spin"
          style={{ animationDuration: "3s" }}
        />
      </div>
      <p className="text-gray-500 text-lg">
        Set up your unique tag name ✨ Make it memorable! 💕
      </p>
    </div>
  );
};

export default Header;
