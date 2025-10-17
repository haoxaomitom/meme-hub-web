import { Crown } from "lucide-react";

const RankCard = ({ rank, user, color }) => {
  const colors =
    {
      1: {
        border: "border-yellow-400",
        bg: "from-yellow-200 to-yellow-100",
        text: "text-yellow-700",
        circleBg: "bg-yellow-400 text-yellow-900",
      },
      2: {
        border: "border-gray-300",
        bg: "from-gray-200 to-gray-100",
        text: "text-gray-700",
        circleBg: "bg-gray-300 text-gray-700",
      },
      3: {
        border: "border-orange-400",
        bg: "from-orange-200 to-orange-100",
        text: "text-orange-700",
        circleBg: "bg-orange-400 text-orange-900",
      },
    }[rank] || {};

  const imageSize = rank === 1 ? "w-28 h-28" : "w-24 h-24";
  const cardHeight = rank === 1 ? "h-40" : "h-32";
  const likesSize = rank === 1 ? "text-3xl" : "text-2xl";

  return (
    <div className="flex flex-col items-center">
      <div className="relative mb-4">
        {rank === 1 && (
          <Crown
            className="absolute -top-8 left-1/2 transform -translate-x-1/2 text-yellow-400"
            size={32}
          />
        )}
        <img
          src={user.avatar}
          alt={user.name}
          className={`${imageSize} rounded-full border-4 ${colors.border}`}
        />
        <div
          className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 ${
            colors.circleBg
          } w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center font-bold shadow-lg ${
            rank === 1 ? "text-lg" : "text-base"
          }`}
        >
          {rank}
        </div>
      </div>

      <div
        className={`bg-gradient-to-t ${colors.bg} rounded-t-2xl px-8 py-6 text-center ${cardHeight} flex flex-col justify-center`}
      >
        <h3 className="font-bold text-gray-800 text-lg">{user.name}</h3>
        <p className="text-gray-600 text-sm">@{user.username}</p>
        <p className={`${likesSize} font-bold ${colors.text} mt-2`}>
          {user.likes}
        </p>
      </div>
    </div>
  );
};

export default RankCard;
