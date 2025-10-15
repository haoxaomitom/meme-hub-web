import React, { useState } from "react";
import {
  Award,
  TrendingUp,
  Clock,
  Trophy,
  Crown,
  Zap,
  Users,
  ChevronLeft,
  ChevronRight,
  Search,
  Flame,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

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

      {contributor.badge && (
        <div className="mt-4 flex items-center justify-center space-x-2 bg-gradient-to-r from-pink-100 to-purple-100 rounded-xl py-2">
          <Trophy className="text-pink-500" size={16} />
          <span className="text-sm font-semibold text-gray-700">
            {contributor.badge}
          </span>
        </div>
      )}
    </div>
  );
};

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

// Main Top Contributors Page Component
const TopContributorsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("alltime");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;

  // Mock contributors data
  const contributors = [
    {
      id: 1,
      name: "Alex Johnson",
      username: "alexj",
      avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
      memes: 342,
      likes: "128K",
      badge: "Legend",
    },
    {
      id: 2,
      name: "Sarah Chen",
      username: "sarahc",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      memes: 298,
      likes: "95K",
      badge: "Master",
    },
    {
      id: 3,
      name: "Mike Ross",
      username: "mikeross",
      avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
      memes: 276,
      likes: "87K",
      badge: "Expert",
    },
    {
      id: 4,
      name: "Emma Wilson",
      username: "emmaw",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      memes: 254,
      likes: "72K",
      badge: "Pro",
    },
    {
      id: 5,
      name: "David Kim",
      username: "davidk",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      memes: 231,
      likes: "68K",
    },
    {
      id: 6,
      name: "Lisa Martinez",
      username: "lisam",
      avatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
      memes: 218,
      likes: "64K",
    },
    {
      id: 7,
      name: "James Taylor",
      username: "jamest",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
      memes: 205,
      likes: "59K",
    },
    {
      id: 8,
      name: "Nina Patel",
      username: "ninap",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      memes: 192,
      likes: "54K",
    },
    {
      id: 9,
      name: "Ryan Cooper",
      username: "ryanc",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      memes: 187,
      likes: "51K",
    },
    {
      id: 10,
      name: "Sophie Brown",
      username: "sophieb",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
      memes: 174,
      likes: "48K",
    },
    {
      id: 11,
      name: "Tom Anderson",
      username: "toma",
      avatar: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=100&h=100&fit=crop",
      memes: 168,
      likes: "45K",
    },
    {
      id: 12,
      name: "Maya Singh",
      username: "mayas",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop",
      memes: 156,
      likes: "42K",
    },
  ];

  const filters = [
    { id: "today", label: "Today", icon: Clock },
    { id: "week", label: "This Week", icon: TrendingUp },
    { id: "month", label: "This Month", icon: Award },
    { id: "alltime", label: "All Time", icon: Crown },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Trophy size={48} className="animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold">
                Top Contributors
              </h1>
            </div>
            <p className="text-pink-100 text-lg md:text-xl max-w-2xl mx-auto">
              Celebrating the creative minds who make our community amazing
            </p>
            
            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-pink-200 text-sm">Active Creators</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10M+</div>
                <div className="text-pink-200 text-sm">Total Likes</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">50K+</div>
                <div className="text-pink-200 text-sm">Memes Created</div>
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
                placeholder="Search contributors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-2.5 border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-all text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Top 3 Podium Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-center gap-4 mb-16">
          {/* Second Place */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <img
                src={contributors[1].avatar}
                alt={contributors[1].name}
                className="w-24 h-24 rounded-full border-4 border-gray-300"
              />
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-gray-300 text-gray-700 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">
                2
              </div>
            </div>
            <div className="bg-gradient-to-t from-gray-200 to-gray-100 rounded-t-2xl px-8 py-6 text-center h-32 flex flex-col justify-center">
              <h3 className="font-bold text-gray-800">{contributors[1].name}</h3>
              <p className="text-gray-600 text-sm">@{contributors[1].username}</p>
              <p className="text-2xl font-bold text-gray-700 mt-2">{contributors[1].likes}</p>
            </div>
          </div>

          {/* First Place */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <Crown className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-yellow-400" size={32} />
              <img
                src={contributors[0].avatar}
                alt={contributors[0].name}
                className="w-28 h-28 rounded-full border-4 border-yellow-400"
              />
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-yellow-900 w-12 h-12 rounded-full flex items-center justify-center font-bold shadow-lg text-lg">
                1
              </div>
            </div>
            <div className="bg-gradient-to-t from-yellow-200 to-yellow-100 rounded-t-2xl px-8 py-6 text-center h-40 flex flex-col justify-center">
              <h3 className="font-bold text-gray-800 text-lg">{contributors[0].name}</h3>
              <p className="text-gray-600 text-sm">@{contributors[0].username}</p>
              <p className="text-3xl font-bold text-yellow-700 mt-2">{contributors[0].likes}</p>
            </div>
          </div>

          {/* Third Place */}
          <div className="flex flex-col items-center">
            <div className="relative mb-4">
              <img
                src={contributors[2].avatar}
                alt={contributors[2].name}
                className="w-24 h-24 rounded-full border-4 border-orange-400"
              />
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-orange-400 text-orange-900 w-10 h-10 rounded-full flex items-center justify-center font-bold shadow-lg">
                3
              </div>
            </div>
            <div className="bg-gradient-to-t from-orange-200 to-orange-100 rounded-t-2xl px-8 py-6 text-center h-32 flex flex-col justify-center">
              <h3 className="font-bold text-gray-800">{contributors[2].name}</h3>
              <p className="text-gray-600 text-sm">@{contributors[2].username}</p>
              <p className="text-2xl font-bold text-orange-700 mt-2">{contributors[2].likes}</p>
            </div>
          </div>
        </div>

        {/* All Contributors Grid */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-gray-900 flex items-center space-x-2">
            <Users className="text-pink-500" />
            <span>All Top Contributors</span>
          </h2>
          <p className="text-gray-600 mt-2">
            Ranked by total engagement and contribution to the community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contributors.map((contributor, index) => (
            <ContributorCard
              key={contributor.id}
              contributor={contributor}
              rank={index + 1}
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

export default TopContributorsPage;