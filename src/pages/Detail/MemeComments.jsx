import { Send } from "lucide-react";
import React from "react";

const MemeComments = () => (
  <div className="bg-white rounded-3xl shadow-md p-6 h-fit">
    <h3 className="font-semibold text-gray-800 mb-4 text-lg">Comments 💬</h3>

    <div className="space-y-3 mb-6 max-h-[400px] overflow-y-auto pr-2">
      <div className="bg-pink-50 p-3 rounded-xl">
        <p className="font-medium text-gray-700">MemeFan99:</p>
        <p className="text-gray-600 text-sm">This one made my day 😂</p>
      </div>
      <div className="bg-pink-50 p-3 rounded-xl">
        <p className="font-medium text-gray-700">KawaiiCat:</p>
        <p className="text-gray-600 text-sm">So cuteee 😻</p>
      </div>
    </div>

    <div className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Add a comment..."
        className="flex-1 border border-pink-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-pink-300"
      />
      <button className="bg-pink-400 text-white rounded-xl px-4 py-2 hover:bg-pink-500 transition flex items-center gap-2">
        <Send size={16} />
        Send
      </button>
    </div>
  </div>
);

export default MemeComments;
