import Button from "./Button";

const CommentReply = ({
  comment,
  setReplyingTo,
  replyText,
  setReplyText,
  handleSubmitReply,
  level,
  parentPath,
}) => (
  <div className="mt-3 ml-2 border-2 border-pink-200 rounded-xl p-3 focus-within:border-pink-400 transition">
    <div className="flex items-start gap-2">
      <img
        src="https://i.pravatar.cc/100?img=7"
        alt="You"
        className="w-8 h-8 rounded-full border-2 border-pink-300"
      />
      <div className="flex-1">
        <textarea
          value={replyText}
          onChange={(e) => setReplyText(e.target.value)}
          placeholder={`Reply to ${comment.user.name}...`}
          className="w-full resize-none border-none outline-none text-sm"
          rows={2}
          autoFocus
        />
        <div className="flex items-center justify-end gap-2 mt-2">
          <button
            onClick={() => {
              setReplyingTo(null);
              setReplyText("");
            }}
            className="px-3 py-1 text-sm text-gray-600 hover:text-gray-800 transition"
          >
            Cancel
          </button>
          <Button
            title="Reply"
            onClick={() => handleSubmitReply(comment.id, level, parentPath)}
            disabled={!replyText.trim()}
          />
        </div>
      </div>
    </div>
  </div>
);

export default CommentReply;
