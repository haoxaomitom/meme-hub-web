import React, { useState } from "react";
import {
  Search,
  TrendingUp,
  Clock,
  Heart,
  Eye,
  ChevronLeft,
  ChevronRight,
  Filter,
  X,
  User,
  Image,
  Hash,
  Flame,
  SlidersHorizontal,
  ArrowRight,
} from "lucide-react";
import MemeCard from "../../components/MemeCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

// User Card Component
const UserCard = ({ user, onClick }) => {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all hover:-translate-y-1 cursor-pointer"
    >
      <div className="flex items-center space-x-4">
        <img
          src={user.avatar}
          alt={user.name}
          className="w-16 h-16 rounded-full border-4 border-pink-100"
        />
        <div className="flex-1">
          <h3 className="font-bold text-gray-800 text-lg">{user.name}</h3>
          <p className="text-gray-500 text-sm">@{user.username}</p>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-2 gap-4">
        <div className="bg-pink-50 rounded-xl p-3 text-center">
          <p className="text-xl font-bold text-pink-600">{user.memes}</p>
          <p className="text-xs text-gray-600">Memes</p>
        </div>
        <div className="bg-purple-50 rounded-xl p-3 text-center">
          <p className="text-xl font-bold text-purple-600">{user.followers}</p>
          <p className="text-xs text-gray-600">Followers</p>
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

// View All Button Component
const ViewAllButton = ({ count, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
    >
      <span className="font-medium">View All {count}</span>
      <ArrowRight size={18} />
    </button>
  );
};

// Section Header Component
const SectionHeader = ({ title, count, showViewAll, onViewAll }) => {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
        <p className="text-gray-600 mt-1">{count} results found</p>
      </div>
      {showViewAll && (
        <ViewAllButton count={count} onClick={onViewAll} />
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

// Main Search Results Page Component
const SearchResultsPage = () => {
  const [searchQuery, setSearchQuery] = useState("funny cats");
  const [activeTab, setActiveTab] = useState("all");
  const [activeFilter, setActiveFilter] = useState("relevant");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const totalPages = 8;

  // Mock search results data
  const searchResults = {
    memes: [
      {
        id: 1,
        title: "Funny cat doing backflip",
        image:
          "https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?w=800&h=800&fit=crop",
        author: "CatLover",
        authorAvatar:
          "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop",
        likes: 3421,
        views: "45.2K",
        isTrending: true,
      },
      {
        id: 2,
        title: "Cats vs cucumbers compilation",
        image:
          "https://images.unsplash.com/photo-1573865526739-10c1dd7aa5a7?w=800&h=800&fit=crop",
        author: "FelineFunny",
        authorAvatar:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop",
        likes: 2876,
        views: "38.7K",
        isTrending: false,
      },
      {
        id: 3,
        title: "When your cat judges you",
        image:
          "https://images.unsplash.com/photo-1574158622682-e40e69881006?w=800&h=800&fit=crop",
        author: "MeowMemes",
        authorAvatar:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
        likes: 4521,
        views: "52.3K",
        isTrending: true,
      },
      {
        id: 4,
        title: "Hilarious cat reactions",
        image:
          "https://images.unsplash.com/photo-1559235038-1a4f5cf91135?w=800&h=800&fit=crop",
        author: "KittyKing",
        authorAvatar:
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
        likes: 1987,
        views: "28.4K",
        isTrending: false,
      },
      {
        id: 5,
        title: "Cats being weird",
        image:
          "https://images.unsplash.com/photo-1571988840298-3b5301d5109b?w=800&h=800&fit=crop",
        author: "PurrfectMemes",
        authorAvatar:
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
        likes: 3654,
        views: "41.9K",
        isTrending: false,
      },
      {
        id: 6,
        title: "Cat logic explained",
        image:
          "https://images.unsplash.com/photo-1543852786-1cf6624b9987?w=800&h=800&fit=crop",
        author: "WhiskerWisdom",
        authorAvatar:
          "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop",
        likes: 2198,
        views: "32.1K",
        isTrending: false,
      },
    ],
    users: [
      {
        id: 1,
        name: "Cat Lover",
        username: "catlover",
        avatar:
          "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
        memes: 342,
        followers: "12.5K",
      },
      {
        id: 2,
        name: "Feline Funny",
        username: "felinefunny",
        avatar:
          "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop",
        memes: 198,
        followers: "8.7K",
      },
      {
        id: 3,
        name: "Meow Master",
        username: "meowmaster",
        avatar:
          "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop",
        memes: 156,
        followers: "6.3K",
      },
    ],
    tags: [
      { id: 1, name: "funny-cats", count: "1.2K posts" },
      { id: 2, name: "cat-memes", count: "987 posts" },
      { id: 3, name: "cats", count: "2.5K posts" },
      { id: 4, name: "funny-animals", count: "876 posts" },
      { id: 5, name: "pet-humor", count: "654 posts" },
      { id: 6, name: "cat-life", count: "543 posts" },
    ],
  };

  const tabs = [
    { id: "all", label: "All", count: 1543, icon: Image },
    { id: "memes", label: "Memes", count: 1289, icon: Image },
    { id: "users", label: "Users", count: 234, icon: User },
    { id: "tags", label: "Tags", count: 20, icon: Hash },
  ];

  const filters = [
    { id: "relevant", label: "Most Relevant" },
    { id: "recent", label: "Most Recent", icon: Clock },
    { id: "popular", label: "Most Popular", icon: Heart },
    { id: "trending", label: "Trending", icon: TrendingUp },
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Searching for:", searchQuery);
  };

  const handleViewAllMemes = () => {
    setActiveTab("memes");
  };

  const handleViewAllUsers = () => {
    setActiveTab("users");
  };

  const handleViewAllTags = () => {
    setActiveTab("tags");
  };

  // Get limited results for "all" tab
  const getLimitedResults = () => {
    return {
      memes: searchResults.memes.slice(0, 4),
      users: searchResults.users.slice(0, 3),
      tags: searchResults.tags.slice(0, 6),
    };
  };

  const limitedResults = getLimitedResults();
  const isAllTab = activeTab === "all";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Navbar />

      {/* Search Header */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Search Bar */}
          <form onSubmit={handleSearch} className="mb-6">
            <div className="relative max-w-3xl mx-auto">
              <Search
                className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={22}
              />
              <input
                type="text"
                placeholder="Search for memes, users, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 border-2 border-gray-200 rounded-2xl focus:border-pink-400 focus:outline-none transition-all text-base shadow-sm"
              />
            </div>
          </form>

          {/* Results Count */}
          <div className="text-center">
            <p className="text-gray-600">
              Found{" "}
              <span className="font-bold text-pink-600">1,543 results</span> for{" "}
              <span className="font-semibold text-gray-900">
                "{searchQuery}"
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="bg-white border-b border-gray-100 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div className="flex space-x-1 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-4 font-medium transition-all border-b-2 whitespace-nowrap ${
                    activeTab === tab.id
                      ? "border-pink-500 text-pink-600"
                      : "border-transparent text-gray-600 hover:text-gray-900"
                  }`}
                >
                  <tab.icon size={18} />
                  <span>{tab.label}</span>
                  <span
                    className={`text-sm px-2 py-0.5 rounded-full ${
                      activeTab === tab.id
                        ? "bg-pink-100 text-pink-600"
                        : "bg-gray-100 text-gray-600"
                    }`}
                  >
                    {tab.count}
                  </span>
                </button>
              ))}
            </div>

            <button
              onClick={() => setShowFilters(!showFilters)}
              className="flex items-center space-x-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-xl transition-all"
            >
              <SlidersHorizontal size={18} />
              <span className="hidden md:inline">Filters</span>
            </button>
          </div>
        </div>
      </div>

      {/* Filters Bar */}
      {showFilters && (
        <div className="bg-white border-b border-gray-100 shadow-sm">
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
                onClick={() => setShowFilters(false)}
                className="text-gray-400 hover:text-gray-600 transition-all"
              >
                <X size={20} />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Results Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* All Tab - Show all sections with limited results */}
        {isAllTab && (
          <div className="space-y-16">
            {/* Memes Section */}
            <section>
              <SectionHeader
                title="Memes"
                count="1,289"
                showViewAll={true}
                onViewAll={handleViewAllMemes}
              />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {limitedResults.memes.map((meme) => (
                  <MemeCard
                    key={meme.id}
                    meme={meme}
                    onClick={() => console.log("Meme clicked:", meme.id)}
                  />
                ))}
              </div>
            </section>

            {/* Users Section */}
            <section>
              <SectionHeader
                title="Users"
                count="234"
                showViewAll={true}
                onViewAll={handleViewAllUsers}
              />
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {limitedResults.users.map((user) => (
                  <UserCard
                    key={user.id}
                    user={user}
                    onClick={() => console.log("User clicked:", user.id)}
                  />
                ))}
              </div>
            </section>

            {/* Tags Section */}
            <section>
              <SectionHeader
                title="Popular Tags"
                count="20"
                showViewAll={true}
                onViewAll={handleViewAllTags}
              />
              <div className="bg-white rounded-2xl shadow-md p-6">
                <div className="flex flex-wrap gap-3">
                  {limitedResults.tags.map((tag) => (
                    <button
                      key={tag.id}
                      onClick={() => console.log("Tag clicked:", tag.name)}
                      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 border-2 border-pink-200 rounded-xl transition-all"
                    >
                      <Hash size={16} className="text-pink-500" />
                      <span className="font-medium text-gray-800">
                        {tag.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        ({tag.count})
                      </span>
                    </button>
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Individual Tab Views */}
        {activeTab === "memes" && (
          <>
            <SectionHeader
              title="Memes"
              count="1,289"
              showViewAll={false}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {searchResults.memes.map((meme) => (
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
          </>
        )}

        {activeTab === "users" && (
          <>
            <SectionHeader
              title="Users"
              count="234"
              showViewAll={false}
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {searchResults.users.map((user) => (
                <UserCard
                  key={user.id}
                  user={user}
                  onClick={() => console.log("User clicked:", user.id)}
                />
              ))}
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}

        {activeTab === "tags" && (
          <>
            <SectionHeader
              title="Popular Tags"
              count="20"
              showViewAll={false}
            />
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex flex-wrap gap-3">
                {searchResults.tags.map((tag) => (
                  <button
                    key={tag.id}
                    onClick={() => console.log("Tag clicked:", tag.name)}
                    className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 border-2 border-pink-200 rounded-xl transition-all"
                  >
                    <Hash size={16} className="text-pink-500" />
                    <span className="font-medium text-gray-800">
                      {tag.name}
                    </span>
                    <span className="text-sm text-gray-500">
                      ({tag.count})
                    </span>
                  </button>
                ))}
              </div>
            </div>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}

        {/* Empty State for individual tabs when no results */}
        {activeTab === "users" && searchResults.users.length === 0 && (
          <div className="text-center py-16">
            <User className="mx-auto text-gray-300 mb-4" size={64} />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              No Users Found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search terms or filters
            </p>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
};

export default SearchResultsPage;