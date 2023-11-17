// src/actions/postActions.js
export const fetchPosts = () => {
    return async (dispatch) => {
      try {
        const response = await fetch('http://localhost:3001/posts');
        const data = await response.json();
  
        dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: data });
      } catch (error) {
        dispatch({ type: 'FETCH_POSTS_FAILURE', payload: error.message });
      }
    };
  };
  
  export const addComment = (postId, commentText) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`http://localhost:3001/posts/${postId}/comments`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ text: commentText }),
        });
        const data = await response.json();
  
        dispatch({ type: 'ADD_COMMENT_SUCCESS', payload: { postId, comment: data } });
      } catch (error) {
        dispatch({ type: 'ADD_COMMENT_FAILURE', payload: error.message });
      }
    };
  };
  
  export const sharePost = (postId) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`http://localhost:3001/posts/${postId}/share`, {
          method: 'POST',
        });
        const data = await response.json();
  
        dispatch({ type: 'SHARE_POST_SUCCESS', payload: { postId, shared: data } });
      } catch (error) {
        dispatch({ type: 'SHARE_POST_FAILURE', payload: error.message });
      }
    };
  };
  
  export const savePost = (postId) => {
    return async (dispatch) => {
      try {
        const response = await fetch(`http://localhost:3001/posts/${postId}/save`, {
          method: 'POST',
        });
        const data = await response.json();
  
        dispatch({ type: 'SAVE_POST_SUCCESS', payload: { postId, saved: data } });
      } catch (error) {
        dispatch({ type: 'SAVE_POST_FAILURE', payload: error.message });
      }
    };
  };
  