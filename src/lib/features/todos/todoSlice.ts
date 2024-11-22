import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// Define the type for a single Todo item
type TodoItem = {
  id: number;
  task: string;
  completed: boolean;
};

// Define the state type to store an array of Todo items
type TodoState = {
  value: TodoItem[];
};

// Set the initial state with an empty array of Todo items
const initialState: TodoState = {
  value: [],
};

// Create the slice with add, delete, edit, and toggleCompleted reducers
export const shortTodoSlice = createSlice({
  name: "shortTodos",
  initialState: initialState,
  reducers: {
    // Add a new todo item
    add: (state, action: PayloadAction<TodoItem>) => {
      state.value.push(action.payload);
    },
    // Delete a todo item by id
    remove: (state, action: PayloadAction<number>) => {
      state.value = state.value.filter((todo) => todo.id !== action.payload);
    },
    // Edit a todo item by id
    edit: (state, action: PayloadAction<{ id: number; task: string }>) => {
      const index = state.value.findIndex(
        (todo) => todo.id === action.payload.id
      );
      if (index !== -1) {
        state.value[index].task = action.payload.task;
      }
    },
    // Toggle the completed status of a todo item by id
    toggleCompleted: (state, action: PayloadAction<number>) => {
      const index = state.value.findIndex((todo) => todo.id === action.payload);
      if (index !== -1) {
        state.value[index].completed = !state.value[index].completed;
      }
    },
  },
});

// Export actions and reducer
export const { add, remove, edit, toggleCompleted } = shortTodoSlice.actions;

export default shortTodoSlice.reducer;
