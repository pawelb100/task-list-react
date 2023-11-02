import './style.css';

const Buttons = ({ tasks, hideDone, toggleHideDone, setAllDone}) => {

    if (tasks.length === 0)
        return null;

    return (
        <>
            <button
                className="Button"
                onClick={toggleHideDone}>
                {`${hideDone ? "Pokaż" : "Ukryj"} ukończone`}
            </button>
            <button
                className="Button"
                onClick={setAllDone}
                disabled={tasks.every(task => task.done) ? true : false}>
                Ukończ wszystkie
            </button>
        </>
    );
};

export default Buttons;