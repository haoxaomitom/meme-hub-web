import { Check } from "lucide-react";

const SuccessModal = ({ tagName, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 animate-fade-in p-4">
      <div className="bg-white rounded-3xl p-8 max-w-md w-full shadow-2xl animate-scale-in">
        <div className="text-center">
          <div className="bg-gradient-to-br from-pink-400 to-pink-500 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6 shadow-lg animate-bounce">
            <Check className="w-10 h-10 text-white" />
          </div>

          <h2 className="text-3xl font-bold text-gray-800 mb-3">Awesome! 🎉</h2>
          <p className="text-gray-600 mb-6">
            Your tag has been created successfully!
          </p>

          <div className="bg-gradient-to-r from-pink-50 to-pink-100 rounded-2xl px-6 py-4 border-2 border-pink-200 mb-6">
            <p className="text-xs text-gray-500 mb-1">Your unique tag:</p>
            <div className="text-center">
              <span className="text-pink-500 font-bold text-2xl">@</span>
              <span className="text-gray-800 font-bold text-2xl">
                {tagName}
              </span>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white py-3 rounded-2xl font-semibold hover:from-pink-500 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
