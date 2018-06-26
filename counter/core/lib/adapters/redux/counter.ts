import { Counter } from "../../entities";
import { CounterInteractor } from "../../useCases";
import { StateType } from "../../frameworks";

type StateSliceType = Counter;

type ActionType = {
  type: string,
  qty?: number,
};

const INITIAL_STATE = new Counter(0);
const INCREMENT = "counter/increment";
const DECREMENT = "counter/decrement";

export const counterSelector = (state: StateType): Counter => state.counter;

export const incrementCounterAction = (qty: number): ActionType => ({
  type: INCREMENT,
  qty,
});

export const decrementCounterAction = (qty: number): ActionType => ({
  type: DECREMENT,
  qty,
});

const incrementReducer = (
  counter: StateSliceType,
  action: ActionType,
): StateSliceType => {
  const interactor = new CounterInteractor(counter.count);
  interactor.increment(action.qty);
  return new Counter(interactor.counter.count);
};

const decrementReducer = (
  counter: StateSliceType,
  action: ActionType,
): StateSliceType => {
  const interactor = new CounterInteractor(counter.count);
  interactor.decrement(action.qty);
  return new Counter(interactor.counter.count);
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
