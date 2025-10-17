import { Award } from "lucide-react";
import { TOP_CONTRIBUTORS } from "../../../utils/constants";
import { useState } from "react";

// Card Component
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
    </div>
  );
};

const TopContributors = () => {
  const [contributors, setContributors] = useState(TOP_CONTRIBUTORS);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-center space-x-3 mb-8">
          <Award className="text-pink-500" size={32} />
          <h2 className="text-3xl font-bold text-gray-800">Top Contributors</h2>
        </div>

        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Meet our amazing community members who bring joy to millions every day
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {contributors.map((contributor, index) => (
            <ContributorCard
              key={contributor.id}
              contributor={contributor}
              rank={index + 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopContributors;
