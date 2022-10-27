import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import rootReducer from "../Reducer";
import rootSaga from "../Middleware";
import { composeWithDevTools } from "redux-devtools-extension";


const saga = createSagaMiddleware();

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(saga))
);

saga.run(rootSaga);

export default store;
