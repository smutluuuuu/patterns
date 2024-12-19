//SINGLETON

// class Singleton {
//   private static instance: Singleton;
//   private static _value: number;

//   private constructor() {}

//   public static getInstance(): Singleton {
//     if (!Singleton.instance) {
//       Singleton.instance = new Singleton();
//     }
//     return Singleton.instance;
//   }

//   set value(value: number) {
//     Singleton._value = value;
//   }

//   get value() {
//     return Singleton._value;
//   }
// }

// let instance1 = Singleton.getInstance();
// let instance2 = Singleton.getInstance();

// instance1.value = 100;

// console.log(instance1.value);
// console.log(instance2.value);

//SINGLETON REAL WORLD

//Singleton Logger Class
// log method
// Can have multiple methods

class Logger {
  private static instance: Logger;

  private constructor() {}

  public static getInstance(): Logger {
    if (!Logger.instance) {
      Logger.instance = new Logger();
    }
    return Logger.instance;
  }

  public log(message: string): void {
    const timeStamp = new Date();
    console.log(`[${timeStamp.toLocaleString()}] - ${message}`);
  }
}

class Application{
    constructor(private logger:Logger){

    }

    run():void{
        this.logger.log("Application is running.");
        this.logger.log("Application is shutting down.");
    }
}


let logger=Logger.getInstance();
let app=new Application(logger);

app.run();