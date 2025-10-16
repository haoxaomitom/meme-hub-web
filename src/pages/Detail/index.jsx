import { motion } from "framer-motion";
import {
  Heart,
  Share2,
  Download,
  Eye,
  ArrowLeft,
  Image,
  Smile,
  MoreVertical,
  MessageCircle,
} from "lucide-react";
import Button from "../../components/Button";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { useState } from "react";

const MemeDetailPage = () => {
  const [commentText, setCommentText] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");
  const [showReplies, setShowReplies] = useState({});
  const [loadMoreReplies, setLoadMoreReplies] = useState({});

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
      replies: [
        {
          id: 11,
          user: {
            name: "AliceWonder",
            avatar: "https://i.pravatar.cc/100?img=10",
          },
          text: "I know right! Every Monday feels the same 😅",
          timestamp: "1 hour ago",
          likes: 5,
          replies: [
            {
              id: 111,
              user: {
                name: "BobBuilder",
                avatar: "https://i.pravatar.cc/100?img=11",
              },
              text: "Mondays are the worst!",
              timestamp: "30 minutes ago",
              likes: 2,
              replies: [],
            },
          ],
        },
        {
          id: 12,
          user: {
            name: "CharlieChap",
            avatar: "https://i.pravatar.cc/100?img=12",
          },
          text: "Agreed! 💯",
          timestamp: "45 minutes ago",
          likes: 3,
          replies: [],
        },
      ],
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
      replies: [],
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
      replies: [],
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
      replies: [],
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
      replies: [],
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

  const handleSubmitReply = (parentId, level, parentPath = []) => {
    if (!replyText.trim()) return;

    const newReply = {
      id: Date.now(),
      user: {
        name: "CurrentUser",
        avatar: "https://i.pravatar.cc/100?img=7",
      },
      text: replyText.trim(),
      timestamp: "Just now",
      likes: 0,
      replies: [],
    };

    const addReply = (comments, path, index = 0) => {
      return comments.map((comment) => {
        if (index === path.length && comment.id === parentId) {
          return {
            ...comment,
            replies: [newReply, ...comment.replies],
          };
        } else if (index < path.length && comment.id === path[index]) {
          return {
            ...comment,
            replies: addReply(comment.replies, path, index + 1),
          };
        }
        return comment;
      });
    };

    setComments(addReply(comments, parentPath));
    setReplyText("");
    setReplyingTo(null);
  };

  const toggleReplies = (commentId) => {
    setShowReplies((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
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

  const handleLoadMoreReplies = (commentId) => {
    setLoadMoreReplies((prev) => ({
      ...prev,
      [commentId]: false,
    }));
  };

  const renderComment = (comment, level = 0, parentPath = []) => {
    const currentPath = [...parentPath, comment.id];
    const hasReplies = comment.replies && comment.replies.length > 0;
    const isReplyingToThis = replyingTo === comment.id;
    const canReply = level < 3;
    const showAllReplies = !loadMoreReplies[comment.id];
    const displayedReplies = showAllReplies
      ? comment.replies
      : comment.replies?.slice(0, 2) || [];
    const hasMoreReplies =
      comment.replies && comment.replies.length > 2 && !showAllReplies;

    return (
      <motion.div
        key={comment.id}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className={`flex items-start gap-3 ${
          level > 0
            ? "ml-8 md:ml-12 mt-4"
            : "pb-6 border-b border-pink-100 last:border-0"
        }`}
      >
        <img
          src={comment.user.avatar}
          alt={comment.user.name}
          className="w-10 h-10 rounded-full border-2 border-pink-200 flex-shrink-0"
        />

        <div className="flex-1 min-w-0">
          <div className="bg-gray-50 rounded-2xl p-3 md:p-4">
            <div className="flex items-center justify-between mb-2">
              <div>
                <h4 className="font-semibold text-gray-800 text-sm md:text-base">
                  {comment.user.name}
                </h4>
                <p className="text-xs text-gray-500">{comment.timestamp}</p>
              </div>
              <button className="text-gray-400 hover:text-gray-600 transition">
                <MoreVertical size={18} />
              </button>
            </div>

            {comment.text && (
              <p className="text-gray-700 mb-2 text-sm md:text-base break-words">
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
          </div>

          <div className="flex items-center gap-4 mt-2 ml-2">
            <button className="flex items-center gap-1 text-gray-600 hover:text-pink-500 transition text-sm">
              <Heart size={16} />
              <span>{comment.likes}</span>
            </button>
            {canReply && (
              <button
                onClick={() => setReplyingTo(comment.id)}
                className="text-gray-600 hover:text-pink-500 transition text-sm font-medium"
              >
                Reply
              </button>
            )}
            {hasReplies && (
              <button
                onClick={() => toggleReplies(comment.id)}
                className="flex items-center gap-1 text-gray-600 hover:text-pink-500 transition text-sm font-medium"
              >
                <MessageCircle size={16} />
                <span>
                  {showReplies[comment.id] ? "Hide" : "View"}{" "}
                  {comment.replies.length}{" "}
                  {comment.replies.length === 1 ? "reply" : "replies"}
                </span>
              </button>
            )}
          </div>

          {/* Reply Input */}
          {isReplyingToThis && (
            <div className="mt-3 ml-2 border-2 border-pink-200 rounded-xl p-3 focus-within:border-pink-400 transition">
              <div className="flex items-start gap-2">
                <img
                  src="https://i.pravatar.cc/100?img=7"
                  alt="You"
                  className="w-8 h-8 rounded-full border-2 border-pink-300"
                />
                <div className="flex-1">
                  <textarea
                    value={replyText}
                    onChange={(e) => setReplyText(e.target.value)}
                    placeholder={`Reply to ${comment.user.name}...`}
                    className="w-full resize-none border-none outline-none text-sm"
                    rows={2}
                    autoFocus
                  />
                  <div className="flex items-center justify-end gap-2 mt-2">
                    <button
                      onClick={() => {
                        setReplyingTo(null);
                        setReplyText("");
                      }}
                      className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 transition"
                    >
                      Cancel
                    </button>
                    <Button
                      title="Reply"
                      onClick={() =>
                        handleSubmitReply(comment.id, level, parentPath)
                      }
                      disabled={!replyText.trim()}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Nested Replies */}
          {showReplies[comment.id] && hasReplies && (
            <div className="mt-4">
              {hasMoreReplies && (
                <button
                  onClick={() => handleLoadMoreReplies(comment.id)}
                  className="text-pink-600 text-sm font-medium hover:text-pink-700 transition mb-3 ml-2"
                >
                  Load more replies ({comment.replies.length - 2} more)
                </button>
              )}
              {displayedReplies.map((reply) =>
                renderComment(reply, level + 1, currentPath)
              )}
            </div>
          )}
        </div>
      </motion.div>
    );
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
                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-white rounded-full shadow-sm">
                      <Heart size={18} className="text-pink-500" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-gray-500 font-medium">Likes</p>
                      <p className="text-sm font-bold text-gray-800">
                        {meme.likes}
                      </p>
                    </div>
                  </div>

                  <div className="w-px h-8 bg-pink-200"></div>

                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-white rounded-full shadow-sm">
                      <Eye size={18} className="text-purple-500" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-gray-500 font-medium">Views</p>
                      <p className="text-sm font-bold text-gray-800">
                        {meme.views.toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <div className="w-px h-8 bg-pink-200"></div>

                  <div className="flex items-center gap-2">
                    <div className="p-2 bg-white rounded-full shadow-sm">
                      <MessageCircle size={18} className="text-blue-500" />
                    </div>
                    <div className="text-left">
                      <p className="text-xs text-gray-500 font-medium">
                        Comments
                      </p>
                      <p className="text-sm font-bold text-gray-800">
                        {comments.length}
                      </p>
                    </div>
                  </div>
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
                    <button className="flex flex-col items-center gap-2 px-4 py-3 bg-gradient-to-br from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <Heart size={20} fill="currentColor" />
                      <span className="text-xs font-semibold">Like</span>
                    </button>

                    <button className="flex flex-col items-center gap-2 px-4 py-3 bg-gradient-to-br from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <Share2 size={20} />
                      <span className="text-xs font-semibold">Share</span>
                    </button>

                    <button className="flex flex-col items-center gap-2 px-4 py-3 bg-gradient-to-br from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                      <Download size={20} />
                      <span className="text-xs font-semibold">Save</span>
                    </button>
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
                  {comments.map((comment) => renderComment(comment))}
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
