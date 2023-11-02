import { useState } from 'react';
import './style.css';

const Form = ({addNewTask}) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent !== "")
            addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <form className="form" onSubmit={onFormSubmit}>
            <input
                className="form__taskContent"
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={(event) => setNewTaskContent(event.target.value)} />
            <button className="form__button">Dodaj zadanie</button>
        </form>
    );
}

export default Form;