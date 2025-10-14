import React, { useState, useRef, useEffect } from "react";
import { Shield, Mail, ArrowLeft, RefreshCw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const OTPVerifyPage = () => {
  const navigate = useNavigate();
  
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [timer, setTimer] = useState(60);
  const [canResend, setCanResend] = useState(false);
  const inputRefs = useRef([]);

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    } else {
      setCanResend(true);
    }
  }, [timer]);

  const handleChange = (index, value) => {
    if (isNaN(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value !== "" && index < 5) {
      inputRefs.current[index + 1].focus();
    }
  };

  const handleKeyDown = (index, e) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text").slice(0, 6);
    if (!/^\d+$/.test(pastedData)) return;

    const newOtp = pastedData.split("");
    setOtp([...newOtp, ...Array(6 - newOtp.length).fill("")]);
    
    const lastIndex = Math.min(pastedData.length, 5);
    inputRefs.current[lastIndex].focus();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const otpCode = otp.join("");
    if (otpCode.length === 6) {
      console.log("OTP Submitted:", otpCode);
      navigate("/");
    }
  };

  const handleResend = () => {
    if (canResend) {
      setTimer(60);
      setCanResend(false);
      setOtp(["", "", "", "", "", ""]);
      inputRefs.current[0].focus();
    }
  };

  const goBack = () => {
    navigate("/auth/login");
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
              <p className="text-gray-600">Secure verification</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-800">
              Almost There! 🔐
            </h2>
            <p className="text-gray-600 text-lg">
              We've sent a verification code to your email to ensure your
              account security.
            </p>
          </div>

          <div className="bg-white rounded-2xl p-6 shadow-md space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-pink-500 font-bold">1</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Check your email</h3>
                <p className="text-sm text-gray-600">
                  We sent a 6-digit code to your inbox
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-purple-500 font-bold">2</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Enter the code</h3>
                <p className="text-sm text-gray-600">
                  Input all 6 digits to verify
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0">
                <span className="text-pink-500 font-bold">3</span>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">Get verified</h3>
                <p className="text-sm text-gray-600">
                  Start creating and sharing memes!
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-pink-500 to-purple-600 rounded-2xl p-6 text-white shadow-lg">
            <div className="flex items-center space-x-3 mb-2">
              <Shield size={24} />
              <h3 className="font-bold text-lg">Protected & Secure</h3>
            </div>
            <p className="text-sm text-pink-100">
              Your data is encrypted and protected with industry-standard
              security measures.
            </p>
          </div>
        </div>

        {/* Right Side - OTP Form */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-10">
          <button
            onClick={goBack}
            className="flex items-center space-x-2 text-gray-600 hover:text-pink-500 mb-6 transition-colors"
          >
            <ArrowLeft size={20} />
            <span className="font-medium">Back</span>
          </button>

          <div className="mb-8">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-600 rounded-full flex items-center justify-center shadow-lg">
                <Mail size={32} className="text-white" />
              </div>
            </div>
            <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">
              Verify Your Email
            </h2>
            <p className="text-gray-600 text-center">
              Enter the 6-digit code we sent to
            </p>
            <p className="text-pink-500 font-medium text-center">
              your****@email.com
            </p>
          </div>

          {/* OTP Input */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex justify-center gap-2 md:gap-3">
              {otp.map((digit, index) => (
                <input
                  key={index}
                  ref={(el) => (inputRefs.current[index] = el)}
                  type="text"
                  maxLength="1"
                  value={digit}
                  onChange={(e) => handleChange(index, e.target.value)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onPaste={handlePaste}
                  className="w-12 h-14 md:w-14 md:h-16 text-center text-2xl font-bold border-2 border-gray-200 rounded-xl focus:border-pink-400 focus:outline-none transition-all"
                />
              ))}
            </div>

            {/* Timer & Resend */}
            <div className="text-center">
              {!canResend ? (
                <p className="text-gray-600 text-sm">
                  Resend code in{" "}
                  <span className="font-bold text-pink-500">
                    {Math.floor(timer / 60)}:{(timer % 60).toString().padStart(2, "0")}
                  </span>
                </p>
              ) : (
                <button
                  type="button"
                  onClick={handleResend}
                  className="text-pink-500 hover:text-pink-600 font-medium text-sm flex items-center justify-center space-x-2 mx-auto"
                >
                  <RefreshCw size={16} />
                  <span>Resend Code</span>
                </button>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={otp.join("").length !== 6}
              className="w-full bg-gradient-to-r from-pink-500 to-pink-600 text-white py-3 rounded-full font-medium hover:shadow-lg hover:scale-105 transition-all disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              Verify & Continue
            </button>
          </form>

          {/* Help Text */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Didn't receive the code?{" "}
            <button className="text-pink-500 hover:text-pink-600 font-medium">
              Check spam folder
            </button>
          </div>

          {/* Additional Info */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="bg-pink-50 rounded-xl p-4 text-center">
              <p className="text-xs text-gray-600">
                💡 <span className="font-semibold">Tip:</span> The code expires
                in 10 minutes. Make sure to verify soon!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPVerifyPage;