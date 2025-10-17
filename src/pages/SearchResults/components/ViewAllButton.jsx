import { ArrowRight } from "lucide-react";

const ViewAllButton = ({ count, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-xl hover:from-pink-600 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
    >
      <span className="font-medium">View All {count}</span>
      <ArrowRight size={18} />
    </button>
  );
};

export default ViewAllButton;
