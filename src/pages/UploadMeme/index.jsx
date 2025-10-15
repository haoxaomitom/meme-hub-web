import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X, Upload, Image as ImageIcon } from "lucide-react";
import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";

const UploadMemePage = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState("");
  const [title, setTitle] = useState("");
  const [tagInput, setTagInput] = useState("");
  const [tags, setTags] = useState([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/")) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    } else {
      alert("Please select a valid image file");
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith("image/")) {
      if (file.size > 5 * 1024 * 1024) {
        alert("File size must be less than 5MB");
        return;
      }
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleTagInputChange = (e) => {
    const value = e.target.value;
    
    if (value.includes(",")) {
      const newTags = value
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag !== "");
      
      if (newTags.length > 0) {
        const lastTag = newTags[newTags.length - 1];
        const tagsToAdd = newTags.slice(0, -1);
        
        setTags((prev) => [...prev, ...tagsToAdd]);
        setTagInput(lastTag);
      } else {
        setTagInput("");
      }
    } else {
      setTagInput(value);
    }
  };

  const handleTagInputKeyDown = (e) => {
    if (e.key === "Enter" && tagInput.trim()) {
      e.preventDefault();
      setTags((prev) => [...prev, tagInput.trim()]);
      setTagInput("");
    } else if (e.key === "Backspace" && !tagInput && tags.length > 0) {
      setTags((prev) => prev.slice(0, -1));
    }
  };

  const removeTag = (indexToRemove) => {
    setTags((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedFile) {
      alert("Please select an image 🩷");
      return;
    }
    
    if (!title.trim()) {
      alert("Please enter a title 🩷");
      return;
    }

    // Add remaining tag input if exists
    if (tagInput.trim()) {
      setTags((prev) => [...prev, tagInput.trim()]);
      setTagInput("");
    }

    setShowSuccess(true);
    setTimeout(() => {
      setShowSuccess(false);
      // Reset form
      setSelectedFile(null);
      setPreviewUrl("");
      setTitle("");
      setTags([]);
      setTagInput("");
    }, 2000);
  };

  const removeImage = () => {
    setSelectedFile(null);
    setPreviewUrl("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100">
      <Navbar/>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="pt-12 pb-20 px-4 sm:px-6 lg:px-8"
      >
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 mb-3">
              Upload Your Meme
            </h2>
            <p className="text-gray-600 text-lg">
              Share your creativity with the world! 🎨✨
            </p>
          </motion.div>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl border border-pink-200 p-6 sm:p-10"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Image Upload Section */}
              <div>
                <label className="block text-lg font-semibold text-pink-600 mb-4">
                  Meme Image
                </label>
                
                {!previewUrl ? (
                  <div
                    onDrop={handleDrop}
                    onDragOver={handleDragOver}
                    onDragLeave={handleDragLeave}
                    className={`border-4 border-dashed rounded-3xl p-10 sm:p-16 flex flex-col items-center justify-center text-center transition-all ${
                      isDragging
                        ? "border-pink-500 bg-pink-50"
                        : "border-pink-300 hover:border-pink-400 hover:bg-pink-50"
                    }`}
                  >
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleFileChange}
                      className="hidden"
                      id="meme-upload"
                    />
                    <Upload className="w-16 h-16 text-pink-400 mb-4" />
                    <label
                      htmlFor="meme-upload"
                      className="cursor-pointer text-pink-600 hover:text-pink-700 font-semibold text-lg mb-2"
                    >
                      Click to upload or drag and drop
                    </label>
                    <p className="text-sm text-gray-500">
                      PNG, JPG, or GIF — max 5MB
                    </p>
                  </div>
                ) : (
                  <div className="relative">
                    <img
                      src={previewUrl}
                      alt="Preview"
                      className="w-full max-h-96 object-contain rounded-3xl shadow-lg"
                    />
                    <button
                      type="button"
                      onClick={removeImage}
                      className="absolute top-4 right-4 bg-white hover:bg-red-50 text-red-500 rounded-full p-2 shadow-lg transition"
                    >
                      <X size={24} />
                    </button>
                  </div>
                )}
              </div>

              {/* Title Input */}
              <div>
                <label className="block text-lg font-semibold text-pink-600 mb-3">
                  Meme Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Give your meme a catchy title..."
                  className="w-full p-4 text-lg rounded-2xl border-2 border-pink-200 focus:border-pink-500 focus:outline-none transition"
                />
              </div>

              {/* Tags Input */}
              <div>
                <label className="block text-lg font-semibold text-pink-600 mb-3">
                  Tags
                </label>
                <div className="border-2 border-pink-200 rounded-2xl p-3 focus-within:border-pink-500 transition">
                  <div className="flex flex-wrap gap-2 mb-2">
                    {tags.map((tag, index) => (
                      <motion.span
                        key={index}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        exit={{ scale: 0 }}
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                        <button
                          type="button"
                          onClick={() => removeTag(index)}
                          className="hover:bg-white hover:bg-opacity-20 rounded-full transition"
                        >
                          <X size={14} />
                        </button>
                      </motion.span>
                    ))}
                  </div>
                  <input
                    type="text"
                    value={tagInput}
                    onChange={handleTagInputChange}
                    onKeyDown={handleTagInputKeyDown}
                    placeholder="Type tags and press comma or Enter..."
                    className="w-full p-1 text-base focus:outline-none"
                  />
                </div>
                <p className="text-sm text-gray-500 mt-2">
                  Press comma (,) or Enter to add tags. Backspace to remove.
                </p>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-bold text-lg py-4 px-6 rounded-2xl shadow-lg transition-all"
              >
                Upload Meme 🚀
              </motion.button>
            </form>
          </motion.div>
        </div>
      </motion.div>

      {/* Success Toast */}
      <AnimatePresence>
        {showSuccess && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-8 left-1/2 transform -translate-x-1/2 bg-white border-2 border-green-400 shadow-2xl rounded-2xl px-6 py-4 flex items-center gap-3 z-50"
          >
            <CheckCircle size={32} className="text-green-500" />
            <span className="font-semibold text-gray-800 text-lg">
              Meme uploaded successfully! 🎉
            </span>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Footer Placeholder */}
        <Footer/>
    </div>
  );
};

export default UploadMemePage;