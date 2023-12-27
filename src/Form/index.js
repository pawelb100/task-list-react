import { useState } from 'react';
import { FormStyled, TaskContent, AddTaskButton } from './styled';

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTaskContent] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent !== "")
            addNewTask(newTaskContent.trim());
        setNewTaskContent("");
    };

    return (
        <FormStyled onSubmit={onFormSubmit}>
            <TaskContent
                placeholder="Co jest do zrobienia?"
                value={newTaskContent}
                onChange={(event) => setNewTaskContent(event.target.value)} />
            <AddTaskButton>Dodaj zadanie</AddTaskButton>
        </FormStyled>
    );
}

export default Form;