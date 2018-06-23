import {userReducer} from "./";
import {User} from "../../entities";

export interface StateType {
  readonly user?: User;
}

export const initialState: StateType = {
  user: undefined,
};

export const rootReducer = {
  user: userReducer,
};
