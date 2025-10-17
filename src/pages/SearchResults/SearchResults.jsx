import { useState } from "react";
import {
  Search,
  TrendingUp,
  Clock,
  Heart,
  X,
  User,
  Image,
  Hash,
  SlidersHorizontal,
} from "lucide-react";
import MemeCard from "../../components/MemeCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import SectionHeader from "./components/SectionHeader";
import FilterChip from "./components/FilterChip";
import Pagination from "./components/Pagination";
import UserCard from "./components/UserCard";
import { SEARCH_RESULTS } from "../../utils/constants";
import ItemTag from "./components/ItemTag";

// Main Search Results Page Component
const SearchResultsPage = () => {
  const [searchQuery, setSearchQuery] = useState("funny cats");
  const [activeTab, setActiveTab] = useState("all");
  const [activeFilter, setActiveFilter] = useState("relevant");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const totalPages = 8;

  // Mock search results data
  const searchResults = SEARCH_RESULTS;

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
                    <ItemTag key={tag.id} {...tag} />
                  ))}
                </div>
              </div>
            </section>
          </div>
        )}

        {/* Individual Tab Views */}
        {activeTab === "memes" && (
          <>
            <SectionHeader title="Memes" count="1,289" showViewAll={false} />
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
            <SectionHeader title="Users" count="234" showViewAll={false} />
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
                    <span className="text-sm text-gray-500">({tag.count})</span>
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
