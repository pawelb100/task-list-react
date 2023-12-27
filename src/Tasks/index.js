import { TasksStyled, TaskItem, TaskContent, TaskButton } from "./styled";

const Tasks = ({ tasks, hideDone, removeTask, toggleTaskDone }) => (
    <TasksStyled>
        {tasks.map(task => (
            <TaskItem
                key={task.id}
                hide={hideDone && task.done}
            >
                <TaskButton
                    done
                    onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? "✔" : ""}
                </TaskButton>
                <TaskContent done={ task.done }>
                    {task.content}
                </TaskContent>

                <TaskButton
                    remove
                    onClick={() => removeTask(task.id)}
                >
                    🗑️
                </TaskButton>
            </TaskItem >
        ))
        }
    </TasksStyled >
);

export default Tasks;