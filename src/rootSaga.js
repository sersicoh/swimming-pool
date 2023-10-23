import { all } from "redux-saga/effects";
import { tasksSaga } from "./services/tasksSaga";

export default function* rootSaga() {
  yield all([tasksSaga()]);
}
