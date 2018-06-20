export class Counter {
  count: number;

  constructor(startNumber: number) {
      this.count = startNumber;
  }

  increment(qty: number) {
    this.count += qty;
  }
  
  decrement(qty: number) {
    this.count -= qty;
  }
}
