import createSagaMiddleware from "@redux-saga/core";
import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { rootSaga } from "../sagas/rootSaga";
import { cityReducer } from "./cityReducer";
import { dataReducer } from "./dataReducer";
import { positionReducer } from "./positionReducer";

const rootReducer = combineReducers({
  city: cityReducer,
  data: dataReducer,
  position: positionReducer,
});

const sagaMiddleware = createSagaMiddleware();
export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});
sagaMiddleware.run(rootSaga);