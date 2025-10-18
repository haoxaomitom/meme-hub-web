import { AlertCircle } from "lucide-react";

const InputField = ({
  label,
  value,
  onChange,
  placeholder,
  error,
  helperText,
}) => {
  return (
    <div className="mb-5">
      <label className="block text-sm font-semibold text-gray-700 mb-2">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full px-6 py-4 rounded-2xl border-2 border-pink-200 focus:border-pink-400 focus:outline-none focus:ring-4 focus:ring-pink-100 text-gray-700 placeholder-gray-400 transition-all duration-300 text-lg"
      />
      {helperText && !error && (
        <p className="text-xs text-gray-500 mt-2">{helperText}</p>
      )}
      {error && (
        <div className="flex items-center gap-2 mt-2 text-red-500 text-sm animate-shake">
          <AlertCircle className="w-4 h-4" />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default InputField;
