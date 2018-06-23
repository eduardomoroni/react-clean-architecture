import {User} from "../../entities";

type ActionType = {
  type: string,
};

type StateSliceType = User;
const INITIAL_STATE: StateSliceType = new User('', '', '');

export const userReducer = (
  state: StateSliceType = INITIAL_STATE,
  action: ActionType,
): StateSliceType => {
  switch (action.type) {
    default:
      return state;
  }
};
