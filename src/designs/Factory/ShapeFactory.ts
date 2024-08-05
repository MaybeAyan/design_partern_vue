import { Shape, Circle, Rectangle, Triangle } from './Shape';

class ShapeFactory {
  static createShape(type: string): Shape | null {
    switch (type) {
      case 'circle':
        return new Circle();
      case 'rectangle':
        return new Rectangle();
      case 'triangle':
        return new Triangle();
      default:
        return null;
    }
  }
}

export default ShapeFactory;
