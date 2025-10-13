import React, { useState } from "react";
import {
  Search,
  TrendingUp,
  Award,
  Heart,
  Upload,
  User,
  Menu,
  X,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

// Navigation Component
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center transform rotate-12">
              <span className="text-2xl transform -rotate-12">😄</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
              MemeHub
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#"
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Trending
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Categories
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Top Contributors
            </a>
            <button className="bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2 rounded-full hover:shadow-lg hover:scale-105 transition-all font-medium flex items-center space-x-2">
              <Upload size={18} />
              <span>Upload</span>
            </button>
            <button
              onClick={() => navigate("/auth")}
              className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors"
            >
              <User size={20} className="text-pink-600" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a
              href="#"
              className="block text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Trending
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Categories
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-pink-500 transition-colors font-medium"
            >
              Top Contributors
            </a>
            <button className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2 rounded-full">
              Upload Meme
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

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

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center transform rotate-12">
                <span className="text-2xl transform -rotate-12">😄</span>
              </div>
              <span className="text-2xl font-bold text-white">MemeHub</span>
            </div>
            <p className="text-sm">
              The ultimate destination for meme lovers worldwide. Share laughs,
              spread joy.
            </p>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Trending
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Categories
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Collections
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Top Rated
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Contributors
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Guidelines
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-pink-400 transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm">© 2025 MemeHub. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="#" className="hover:text-pink-400 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm4.441 16.892c-2.102.144-6.784.144-8.883 0C5.282 16.736 5.017 15.622 5 12c.017-3.629.285-4.736 2.558-4.892 2.099-.144 6.782-.144 8.883 0C18.718 7.264 18.982 8.378 19 12c-.018 3.629-.285 4.736-2.559 4.892zM10 9.658l4.917 2.338L10 14.342V9.658z" />
                </svg>
              </a>
              <a href="#" className="hover:text-pink-400 transition-colors">
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
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
