import React, { useState } from "react";
import { Upload, User, Menu, X } from "lucide-react";
import Button from "./Button";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center transform rotate-12">
              <span className="text-2xl transform -rotate-12">😄</span>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-pink-600 bg-clip-text text-transparent">
              MemeHub
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              onClick={() => navigate("/")}
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => navigate("/trending")}
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium cursor-pointer"
            >
              Trending
            </a>
            <a
              onClick={() => navigate("/discover")}
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium cursor-pointer"
            >
              Discover
            </a>
            <a
              href="#"
              className="text-gray-700 hover:text-pink-500 transition-colors font-medium cursor-pointer"
            >
              Top Contributors
            </a>
            <Button
              title={"Upload"}
              icon={<Upload size={18} />}
              onClick={() => navigate("/upload")}
            />
            <button
              onClick={() => navigate("/auth")}
              className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors"
            >
              <User size={20} className="text-pink-600" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3">
            <a
              onClick={() => navigate("/")}
              href="#"
              className="block text-gray-700 hover:text-pink-500 transition-colors font-medium cursor-pointer"
            >
              Home
            </a>
            <a
              onClick={() => navigate("/trending")}
              href="#"
              className="block text-gray-700 hover:text-pink-500 transition-colors font-medium cursor-pointer"
            >
              Trending
            </a>
            <a
              onClick={() => navigate("/discover")}
              href="#"
              className="block text-gray-700 hover:text-pink-500 transition-colors font-medium cursor-pointer"
            >
              Discover
            </a>
            <a
              href="#"
              className="block text-gray-700 hover:text-pink-500 transition-colors font-medium cursor-pointer"
            >
              Top Contributors
            </a>
            <button
              onClick={() => navigate("/upload")}
              className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white px-6 py-2 rounded-full"
            >
              Upload Meme
            </button>
            <button
              onClick={() => navigate("/auth")}
              className="w-full bg-pink-100 text-pink-600 px-6 py-2 rounded-full flex items-center justify-center hover:bg-pink-200 transition-colors"
            >
              <User size={20} />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;