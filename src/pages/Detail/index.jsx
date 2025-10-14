import { motion } from "framer-motion";
import { Heart, Share2, Send, ArrowLeft, Search } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import MemeComments from "./MemeComments";
import ExploreMemeList from "./ExploreMemeList";
import { useState } from "react";

const MemeDetailPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");

  const meme = {
    image:
      "https://i.pinimg.com/1200x/85/a6/99/85a69912405712de7ecd3762c2d860ac.jpg",
    title: "When you realize it's Monday again 😭",
    user: {
      name: "MemeLover",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
  };

  const exploreMemes = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    image: `https://picsum.photos/${250 + (i % 4) * 50}/${
      280 + (i % 5) * 70
    }?random=${i}`,
  }));

  return (
    <div className="min-h-screen bg-pink-50 relative">
      <Navbar />

      <div className="fixed left-0 w-full z-50 flex items-center justify-between px-6 py-2 backdrop-blur-md ">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition"
        >
          <ArrowLeft size={20} />
          <span className="font-medium">Back</span>
        </button>

        <div className="relative w-full max-w-md bg-white rounded-full">
          <Search
            className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400"
            size={20}
          />
          <input
            type="text"
            placeholder="Search memes, tags, or creators..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-2 rounded-full border-2 border-pink-200 focus:border-pink-400 focus:outline-none shadow-sm transition"
          />
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen text-gray-800 flex flex-col items-center mt-4"
      >
        <div className="w-full max-w-7xl px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mt-6">
            <div className="lg:col-span-5 flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden w-full max-w-3xl"
              >
                <div className="relative bg-white rounded-3xl overflow-hidden">
                  <img
                    src={meme.image}
                    alt={meme.title}
                    className="w-[70%] max-w-md mx-auto object-cover rounded-2xl mt-4"
                  />

                  <div className="flex items-center justify-between px-6 py-4 bg-white">
                    <div className="flex items-center gap-6">
                      <button className="flex items-center gap-2 text-gray-800 hover:text-pink-500 transition">
                        <Heart size={22} />
                        <span className="font-semibold text-sm">478</span>
                      </button>
                      <button className="text-gray-800 hover:text-pink-500 transition">
                        <Send size={22} />
                      </button>
                      <button className="text-gray-800 hover:text-pink-500 transition">
                        <Share2 size={22} />
                      </button>
                    </div>

                    <Button title="Save" onClick={() => {}} />
                  </div>

                  <div className="p-6">
                    <h2 className="text-lg font-semibold text-gray-800 mb-2">
                      {meme.title}
                    </h2>

                    <div className="flex items-center gap-3 mt-4">
                      <img
                        src={meme.user.avatar}
                        alt={meme.user.name}
                        className="w-10 h-10 rounded-full border"
                      />
                      <span className="font-medium text-gray-700">
                        {meme.user.name}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            <div className="lg:col-span-7">
              <MemeComments />
            </div>
          </div>

          <ExploreMemeList memes={exploreMemes} />
        </div>
      </motion.div>
    </div>
  );
};

export default MemeDetailPage;
