import { Facebook, Instagram, Twitter, Github, Music2 } from "lucide-react";
import { motion } from "framer-motion";

const ProfileHeader = ({ openModal }) => {
  const stats = [
    { label: "Posts", value: "134" },
    { label: "Followers", value: "12.4K" },
    { label: "Following", value: "312" },
  ];

  const socials = [
    {
      name: "Facebook",
      icon: <Facebook size={20} />,
      url: "https://facebook.com",
    },
    {
      name: "Instagram",
      icon: <Instagram size={20} />,
      url: "https://instagram.com",
    },
    {
      name: "Twitter",
      icon: <Twitter size={20} />,
      url: "https://twitter.com",
    },
    { name: "GitHub", icon: <Github size={20} />, url: "https://github.com" },
    { name: "TikTok", icon: <Music2 size={20} />, url: "https://tiktok.com" },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 relative overflow-hidden"
    >
      <motion.div
        className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-pink-200 to-purple-200 rounded-full blur-3xl opacity-40"
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ repeat: Infinity, duration: 5 }}
      />

      {/* Avatar */}
      <motion.img
        src="https://i.pravatar.cc/150?img=8"
        alt="avatar"
        className="w-32 h-32 mx-auto rounded-full border-4 border-white shadow-lg mb-4 object-cover"
        whileHover={{ scale: 1.05 }}
      />

      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Yuki Sakura 🌸
      </h2>
      <p className="text-gray-500 mb-6 text-center">Meme Creator · Japan 🇯🇵</p>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {stats.map((stat) => (
          <motion.div
            key={stat.label}
            whileHover={{ scale: 1.05 }}
            className="bg-gradient-to-br from-pink-100 to-purple-100 rounded-2xl py-3 px-6 shadow-md"
          >
            <div className="text-lg font-bold text-pink-600">{stat.value}</div>
            <div className="text-sm text-gray-600">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Socials */}
      <motion.div
        className="flex justify-center items-center gap-4 mb-8 flex-wrap"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {socials.map((s, i) => (
          <motion.a
            key={i}
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.15, rotate: 5 }}
            whileTap={{ scale: 0.95 }}
            className="text-pink-600 bg-gradient-to-br from-pink-50 to-purple-50 shadow-md rounded-full w-12 h-12 flex items-center justify-center cursor-pointer hover:shadow-lg transition-all hover:text-purple-600"
            title={s.name}
          >
            {s.icon}
          </motion.a>
        ))}
      </motion.div>

      <div className="flex justify-center gap-4">
        <motion.button
          onClick={openModal}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
        >
          Edit Profile ✨
        </motion.button>
        <motion.button
          onClick={() => alert("Profile Shared!")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-pink-500 to-purple-500 text-white px-6 py-2 rounded-full font-medium shadow-lg hover:shadow-xl transition-all"
        >
          Shared My Profile ✨
        </motion.button>
      </div>
    </motion.section>
  );
};
export default ProfileHeader;
