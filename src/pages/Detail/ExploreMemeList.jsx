import React from "react";
import { motion } from "framer-motion";

const ExploreMemeList = ({ memes }) => (
  <div className="mt-12">
    <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
      Explore More Memes ✨
    </h3>
    <div className="columns-2 sm:columns-3 md:columns-4 lg:columns-5 gap-4 space-y-4">
      {memes.map((meme) => (
        <motion.div
          key={meme.id}
          whileHover={{ scale: 1.03 }}
          className="overflow-hidden rounded-3xl bg-white shadow hover:shadow-lg transition"
        >
          <img src={meme.image} alt="meme" className="w-full h-auto" />
        </motion.div>
      ))}
    </div>
  </div>
);

export default ExploreMemeList;
