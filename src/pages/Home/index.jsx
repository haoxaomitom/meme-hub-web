import React, { useState } from "react";
import { Search, TrendingUp, Award, Heart } from "lucide-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

// Banner Component
const Banner = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-gradient-to-br from-pink-50 via-pink-100 to-purple-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Your Daily Dose of
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            {" "}
            Laughter
          </span>
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Discover, share, and enjoy the funniest memes from around the world
        </p>

        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="Search for memes, tags, or creators..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 pl-14 rounded-full border-2 border-pink-200 focus:border-pink-400 focus:outline-none shadow-lg transition-all"
          />
          <Search
            className="absolute left-5 top-1/2 transform -translate-y-1/2 text-pink-400"
            size={24}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {["Funny", "Relatable", "Wholesome", "Dark Humor", "Animals"].map(
            (tag) => (
              <button
                key={tag}
                className="px-5 py-2 bg-white rounded-full text-pink-600 hover:bg-pink-500 hover:text-white transition-all shadow-sm hover:shadow-md font-medium"
              >
                {tag}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

// Ad Space Component
const AdSpace = ({ className = "" }) => {
  return (
    <div
      className={`bg-white rounded-3xl border-2 border-dashed border-gray-200 flex items-center justify-center ${className}`}
    >
      <span className="text-gray-300 font-medium text-sm">No ads</span>
    </div>
  );
};

// Meme Card Component
const MemeCard = ({ meme }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <div className="bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group">
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

// Featured Memes Section
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

// Contributor Card Component
const ContributorCard = ({ contributor, rank }) => {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden">
      <div className="absolute top-4 right-4">
        <div
          className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm ${
            rank === 1
              ? "bg-yellow-400 text-yellow-900"
              : rank === 2
              ? "bg-gray-300 text-gray-700"
              : rank === 3
              ? "bg-orange-400 text-orange-900"
              : "bg-pink-100 text-pink-600"
          }`}
        >
          #{rank}
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <img
          src={contributor.avatar}
          alt={contributor.name}
          className="w-16 h-16 rounded-full border-4 border-pink-100"
        />
        <div className="flex-1">
          <h3 className="font-bold text-gray-800 text-lg">
            {contributor.name}
          </h3>
          <p className="text-gray-500 text-sm">@{contributor.username}</p>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-pink-50 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-pink-600">
            {contributor.memes}
          </p>
          <p className="text-xs text-gray-600">Memes</p>
        </div>
        <div className="bg-purple-50 rounded-xl p-3 text-center">
          <p className="text-2xl font-bold text-purple-600">
            {contributor.likes}
          </p>
          <p className="text-xs text-gray-600">Likes</p>
        </div>
      </div>
    </div>
  );
};

// Top Contributors Section
const TopContributors = () => {
  const contributors = [
    {
      id: 1,
      name: "Alex Johnson",
      username: "alexj",
      avatar:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
      memes: 342,
      likes: "128K",
    },
    {
      id: 2,
      name: "Sarah Chen",
      username: "sarahc",
      avatar:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      memes: 298,
      likes: "95K",
    },
    {
      id: 3,
      name: "Mike Ross",
      username: "mikeross",
      avatar:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
      memes: 276,
      likes: "87K",
    },
    {
      id: 4,
      name: "Emma Wilson",
      username: "emmaw",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      memes: 254,
      likes: "72K",
    },
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <Award className="text-pink-500" size={32} />
          <h2 className="text-3xl font-bold text-gray-800">Top Contributors</h2>
        </div>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Meet our amazing community members who bring joy to millions every day
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contributors.map((contributor, index) => (
            <ContributorCard
              key={contributor.id}
              contributor={contributor}
              rank={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// Main App Component
export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Banner />

      {/* Ad Space 1 */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <AdSpace className="h-32" />
      </div>

      <FeaturedMemes />

      {/* Ad Space 2 */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <AdSpace className="h-32" />
      </div>

      <TopContributors />

      <Footer />
    </div>
  );
}
