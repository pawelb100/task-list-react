import Button from "../../../common/Button";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice";

const FetchTasksButton = () => {

  const dispatch = useDispatch();

  return (
    <Button
      title="Pobierz przykładowe zadania"
      onClick={() => dispatch(fetchExampleTasks())}
    />
  );
};

export default FetchTasksButton;