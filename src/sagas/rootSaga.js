import { all } from "@redux-saga/core/effects";
import { watchLoadDataBC } from "./loadDataBCSaga";
import { watchLoadDataBP } from "./loadDataBPSaga";

export function* rootSaga() {
  yield all([
    watchLoadDataBC(),
    watchLoadDataBP(),
  ]);
}