import { ButtonStyled } from "./styled";

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone}) => {

    if (tasks.length === 0)
        return null;

    return (
        <>
            <ButtonStyled
                onClick={toggleHideDone}>
                {`${hideDone ? "Pokaż" : "Ukryj"} ukończone`}
            </ButtonStyled>
            <ButtonStyled
                onClick={setAllDone}
                disabled={tasks.every(task => task.done) ? true : false}>
                Ukończ wszystkie
            </ButtonStyled>
        </>
    );
};

export default Buttons;