import { takeEvery, call, put } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandeler() {
  try {
    const tasks = yield call(getExampleTasks);
    yield put(setTasks(tasks));
  } catch (error) {
    yield call(console.error, "Error fetch example tasks");
  }
}

function* tasksSaga() {
  yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandeler);
}

export default tasksSaga;