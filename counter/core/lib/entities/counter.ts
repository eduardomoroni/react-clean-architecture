export class Counter {
  count: number;

  constructor(startNumber: number) {
    this.count = startNumber;
  }

  increment(qty?: number) {
    this.count += qty ? qty : 1;
  }

  decrement(qty?: number) {
    this.count -= qty ? qty : 1;
  }
}
