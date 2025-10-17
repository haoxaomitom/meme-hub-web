import { motion } from "framer-motion";
import {
  Heart,
  Share2,
  Download,
  Eye,
  Image,
  Smile,
  MessageCircle,
} from "lucide-react";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useState } from "react";
import ActionButton from "./components/ActionButton";
import StatItem from "./components/StatItem";
import CommentList from "./components/comments/CommentList";
import { COMMENTS } from "../../utils/constants";

const MemeDetailPage = () => {
  const [commentText, setCommentText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [comments, setComments] = useState(COMMENTS);

  const meme = {
    image:
      "https://i.pinimg.com/1200x/85/a6/99/85a69912405712de7ecd3762c2d860ac.jpg",
    title: "When you realize it's Monday again 😭",
    user: {
      name: "MemeLover",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
    views: 12453,
    likes: 478,
  };

  const handleImageSelect = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmitComment = () => {
    if (!commentText.trim() && !selectedImage) return;

    const newComment = {
      id: Date.now(),
      user: {
        name: "CurrentUser",
        avatar: "https://i.pravatar.cc/100?img=7",
      },
      text: commentText.trim() || undefined,
      image: selectedImage || undefined,
      timestamp: "Just now",
      likes: 0,
      replies: [],
    };

    setComments([newComment, ...comments]);
    setCommentText("");
    setSelectedImage(null);
  };

  const loadMoreComments = () => {
    const olderComments = [
      {
        id: comments.length + 1,
        user: {
          name: "OlderUser1",
          avatar: "https://i.pravatar.cc/100?img=8",
        },
        text: "This was posted yesterday and still funny!",
        timestamp: "1 day ago",
        likes: 15,
        replies: [],
      },
      {
        id: comments.length + 2,
        user: {
          name: "OlderUser2",
          avatar: "https://i.pravatar.cc/100?img=9",
        },
        text: "Classic meme material right here 👌",
        image: "https://picsum.photos/400/300?random=4",
        timestamp: "1 day ago",
        likes: 34,
        replies: [],
      },
    ];

    setComments([...comments, ...olderComments]);
    setShowLoadMore(false);
  };

  return (
    <div className="min-h-screen bg-pink-50 relative">
      <Navbar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen text-gray-800 flex flex-col items-center mt-4"
      >
        <div className="w-full max-w-7xl px-4 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 mt-6">
            {/* Meme Section */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-3xl shadow-lg overflow-hidden w-full sticky top-20"
              >
                {/* Meme Image - Full Width */}
                <div className="relative w-full bg-gradient-to-br from-pink-50 to-purple-50">
                  <img
                    src={meme.image}
                    alt={meme.title}
                    className="w-full h-auto object-contain"
                  />
                </div>

                {/* Stats Bar */}
                <div className="flex items-center justify-around px-6 py-4 bg-gradient-to-r from-pink-50 via-purple-50 to-pink-50 border-y border-pink-100">
                  <StatItem
                    icon={Heart}
                    label="Likes"
                    value={meme.likes}
                    iconClass="text-pink-500"
                  />

                  <div className="w-px h-8 bg-pink-200"></div>

                  <StatItem
                    icon={Eye}
                    label="Views"
                    value={meme.views.toLocaleString()}
                    iconClass="text-purple-500"
                  />

                  <div className="w-px h-8 bg-pink-200"></div>

                  <StatItem
                    icon={MessageCircle}
                    label="Comments"
                    value={comments.length}
                    iconClass="text-blue-500"
                  />
                </div>

                {/* Content Info */}
                <div className="p-6">
                  <h2 className="text-lg md:text-xl font-bold text-gray-800 mb-4">
                    {meme.title}
                  </h2>

                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-3">
                      <img
                        src={meme.user.avatar}
                        alt={meme.user.name}
                        className="w-12 h-12 rounded-full border-2 border-pink-200 shadow-sm"
                      />
                      <div>
                        <p className="font-semibold text-gray-800">
                          {meme.user.name}
                        </p>
                        <p className="text-xs text-gray-500">Meme Creator</p>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-3 gap-3">
                    <ActionButton
                      icon={Heart}
                      label="Like"
                      gradient="bg-gradient-to-br from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
                    />

                    <ActionButton
                      icon={Share2}
                      label="Share"
                      gradient="bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600"
                    />

                    <ActionButton
                      icon={Download}
                      label="Save"
                      gradient="bg-gradient-to-br from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600"
                    />
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Comments Section */}
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-3xl shadow-lg p-4 md:p-6"
              >
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-6">
                  Comments ({comments.length})
                </h3>

                {/* Comment Input */}
                <div className="mb-6 border-2 border-pink-200 rounded-2xl p-4 focus-within:border-pink-400 transition">
                  <div className="flex items-start gap-3">
                    <img
                      src="https://i.pravatar.cc/100?img=7"
                      alt="You"
                      className="w-10 h-10 rounded-full border-2 border-pink-300"
                    />
                    <div className="flex-1">
                      <textarea
                        value={commentText}
                        onChange={(e) => setCommentText(e.target.value)}
                        placeholder="Add a comment..."
                        className="w-full resize-none border-none outline-none text-sm md:text-base"
                        rows={3}
                      />

                      {selectedImage && (
                        <div className="relative mt-3 inline-block">
                          <img
                            src={selectedImage}
                            alt="Selected"
                            className="max-w-full h-32 md:h-40 rounded-lg object-cover"
                          />
                          <button
                            onClick={() => setSelectedImage(null)}
                            className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600 transition"
                          >
                            ×
                          </button>
                        </div>
                      )}

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center gap-2">
                          <label className="cursor-pointer text-pink-500 hover:text-pink-600 transition">
                            <Image size={20} />
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageSelect}
                              className="hidden"
                            />
                          </label>
                          <button className="text-pink-500 hover:text-pink-600 transition">
                            <Smile size={20} />
                          </button>
                        </div>

                        <Button
                          title="Post"
                          onClick={handleSubmitComment}
                          disabled={!commentText.trim() && !selectedImage}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Load More Button */}
                {showLoadMore && (
                  <button
                    onClick={loadMoreComments}
                    className="w-full py-3 mb-4 text-pink-600 font-semibold hover:bg-pink-50 rounded-xl transition"
                  >
                    Load previous comments
                  </button>
                )}

                {/* Comments List */}
                <div className="space-y-6">
                  <CommentList comments={comments} />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default MemeDetailPage;
