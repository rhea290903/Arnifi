// src/reducers/postReducer.js
const initialState = {
    posts: [],
    loading: false,
    error: null,
  };
  
  const postReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_POSTS_SUCCESS':
        return { ...state, posts: action.payload, loading: false, error: null };
      case 'FETCH_POSTS_FAILURE':
        return { ...state, loading: false, error: action.payload };
      case 'ADD_COMMENT_SUCCESS':
        // Update state to add the comment to the corresponding post
        const updatedPosts = state.posts.map((post) =>
          post.id === action.payload.postId
            ? { ...post, comments: [...post.comments, action.payload.comment] }
            : post
        );
        return { ...state, posts: updatedPosts };
      // Add cases for SHARE_POST_SUCCESS and SAVE_POST_SUCCESS
      default:
        return state;
    }
  };
  
  export default postReducer;
  