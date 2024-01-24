import { takeEvery, takeLatest, call, put, select} from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksFromLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandeler() {
  try {
    const tasks = yield call(getExampleTasks);
    yield put(setTasks(tasks));
  } catch (error) {
    yield call(console.error, "Error fetch example tasks");
  }
}

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksFromLocalStorage, tasks);
}

function* tasksSaga() {
  yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandeler);
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}

export default tasksSaga;