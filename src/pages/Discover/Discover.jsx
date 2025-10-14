import React, { useState } from "react";
import {
  Search,
  TrendingUp,
  Clock,
  Heart,
  Eye,
  ChevronLeft,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

// Filter Chip Component
const FilterChip = ({ label, isActive, onClick, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-5 py-2.5 rounded-full font-medium transition-all duration-200 ${
        isActive
          ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg scale-105"
          : "bg-white text-gray-700 border-2 border-gray-200 hover:border-pink-300 hover:bg-pink-50"
      }`}
    >
      {Icon && <Icon size={18} />}
      <span>{label}</span>
    </button>
  );
};

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

// Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return { pages, startPage, endPage };
  };

  const { pages, startPage, endPage } = getPageNumbers();

  return (
    <div className="flex items-center justify-center space-x-2 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-xl transition-all ${
          currentPage === 1
            ? "text-gray-300 cursor-not-allowed"
            : "text-gray-700 hover:bg-pink-100 hover:text-pink-500"
        }`}
      >
        <ChevronLeft size={20} />
      </button>

      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="w-10 h-10 rounded-xl hover:bg-pink-100 hover:text-pink-500 transition-all font-medium text-gray-700"
          >
            1
          </button>
          {startPage > 2 && <span className="text-gray-400 px-1">...</span>}
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-xl font-medium transition-all ${
            currentPage === page
              ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg"
              : "text-gray-700 hover:bg-pink-100 hover:text-pink-500"
          }`}
        >
          {page}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="text-gray-400 px-1">...</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className="w-10 h-10 rounded-xl hover:bg-pink-100 hover:text-pink-500 transition-all font-medium text-gray-700"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-xl transition-all ${
          currentPage === totalPages
            ? "text-gray-300 cursor-not-allowed"
            : "text-gray-700 hover:bg-pink-100 hover:text-pink-500"
        }`}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

// Main Discover Page Component
const DiscoverPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("trending");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12;

  // Mock meme data
  const memes = [
    {
      id: 1,
      title: "When Monday hits different",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=800&fit=crop",
      author: "MemeKing",
      authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
      likes: 1234,
      views: "15.2K",
      isTrending: true,
    },
    {
      id: 2,
      title: "Programmers be like",
      image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=600&h=600&fit=crop",
      author: "CodeMaster",
      authorAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
      likes: 2156,
      views: "23.8K",
      isTrending: true,
    },
    {
      id: 3,
      title: "Life in 2024",
      image: "https://images.unsplash.com/photo-1526336024174-e58f5cdd8e13?w=400&h=400&fit=crop",
      author: "MemeLord",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      likes: 987,
      views: "12.4K",
      isTrending: false,
    },
    {
      id: 4,
      title: "Expectation vs Reality",
      image: "https://images.unsplash.com/photo-1583795128727-6ec3642408f8?w=800&h=800&fit=crop",
      author: "FunnyGuy",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      likes: 3421,
      views: "45.1K",
      isTrending: true,
    },
    {
      id: 5,
      title: "Weekend vibes",
      image: "https://images.unsplash.com/photo-1513360371669-4adf3dd7dff8?w=800&h=800&fit=crop",
      author: "ChillMaster",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      likes: 1876,
      views: "19.3K",
      isTrending: false,
    },
    {
      id: 6,
      title: "That one friend",
      image: "https://images.unsplash.com/photo-1561948955-570b270e7c36?w=400&h=400&fit=crop",
      author: "MemeQueen",
      authorAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      likes: 2543,
      views: "28.7K",
      isTrending: false,
    },
    {
      id: 7,
      title: "Coffee addiction",
      image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=600&fit=crop",
      author: "CaffeineLord",
      authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      likes: 1543,
      views: "18.2K",
      isTrending: false,
    },
    {
      id: 8,
      title: "Gym motivation",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=800&fit=crop",
      author: "FitMemer",
      authorAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      likes: 2876,
      views: "32.5K",
      isTrending: true,
    },
    {
      id: 9,
      title: "Cat logic",
      image: "https://images.unsplash.com/photo-1573865526739-10c1dd7aa5a7?w=400&h=400&fit=crop",
      author: "CatLover",
      authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      likes: 4521,
      views: "56.3K",
      isTrending: true,
    },
    {
      id: 10,
      title: "Food mood",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=800&fit=crop",
      author: "FoodieMemez",
      authorAvatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
      likes: 3214,
      views: "41.7K",
      isTrending: false,
    },
    {
      id: 11,
      title: "Study struggles",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=600&h=600&fit=crop",
      author: "StudentLife",
      authorAvatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop",
      likes: 1987,
      views: "24.1K",
      isTrending: false,
    },
    {
      id: 12,
      title: "Gaming all night",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=400&h=400&fit=crop",
      author: "GamerMeme",
      authorAvatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop",
      likes: 2654,
      views: "29.8K",
      isTrending: false,
    },
  ];

  const filters = [
    { id: "trending", label: "Trending", icon: TrendingUp },
    { id: "recent", label: "Recent", icon: Clock },
    { id: "popular", label: "Most Popular", icon: Heart },
    { id: "featured", label: "Featured", icon: Sparkles },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      {/* Navbar Placeholder */}
      <Navbar />

      {/* Header Section */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col space-y-6">
            <div className="text-center md:text-left">
              <h1 className="text-5xl font-bold text-gray-900 mb-3 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Discover Memes
              </h1>
              <p className="text-gray-600 text-lg">
                Explore thousands of hilarious memes from our creative community
              </p>
            </div>

            {/* Search Bar */}
            <div className="relative max-w-2xl mx-auto md:mx-0 w-full">
              <Search
                className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={22}
              />
              <input
                type="text"
                placeholder="Search for memes, tags, or creators..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-pink-400 focus:outline-none transition-all text-base shadow-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="sticky top-16 z-40 bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center space-x-3 overflow-x-auto scrollbar-hide pb-1">
            {filters.map((filter) => (
              <FilterChip
                key={filter.id}
                label={filter.label}
                icon={filter.icon}
                isActive={activeFilter === filter.id}
                onClick={() => setActiveFilter(filter.id)}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Memes Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {memes.map((meme) => (
            <MemeCard
              key={meme.id}
              meme={meme}
              onClick={() => console.log("Meme clicked:", meme.id)}
            />
          ))}
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default DiscoverPage;