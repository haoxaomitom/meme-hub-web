import React, { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Github, Chrome } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Input from "./components/Input";

const LoginPage = () => {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/");
  };

  const goToSignUp = () => {
    navigate("/auth/register");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Illustration/Branding */}
        <div className="hidden md:flex flex-col justify-center space-y-6 p-8">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-3xl flex items-center justify-center transform rotate-12 shadow-xl">
              <span className="text-4xl transform -rotate-12">😄</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                MemeHub
              </h1>
              <p className="text-gray-600">Join the fun community</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">
              Your Daily Dose of Laughter Awaits! 🎉
            </h2>
            <p className="text-gray-600 text-lg">
              Join thousands of meme creators and enthusiasts sharing laughs
              every day.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-4 shadow-md">
              <div className="text-3xl font-bold text-pink-500">50K+</div>
              <div className="text-sm text-gray-600">Active Users</div>
            </div>
            <div className="bg-white rounded-2xl p-4 shadow-md">
              <div className="text-3xl font-bold text-purple-500">1M+</div>
              <div className="text-sm text-gray-600">Memes Shared</div>
            </div>
          </div>

          <div className="flex -space-x-2">
            {[1, 2, 3, 4, 5].map((i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 border-white bg-gradient-to-br from-pink-300 to-purple-300"
              />
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-white bg-pink-500 flex items-center justify-center text-white text-xs font-bold">
              +99K
            </div>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-2 md:hidden">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center transform rotate-12">
                <span className="text-3xl transform -rotate-12">😄</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
              "Welcome Back!"
            </h2>
            <p className="text-gray-600 text-center">
              "Login to continue your meme journey"
            </p>
          </div>

          {/* Social Login Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center space-x-3 px-4 py-3 border-2 border-gray-200 rounded-full hover:border-pink-300 hover:bg-pink-50 transition-all group">
              <Chrome
                size={20}
                className="text-gray-600 group-hover:text-pink-500"
              />
              <span className="font-medium text-gray-700">
                Continue with Google
              </span>
            </button>
            <button className="w-full flex items-center justify-center space-x-3 px-4 py-3 border-2 border-gray-200 rounded-full hover:border-purple-300 hover:bg-purple-50 transition-all group">
              <Github
                size={20}
                className="text-gray-600 group-hover:text-purple-500"
              />
              <span className="font-medium text-gray-700">
                Continue with Github
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-sm text-gray-500">
              or continue with email
            </span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Login Form */}
          <div className="space-y-4">
            {/* Email Input */}
            <Input
              label="Email Address"
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              icon={Mail}
            />

            {/* Password Input */}
            <Input
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              icon={Lock}
            />

            {/* Remember & Forgot */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500"
                />
                <span className="text-gray-600">Remember me</span>
              </label>
              <button className="text-pink-500 hover:text-pink-600 font-medium">
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all"
            >
              Login
            </button>
          </div>

          {/* Toggle Login/Signup */}
          <div className="mt-6 text-center text-sm text-gray-600">
            "Don't have an account? "
            <button
              onClick={() => goToSignUp()}
              className="text-pink-500 hover:text-pink-600 font-medium"
            >
              "Sign up"
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-100 text-center text-xs text-gray-500">
            By continuing, you agree to MemeHub's Terms and confirm that you
            have read MemeHub's Privacy Policy.
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
