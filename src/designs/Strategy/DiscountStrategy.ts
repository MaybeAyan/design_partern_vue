// 定义一个策略接口
export interface DiscountStrategy {
  calculate(price: number): number;
}

// 实现策略接口的策略类
export class NoDiscount implements DiscountStrategy {
  calculate(price: number): number {
    return price;
  }
}

export class PercentageDiscount implements DiscountStrategy {
  private percentage: number;

  constructor(percentage: number) {
    this.percentage = percentage;
  }

  calculate(price: number): number {
    return price - (price * this.percentage / 100);
  }
}

export class FixedDiscount implements DiscountStrategy {
  private amount: number;

  constructor(amount: number) {
    this.amount = amount;
  }

  calculate(price: number): number {
    return price - this.amount;
  }
}
