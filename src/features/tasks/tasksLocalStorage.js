const key = "tasks";

export const saveTasksFromLocalStorage = tasks =>
  localStorage.setItem(key, JSON.stringify(tasks));

export const getTasksFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(key)) || [];