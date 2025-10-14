import { MoreHorizontal, X } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ActivityList = ({ activities }) => {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-3xl shadow-lg p-6 md:p-8 relative z-10"
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800">
            Recent Activity 🌸
          </h3>

          <button
            onClick={() => setShowAll(true)}
            className="text-gray-400 hover:text-pink-500 transition"
          >
            <MoreHorizontal size={22} />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 gap-4">
          {activities.slice(0, 4).map((a, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.02 }}
              className="flex items-center space-x-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-3 text-left"
            >
              <span className="text-lg">{a.icon}</span>
              <div>
                <p className="font-medium text-gray-700">{a.text}</p>
                <p className="text-xs text-gray-500">{a.time}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Modal */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            className="fixed inset-0 bg-black/40 flex items-center justify-center z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl shadow-2xl p-8 w-[90%] max-w-lg max-h-[80vh] overflow-y-auto scrollbar-hide relative"
            >
              <button
                onClick={() => setShowAll(false)}
                className="absolute top-3 right-3 text-gray-400 hover:text-pink-500"
              >
                <X size={22} />
              </button>

              <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
                All Activities 🌸
              </h2>

              <div className="space-y-3">
                {activities.map((a, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02 }}
                    className="flex items-center space-x-3 bg-gradient-to-r from-pink-50 to-purple-50 rounded-xl p-3"
                  >
                    <span className="text-lg">{a.icon}</span>
                    <div>
                      <p className="font-medium text-gray-700">{a.text}</p>
                      <p className="text-xs text-gray-500">{a.time}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ActivityList;
