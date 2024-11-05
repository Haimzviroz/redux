import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./features/todoSlice";
export const store = configureStore({
  reducer: {
    // כל reducer מייצג חלק שונה של ה-state
    todos: todoReducer,
  },
});
// נגדיר את הטיפוסים של ה-store
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
