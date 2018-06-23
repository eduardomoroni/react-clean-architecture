import { combineReducers, applyMiddleware, createStore } from "redux";
import { createLogger } from "redux-logger";
import { userReducer } from "../adapters/redux";
import { User } from "../entities";

export interface StateType {
  user: User,
}

const reducers = {
  user: userReducer,
};

export const configureStore = () => {
  const middleware = [];

  if (process.env.NODE_ENV !== "production") {
    middleware.push(createLogger());
  }

  return createStore(
    combineReducers(reducers),
    applyMiddleware(...middleware),
  );
};
