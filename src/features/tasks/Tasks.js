import Header from '../../common/Header';
import Form from './Form';
import Section from '../../common/Section';
import Buttons from './Buttons';
import TaskList from './TaskList';
import Container from '../../common/Container';

const Tasks = () => (
  <>
    <Header title="Lista zadań" />
    <Container>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />} />
      <Section
        title="Lista zadań"
        body={<TaskList />}
        extraHeaderContent={<Buttons />} />
    </Container>
  </>
);

export default Tasks;
