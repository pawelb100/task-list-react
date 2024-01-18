import { ButtonStyled } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import { selectTasks, toggleHideDone, setAllDone } from "../tasksSlice";

const Buttons = () => {

    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    if (tasks.length === 0)
        return null;

    return (
        <>
            <ButtonStyled
                onClick={() => dispatch(toggleHideDone())}>
                {`${hideDone ? "Pokaż" : "Ukryj"} ukończone`}
            </ButtonStyled>
            <ButtonStyled
                onClick={() => dispatch(setAllDone())}
                disabled={tasks.every(task => task.done) ? true : false}>
                Ukończ wszystkie
            </ButtonStyled>
        </>
    );
};

export default Buttons;