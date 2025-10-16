import React, { useState } from "react";
import {
  Hash,
  TrendingUp,
  Clock,
  Heart,
  Flame,
  Eye,
  Bookmark,
  Share2,
  ChevronLeft,
  ChevronRight,
  Filter,
  SlidersHorizontal,
  Users,
  Image,
  Calendar,
  Award,
} from "lucide-react";
import MemeCard from "../../components/MemeCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

// Stats Card Component
const StatsCard = ({ icon: Icon, label, value, color }) => {
  return (
    <div className={`bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all`}>
      <div className="flex items-center space-x-4">
        <div className={`p-4 rounded-2xl bg-gradient-to-br ${color}`}>
          <Icon size={24} className="text-white" />
        </div>
        <div>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
          <p className="text-sm text-gray-600">{label}</p>
        </div>
      </div>
    </div>
  );
};

// Filter Chip Component
const FilterChip = ({ label, isActive, onClick, icon: Icon }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center space-x-2 px-4 py-2 rounded-full font-medium transition-all duration-200 text-sm ${
        isActive
          ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg scale-105"
          : "bg-white text-gray-700 border-2 border-gray-200 hover:border-pink-300 hover:bg-pink-50"
      }`}
    >
      {Icon && <Icon size={16} />}
      <span>{label}</span>
    </button>
  );
};

// Related Tag Component
const RelatedTag = ({ tag, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition-all group"
    >
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg group-hover:from-pink-200 group-hover:to-purple-200 transition-all">
          <Hash size={18} className="text-pink-600" />
        </div>
        <div className="text-left">
          <p className="font-semibold text-gray-900">#{tag.name}</p>
          <p className="text-sm text-gray-500">{tag.count} posts</p>
        </div>
      </div>
      <TrendingUp size={18} className="text-gray-400 group-hover:text-pink-500 transition-all" />
    </button>
  );
};

// Top Contributor Component
const TopContributor = ({ user, rank, onClick }) => {
  const rankColors = {
    1: "from-yellow-400 to-yellow-600",
    2: "from-gray-300 to-gray-500",
    3: "from-orange-400 to-orange-600",
  };

  return (
    <div
      onClick={onClick}
      className="flex items-center space-x-4 p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-pink-300 hover:shadow-md transition-all cursor-pointer group"
    >
      <div className="relative">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-14 h-14 rounded-full border-4 border-pink-100"
        />
        <div className={`absolute -bottom-1 -right-1 w-7 h-7 rounded-full bg-gradient-to-br ${rankColors[rank] || "from-pink-400 to-purple-600"} flex items-center justify-center text-white text-xs font-bold shadow-lg`}>
          {rank}
        </div>
      </div>
      <div className="flex-1">
        <h4 className="font-bold text-gray-900 group-hover:text-pink-600 transition-all">
          {user.name}
        </h4>
        <p className="text-sm text-gray-500">@{user.username}</p>
      </div>
      <div className="text-right">
        <p className="font-bold text-pink-600">{user.posts}</p>
        <p className="text-xs text-gray-500">posts</p>
      </div>
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

// Main Tag Detail Page Component
const TagDetailPage = () => {
  const [activeFilter, setActiveFilter] = useState("trending");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const [isFollowing, setIsFollowing] = useState(false);
  const totalPages = 12;

  // Mock tag data
  const tagData = {
    name: "funny-cats",
    description: "The ultimate collection of hilarious cat memes, videos, and moments that will make you laugh. Join thousands of cat lovers sharing the funniest feline content on the internet!",
    totalPosts: "1,289",
    followers: "45.2K",
    weeklyGrowth: "+12.5%",
    createdDate: "Jan 2023",
    memes: [
      {
        id: 1,
        title: "Funny cat doing backflip",
        image: "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=800&fit=crop",
        author: "CatLover",
        authorAvatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
        likes: 3421,
        views: "45.2K",
        isTrending: true,
      },
      {
        id: 2,
        title: "Cats vs cucumbers compilation",
        image: "https://images.unsplash.com/photo-1573865526739-10c1dd7aa5a7?w=800&h=800&fit=crop",
        author: "FelineFunny",
        authorAvatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
        likes: 2876,
        views: "38.7K",
        isTrending: false,
      },
      {
        id: 3,
        title: "When your cat judges you",
        image: "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=800&fit=crop",
        author: "MeowMemes",
        authorAvatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        likes: 4521,
        views: "52.3K",
        isTrending: true,
      },
      {
        id: 4,
        title: "Hilarious cat reactions",
        image: "https://images.unsplash.com/photo-1559235038-1a4f5cf91135?w=800&h=800&fit=crop",
        author: "KittyKing",
        authorAvatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        likes: 1987,
        views: "28.4K",
        isTrending: false,
      },
      {
        id: 5,
        title: "Cats being weird",
        image: "https://images.unsplash.com/photo-1571988840298-3b5301d5109b?w=800&h=800&fit=crop",
        author: "PurrfectMemes",
        authorAvatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        likes: 3654,
        views: "41.9K",
        isTrending: false,
      },
      {
        id: 6,
        title: "Cat logic explained",
        image: "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=800&h=800&fit=crop",
        author: "WhiskerWisdom",
        authorAvatar: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
        likes: 2198,
        views: "32.1K",
        isTrending: false,
      },
      {
        id: 7,
        title: "Grumpy cat vibes",
        image: "https://images.unsplash.com/photo-1529778873920-4da4926a72c2?w=800&h=800&fit=crop",
        author: "CatMaster",
        authorAvatar: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=100&h=100&fit=crop",
        likes: 5632,
        views: "67.8K",
        isTrending: true,
      },
      {
        id: 8,
        title: "Sleepy kitty moments",
        image: "https://images.unsplash.com/photo-1478098711619-5ab0b478d6e6?w=800&h=800&fit=crop",
        author: "Purrfection",
        authorAvatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop",
        likes: 3987,
        views: "44.3K",
        isTrending: false,
      },
    ],
    topContributors: [
      {
        id: 1,
        name: "Cat Lover",
        username: "catlover",
        avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
        posts: 156,
      },
      {
        id: 2,
        name: "Feline Funny",
        username: "felinefunny",
        avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
        posts: 142,
      },
      {
        id: 3,
        name: "Meow Master",
        username: "meowmaster",
        avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
        posts: 128,
      },
      {
        id: 4,
        name: "Whisker World",
        username: "whiskerworld",
        avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop",
        posts: 115,
      },
    ],
    relatedTags: [
      { id: 1, name: "cat-memes", count: "987" },
      { id: 2, name: "cats", count: "2.5K" },
      { id: 3, name: "funny-animals", count: "876" },
      { id: 4, name: "pet-humor", count: "654" },
      { id: 5, name: "cat-life", count: "543" },
      { id: 6, name: "cute-cats", count: "1.8K" },
    ],
  };

  const filters = [
    { id: "trending", label: "Trending", icon: Flame },
    { id: "recent", label: "Recent", icon: Clock },
    { id: "popular", label: "Popular", icon: TrendingUp },
    { id: "top", label: "Top Rated", icon: Award },
  ];

  const handleFollowTag = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Navbar />

      {/* Tag Header */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex items-start justify-between">
            <div className="flex-1">
              {/* Tag Icon and Name */}
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-5 bg-gradient-to-br from-pink-500 to-purple-600 rounded-3xl shadow-lg">
                  <Hash size={40} className="text-white" />
                </div>
                <div>
                  <h1 className="text-4xl font-bold text-gray-900 mb-2">
                    #{tagData.name}
                  </h1>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Calendar size={16} />
                      <span>Created {tagData.createdDate}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <TrendingUp size={16} className="text-green-500" />
                      <span className="text-green-600 font-semibold">
                        {tagData.weeklyGrowth} this week
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-gray-700 max-w-3xl leading-relaxed mb-6">
                {tagData.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center space-x-3 ml-6">
              <button
                onClick={handleFollowTag}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all shadow-lg ${
                  isFollowing
                    ? "bg-white border-2 border-pink-500 text-pink-600 hover:bg-pink-50"
                    : "bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700"
                }`}
              >
                <Heart
                  size={20}
                  className={isFollowing ? "fill-current" : ""}
                />
                <span>{isFollowing ? "Following" : "Follow Tag"}</span>
              </button>
              <button className="p-3 bg-white border-2 border-gray-200 rounded-xl hover:border-pink-300 hover:bg-pink-50 transition-all">
                <Share2 size={20} className="text-gray-600" />
              </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <StatsCard
              icon={Image}
              label="Total Posts"
              value={tagData.totalPosts}
              color="from-pink-500 to-pink-600"
            />
            <StatsCard
              icon={Users}
              label="Followers"
              value={tagData.followers}
              color="from-purple-500 to-purple-600"
            />
            <StatsCard
              icon={Eye}
              label="Weekly Growth"
              value={tagData.weeklyGrowth}
              color="from-blue-500 to-blue-600"
            />
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3 flex-wrap gap-2">
              <span className="text-sm font-medium text-gray-700">
                Sort by:
              </span>
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
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-xl transition-all"
            >
              <SlidersHorizontal size={18} />
              <span className="hidden md:inline">More Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content - Memes Grid */}
          <div className="lg:col-span-2">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                {activeFilter === "trending" && "🔥 Trending Memes"}
                {activeFilter === "recent" && "⏰ Recent Memes"}
                {activeFilter === "popular" && "⭐ Popular Memes"}
                {activeFilter === "top" && "🏆 Top Rated Memes"}
              </h2>
              <p className="text-gray-600 mt-1">
                {tagData.totalPosts} memes in this tag
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {tagData.memes.map((meme) => (
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

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Top Contributors */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Award className="text-pink-500" size={24} />
                <h3 className="text-xl font-bold text-gray-900">
                  Top Contributors
                </h3>
              </div>
              <div className="space-y-3">
                {tagData.topContributors.map((user, index) => (
                  <TopContributor
                    key={user.id}
                    user={user}
                    rank={index + 1}
                    onClick={() => console.log("User clicked:", user.id)}
                  />
                ))}
              </div>
            </div>

            {/* Related Tags */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-center space-x-2 mb-6">
                <Hash className="text-purple-500" size={24} />
                <h3 className="text-xl font-bold text-gray-900">
                  Related Tags
                </h3>
              </div>
              <div className="space-y-3">
                {tagData.relatedTags.map((tag) => (
                  <RelatedTag
                    key={tag.id}
                    tag={tag}
                    onClick={() => console.log("Tag clicked:", tag.name)}
                  />
                ))}
              </div>
            </div>

            {/* Tag Stats Card */}
            <div className="bg-gradient-to-br from-pink-500 to-purple-600 rounded-2xl shadow-lg p-6 text-white">
              <h3 className="text-xl font-bold mb-4">Tag Performance</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-pink-100">Daily Posts</span>
                  <span className="font-bold text-2xl">~43</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-pink-100">Avg. Engagement</span>
                  <span className="font-bold text-2xl">2.8K</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-pink-100">Active Users</span>
                  <span className="font-bold text-2xl">892</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-pink-400">
                <p className="text-sm text-pink-100">
                  This tag is in the top 5% of all tags! 🚀
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TagDetailPage;