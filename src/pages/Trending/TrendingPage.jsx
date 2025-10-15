import React, { useState } from "react";
import {
  TrendingUp,
  Clock,
  Heart,
  ChevronLeft,
  ChevronRight,
  Flame,
  Zap,
  Award,
  Eye,
  Search,
} from "lucide-react";
import MemeCard from "../../components/MemeCard";
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

// Main Trending Page Component
const TrendingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("today");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  // Mock trending meme data
  const trendingMemes = [
    {
      id: 1,
      title: "When the code finally works",
      image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=800&h=800&fit=crop",
      author: "TechMemer",
      authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
      likes: 5678,
      views: "89.2K",
      isTrending: true,
      rank: 1,
    },
    {
      id: 2,
      title: "Monday morning mood",
      image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=800&fit=crop",
      author: "CoffeeLover",
      authorAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
      likes: 4521,
      views: "76.3K",
      isTrending: true,
      rank: 2,
    },
    {
      id: 3,
      title: "Developers debugging at 3AM",
      image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&h=800&fit=crop",
      author: "CodeNinja",
      authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      likes: 4123,
      views: "68.7K",
      isTrending: true,
      rank: 3,
    },
    {
      id: 4,
      title: "When someone says they don't like pizza",
      image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&h=800&fit=crop",
      author: "FoodieMemes",
      authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      likes: 3987,
      views: "62.1K",
      isTrending: true,
      rank: 4,
    },
    {
      id: 5,
      title: "My dog when I'm eating",
      image: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=800&h=800&fit=crop",
      author: "PetMemer",
      authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      likes: 3654,
      views: "58.4K",
      isTrending: true,
      rank: 5,
    },
    {
      id: 6,
      title: "Gym vs Me",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=800&fit=crop",
      author: "FitnessFails",
      authorAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      likes: 3421,
      views: "54.9K",
      isTrending: true,
      rank: 6,
    },
    {
      id: 7,
      title: "When WiFi goes down",
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=800&fit=crop",
      author: "InternetMemes",
      authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      likes: 3198,
      views: "51.2K",
      isTrending: true,
      rank: 7,
    },
    {
      id: 8,
      title: "Students during finals week",
      image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?w=800&h=800&fit=crop",
      author: "StudyMemes",
      authorAvatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      likes: 2987,
      views: "48.3K",
      isTrending: true,
      rank: 8,
    },
    {
      id: 9,
      title: "Cat logic explained",
      image: "https://images.unsplash.com/photo-1573865526739-10c1dd7aa5a7?w=800&h=800&fit=crop",
      author: "CatWhisperer",
      authorAvatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      likes: 2765,
      views: "45.7K",
      isTrending: true,
      rank: 9,
    },
    {
      id: 10,
      title: "Me pretending to work from home",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=800&fit=crop",
      author: "WFHLife",
      authorAvatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
      likes: 2543,
      views: "42.1K",
      isTrending: true,
      rank: 10,
    },
    {
      id: 11,
      title: "Gaming all night consequences",
      image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800&h=800&fit=crop",
      author: "GamerLife",
      authorAvatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop",
      likes: 2321,
      views: "39.8K",
      isTrending: true,
    },
    {
      id: 12,
      title: "Travel expectations vs reality",
      image: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&h=800&fit=crop",
      author: "WanderlustMemes",
      authorAvatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=100&h=100&fit=crop",
      likes: 2198,
      views: "37.4K",
      isTrending: true,
    },
  ];

  const filters = [
    { id: "today", label: "Today", icon: Flame },
    { id: "week", label: "This Week", icon: TrendingUp },
    { id: "month", label: "This Month", icon: Award },
    { id: "alltime", label: "All Time", icon: Zap },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Flame size={48} className="animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold">
                Trending Now
              </h1>
            </div>
            <p className="text-pink-100 text-lg md:text-xl max-w-2xl mx-auto">
              The hottest memes that are breaking the internet right now
            </p>
            
            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-pink-200 text-sm">Active Users</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">1M+</div>
                <div className="text-pink-200 text-sm">Views Today</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">100+</div>
                <div className="text-pink-200 text-sm">New Memes</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Section */}
      <div className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-3">
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

            {/* Search Bar */}
            <div className="relative w-full md:w-80">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
              />
              <input
                type="text"
                placeholder="Search trending..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-all text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Trending Memes Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
            <TrendingUp className="text-pink-500" />
            <span>Top Trending Memes</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Ranked by engagement and popularity in the last 24 hours
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {trendingMemes.map((meme) => (
            <MemeCard
              key={meme.id}
              meme={meme}
              onClick={() => console.log("Meme clicked:", meme.id)}
            />
          ))}
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>

      <Footer />
    </div>
  );
};

export default TrendingPage;