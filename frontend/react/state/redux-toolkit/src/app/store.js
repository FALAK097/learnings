import { configureStore } from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todo-slice.js';

export const store = configureStore({
  reducer: todoReducer,
});
