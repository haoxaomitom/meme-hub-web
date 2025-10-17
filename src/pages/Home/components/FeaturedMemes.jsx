import { TrendingUp } from "lucide-react";
import MemeCard from "../../../components/MemeCard";
import { MEMESHOME } from "../../../utils/constants";

const FeaturedMemes = () => {
  const memes = MEMESHOME;

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-3">
            <TrendingUp className="text-pink-500" size={32} />
            <h2 className="text-3xl font-bold text-gray-800">Trending Memes</h2>
          </div>
          <button className="px-6 py-2 border-2 border-pink-500 text-pink-500 rounded-full hover:bg-pink-500 hover:text-white transition-all font-medium">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {memes.map((meme) => (
            <MemeCard key={meme.id} meme={meme} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedMemes;
