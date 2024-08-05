export interface Shape {
  draw(): string;
}

class Circle implements Shape {
  draw() {
    return('绘制一个圆形');
  }
}

class Rectangle implements Shape {
  draw() {
    return('绘制一个矩形');
  }
}

class Triangle implements Shape {
  draw() {
    return('绘制一个三角形');
  }
}

export { Circle, Rectangle, Triangle };
