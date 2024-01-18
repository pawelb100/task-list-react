import { TasksStyled, TaskItem, TaskContent, TaskButton } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleTaskDone, removeTask } from "../tasksSlice";

const TaskList = () => {

    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    return (
        <TasksStyled>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    hide={hideDone && task.done}
                >
                    <TaskButton
                        done
                        onClick={() => dispatch(toggleTaskDone(task.id))}
                    >
                        {task.done ? "✔" : ""}
                    </TaskButton>
                    <TaskContent done={task.done}>
                        {task.content}
                    </TaskContent>

                    <TaskButton
                        remove
                        onClick={() => dispatch(removeTask(task.id))}
                    >
                        🗑️
                    </TaskButton>
                </TaskItem >
            ))
            }
        </TasksStyled >
    )
};

export default TaskList;