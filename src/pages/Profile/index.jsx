import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import EditProfileModal from "./EditProfileModal";
import ProfileHeader from "./ProfileHeader";
import ActivityList from "./ActivityList";

const ProfilePage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const activities = [
    { icon: "💬", text: "Commented on 'Meme of the Day'", time: "2 hours ago" },
    { icon: "❤️", text: "Liked 'Cat Vibes Only'", time: "4 hours ago" },
    { icon: "📤", text: "Uploaded 'Office Humor #3'", time: "1 day ago" },
    { icon: "🎉", text: "Reached 10K followers", time: "2 days ago" },
  ];

  return (
    <div className="relative bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 min-h-screen text-gray-800 overflow-hidden">
      {/* Floating Emojis */}
      <FloatingEmojis />

      {/* Navbar */}
      <div className="fixed top-0 left-0 w-full bg-white/70 backdrop-blur-md shadow-md z-50">
        <Navbar />
      </div>

      {/* Main Content */}
      <main className="pt-28 pb-20 max-w-7xl mx-auto px-4 md:px-8 flex flex-col gap-12">
        <div className="grid md:grid-cols-12 gap-6 items-start">
          <div className="md:col-span-5 order-2 md:order-1">
            <ProfileHeader openModal={() => setIsModalOpen(true)} />
          </div>

          <div className="md:col-span-7 order-1 md:order-2">
            <MemeGallery />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mt-6 relative"
        >
          <div className="absolute -top-6 left-10 w-24 h-24 bg-pink-100 rounded-full blur-3xl opacity-50"></div>
          <ActivityList activities={activities} />
        </motion.div>
      </main>

      <Footer />

      <AnimatePresence>
        {isModalOpen && (
          <EditProfileModal closeModal={() => setIsModalOpen(false)} />
        )}
      </AnimatePresence>
    </div>
  );
};

/* 🌸 Floating Emojis */
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

const MemeGallery = () => (
  <section className="grid sm:grid-cols-2 gap-6 relative">
    {Array.from({ length: 4 }).map((_, i) => (
      <motion.div
        key={i}
        whileHover={{ rotate: i % 2 === 0 ? 1.5 : -1.5, scale: 1.03 }}
        className={`bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all ${
          i % 2 === 0 ? "rotate-1" : "-rotate-1"
        }`}
      >
        <img
          src={`https://picsum.photos/400/300?random=${i + 1}`}
          alt={`meme-${i}`}
          className="w-full h-56 object-cover"
        />
        <div className="p-4 text-left">
          <h3 className="font-semibold text-gray-800 mb-1">
            Funny Meme #{i + 1}
          </h3>
          <p className="text-sm text-gray-500 line-clamp-2">
            Laugh with me! 🌸 Spreading joy through humor 💕
          </p>
        </div>
      </motion.div>
    ))}
  </section>
);

export default ProfilePage;
