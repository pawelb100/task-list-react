import { useRef, useState } from 'react';
import { FormStyled, TaskContent, AddTaskButton } from './styled';

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent !== "")
            addNewTask(newTaskContent.trim());
        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <FormStyled onSubmit={onFormSubmit}>
            <TaskContent
                ref={inputRef}
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={(event) => setNewTaskContent(event.target.value)} />
            <AddTaskButton>Dodaj zadanie</AddTaskButton>
        </FormStyled>
    );
}

export default Form;