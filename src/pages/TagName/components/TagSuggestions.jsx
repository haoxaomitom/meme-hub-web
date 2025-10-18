import { RefreshCw } from "lucide-react";

const TagSuggestions = ({ baseName, onSelect }) => {
  const suggestions = [
    `${baseName.toLowerCase().replace(/\s+/g, "-")}`,
    `${baseName.toLowerCase().replace(/\s+/g, "-")}-official`,
    `${baseName.toLowerCase().replace(/\s+/g, "")}`,
    `the-${baseName.toLowerCase().replace(/\s+/g, "-")}`,
  ].filter((s) => s.length >= 3);

  if (!baseName || suggestions.length === 0) return null;

  return (
    <div className="mb-6">
      <p className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
        <RefreshCw className="w-4 h-4 text-pink-500" />
        Suggestions
      </p>
      <div className="flex flex-wrap gap-2">
        {suggestions.slice(0, 4).map((suggestion, index) => (
          <button
            key={index}
            onClick={() => onSelect(suggestion)}
            className="px-4 py-2 bg-white border-2 border-pink-200 rounded-xl text-sm font-medium text-gray-700 hover:border-pink-400 hover:bg-pink-50 transition-all duration-300 hover:-translate-y-0.5 shadow-sm hover:shadow-md"
          >
            @{suggestion}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TagSuggestions;
