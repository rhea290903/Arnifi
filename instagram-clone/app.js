
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './actions/postActions';
import User from './components/User';
import PostList from './components/PostList';

const App = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);

  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  const handleComment = (postId) => {
    // Implement comment action
  };

  const handleShare = (postId) => {
    // Implement share action
  };

  const handleSave = (postId) => {
    // Implement save action
  };

  return (
    <div className="App">
      <User username="JohnDoe" />
      <PostList posts={posts} onComment={handleComment} onShare={handleShare} onSave={handleSave} />
    </div>
  );
};

export default App;
