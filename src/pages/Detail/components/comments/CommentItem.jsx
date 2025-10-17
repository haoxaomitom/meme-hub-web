import { motion } from "framer-motion";
import { MoreVertical } from "lucide-react";
import CommentActions from "./CommentActions";
import CommentReply from "./CommentReply";

const CommentItem = ({
  comment,
  level,
  canReply,
  showReplies,
  toggleReplies,
  handleSubmitReply,
  setReplyingTo,
  replyingTo,
  replyText,
  setReplyText,
  renderComment,
  parentPath,
}) => {
  const isReplyingToThis = replyingTo === comment.id;
  const hasReplies = comment.replies?.length > 0;
  const currentPath = [...parentPath, comment.id];

  return (
    <motion.div
      key={comment.id}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex items-start gap-3 ${
        level > 0
          ? "ml-8 md:ml-12 mt-4"
          : "pb-6 border-b border-pink-100 last:border-0"
      }`}
    >
      <img
        src={comment.user.avatar}
        alt={comment.user.name}
        className="w-10 h-10 rounded-full border-2 border-pink-200 flex-shrink-0"
      />

      <div className="flex-1 min-w-0">
        {/* Main comment */}
        <div className="bg-gray-50 rounded-2xl p-3 md:p-4">
          <div className="flex items-center justify-between mb-2">
            <div>
              <h4 className="font-semibold text-gray-800 text-sm md:text-base">
                {comment.user.name}
              </h4>
              <p className="text-xs text-gray-500">{comment.timestamp}</p>
            </div>
            <button className="text-gray-400 hover:text-gray-600 transition">
              <MoreVertical size={18} />
            </button>
          </div>

          {comment.text && (
            <p className="text-gray-700 mb-2 text-sm md:text-base break-words">
              {comment.text}
            </p>
          )}

          {comment.image && (
            <img
              src={comment.image}
              alt="Comment"
              loading="lazy"
              className="rounded-lg max-w-full h-auto max-h-64 md:max-h-80 object-cover cursor-pointer hover:opacity-90 transition"
            />
          )}
        </div>

        {/* Like, Reply, View replies*/}
        <CommentActions
          comment={comment}
          canReply={canReply}
          showReplies={showReplies}
          toggleReplies={toggleReplies}
          setReplyingTo={setReplyingTo}
        />

        {/* Reply Input */}
        {isReplyingToThis && (
          <CommentReply
            comment={comment}
            setReplyingTo={setReplyingTo}
            replyText={replyText}
            setReplyText={setReplyText}
            handleSubmitReply={handleSubmitReply}
            level={level}
            parentPath={parentPath}
          />
        )}

        {/* Nested Replies */}
        {showReplies[comment.id] && hasReplies && (
          <div className="mt-4">
            {comment.replies.map((reply) => (
              <CommentItem
                key={reply.id}
                comment={reply}
                level={level + 1}
                canReply={canReply}
                showReplies={showReplies}
                toggleReplies={toggleReplies}
                handleSubmitReply={handleSubmitReply}
                setReplyingTo={setReplyingTo}
                replyingTo={replyingTo}
                replyText={replyText}
                setReplyText={setReplyText}
                renderComment={renderComment}
                parentPath={currentPath}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default CommentItem;
