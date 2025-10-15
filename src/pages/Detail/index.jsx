import { motion } from "framer-motion";
import { Heart, Share2, Send, ArrowLeft, Search, Image, Smile, MoreVertical } from "lucide-react";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useState } from "react";

const MemeDetailPage = () => {
  const [commentText, setCommentText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showLoadMore, setShowLoadMore] = useState(true);

  const meme = {
    image:
      "https://i.pinimg.com/1200x/85/a6/99/85a69912405712de7ecd3762c2d860ac.jpg",
    title: "When you realize it's Monday again 😭",
    user: {
      name: "MemeLover",
      avatar: "https://i.pravatar.cc/100?img=3",
    },
  };

  const [comments, setComments] = useState([
    {
      id: 1,
      user: {
        name: "JohnDoe",
        avatar: "https://i.pravatar.cc/100?img=1",
      },
      text: "This is so relatable! 😂",
      timestamp: "2 hours ago",
      likes: 24,
    },
    {
      id: 2,
      user: {
        name: "SarahSmith",
        avatar: "https://i.pravatar.cc/100?img=2",
      },
      image: "https://picsum.photos/400/300?random=1",
      timestamp: "3 hours ago",
      likes: 45,
    },
    {
      id: 3,
      user: {
        name: "MikeJones",
        avatar: "https://i.pravatar.cc/100?img=4",
      },
      text: "Every single Monday morning! Can't believe how accurate this is 🤣",
      image: "https://picsum.photos/400/300?random=2",
      timestamp: "5 hours ago",
      likes: 67,
    },
    {
      id: 4,
      user: {
        name: "EmilyBrown",
        avatar: "https://i.pravatar.cc/100?img=5",
      },
      text: "My mood exactly! Need more coffee ☕",
      timestamp: "6 hours ago",
      likes: 12,
    },
    {
      id: 5,
      user: {
        name: "DavidLee",
        avatar: "https://i.pravatar.cc/100?img=6",
      },
      image: "https://picsum.photos/400/300?random=3",
      timestamp: "8 hours ago",
      likes: 89,
    },
  ]);

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
      id: comments.length + 1,
      user: {
        name: "CurrentUser",
        avatar: "https://i.pravatar.cc/100?img=7",
      },
      text: commentText.trim() || undefined,
      image: selectedImage || undefined,
      timestamp: "Just now",
      likes: 0,
    };

    setComments([newComment, ...comments]);
    setCommentText("");
    setSelectedImage(null);
  };

  const loadMoreComments = () => {
    // Simulate loading older comments
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
                <div className="relative bg-white rounded-3xl overflow-hidden">
                  <img
                    src={meme.image}
                    alt={meme.title}
                    className="w-full max-w-md mx-auto object-cover rounded-2xl mt-4 px-4"
                  />

                  <div className="flex items-center justify-between px-4 md:px-6 py-4 bg-white">
                    <div className="flex items-center gap-4 md:gap-6">
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

                  <div className="p-4 md:p-6">
                    <h2 className="text-base md:text-lg font-semibold text-gray-800 mb-2">
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
                  {comments.map((comment) => (
                    <motion.div
                      key={comment.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 }}
                      className="flex items-start gap-3 pb-6 border-b border-pink-100 last:border-0"
                    >
                      <img
                        src={comment.user.avatar}
                        alt={comment.user.name}
                        className="w-10 h-10 rounded-full border-2 border-pink-200 flex-shrink-0"
                      />
                      
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-2">
                          <div>
                            <h4 className="font-semibold text-gray-800 text-sm md:text-base">
                              {comment.user.name}
                            </h4>
                            <p className="text-xs text-gray-500">
                              {comment.timestamp}
                            </p>
                          </div>
                          <button className="text-gray-400 hover:text-gray-600 transition">
                            <MoreVertical size={18} />
                          </button>
                        </div>

                        {comment.text && (
                          <p className="text-gray-700 mb-3 text-sm md:text-base break-words">
                            {comment.text}
                          </p>
                        )}

                        {comment.image && (
                          <div className="mb-3">
                            <img
                              src={comment.image}
                              alt="Comment"
                              className="rounded-lg max-w-full h-auto max-h-64 md:max-h-80 object-cover cursor-pointer hover:opacity-90 transition"
                            />
                          </div>
                        )}

                        <div className="flex items-center gap-4">
                          <button className="flex items-center gap-1 text-gray-600 hover:text-pink-500 transition text-sm">
                            <Heart size={16} />
                            <span>{comment.likes}</span>
                          </button>
                          <button className="text-gray-600 hover:text-pink-500 transition text-sm font-medium">
                            Reply
                          </button>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>
      <Footer/>
    </div>
  );
};

export default MemeDetailPage;