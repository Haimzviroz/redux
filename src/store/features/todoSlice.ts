import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface TodoState {
  tasks: {
    id: number;
    text: string;
    completed: boolean;
  }[];
}

const constantTodos: TodoState = {
  tasks: [
    { id: 1, text: "bla", completed: false },
    { id: 2, text: "bla", completed: false },
  ],
};
const initialState: TodoState = {
  tasks: constantTodos.tasks,
};
export const todoSlice = createSlice({
  name: "todoList",
  initialState,
  reducers: {
    markCompleted: (state, action: PayloadAction<number>) => {
      state.tasks.forEach((t) => {
        t.id === action.payload ? (t.completed = !t.completed) : null;
      });
    },
  },
});
export const { markCompleted } = todoSlice.actions;
export default todoSlice.reducer;
