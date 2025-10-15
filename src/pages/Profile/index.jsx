import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Eye,
  Heart,
  TrendingUp,
  Edit2,
  Share2,
  Instagram,
  Twitter,
  Facebook,
  MessageCircle,
  Users,
  Image,
  ThumbsUp,
  Clock,
  ChevronLeft,
  ChevronRight,
  Sparkles,
  Search,
} from "lucide-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const userProfile = {
    name: "Sarah Johnson",
    username: "@sarahmemes",
    avatar: "https://picsum.photos/200/200?random=user",
    coverImage: "https://picsum.photos/1200/400?random=cover",
    bio: "Spreading joy through memes 🌸 | Comedy enthusiast 💕 | Making the internet laugh one meme at a time ✨",
    followers: 12500,
    following: 342,
    totalMemes: 156,
    totalLikes: 45800,
    socialLinks: {
      instagram: "https://instagram.com/sarahmemes",
      twitter: "https://twitter.com/sarahmemes",
      facebook: "https://facebook.com/sarahmemes",
    },
  };

  const memes = [
    {
      id: 1,
      title: "When Monday hits different",
      image: "https://picsum.photos/400/400?random=1",
      views: "2.5K",
      likes: "1.2K",
      author: "Sarah J.",
      authorAvatar: "https://picsum.photos/200/200?random=user",
      isTrending: true,
    },
    {
      id: 2,
      title: "Coffee before talkie",
      image: "https://picsum.photos/400/400?random=2",
      views: "3.1K",
      likes: "1.8K",
      author: "Sarah J.",
      authorAvatar: "https://picsum.photos/200/200?random=user",
      isTrending: true,
    },
    {
      id: 3,
      title: "Weekend mood activated",
      image: "https://picsum.photos/400/400?random=3",
      views: "1.9K",
      likes: "950",
      author: "Sarah J.",
      authorAvatar: "https://picsum.photos/200/200?random=user",
      isTrending: false,
    },
    {
      id: 4,
      title: "Me pretending to work",
      image: "https://picsum.photos/400/400?random=4",
      views: "4.2K",
      likes: "2.3K",
      author: "Sarah J.",
      authorAvatar: "https://picsum.photos/200/200?random=user",
      isTrending: true,
    },
    {
      id: 5,
      title: "Cat logic explained",
      image: "https://picsum.photos/400/400?random=5",
      views: "2.8K",
      likes: "1.5K",
      author: "Sarah J.",
      authorAvatar: "https://picsum.photos/200/200?random=user",
      isTrending: false,
    },
    {
      id: 6,
      title: "Life as a millennial",
      image: "https://picsum.photos/400/400?random=6",
      views: "3.5K",
      likes: "1.9K",
      author: "Sarah J.",
      authorAvatar: "https://picsum.photos/200/200?random=user",
      isTrending: false,
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 min-h-screen text-gray-800 overflow-hidden">
      <Navbar/>
      <FloatingEmojis />

      <main className="pt-8 pb-20 max-w-6xl mx-auto px-4 md:px-8">
        {/* Cover Image */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative h-64 md:h-80 rounded-3xl overflow-hidden shadow-xl mb-8"
        >
          <img
            src={userProfile.coverImage}
            alt="Cover"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </motion.div>

        {/* Profile Info Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative -mt-24 mb-8"
        >
          <div className="bg-white rounded-3xl shadow-xl p-6 md:p-8">
            <div className="flex flex-col md:flex-row items-start md:items-end gap-6">
              {/* Avatar */}
              <div className="relative">
                <div className="w-32 h-32 md:w-40 md:h-40 rounded-full border-6 border-white shadow-2xl overflow-hidden">
                  <img
                    src={userProfile.avatar}
                    alt={userProfile.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute bottom-2 right-2 w-6 h-6 bg-green-500 rounded-full border-4 border-white"></div>
              </div>

              {/* Name and Bio */}
              <div className="flex-1">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-1">
                      {userProfile.name}
                    </h1>
                    <p className="text-lg text-gray-500">
                      {userProfile.username}
                    </p>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={() => setIsModalOpen(true)}
                      className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <Edit2 size={18} />
                      <span>Edit Profile</span>
                    </button>
                    <button
                      onClick={() => setIsShareOpen(true)}
                      className="flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                    >
                      <Share2 size={18} />
                      <span>Share</span>
                    </button>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  {userProfile.bio}
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <StatCard
                    icon={<Users size={24} />}
                    label="Followers"
                    value={userProfile.followers.toLocaleString()}
                  />
                  <StatCard
                    icon={<Users size={24} />}
                    label="Following"
                    value={userProfile.following.toLocaleString()}
                  />
                  <StatCard
                    icon={<Image size={24} />}
                    label="Memes"
                    value={userProfile.totalMemes.toLocaleString()}
                  />
                  <StatCard
                    icon={<Heart size={24} />}
                    label="Total Likes"
                    value={userProfile.totalLikes.toLocaleString()}
                  />
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  <a
                    href={userProfile.socialLinks.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 text-white rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                  >
                    <Instagram size={20} />
                  </a>
                  <a
                    href={userProfile.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-blue-400 text-white rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                  >
                    <Twitter size={20} />
                  </a>
                  <a
                    href={userProfile.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-12 h-12 bg-blue-600 text-white rounded-full hover:scale-110 transition-transform duration-300 shadow-lg"
                  >
                    <Facebook size={20} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Memes Gallery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 flex items-center gap-3">
            <Image size={28} className="text-pink-500" />
            My Memes
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {memes.map((meme) => (
              <MemeCard key={meme.id} meme={meme} onClick={() => {}} />
            ))}
          </div>
        </motion.div>

        {/* Pagination */}
        <Pagination totalPages={12} currentPage={1} />
      </main>

      {/* Modals */}
      <AnimatePresence>
        {isModalOpen && (
          <EditProfileModal
            closeModal={() => setIsModalOpen(false)}
            userProfile={userProfile}
          />
        )}
        {isShareOpen && (
          <ShareModal
            closeModal={() => setIsShareOpen(false)}
            userProfile={userProfile}
          />
        )}
      </AnimatePresence>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const StatCard = ({ icon, label, value }) => (
  <div className="bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl p-4 text-center hover:shadow-lg transition-all duration-300 hover:scale-105">
    <div className="flex justify-center mb-2 text-pink-500">{icon}</div>
    <div className="text-2xl font-bold text-gray-800 mb-1">{value}</div>
    <div className="text-sm text-gray-600">{label}</div>
  </div>
);

const FloatingEmojis = () => (
  <>
    <motion.span
      className="absolute top-10 left-12 text-3xl"
      animate={{ y: [0, -15, 0] }}
      transition={{ repeat: Infinity, duration: 6 }}
    >
      🌸
    </motion.span>
    <motion.span
      className="absolute top-24 right-20 text-2xl"
      animate={{ y: [0, -20, 0] }}
      transition={{ repeat: Infinity, duration: 5 }}
    >
      💖
    </motion.span>
    <motion.span
      className="absolute bottom-20 left-1/4 text-xl"
      animate={{ y: [0, -10, 0] }}
      transition={{ repeat: Infinity, duration: 7 }}
    >
      ✨
    </motion.span>
  </>
);

const MemeCard = ({ meme, onClick }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      onClick={onClick}
      className="relative overflow-hidden rounded-2xl group cursor-pointer aspect-square bg-gray-100 shadow-lg hover:shadow-2xl"
    >
      <img
        src={meme.image}
        alt={meme.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-5 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <h3 className="text-white font-bold text-base mb-3 line-clamp-2">
            {meme.title}
          </h3>
          <div className="flex items-center justify-between text-white/90 text-sm">
            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-1">
                <Eye size={16} />
                <span>{meme.views}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Heart size={16} />
                <span>{meme.likes}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {meme.isTrending && (
        <div className="absolute top-3 right-3 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center space-x-1 shadow-lg">
          <TrendingUp size={14} />
          <span>Hot</span>
        </div>
      )}
    </motion.div>
  );
};

// Pagination Component
const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const getPageNumbers = () => {
    const pages = [];
    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage < maxVisible - 1) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }

    return { pages, startPage, endPage };
  };

  const { pages, startPage, endPage } = getPageNumbers();

  return (
    <div className="flex items-center justify-center space-x-2 mt-12">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className={`p-2 rounded-xl transition-all ${
          currentPage === 1
            ? "text-gray-300 cursor-not-allowed"
            : "text-gray-700 hover:bg-pink-100 hover:text-pink-500"
        }`}
      >
        <ChevronLeft size={20} />
      </button>

      {startPage > 1 && (
        <>
          <button
            onClick={() => onPageChange(1)}
            className="w-10 h-10 rounded-xl hover:bg-pink-100 hover:text-pink-500 transition-all font-medium text-gray-700"
          >
            1
          </button>
          {startPage > 2 && <span className="text-gray-400 px-1">...</span>}
        </>
      )}

      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`w-10 h-10 rounded-xl font-medium transition-all ${
            currentPage === page
              ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-lg"
              : "text-gray-700 hover:bg-pink-100 hover:text-pink-500"
          }`}
        >
          {page}
        </button>
      ))}

      {endPage < totalPages && (
        <>
          {endPage < totalPages - 1 && (
            <span className="text-gray-400 px-1">...</span>
          )}
          <button
            onClick={() => onPageChange(totalPages)}
            className="w-10 h-10 rounded-xl hover:bg-pink-100 hover:text-pink-500 transition-all font-medium text-gray-700"
          >
            {totalPages}
          </button>
        </>
      )}

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className={`p-2 rounded-xl transition-all ${
          currentPage === totalPages
            ? "text-gray-300 cursor-not-allowed"
            : "text-gray-700 hover:bg-pink-100 hover:text-pink-500"
        }`}
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

const EditProfileModal = ({ closeModal, userProfile }) => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
    onClick={closeModal}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8"
      onClick={(e) => e.stopPropagation()}
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Edit Profile</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Name
          </label>
          <input
            type="text"
            defaultValue={userProfile.name}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition-colors"
          />
        </div>
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Bio
          </label>
          <textarea
            defaultValue={userProfile.bio}
            rows={4}
            className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-pink-500 focus:outline-none transition-colors resize-none"
          />
        </div>
        <div className="flex gap-3 pt-4">
          <button
            onClick={closeModal}
            className="flex-1 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
          >
            Save Changes
          </button>
          <button
            onClick={closeModal}
            className="flex-1 px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300"
          >
            Cancel
          </button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

const ShareModal = ({ closeModal, userProfile }) => {
  const shareUrl = `https://memesite.com/${userProfile.username}`;

  const copyToClipboard = () => {
    navigator.clipboard.writeText(shareUrl);
    alert("Link copied to clipboard!");
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={closeModal}
    >
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        className="bg-white rounded-3xl shadow-2xl max-w-md w-full p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Share Profile</h2>
        <p className="text-gray-600 mb-6">
          Share {userProfile.name}'s profile with your friends!
        </p>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <button className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="w-14 h-14 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center text-white">
              <Instagram size={24} />
            </div>
            <span className="text-xs font-semibold text-gray-700">
              Instagram
            </span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="w-14 h-14 bg-blue-400 rounded-full flex items-center justify-center text-white">
              <Twitter size={24} />
            </div>
            <span className="text-xs font-semibold text-gray-700">Twitter</span>
          </button>
          <button className="flex flex-col items-center gap-2 p-4 rounded-xl hover:bg-gray-50 transition-colors">
            <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center text-white">
              <Facebook size={24} />
            </div>
            <span className="text-xs font-semibold text-gray-700">
              Facebook
            </span>
          </button>
        </div>

        <div className="bg-gray-50 rounded-xl p-4 mb-4">
          <p className="text-sm text-gray-600 mb-2 font-semibold">
            Profile Link
          </p>
          <div className="flex gap-2">
            <input
              type="text"
              value={shareUrl}
              readOnly
              className="flex-1 px-4 py-2 bg-white rounded-lg border border-gray-300 text-sm"
            />
            <button
              onClick={copyToClipboard}
              className="px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
            >
              Copy
            </button>
          </div>
        </div>

        <button
          onClick={closeModal}
          className="w-full px-6 py-3 bg-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-300 transition-all duration-300"
        >
          Close
        </button>
      </motion.div>
    </motion.div>
  );
};

export default ProfilePage;
