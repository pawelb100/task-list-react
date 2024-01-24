import Button from "../../../common/Button";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, selectHideDone, toggleHideDone, setAllDone } from "../tasksSlice";

const TaskOptionButtons = () => {

    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    const dispatch = useDispatch();

    if (tasks.length === 0)
        return null;

    return (
        <>
            <Button
                title={`${hideDone ? "Pokaż" : "Ukryj"} ukończone`}
                onClick={() => dispatch(toggleHideDone())}
            />
            <Button
                title="Ukończ wszystkie"
                onClick={() => dispatch(setAllDone())}
                isDisabled={tasks.every(task => task.done) ? true : false}
            />
        </>
    );
};

export default TaskOptionButtons;