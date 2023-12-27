import { useState, useEffect } from "react";

export const useTasks = () => {

    const tasksFromStorage = localStorage.getItem("tasks");

    const [tasks, setTasks] = useState(
        tasksFromStorage ? JSON.parse(tasksFromStorage) : []
    );

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleTaskDone = (id) => {
        setTasks(tasks => tasks.map((task) => {
            if (task.id === id)
                return { ...task, done: !task.done };
            return task;
        }));
    };

    const setAllDone = () => {
        setTasks(tasks => tasks.map(task => ({ ...task, done: true })));
    };

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
                content,
                done: false
            }
        ]);
    }

    return {
        tasks,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask
    }
}