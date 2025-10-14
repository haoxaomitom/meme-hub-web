import { Search } from "lucide-react";
import React, { useState } from "react";

const Banner = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="bg-gradient-to-br from-pink-50 via-pink-100 to-purple-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4">
          Your Daily Dose of
          <span className="bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            {" "}
            Laughter
          </span>
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Discover, share, and enjoy the funniest memes from around the world
        </p>

        <div className="max-w-2xl mx-auto relative">
          <input
            type="text"
            placeholder="Search for memes, tags, or creators..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-6 py-4 pl-14 rounded-full border-2 border-pink-200 focus:border-pink-400 focus:outline-none shadow-lg transition-all"
          />
          <Search
            className="absolute left-5 top-1/2 transform -translate-y-1/2 text-pink-400"
            size={24}
          />
        </div>

        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {["Funny", "Relatable", "Wholesome", "Dark Humor", "Animals"].map(
            (tag) => (
              <button
                key={tag}
                className="px-5 py-2 bg-white rounded-full text-pink-600 hover:bg-pink-500 hover:text-white transition-all shadow-sm hover:shadow-md font-medium"
              >
                {tag}
              </button>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Banner;
