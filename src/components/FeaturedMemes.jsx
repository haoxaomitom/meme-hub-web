import { TrendingUp } from "lucide-react";
import MemeCard from "./MemeCard";

const FeaturedMemes = () => {
  const memes = [
    {
      id: 1,
      title: "When Monday hits different",
      image:
        "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=400&h=400&fit=crop",
      author: "MemeKing",
      authorAvatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
      likes: 1234,
      views: "15.2K",
    },
    {
      id: 2,
      title: "Programmers be like",
      image:
        "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=400&h=400&fit=crop",
      author: "CodeMaster",
      authorAvatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
      likes: 2156,
      views: "23.8K",
    },
    {
      id: 3,
      title: "Life in 2024",
      image:
        "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=400&h=400&fit=crop",
      author: "MemeLord",
      authorAvatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      likes: 987,
      views: "12.4K",
    },
    {
      id: 4,
      title: "Expectation vs Reality",
      image:
        "https://images.unsplash.com/photo-1583795128727-6ec3642408f8?w=400&h=400&fit=crop",
      author: "FunnyGuy",
      authorAvatar:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      likes: 3421,
      views: "45.1K",
    },
    {
      id: 5,
      title: "Weekend vibes",
      image:
        "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=400&h=400&fit=crop",
      author: "ChillMaster",
      authorAvatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      likes: 1876,
      views: "19.3K",
    },
    {
      id: 6,
      title: "That one friend",
      image:
        "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=400&h=400&fit=crop",
      author: "MemeQueen",
      authorAvatar:
        "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      likes: 2543,
      views: "28.7K",
    },
  ];

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
