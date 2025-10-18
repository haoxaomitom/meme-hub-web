import { useState } from "react";
import SuccessModal from "./SuccessModal";
import { Sparkles, User } from "lucide-react";
import InputField from "./InputField";
import TagSuggestions from "./TagSuggestions";
import PreviewCard from "./PreviewCard";

const TagNameForm = () => {
  const [tagName, setTagName] = useState("");
  const [error, setError] = useState("");
  const [isChecking, setIsChecking] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const formattedTag = tagName
    .toLowerCase()
    .replace(/[^a-z0-9-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
  const isValid = formattedTag.length >= 3 && /^[a-z0-9-]+$/.test(formattedTag);

  const handleSubmit = () => {
    if (!isValid) {
      setError(
        "Tag name must be at least 3 characters and contain only letters, numbers, and hyphens"
      );
      return;
    }

    setIsChecking(true);
    setError("");

    // Simulate API check
    setTimeout(() => {
      const randomCheck = Math.random();
      if (randomCheck > 0.3) {
        setIsChecking(false);
        setShowSuccess(true);
      } else {
        setIsChecking(false);
        setError(
          "This tag name is already taken. Please try another one (╥﹏╥)"
        );
      }
    }, 1500);
  };

  const handleSuggestionClick = (suggestion) => {
    setTagName(suggestion);
    setError("");
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && isValid && !isChecking) {
      handleSubmit();
    }
  };

  return (
    <>
      <div className="bg-white rounded-3xl p-8 shadow-xl border-2 border-pink-100 max-w-xl mx-auto">
        <div className="bg-gradient-to-br from-pink-400 to-pink-500 rounded-2xl p-4 w-16 h-16 flex items-center justify-center mx-auto mb-6 shadow-lg">
          <User className="w-8 h-8 text-white" />
        </div>

        <h2 className="text-2xl font-bold text-gray-800 text-center mb-2">
          Choose Your Tag Name
        </h2>
        <p className="text-gray-500 text-center mb-8">
          This will be your unique identifier (◕‿◕)
        </p>

        <div onKeyPress={handleKeyPress}>
          <InputField
            label="Tag Name"
            value={tagName}
            onChange={setTagName}
            placeholder="e.g., nguyen-van-a"
            error={error}
            helperText="Special characters will be converted to hyphens automatically"
          />

          <TagSuggestions baseName={tagName} onSelect={handleSuggestionClick} />

          <PreviewCard tagName={tagName} />

          <button
            onClick={handleSubmit}
            disabled={!isValid || isChecking}
            className="w-full bg-gradient-to-r from-pink-400 to-pink-500 text-white py-4 rounded-2xl font-semibold hover:from-pink-500 hover:to-pink-600 transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isChecking ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Checking availability...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5" />
                Create My Tag
              </>
            )}
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-6">
          By creating a tag, you agree to our Terms of Service
        </p>
      </div>

      {showSuccess && (
        <SuccessModal
          tagName={formattedTag}
          onClose={() => setShowSuccess(false)}
        />
      )}
    </>
  );
};

export default TagNameForm;
