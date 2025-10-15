import React from "react";
import {
  Home,
  Search,
  RefreshCw,
  ArrowLeft,
  AlertCircle,
  Frown,
  Flame,
  Icon,
} from "lucide-react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";



// Main Error Page Component
const ErrorPage = ({ errorType = "404" }) => {
  const errorConfig = {
    404: {
      code: "404",
      title: "Page Not Found",
      description: "Oops! Looks like this meme got lost in the internet void.",
      emoji: "🤔",
      suggestions: [
        "The page you're looking for doesn't exist",
        "The URL might be misspelled",
        "The content may have been moved or deleted",
      ],
    },
    500: {
      code: "500",
      title: "Server Error",
      description: "Our servers are taking a coffee break. We'll be back soon!",
      emoji: "😵",
      suggestions: [
        "Something went wrong on our end",
        "Our team has been notified",
        "Please try again in a few moments",
      ],
    },
    403: {
      code: "403",
      title: "Access Denied",
      description: "You don't have permission to view this content.",
      emoji: "🚫",
      suggestions: [
        "This content is private or restricted",
        "You may need to log in",
        "Contact support if you believe this is an error",
      ],
    },
    network: {
      code: "😿",
      title: "Connection Lost",
      description: "Can't reach our servers. Check your internet connection.",
      emoji: "📡",
      suggestions: [
        "Check your internet connection",
        "Try disabling VPN or proxy",
        "Refresh the page to try again",
      ],
    },
  };

  const config = errorConfig[errorType] || errorConfig["404"];

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
