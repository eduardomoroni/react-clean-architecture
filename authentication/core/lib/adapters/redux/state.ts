import {User} from "../../entities";

export interface StateType {
  readonly user: User | null;
}

export const initialState: StateType = {
  user: null,
};
