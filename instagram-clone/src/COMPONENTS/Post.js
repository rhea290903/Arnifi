// src/components/Post.js
import React from 'react';

const Post = ({ post, onComment, onShare, onSave }) => {
  return (
    <div className="post">
      <img src={post.imageUrl} alt={post.caption} />
      <button onClick={() => onComment(post.id)}>Comment</button>
      <button onClick={() => onShare(post.id)}>Share</button>
      <button onClick={() => onSave(post.id)}>Save</button>
    </div>
  );
};

export default Post;
