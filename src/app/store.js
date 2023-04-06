import { configureStore } from '@reduxjs/toolkit';
import postReducer from '../features/post/PostSlice';

export const store = configureStore({
  reducer: {
    post: postReducer,
  },
});
