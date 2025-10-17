import { useState } from "react";
import { Award, TrendingUp, Clock, Trophy, Crown, Users } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import FilterChip from "./components/FilterChip";
import ContributorCard from "./components/ContributorCard";
import Pagination from "./components/Pagination";
import { CONTRIBUTORS, STATS } from "../../utils/constants";
import SearchBar from "./components/SearchBar";
import StatItem from "../../components/StatItem ";
import RankCard from "./components/RankCard";

const TopContributorsPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState("alltime");
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 8;

  const contributors = CONTRIBUTORS;

  const filters = [
    { id: "today", label: "Today", icon: Clock },
    { id: "week", label: "This Week", icon: TrendingUp },
    { id: "month", label: "This Month", icon: Award },
    { id: "alltime", label: "All Time", icon: Crown },
  ];

  const stats = STATS;

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
            <SearchBar
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
          </div>
        </div>
      </div>

      {/* Top 3 Podium Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-center gap-4 mb-16">
          <RankCard rank={2} user={contributors[1]} />
          <RankCard rank={1} user={contributors[0]} />
          <RankCard rank={3} user={contributors[2]} />
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
