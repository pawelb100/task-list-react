import Header from '../../common/Header';
import Form from './Form';
import Section from '../../common/Section';
import Buttons from './Buttons';
import TaskList from './TaskList';
import Container from '../../common/Container';
import { useTasks } from '../../useTasks';
import { useHideDone } from '../../useHideDone';

const Tasks = () => {

  const {
    tasks,
    removeTask,
    toggleTaskDone,
    setAllDone,
    addNewTask
  } = useTasks();

  const {
    hideDone,
    toggleHideDone
  } = useHideDone();

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
            <TaskList
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

export default Tasks;
