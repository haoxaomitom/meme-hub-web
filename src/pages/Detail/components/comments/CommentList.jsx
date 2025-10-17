import { useState } from "react";
import CommentItem from "./CommentItem";

const CommentList = ({ comments, canReply = true }) => {
  const [showReplies, setShowReplies] = useState({});
  const [replyingTo, setReplyingTo] = useState(null);
  const [replyText, setReplyText] = useState("");

  const toggleReplies = (commentId) => {
    setShowReplies((prev) => ({
      ...prev,
      [commentId]: !prev[commentId],
    }));
  };

  const handleSubmitReply = (commentId, level, parentPath) => {
    console.log("Reply submitted to:", commentId, "with text:", replyText);
    // Reset reply state
    setReplyingTo(null);
    setReplyText("");
  };

  // Function to render a comment recursively
  const renderComment = (comment, level = 0, parentPath = []) => {
    return (
      <CommentItem
        key={comment.id}
        comment={comment}
        level={level}
        canReply={canReply}
        showReplies={showReplies}
        toggleReplies={toggleReplies}
        setReplyingTo={setReplyingTo}
        replyingTo={replyingTo}
        replyText={replyText}
        setReplyText={setReplyText}
        handleSubmitReply={handleSubmitReply}
        renderComment={renderComment}
        parentPath={parentPath}
      />
    );
  };

  return <div>{comments.map((c) => renderComment(c))}</div>;
};

export default CommentList;
