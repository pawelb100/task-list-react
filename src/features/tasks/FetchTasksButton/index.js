import Button from "../../../common/Button";
import { useDispatch } from "react-redux";
import { fetchExampleTasks } from "../tasksSlice";
import { useState } from "react";

const FetchTasksButton = () => {

  const [title, setTitle] = useState("Pobierz przykładowe zadania");
  const [disabled, setDisabled] = useState(false);

  const onClickButton = () => {
    setTitle("Ładowanie...");
    setDisabled(true);

    setTimeout(() => {
      dispatch(fetchExampleTasks());
      setTitle("Pobierz przykładowe zadania");
      setDisabled(false);
    }, 1000);
  }

  const dispatch = useDispatch();

  return (
    <Button
      title={title}
      onClick={onClickButton}
      isDisabled={disabled}
    />
  );
};

export default FetchTasksButton;