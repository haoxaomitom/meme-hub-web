import { useState, useRef, useEffect } from "react";
import { ArrowLeft, Search, User, LogOut, Settings } from "lucide-react";
import { useNavigate } from "react-router-dom";

const HeaderBar = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState("");
  const [openDropdown, setOpenDropdown] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-pink-50/80 border-b border-pink-100 shadow-sm transition-all">
      <div className="flex items-center justify-between px-4 sm:px-8 py-3">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-pink-600 hover:text-pink-700 transition"
        >
          <ArrowLeft size={22} />
          <span className="font-medium hidden sm:inline">Back</span>
        </button>

        <div className="hidden sm:flex flex-1 justify-center px-4">
          <div className="relative w-full max-w-md">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search memes, tags, or creators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-2 rounded-full border-2 border-pink-200 focus:border-pink-400 focus:outline-none shadow-sm transition bg-white/70 placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="flex sm:hidden items-center gap-3">
          <button
            onClick={() => setShowSearch(!showSearch)}
            className="text-pink-500 hover:text-pink-600 transition"
          >
            <Search size={22} />
          </button>

          {/* Avatar */}
          <div className="relative" ref={dropdownRef}>
            <button
              onClick={() => setOpenDropdown(!openDropdown)}
              className="w-10 h-10 rounded-full overflow-hidden border-2 border-pink-300 hover:border-pink-400 transition-all"
            >
              <img
                src="https://i.pravatar.cc/100?img=5"
                alt="User Avatar"
                className="w-full h-full object-cover"
              />
            </button>

            {openDropdown && (
              <div className="absolute right-0 mt-3 w-44 bg-white rounded-xl shadow-lg border border-pink-100 overflow-hidden animate-fadeIn">
                <ul className="text-sm text-gray-700">
                  <li
                    onClick={() => navigate("/profile")}
                    className="px-4 py-2 hover:bg-pink-50 flex items-center gap-2 cursor-pointer"
                  >
                    <User size={16} className="text-pink-500" /> Profile
                  </li>
                  <li className="px-4 py-2 hover:bg-pink-50 flex items-center gap-2 cursor-pointer">
                    <Settings size={16} className="text-pink-500" /> Settings
                  </li>
                  <li className="px-4 py-2 hover:bg-pink-50 flex items-center gap-2 cursor-pointer text-red-500">
                    <LogOut size={16} /> Logout
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Avatar + Dropdown (Desktop) */}
        <div className="hidden sm:flex relative" ref={dropdownRef}>
          <button
            onClick={() => setOpenDropdown(!openDropdown)}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-pink-300 hover:border-pink-400 transition-all"
          >
            <img
              src="https://i.pravatar.cc/100?img=5"
              alt="User Avatar"
              className="w-full h-full object-cover"
            />
          </button>

          {!showSearch && openDropdown && (
            <div className=" absolute right-0 mt-10 w-44 bg-white rounded-xl shadow-lg border border-pink-100 overflow-hidden animate-fadeIn">
              <ul className="text-sm text-gray-700">
                <li
                  onClick={() => navigate("/profile")}
                  className="px-4 py-2 hover:bg-pink-50 flex items-center gap-2 cursor-pointer"
                >
                  <User size={16} className="text-pink-500" /> Profile
                </li>
                <li className="px-4 py-2 hover:bg-pink-50 flex items-center gap-2 cursor-pointer">
                  <Settings size={16} className="text-pink-500" /> Settings
                </li>
                <li className="px-4 py-2 hover:bg-pink-50 flex items-center gap-2 cursor-pointer text-red-500">
                  <LogOut size={16} /> Logout
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>

      {!openDropdown && showSearch && (
        <div className="px-4 pb-3 sm:hidden animate-fadeIn">
          <div className="relative w-full">
            <Search
              className="absolute left-4 top-1/2 -translate-y-1/2 text-pink-400"
              size={20}
            />
            <input
              type="text"
              placeholder="Search memes..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-2 rounded-full border-2 border-pink-200 focus:border-pink-400 focus:outline-none shadow-sm transition bg-white/90 placeholder:text-gray-400"
            />
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderBar;
