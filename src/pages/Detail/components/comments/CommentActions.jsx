import { Heart, MessageCircle } from "lucide-react";

const CommentActions = ({
  comment,
  canReply,
  showReplies,
  toggleReplies,
  setReplyingTo,
}) => {
  const hasReplies = comment.replies?.length > 0;

  return (
    <div className="flex items-center gap-4 mt-2 ml-2">
      <button className="flex items-center gap-1 text-gray-600 hover:text-pink-500 transition text-sm">
        <Heart size={16} />
        <span>{comment.likes}</span>
      </button>

      {canReply && (
        <button
          onClick={() => setReplyingTo(comment.id)}
          className="text-gray-600 hover:text-pink-500 transition text-sm font-medium"
        >
          Reply
        </button>
      )}

      {hasReplies && (
        <button
          onClick={() => toggleReplies(comment.id)}
          className="flex items-center gap-1 text-gray-600 hover:text-pink-500 transition text-sm font-medium"
        >
          <MessageCircle size={16} />
          <span>
            {showReplies[comment.id] ? "Hide" : "View"}{" "}
            {comment.replies.length}{" "}
            {comment.replies.length === 1 ? "reply" : "replies"}
          </span>
        </button>
      )}
    </div>
  );
};

export default CommentActions;
