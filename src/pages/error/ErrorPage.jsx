import { AlertCircle, Frown } from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import { ERROR_CONFIG } from "../../utils/constants";

// Main Error Page Component
const ErrorPage = ({ errorType = "404" }) => {
  const config = ERROR_CONFIG[errorType] || ERROR_CONFIG["404"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 flex flex-col">
      <Navbar />

      {/* Error Content */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-4xl w-full">
          {/* Error Code and Icon */}
          <div className="text-center mb-8">
            <div className="inline-block mb-6">
              <div className="relative">
                {/* Animated circles */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-64 h-64 bg-pink-200 rounded-full opacity-20 animate-pulse"></div>
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-purple-200 rounded-full opacity-30 animate-pulse delay-75"></div>
                </div>

                {/* Error Code */}
                <div className="relative z-10 flex items-center justify-center">
                  <h1 className="text-9xl md:text-[12rem] font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    {config.code}
                  </h1>
                </div>
              </div>
            </div>

            {/* Emoji */}
            <div className="text-6xl mb-6">{config.emoji}</div>

            {/* Title */}
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              {config.title}
            </h2>

            {/* Description */}
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              {config.description}
            </p>
          </div>

          {/* Suggestions Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8 max-w-2xl mx-auto">
            <div className="flex items-center space-x-2 mb-4">
              <AlertCircle className="text-pink-500" size={24} />
              <h3 className="text-lg font-bold text-gray-900">
                What you can do:
              </h3>
            </div>
            <ul className="space-y-3">
              {config.suggestions.map((suggestion, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <div className="mt-1">
                    <div className="w-2 h-2 rounded-full bg-gradient-to-r from-pink-500 to-purple-500"></div>
                  </div>
                  <span className="text-gray-600">{suggestion}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Links */}
          <div className="mt-12 text-center">
            <p className="text-gray-600 mb-4">Or explore these pages:</p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { label: "Discover", href: "/discover" },
                { label: "Trending", href: "/trending" },
                { label: "Top Contributors", href: "/contributors" },
                { label: "Contact Support", href: "/support" },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    console.log(`Navigate to ${link.href}`);
                  }}
                  className="text-pink-600 hover:text-pink-700 font-medium hover:underline transition-all"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>

          {/* Fun Element */}
          <div className="mt-16 text-center">
            <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-2xl p-6 max-w-md mx-auto">
              <Frown className="text-pink-500 mx-auto mb-3" size={32} />
              <p className="text-gray-700 font-medium mb-2">
                Even our best memes can't fix this error
              </p>
              <p className="text-gray-600 text-sm">
                But we're working on it! 💪
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ErrorPage;
