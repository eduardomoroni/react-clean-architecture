import { Counter } from "../entities";

// For sake of simplicity, I"ll keep more than one use case on this interactor
export class CounterInteractor {
  static MAX_SIZE: number = 10;
  static MIN_SIZE: number = 0;
  counter: Counter;

  constructor(counter?: Counter){
    if (!counter) {
      this.counter = new Counter(0);
    } else {
      this.counter = counter;
    }
  }

  increment(qty?: number): Counter {
    this.counter.increment(qty);

    if (this.counter.count >= CounterInteractor.MAX_SIZE) {
      this.counter = new Counter(CounterInteractor.MAX_SIZE);
    }

    return this.counter;
  }

  decrement(qty?: number): Counter {
    this.counter.decrement(qty);

    if (this.counter.count <= CounterInteractor.MIN_SIZE) {
      this.counter = new Counter(CounterInteractor.MIN_SIZE);
    }

    return this.counter;
  }
}
