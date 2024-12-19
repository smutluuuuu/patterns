//BUILDER DESIGN PATTERN

// interface Builder {
//   setPartA(): void;
//   setPartB(): void;
//   setPartC(): void;
// }

// class Product {
//   private parts: string[] = [];

//   public add(part: string): void {
//     this.parts.push(part);
//   }

//   public listParts(): void {
//     console.log(` Product Parts: ${this.parts.join(", ")}`);
//   }
// }

// class ConcreteBuilder implements Builder {
//   private product!: Product;

//   constructor() {
//     this.reset();
//   }

//   public reset(): void {
//     this.product = new Product();
//   }

//   setPartA(): void {
//     this.product.add("PartA");
//   }

//   setPartB(): void {
//     this.product.add("PartB");
//   }

//   setPartC(): void {
//     this.product.add("PartC");
//   }

//   public getProduct(): Product {
//     const result = this.product;
//     this.reset();
//     return result;
//   }
// }

// class Director {
//   private builder!: Builder;

//   public setBuilder(builder: Builder): void {
//     this.builder = builder;
//   }
//   public buildMinimumProduct(): void {
//     this.builder.setPartA();
//   }
//   public buildFullProduct(): void {
//     this.builder.setPartA();
//     this.builder.setPartB();
//     this.builder.setPartC();
//   }
// }

// const builder=new ConcreteBuilder();
// const director=new Director();

// director.setBuilder(builder);

// director.buildMinimumProduct();
// let minProduct = builder.getProduct();
// console.log(minProduct);

// director.buildFullProduct();
// let fullProduct = builder.getProduct();
// console.log(fullProduct);

//Builder Real Life Implementation

interface ICustomer {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
}

interface ICustomerBuilder {
  setFirstName(firstName: string): ICustomerBuilder;
  setLastName(lastName: string): ICustomerBuilder;
  setEmail(email: string): ICustomerBuilder;
  setPhoneNumber(phoneNumber: string): ICustomerBuilder;
  build(): ICustomer;
}

class Customer implements ICustomer {
  //ICustomer interface'inde ki gerekli olan parametreleri constructor kısmında tanımladık !
  constructor(public firstName: string, public lastName: string, public email: string, public phoneNumber: string) {}
}

class CustomerBuilder implements ICustomerBuilder {
  //Customer Builder Nesnesinin alabileceği parametreleri bu şekilde de tanımlayabilirim , constructor'ın içinde de.
  //   private firstName: string = "";
  //   private lastName: string = "";
  //   private email: string = "";
  //   private phoneNumber: string = "";

  constructor(private firstName: string = "", private lastName: string = "", private email: string = "", private phoneNumber: string = "") {}

  setFirstName(firstName: string): ICustomerBuilder {
    this.firstName = firstName;
    return this;
  }

  setLastName(lastName: string): ICustomerBuilder {
    this.lastName = lastName;
    return this;
  }
  setEmail(email: string): ICustomerBuilder {
    this.email = email;
    return this;
  }
  setPhoneNumber(phoneNumber: string): ICustomerBuilder {
    this.phoneNumber = phoneNumber;
    return this;
  }

  //Yukarıda ki private olan propertyleri burada Customer oluşturmak için kullanacağım. Bu parametreleri ise bu Class'ın içinde ki methodlar ile set edeceğim.
  build(): ICustomer {
    return new Customer(this.firstName, this.lastName, this.email, this.phoneNumber);
  }
}

class CustomerDirector {
  constructor(private builder: ICustomerBuilder) {}

  public buildMinimalCustomer(firstName: string, lastName: string, email: string) {
    return this.builder.setFirstName(firstName).setLastName(lastName).setEmail(email).build();
  }
}

let builder = new CustomerBuilder();

let director = new CustomerDirector(builder);

let customer = director.buildMinimalCustomer("suleyman", "mutlu", "suleyman.mutlu96@gmail.com");

console.log(customer);
