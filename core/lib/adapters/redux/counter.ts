import { Counter } from "../../entities";
import { CounterInteractor } from "../../useCases";
import { StateType } from "../../frameworks";

type StateSliceType = Counter;

type ActionType = {
  type: string,
  qty?: number,
};

const INITIAL_STATE = new Counter(0);
const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';

export const counterSelector = (state: StateType): Counter => state.counter;

export const incrementCounterAction = (qty: number): ActionType => ({
  type: INCREMENT,
  qty
});

export const decrementCounterAction = (qty: number): ActionType => ({
  type: DECREMENT,
  qty
});

// Reducers shouldn't mutate objects, I kept like this for simplicity
const incrementReducer = (state: StateSliceType, action: ActionType): StateSliceType => {
  const interactor = new CounterInteractor(state);
  interactor.increment(action.qty);
  return state;
};

// Reducers shouldn't mutate objects, I kept like this for simplicity
const decrementReducer = (state: StateSliceType, action: ActionType): StateSliceType => {
  const interactor = new CounterInteractor(state);
  interactor.decrement(action.qty);
  return state;
};

export const counterReducer = (
  state: StateSliceType = INITIAL_STATE,
  action: ActionType,
): StateSliceType => {
  switch (action.type) {
    case INCREMENT:
      return incrementReducer(state, action);
    case DECREMENT:
      return decrementReducer(state, action);
    default:
      return state;
  }
};
