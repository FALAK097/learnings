import { configureStore } from '@reduxjs/toolkit';
import postsReducer from '../features/posts/posts-slice.js';
import usersReducer from '../features/users/users-slice.js';

export const store = configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
  },
});
