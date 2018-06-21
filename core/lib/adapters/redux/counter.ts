const INITIAL_STATE = 0;
const INCREMENT = 'counter/increment';
const DECREMENT = 'counter/decrement';

export const counterSelector = (state: any): number => state.counter;

export const incrementCounterAction = (qty: number): any => ({
  type: INCREMENT,
  qty
});

export const decrementCounterAction = (qty: number): any => ({
  type: DECREMENT,
  qty
});

const incrementReducer = (state: any, action: any): number => {
  return state + 1;
};

const decrementReducer = (state: any, action: any): number => {
  return state + 1;
};

export const counterReducer = (
  state: number = INITIAL_STATE,
  action: any,
): any => {
  switch (action.type) {
    case INCREMENT:
      return incrementReducer(state, action);
    case DECREMENT:
      return decrementReducer(state, action);
    default:
      return state;
  }
};
