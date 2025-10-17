import { useState } from "react";
import { TrendingUp, Flame, Zap, Award, Search } from "lucide-react";
import MemeCard from "../../components/MemeCard";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import FilterChip from "./components/FilterChip";
import Pagination from "./components/Pagination";
import StatItem from "../../components/StatItem ";
import { STATSTRENDING, TRENDINGMEMES } from "../../utils/constants";

const TrendingPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("today");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;

  const trendingMemes = TRENDINGMEMES;

  const filters = [
    { id: "today", label: "Today", icon: Flame },
    { id: "week", label: "This Week", icon: TrendingUp },
    { id: "month", label: "This Month", icon: Award },
    { id: "alltime", label: "All Time", icon: Zap },
  ];

  const stats = STATSTRENDING;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <div className="bg-gradient-to-r from-pink-600 to-purple-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Flame size={48} className="animate-pulse" />
              <h1 className="text-5xl md:text-6xl font-bold">Trending Now</h1>
            </div>
            <p className="text-pink-100 text-lg md:text-xl max-w-2xl mx-auto">
              The hottest memes that are breaking the internet right now
            </p>

            {/* Stats Bar */}
            <div className="flex flex-wrap justify-center gap-8 mt-8">
              {stats.map((item, index) => (
                <StatItem key={index} value={item.value} label={item.label} />
              ))}
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
