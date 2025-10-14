import { motion } from "framer-motion";
import { X } from "lucide-react";

const EditProfileModal = ({ closeModal }) => (
  <motion.div
    className="fixed inset-0 bg-black/40 flex items-center justify-center z-[100] p-4"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
  >
    <motion.div
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.9, opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="bg-white rounded-3xl shadow-2xl w-full max-w-md relative max-h-[80vh] overflow-y-auto"
    >
      <button
        onClick={closeModal}
        className="absolute top-3 right-3 text-gray-400 hover:text-pink-500 transition"
      >
        <X size={22} />
      </button>

      {/* Nội dung modal */}
      <div className="p-8 space-y-4">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-800">
          Edit Profile 🌸
        </h2>

        <div className="text-center">
          <img
            src="https://i.pravatar.cc/150?img=8"
            alt="avatar"
            className="w-24 h-24 mx-auto rounded-full border-4 border-pink-200 shadow-md mb-3"
          />
          <button className="text-sm text-pink-500 font-medium hover:underline">
            Change Photo
          </button>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <input
            type="text"
            defaultValue="Yuki Sakura"
            className="w-full border-2 border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:border-pink-400"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Bio
          </label>
          <textarea
            defaultValue="Lover of memes and laughter 🌸✨"
            className="w-full border-2 border-gray-200 rounded-2xl px-4 py-2 focus:outline-none focus:border-pink-400"
            rows={3}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Country
          </label>
          <input
            type="text"
            defaultValue="Japan 🇯🇵"
            className="w-full border-2 border-gray-200 rounded-full px-4 py-2 focus:outline-none focus:border-pink-400"
          />
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <button
            onClick={closeModal}
            className="px-5 py-2 rounded-full border border-gray-300 text-gray-600 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={closeModal}
            className="px-6 py-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500 text-white font-medium hover:shadow-lg transition-all"
          >
            Save ✨
          </button>
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default EditProfileModal;
