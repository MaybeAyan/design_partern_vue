import { Observer } from './Observer';

class WeatherStation {
  private observers: Observer[] = [];
  private temperature: number = 0;

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    this.observers = this.observers.filter(obs => obs !== observer);
  }

  setTemperature(temp: number): void {
    console.log(`气象站: 设置温度为 ${temp} 度`);
    this.temperature = temp;
    this.notifyObservers();
  }

  private notifyObservers(): void {
    for (const observer of this.observers) {
      observer.update(this.temperature);
    }
  }
}

export default WeatherStation;
