import { useState } from "react";
import {
  Hash,
  TrendingUp,
  Clock,
  Flame,
  Eye,
  SlidersHorizontal,
  Users,
  Image,
  Calendar,
  Award,
} from "lucide-react";
import MemeCard from "../../components/MemeCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import { TAGDATA } from "../../utils/constants";
import StatsCard from "./components/StatsCard";
import FilterChip from "./components/FilterChip";
import Pagination from "./components/Pagination";
import TopContributor from "./components/TopContributor";
import RelatedTag from "./components/RelatedTag";
import TagPerformanceCard from "./components/TagPerformanceCard ";

const TagDetailPage = () => {
  const [activeFilter, setActiveFilter] = useState("trending");
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  const totalPages = 12;

  // Mock tag data
  const tagData = TAGDATA;

  const filters = [
    { id: "trending", label: "Trending", icon: Flame },
    { id: "recent", label: "Recent", icon: Clock },
    { id: "popular", label: "Popular", icon: TrendingUp },
    { id: "top", label: "Top Rated", icon: Award },
  ];

  const stats = [
    { label: "Daily Posts", value: "~43" },
    { label: "Avg. Engagement", value: "2.8K" },
    { label: "Active Users", value: "892" },
  ];

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

            {/* Follow Action Buttons */}
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
              <TagPerformanceCard
                title="Tag Performance"
                stats={stats}
                note="This tag is in the top 5% of all tags! 🚀"
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TagDetailPage;
