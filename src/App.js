import './App.css';
import Header from './Header';
import Form from './Form';
import Section from './Section';
import Buttons from './Buttons';
import Tasks from './Tasks';
import Container from './Container';

const tasks = [
  {id: 1, content: "Zrobić naleśniki", done: true},
  {id: 2, content: "Obejrzeć serial", done: false},
];
const hideDoneTasks = false;

const App = () => (
  <>
    <Header title="Lista zadań" />
    <Container>
      <Section title="Dodaj nowe zadanie" body={<Form />} />
      <Section
        title="Lista zadań"
        body={
          <Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />
        }
        extraHeaderContent={
          <Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />
        } />
    </Container>
  </>
);

export default App;
