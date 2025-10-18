import { Heart } from "lucide-react";
import Header from "./components/Header";
import TagNameForm from "./components/TagNameForm";

const TagNamePage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-pink-50">
      {/* Decorative background elements */}
      <div className="fixed top-20 left-10 w-32 h-32 bg-pink-200 rounded-full opacity-20 blur-3xl animate-float"></div>
      <div className="fixed bottom-20 right-10 w-40 h-40 bg-pink-300 rounded-full opacity-20 blur-3xl animate-float-delayed"></div>
      <div className="fixed top-1/2 left-1/2 w-64 h-64 bg-pink-200 rounded-full opacity-10 blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

      <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
        <Header />
        <TagNameForm />

        {/* Footer */}
        <div className="text-center mt-12 text-gray-400 text-sm">
          Made with{" "}
          <Heart className="inline w-4 h-4 text-pink-400 fill-pink-400 mx-1" />{" "}
          by Tag Creator
        </div>
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          25% { transform: translateX(-5px); }
          75% { transform: translateX(5px); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
        
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
        
        .animate-shake {
          animation: shake 0.3s ease-out;
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-float-delayed {
          animation: float 6s ease-in-out infinite 3s;
        }
      `}</style>
    </div>
  );
};

export default TagNamePage;
