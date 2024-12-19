//shapes

// Area , Perimeter

//simple - single function calculateTotalArea

//Interface a Shape

interface Shape {
  area(): number;
  perimeter(): number;
}

class Circle implements Shape {
  constructor(private radius: number) {}

  area(): number {
    return Math.PI * this.radius * this.radius;
  }
  perimeter(): number {
    return 2 * Math.PI;
  }
}

class Rectangle implements Shape {
  constructor(private width: number, private height: number) {}
  area(): number {
    return this.width * this.height;
  }

  perimeter(): number {
    return 2 * this.width + this.height;
  }
}

const calculateTotalArea = (shape: Shape): number => {
  return shape.area();
};

//Client Code

let circle: Circle = new Circle(5);
let rectangle: Rectangle = new Rectangle(4, 6);

console.log("Area of Circle", calculateTotalArea(circle));
console.log("Area of Rectangle", calculateTotalArea(rectangle));
