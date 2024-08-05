import { DiscountStrategy } from './DiscountStrategy';

export class DiscountContext {
  private strategy: DiscountStrategy;

  constructor(strategy: DiscountStrategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy: DiscountStrategy) {
    this.strategy = strategy;
  }

  calculate(price: number): number {
    return this.strategy.calculate(price);
  }
}
