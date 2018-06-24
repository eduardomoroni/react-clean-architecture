import { applyMiddleware, combineReducers, createStore } from "redux";
import { createLogger } from "redux-logger";
import createSagaMiddleware from "redux-saga";
import { rootSaga, userReducer } from "../adapters/redux";

const rootReducer = {
  user: userReducer,
};

export const configureStore = () => {
  const middleware = [];
  const sagaMiddleware = createSagaMiddleware();

  middleware.push(sagaMiddleware);
  if (process.env.NODE_ENV !== "production") {
    middleware.push(createLogger());
  }

  const store = createStore(
    combineReducers(rootReducer),
    applyMiddleware(...middleware),
  );

  sagaMiddleware.run(rootSaga);
  return store;
};
