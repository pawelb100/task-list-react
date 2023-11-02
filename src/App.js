import './App.css';
import Header from './Header';
import Form from './Form';
import Section from './Section';
import Buttons from './Buttons';
import Tasks from './Tasks';
import Container from './Container';
import { useState } from 'react';


const App = () => {

  const [tasks, setTasks] = useState([
    { id: 1, content: "Zrobić naleśniki", done: true },
    { id: 2, content: "Obejrzeć serial", done: false },
  ]);

  const [hideDone, setHideDone] = useState(false);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };

  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };

  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map((task) => {
      if (task.id === id)
        return { ...task, done: !task.done };
      return task;
    }));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true })));
  };

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
        content,
        done: false
      }
    ]);
  }

  return (
    <>
      <Header title="Lista zadań" />
      <Container>
        <Section title="Dodaj nowe zadanie" body={<Form addNewTask={addNewTask} />} />
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
