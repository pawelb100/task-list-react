import './style.css';

const Buttons = ({ tasks, hideDoneTasks }) => {

    if (tasks.length === 0)
        return null;

    return (
        <>
            <button
                className="Button">
                {`${hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone`}
            </button>
            <button
                className="Button"
                disabled={tasks.every(task => task.done) ? true : false}>
                Ukończ wszystkie
            </button>
        </>
    );
};

export default Buttons;