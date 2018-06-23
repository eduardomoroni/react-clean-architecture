import {Credential, User} from "../../entities";
import {SignInInteractor} from "../../useCases/";
import {initialState, StateType} from "./reducer";

const UPDATE_USER = "user/update";
type StateSlice = StateType["user"];

export interface UpdateUserActionType {
  type: string,
  user?: User,
}

export const userSelector = (state: StateType): StateType["user"] => state.user;
export const updateUserAction = (user?: User): UpdateUserActionType => ({
  type: UPDATE_USER,
  user
});

const updateHandler = (
  state: StateType["user"],
  action: UpdateUserActionType
): StateType["user"] => {
  return action.user;
};

export const userReducer = (
  state: StateType["user"] = initialState.user,
  action: UpdateUserActionType,
): StateType["user"] => {
  switch (action.type) {
    case UPDATE_USER:
      return updateHandler(state, action);
    default:
      return state;
  }
};
