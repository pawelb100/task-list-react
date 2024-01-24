import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: getTasksFromLocalStorage(),
    hideDone: false,
  },
  reducers: {
    addTask: ({ tasks }, { payload }) => {
      tasks.push(payload);
    },
    toggleHideDone: state => {
      state.hideDone = !state.hideDone;
    },
    setAllDone: ({ tasks }) => {
      for (const task of tasks) {
        task.done = true;
      }
    },
    toggleTaskDone: ({ tasks }, { payload }) => {
      const index = tasks.findIndex(task => task.id === payload);
      tasks[index].done = !tasks[index].done;
    },
    removeTask: ({ tasks }, { payload }) => {
      const index = tasks.findIndex(task => task.id === payload);
      tasks.splice(index, 1);
    },
    fetchExampleTasks: () => { },
    setTasks: (state, { payload }) => {
      state.tasks = payload;
    }
  },
});

export const selectTasksState = state => state.tasks;

export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;

export const {
  addTask,
  toggleHideDone,
  setAllDone,
  toggleTaskDone,
  removeTask,
  fetchExampleTasks,
  setTasks
} = tasksSlice.actions;

export default tasksSlice.reducer;