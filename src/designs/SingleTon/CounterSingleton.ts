class CounterSingleton {
  private static instance: CounterSingleton;
  private count: number = 0;

  private constructor() {}

  public static getInstance(): CounterSingleton {
    if (!CounterSingleton.instance) {
      CounterSingleton.instance = new CounterSingleton();
    }
    return CounterSingleton.instance;
  }

  public getCount(): number {
    return this.count;
  }

  public increment(): void {
    this.count++;
  }

  public decrement(): void {
    this.count--;
  }
}

export default CounterSingleton;
