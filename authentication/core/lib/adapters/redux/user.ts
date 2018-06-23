import {User} from "../../entities";
import {initialState, StateType} from "./state";

const UPDATE_USER = "user/update";
const SIGN_OUT = "user/signOut";

type StateSlice = StateType["user"];

export interface ActionType {
  type: string,
}

export interface UpdateUserActionType {
  type: string,
  user: User | null,
}

export const userSelector = (state: StateType): StateSlice => state.user;
export const updateUserAction = (user: User | null): UpdateUserActionType => ({
  type: UPDATE_USER,
  user
});
export const signOutAction = (): ActionType => ({
  type: SIGN_OUT,
});

const signOutHandler = () => null;
const updateHandler = (
  state: StateSlice,
  action: UpdateUserActionType
): StateType["user"] => {
  return action.user;
};

export const userReducer = (
  state: StateSlice = initialState.user,
  action: UpdateUserActionType,
): StateSlice => {
  switch (action.type) {
    case UPDATE_USER:
      return updateHandler(state, action);
    case SIGN_OUT:
      return signOutHandler();
    default:
      return state;
  }
};
