// interface IProductA {
//   operationA(): string;
// }

// interface IProductB {
//   operationB(): string;
//   combinedOperation(collaborator: IProductA): string;
// }

// interface IFactory {
//   createProductA(): IProductA;
//   createProductB(): IProductB;
// }

// class ProductA implements IProductA {
//   public operationA(): string {
//     return "This is the result of Operation A";
//   }
// }

// class ProductB implements IProductB {
//   public operationB(): string {
//     return "This is the result of Operation A";
//   }

//   public combinedOperation(collaborator: IProductA): string {
//     const result = collaborator.operationA();
//     return `The result of product b collaborating with (${result})`;
//   }
// }

// class Factory implements IFactory {
//   public createProductA(): IProductA {
//     return new ProductA();
//   }
//   public createProductB(): IProductB {
//     return new ProductB();
//   }
// }

// let fac = new Factory();

// let productA = fac.createProductA();

// console.log(productA.operationA());

// const productB = fac.createProductB();

// console.log(productB.combinedOperation(productA));

//ABSTRACT FACTORY REAL WORLD IMPLEMENTATION

interface Button {
  render(): void;
  onClick(f: Function): void;
}

interface Checkbox {
  render(): void;
  toggle(): void;
}

interface GUIFactory {
  createButton(): Button;
  createCheckbox(Button): Checkbox;
}

class WindowsButton implements Button {
  onClick(f: Function): void {
    console.log("Windows button was clicked");
    f();
  }
  render(): void {
    console.log("Windows Button Rendered");
  }
}
class WindosCheckbox implements Checkbox {
  constructor(private button: Button) {}
  render(): void {
    console.log("Render a checbox in Windows Style");
  }
  toggle(): void {
    this.button.onClick(() => {
      console.log("Windows checkbox toggled");
    });
  }
}

class MacOSButton implements Button {
  onClick(f: Function): void {
    console.log("MacOS butto was clicked");
    f();
  }
  render(): void {
    console.log("MacOS Button Rendered");
  }
}
class MacOSCheckbox implements Checkbox {
  constructor(private button: Button) {}
  render(): void {
    console.log("Render a checbox in MacOS Style");
  }
  toggle(): void {
    this.button.onClick(() => {
      console.log("MacOS checkbox toggled");
    });
  }
}

class WindowsFactory implements GUIFactory {
  public createButton(): Button {
    return new WindowsButton();
  }
  public createCheckbox(button: Button): Checkbox {
    return new WindosCheckbox(button);
  }
}

class MacOsFactory implements GUIFactory {
  public createButton(): Button {
    return new MacOSButton();
  }
  public createCheckbox(button: Button): Checkbox {
    return new MacOSCheckbox(button);
  }
}

//Client Code

function renderUI(factory: GUIFactory) {
  const button = factory.createButton();
  const checkbox = factory.createCheckbox(button);

  button.render();
  checkbox.render();

  button.onClick(() => {
    console.log("Button clicked");
  });
  checkbox.toggle();
}


renderUI(new WindowsFactory());
renderUI(new MacOsFactory());
