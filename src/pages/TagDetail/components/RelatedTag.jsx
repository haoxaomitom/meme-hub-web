import { Hash, TrendingUp } from 'lucide-react';
import React from 'react'

const RelatedTag = ({ tag, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center justify-between w-full p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-pink-300 hover:bg-pink-50 transition-all group"
    >
      <div className="flex items-center space-x-3">
        <div className="p-2 bg-gradient-to-br from-pink-100 to-purple-100 rounded-lg group-hover:from-pink-200 group-hover:to-purple-200 transition-all">
          <Hash size={18} className="text-pink-600" />
        </div>
        <div className="text-left">
          <p className="font-semibold text-gray-900">#{tag.name}</p>
          <p className="text-sm text-gray-500">{tag.count} posts</p>
        </div>
      </div>
      <TrendingUp size={18} className="text-gray-400 group-hover:text-pink-500 transition-all" />
    </button>
  );
};

export default RelatedTag