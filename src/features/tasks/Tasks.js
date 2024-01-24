import Header from '../../common/Header';
import Form from './Form';
import Section from '../../common/Section';
import TaskList from './TaskList';
import Container from '../../common/Container';
import FetchTasksButton from './FetchTasksButton';
import TaskListOptionsButtons from './TaskListOptionsButtons';

const Tasks = () => (
  <>
    <Header title="Lista zadań" />
    <Container>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<FetchTasksButton />} />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<TaskListOptionsButtons />} />
    </Container>
  </>
);

export default Tasks;
