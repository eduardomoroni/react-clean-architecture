export class Counter {
  count: number;

  constructor(startNumber: number) {
    this.count = startNumber;
  }

  increment(qty: number) {
    if(qty !== null) {
      this.count += qty;
    }
  }

  decrement(qty: number) {
    if(qty !== null) {
      this.count -= qty;
    }
  }
}
