import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import HeaderBar from "../../components/HeaderBar";

const UploadMemePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [title, setTitle] = useState("");
  const [tags, setTags] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);

  // Fake memes
  const memes = Array.from({ length: 27 }, (_, i) => ({
    id: i,
    title: `Funny Meme #${i + 1}`,
    image: `https://picsum.photos/400/400?random=${i + 1}`,
  }));

  const [currentPage, setCurrentPage] = useState(1);
  const memesPerPage = 6;
  const totalPages = Math.ceil(memes.length / memesPerPage);
  const startIndex = (currentPage - 1) * memesPerPage;
  const currentMemes = memes.slice(startIndex, startIndex + memesPerPage);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!selectedFile || !title.trim()) {
      alert("Please fill all fields and select an image 🩷");
      return;
    }
    setShowSuccess(true);
    setTimeout(() => setShowSuccess(false), 2000);
  };

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) setCurrentPage(page);
  };

  return (
    <div className="min-h-screen bg-pink-50 text-gray-800">
      <HeaderBar />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="pt-24 pb-16 px-3 sm:px-6 lg:px-10 flex flex-col items-center"
      >
        {/* Upload form + Preview */}
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 mb-10">
          <div className="lg:col-span-6 bg-white p-5 sm:p-6 rounded-3xl shadow-md border border-pink-100">
            <motion.form
              onSubmit={handleSubmit}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col gap-5"
            >
              <div>
                <label className="block text-sm font-medium text-pink-600 mb-2">
                  Meme Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Enter a funny meme title..."
                  className="w-full p-3 rounded-2xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-pink-600 mb-2">
                  Tags (comma separated)
                </label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="e.g. cat, monday, coffee"
                  className="w-full p-3 rounded-2xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none transition"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-pink-600 mb-2">
                  Upload Image
                </label>
                <div className="border-2 border-dashed border-pink-300 rounded-2xl p-5 flex flex-col items-center justify-center text-center hover:bg-pink-50 transition">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="hidden"
                    id="meme-upload"
                  />
                  <label
                    htmlFor="meme-upload"
                    className="cursor-pointer text-pink-600 hover:text-pink-700 font-medium"
                  >
                    {selectedFile ? "Change Image" : "Choose File"}
                  </label>
                  <p className="text-sm text-gray-500 mt-2">
                    PNG, JPG, or GIF — max 5MB
                  </p>
                </div>
              </div>

              <button
                type="submit"
                className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-5 rounded-2xl shadow-md transition"
              >
                Upload Meme
              </button>
            </motion.form>
          </div>

          {/* Preview */}
          <div className="lg:col-span-6 bg-white p-5 sm:p-6 rounded-3xl shadow-md border border-pink-100 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="w-full flex flex-col items-center justify-center"
            >
              {previewUrl ? (
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="w-[90%] sm:w-[80%] max-w-md rounded-3xl shadow-lg object-cover"
                />
              ) : (
                <p className="text-gray-400 italic">No image selected yet</p>
              )}
            </motion.div>
          </div>
        </div>

        <div className="w-full max-w-6xl">
          <h2 className="text-lg font-semibold text-pink-600 mb-4 text-center sm:text-left">
            Your Memes
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
            {currentMemes.map((meme) => (
              <motion.div
                key={meme.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-3xl shadow-md border border-pink-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition"
              >
                <img
                  src={meme.image}
                  alt={meme.title}
                  className="w-full h-40 sm:h-56 object-cover"
                />
                <div className="p-3 sm:p-4 text-center">
                  <p className="font-medium text-gray-700 text-sm sm:text-base">
                    {meme.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center mt-8 flex-wrap gap-2 sm:gap-3">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-4 py-2 rounded-xl text-sm font-medium border transition ${
                currentPage === 1
                  ? "text-gray-400 border-gray-200 cursor-not-allowed"
                  : "text-pink-600 border-pink-200 hover:bg-pink-100"
              }`}
            >
              Prev
            </button>

            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded-xl text-sm font-medium border transition ${
                  currentPage === i + 1
                    ? "bg-pink-500 text-white border-pink-500"
                    : "text-pink-600 border-pink-200 hover:bg-pink-100"
                }`}
              >
                {i + 1}
              </button>
            ))}

            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-4 py-2 rounded-xl text-sm font-medium border transition ${
                currentPage === totalPages
                  ? "text-gray-400 border-gray-200 cursor-not-allowed"
                  : "text-pink-600 border-pink-200 hover:bg-pink-100"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </motion.div>

      {/* toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-6 right-1/2 translate-x-1/2 sm:right-6 sm:translate-x-0 bg-white border border-pink-200 shadow-xl rounded-2xl px-6 py-4 flex items-center gap-3 text-pink-600"
          >
            <CheckCircle size={28} />
            <span className="font-medium">Meme uploaded successfully!</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default UploadMemePage;
