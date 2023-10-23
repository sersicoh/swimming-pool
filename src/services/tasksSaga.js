import { takeEvery, call, select } from "redux-saga/effects";
import { saveTasksInLocalStorage } from "./tasksLocalStorege";
import { selectTasks } from "./tasksSlice";

function* saveTasksInLocalStorageHandler() {
  const tasks = yield select(selectTasks);
  yield call(saveTasksInLocalStorage, tasks);
}

export function* tasksSaga() {
  yield takeEvery("*", saveTasksInLocalStorageHandler);
}
