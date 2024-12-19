//PROTOTYPE PATTERN

// interface UserDetails {
//   name: string;
//   age: number;
//   email: string;
// }

// interface Prototype {
//   clone(): Prototype;
//   getUserDetails(): UserDetails;
// }

// class ConcretePrototype implements Prototype {
//   constructor(private user: UserDetails) {}

//   public clone(): Prototype {
//     const clone = Object.create(this);
//     clone.user = { ...this.user };
//     return clone;
//   }

//   public getUserDetails(): UserDetails {
//     return this.user;
//   }
// }

// let user1 = new ConcretePrototype({ name: "Suleyman", age: 28, email: "suleyman@gmail.com" });
// let user2 = user1.clone();

// console.log(user1);
// console.log(user2);

//PROTOTYPE PATTERN REAL-WORLD

// interface ShapeProperties {
//   color: string;
//   x: number;
//   y: number;
// }

// abstract class Shape {
//   constructor(public properties: ShapeProperties) {}
//   abstract clone(): Shape;
// }

// class Rectangle extends Shape {
//   constructor(properties: ShapeProperties, public width: number, public height: number) {
//     {
//       super(properties);
//     }
//   }
//   public clone(): Shape {
//     let clonedProperties: ShapeProperties = {
//       color: this.properties.color,
//       x: this.properties.x,
//       y: this.properties.y,
//     };
//     return new Rectangle(clonedProperties, this.width, this.height);
//   }
// }

// class Circle extends Shape {
//   constructor(properties: ShapeProperties, public radius: number) {
//     {
//       super(properties);
//     }
//   }
//   public clone(): Shape {
//     let clonedProperties: ShapeProperties = {
//       color: this.properties.color,
//       x: this.properties.x,
//       y: this.properties.y,
//     };
//     return new Circle(clonedProperties, this.radius);
//   }
// }

// let redRectangle: Shape = new Rectangle(
//   {
//     color: "red",
//     x: 20,
//     y: 100,
//   },
//   10,
//   20
// );

// let anotherRectangle: Shape = redRectangle.clone();
// anotherRectangle.properties.color = "blue";

// console.log(redRectangle);
// console.log(anotherRectangle);

let original = {
  name: "John",
  address: {
    street: "123 Main St",
    city: "New York",
  },
};

let shallowCopy = { ...original };

shallowCopy.address.city = "Los Angeles";

console.log(original);
console.log(shallowCopy);
 
let deepCopy = JSON.parse(JSON.stringify(original));

deepCopy.address.city="San Francisco";
console.log(deepCopy);