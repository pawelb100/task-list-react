import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone;
    },
    setAllDone: state => {
      state.tasks = state.tasks.map(task => ({ ...task, done: true }));
    },
    toggleTaskDone: ({ tasks }, { payload }) => {
      const index = tasks.findIndex(task => task.id === payload);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload }) => {
      const index = tasks.findIndex(task => task.id === payload);
      tasks.splice(index, 1);
    },
  },
});

export const selectTasks = state => state.tasks;
export const { addTask, toggleHideDone, setAllDone, toggleTaskDone, removeTask } = tasksSlice.actions;
export default tasksSlice.reducer;