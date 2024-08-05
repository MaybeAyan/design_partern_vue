export interface Observer {
  update(temperature: number): void;
}

class PhoneDisplay implements Observer {
  public temperature: string | undefined;

  update(temperature: number): void {
    this.temperature = (`Phone Display: 当前温度是 ${temperature} 度`);
  }
}

class WindowDisplay implements Observer {
  public temperature: string | undefined;

  update(temperature: number): void {
    this.temperature = (`Window Display: 当前温度是 ${temperature} 度`);
  }
}

export { PhoneDisplay, WindowDisplay };
