import './App.css';
import Header from './Header';
import Form from './Form';
import Section from './Section';
import Buttons from './Buttons';
import Tasks from './Tasks';
import Container from './Container';
import { useState } from 'react';
import { useTasks } from './useTasks';

const App = () => {

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask
  } = useTasks();

  return (
    <>
      <Header title="Lista zadań" />
      <Container>
        <Section
          title="Dodaj nowe zadanie"
          body={
            <Form addNewTask={addNewTask}
            />} />
        <Section
          title="Lista zadań"
          body={
            <Tasks
              tasks={tasks}
              hideDone={hideDone}
              removeTask={removeTask}
              toggleTaskDone={toggleTaskDone}
            />
          }
          extraHeaderContent={
            <Buttons
              tasks={tasks}
              hideDone={hideDone}
              toggleHideDone={toggleHideDone}
              setAllDone={setAllDone} />
          } />
      </Container>
    </>
  )
};

export default App;
