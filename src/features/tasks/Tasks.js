import Header from '../../common/Header';
import Form from './Form';
import Section from '../../common/Section';
import TaskList from './TaskList';
import Container from '../../common/Container';
import FetchTasksButton from './FetchTasksButton';
import TaskOptionButtons from './TaskOptionButtons';

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
        extraHeaderContent={<TaskOptionButtons />} />
    </Container>
  </>
);

export default Tasks;
