import { Search } from "lucide-react";

const SearchBar = ({ searchQuery, setSearchQuery }) => {
  return (
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
  );
};

export default SearchBar;
