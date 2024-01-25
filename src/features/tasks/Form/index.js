import { useRef, useState } from 'react';
import { FormStyled, TaskContent, AddTaskButton } from './styled';
import { useDispatch } from 'react-redux';
import { nanoid } from '@reduxjs/toolkit';
import { addTask } from '../tasksSlice';

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch()

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent !== "")
            dispatch(addTask(
                {
                    content: newTaskContent.trim(),
                    done: false,
                    id: nanoid(),
                }
            ));
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