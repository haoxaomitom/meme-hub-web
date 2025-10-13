import React, { useState } from "react";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Github,
  Chrome,
  User,
  Check,
  X,
} from "lucide-react";

const RegisterPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeNewsletter, setAgreeNewsletter] = useState(false);

  // Password validation
  const passwordValidation = {
    minLength: formData.password.length >= 8,
    hasUpperCase: /[A-Z]/.test(formData.password),
    hasLowerCase: /[a-z]/.test(formData.password),
    hasNumber: /[0-9]/.test(formData.password),
    passwordsMatch:
      formData.password === formData.confirmPassword &&
      formData.confirmPassword !== "",
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Registration submitted:", formData);
  };

  const ValidationItem = ({ isValid, text }) => (
    <div
      className={`flex items-center space-x-2 text-sm transition-colors ${
        isValid ? "text-green-600" : "text-gray-400"
      }`}
    >
      {isValid ? <Check size={16} /> : <X size={16} />}
      <span>{text}</span>
    </div>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-pink-100 flex items-center justify-center p-4 py-12">
      <div className="w-full max-w-6xl grid md:grid-cols-2 gap-8 items-center">
        {/* Left Side - Benefits & Features */}
        <div className="hidden md:flex flex-col justify-center space-y-6 p-8">
          <div className="flex items-center space-x-3">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-3xl flex items-center justify-center transform rotate-12 shadow-xl">
              <span className="text-4xl transform -rotate-12">😄</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
                MemeHub
              </h1>
              <p className="text-gray-600">Start your meme journey</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">
              Join Our Amazing Community! 🚀
            </h2>
            <p className="text-gray-600 text-lg">
              Create an account and unlock exclusive features
            </p>
          </div>

          {/* Benefits List */}
          <div className="space-y-4">
            {[
              {
                icon: "📤",
                title: "Upload Unlimited Memes",
                desc: "Share your creativity with the world",
              },
              {
                icon: "❤️",
                title: "Save Your Favorites",
                desc: "Create collections of memes you love",
              },
              {
                icon: "🏆",
                title: "Earn Badges & Rewards",
                desc: "Get recognized for your contributions",
              },
              {
                icon: "👥",
                title: "Connect with Creators",
                desc: "Follow and interact with top memers",
              },
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="text-3xl">{benefit.icon}</div>
                <div>
                  <h3 className="font-semibold text-gray-800">
                    {benefit.title}
                  </h3>
                  <p className="text-sm text-gray-600">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Side - Registration Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10 max-w-lg mx-auto w-full">
          <div className="mb-8">
            <div className="flex items-center justify-center mb-2 md:hidden">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl flex items-center justify-center transform rotate-12">
                <span className="text-3xl transform -rotate-12">😄</span>
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
              Create Your Account
            </h2>
            <p className="text-gray-600 text-center">
              Join thousands of meme enthusiasts today
            </p>
          </div>

          {/* Social Signup Buttons */}
          <div className="space-y-3 mb-6">
            <button className="w-full flex items-center justify-center space-x-3 px-4 py-3 border-2 border-gray-200 rounded-full hover:border-pink-300 hover:bg-pink-50 transition-all group">
              <Chrome
                size={20}
                className="text-gray-600 group-hover:text-pink-500"
              />
              <span className="font-medium text-gray-700">
                Sign up with Google
              </span>
            </button>
            <button className="w-full flex items-center justify-center space-x-3 px-4 py-3 border-2 border-gray-200 rounded-full hover:border-purple-300 hover:bg-purple-50 transition-all group">
              <Github
                size={20}
                className="text-gray-600 group-hover:text-purple-500"
              />
              <span className="font-medium text-gray-700">
                Sign up with Github
              </span>
            </button>
          </div>

          {/* Divider */}
          <div className="flex items-center my-6">
            <div className="flex-1 border-t border-gray-200"></div>
            <span className="px-4 text-sm text-gray-500">
              or sign up with email
            </span>
            <div className="flex-1 border-t border-gray-200"></div>
          </div>

          {/* Registration Form */}
          <div className="space-y-4">
            {/* Username Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Username
              </label>
              <div className="relative">
                <User
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Choose a unique username"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-pink-400 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-200 rounded-full focus:border-pink-400 focus:outline-none transition-all"
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-full focus:border-pink-400 focus:outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pink-500 transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Confirm Password Input */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className="w-full pl-12 pr-12 py-3 border-2 border-gray-200 rounded-full focus:border-pink-400 focus:outline-none transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-pink-500 transition-colors"
                >
                  {showConfirmPassword ? (
                    <EyeOff size={20} />
                  ) : (
                    <Eye size={20} />
                  )}
                </button>
              </div>
            </div>

            {/* Password Requirements */}
            {formData.password && (
              <div className="bg-gray-50 rounded-2xl p-4 space-y-2">
                <p className="text-xs font-medium text-gray-700 mb-2">
                  Password Requirements:
                </p>
                <ValidationItem
                  isValid={passwordValidation.minLength}
                  text="At least 8 characters"
                />
                <ValidationItem
                  isValid={passwordValidation.hasUpperCase}
                  text="One uppercase letter"
                />
                <ValidationItem
                  isValid={passwordValidation.hasLowerCase}
                  text="One lowercase letter"
                />
                <ValidationItem
                  isValid={passwordValidation.hasNumber}
                  text="One number"
                />
                {formData.confirmPassword && (
                  <ValidationItem
                    isValid={passwordValidation.passwordsMatch}
                    text="Passwords match"
                  />
                )}
              </div>
            )}

            {/* Terms Agreement */}
            <div className="space-y-3">
              <label className="flex items-start space-x-3 cursor-pointer text-sm">
                <input
                  type="checkbox"
                  checked={agreeTerms}
                  onChange={(e) => setAgreeTerms(e.target.checked)}
                  className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500 mt-0.5"
                />
                <span className="text-gray-600">
                  I agree to the{" "}
                  <button className="text-pink-500 hover:text-pink-600 font-medium">
                    Terms of Service
                  </button>{" "}
                  and{" "}
                  <button className="text-pink-500 hover:text-pink-600 font-medium">
                    Privacy Policy
                  </button>
                </span>
              </label>

              <label className="flex items-start space-x-3 cursor-pointer text-sm">
                <input
                  type="checkbox"
                  checked={agreeNewsletter}
                  onChange={(e) => setAgreeNewsletter(e.target.checked)}
                  className="w-4 h-4 text-pink-500 border-gray-300 rounded focus:ring-pink-500 mt-0.5"
                />
                <span className="text-gray-600">
                  Send me updates about new features and memes (optional)
                </span>
              </label>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleSubmit}
              disabled={!agreeTerms}
              className={`w-full py-3 rounded-full font-medium transition-all ${
                agreeTerms
                  ? "bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:shadow-lg hover:scale-105"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Create Account
            </button>
          </div>

          {/* Login Link */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button className="text-pink-500 hover:text-pink-600 font-medium">
              Login here
            </button>
          </div>

          {/* Security Note */}
          <div className="mt-6 pt-6 border-t border-gray-100 text-center text-xs text-gray-500">
            🔒 Your information is secure and will never be shared with third
            parties
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
