import { Hash } from "lucide-react";

const ItemTag = (tag) => {
  return (
    <button
      key={tag.id}
      onClick={() => console.log("Tag clicked:", tag.name)}
      className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-pink-50 to-purple-50 hover:from-pink-100 hover:to-purple-100 border-2 border-pink-200 rounded-xl transition-all"
    >
      <Hash size={16} className="text-pink-500" />
      <span className="font-medium text-gray-800">{tag.name}</span>
      <span className="text-sm text-gray-500">({tag.count})</span>
    </button>
  );
};

export default ItemTag;
