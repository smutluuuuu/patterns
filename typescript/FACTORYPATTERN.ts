// abstract class Car {
//   constructor(public model: string, public productionYear: number) {}

//   abstract displayCarInfo(): void;
// }

// class Sedan extends Car {
//   public displayCarInfo(): void {
//     console.log(`This is a Sedan. Model ${this.model}, Production Year:${this.productionYear}`);
//   }
// }

// class SUV extends Car {
//   public displayCarInfo(): void {
//     console.log(`This is a SUV. Model ${this.model}, Production Year:${this.productionYear}`);
//   }
// }

// class Hatchback extends Car {
//   public displayCarInfo(): void {
//     console.log(`This is a Hatchback. Model ${this.model}, Production Year:${this.productionYear}`);
//   }
// }

// class CarFactory {
//   public createCar(type: "sedan" | "suv" | "hatchback", model: string, productionYear: number): Car {
//     switch (type) {
//       case "sedan":
//         return new Sedan(model, productionYear);
//       case "suv":
//         return new SUV(model, productionYear);
//       case "hatchback":
//         return new Hatchback(model, productionYear);
//       default:
//         throw new Error("Invalid Car Type");
//     }
//   }
// }

// let newCar = new CarFactory().createCar("sedan", "Proto-B", 1550);

// console.log(newCar);

abstract class Payment {
  constructor(public type: string, public amount: number) {}

  abstract processPayment(): void;
}

class PaypalProcessor extends Payment {
  public processPayment(): void {
    console.log(`This payment completed with ${this.type} , amount:${this.amount}$ `);
  }
}

class StripeProcessor extends Payment {
  public processPayment(): void {
    console.log(`This payment completed with ${this.type} , amount:${this.amount}$ `);
  }
}

class BankTransfer extends Payment {
  public processPayment(): void {
    console.log(`This payment completed with ${this.type} , amount:${this.amount}$ `);
  }
}

class PaymentFactory {
  public createPayment(type: "stripe" | "paypal" | "transfer", amount: number): Payment {
    switch (type) {
      case "stripe":
        return new StripeProcessor(type, amount);
      case "paypal":
        return new PaypalProcessor(type, amount);
      case "transfer":
        return new BankTransfer(type, amount);
      default:
        throw new Error("Payment method is not right!");
    }
  }
}

let processorFactory = new PaymentFactory();

const paypalPayment =processorFactory.createPayment("paypal",200);

paypalPayment.processPayment();

console.log(paypalPayment);