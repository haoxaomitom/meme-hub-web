import { Sparkles } from "lucide-react";

const PreviewCard = ({ tagName }) => {
  const formattedTag = tagName
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return (
    <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-6 mb-6 border-2 border-pink-100 shadow-sm">
      <div className="flex items-center gap-3 mb-4">
        <Sparkles className="w-5 h-5 text-pink-500" />
        <p className="text-sm font-semibold text-gray-700">Live Preview</p>
      </div>

      <div className="bg-white rounded-xl px-6 py-4 border-2 border-pink-200 shadow-sm">
        <span className="text-pink-500 font-bold text-2xl">@</span>
        <span className="text-gray-800 font-bold text-2xl">
          {formattedTag || "your-tag-name"}
        </span>
      </div>

      <div className="mt-4 space-y-2">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <span>Use lowercase letters (a-z)</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <span>Numbers are allowed (0-9)</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <span>Use hyphens to separate words</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <div className="w-2 h-2 rounded-full bg-green-400"></div>
          <span>Minimum 3 characters</span>
        </div>
      </div>
    </div>
  );
};

export default PreviewCard;
