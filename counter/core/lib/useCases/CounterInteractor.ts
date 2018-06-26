import { Counter } from "../entities";

// For sake of simplicity, I"ll keep more than one use case on this interactor
export class CounterInteractor {
  higherBound: number = 10;
  lowerBound: number = 0;
  counter: Counter;

  constructor(
    startNumber: number,
    lowerBound: number = 0,
    higherBound: number = 10
  ) {
      this.counter = new Counter(startNumber);
      this.lowerBound = lowerBound;
      this.higherBound = higherBound;
  }

  increment(qty?: number): Counter {
    this.counter.increment(qty);

    if (this.counter.count >= this.higherBound) {
      this.counter = new Counter(this.higherBound);
    }

    return this.counter;
  }

  decrement(qty?: number): Counter {
    this.counter.decrement(qty);

    if (this.counter.count <= this.lowerBound) {
      this.counter = new Counter(this.lowerBound);
    }

    return this.counter;
  }
}
