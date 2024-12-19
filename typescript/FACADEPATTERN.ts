//FACADE DESIGN PATTERN

// class Grinder {
//   grindBeans(): void {
//     console.log("Grind Beans");
//   }
// }
// class Boiler {
//   public boilWater(): void {
//     console.log("Boil Water");
//   }
// }
// class Brewer {
//   public brewCoffee(): void {
//     console.log("Brew Coffee");
//   }
// }

// class CoffeeMakerFacade {
//   constructor(private grinder: Grinder, private boiler: Boiler, private brewer: Brewer) {}

//   makeCoffee() {
//     this.grinder.grindBeans();
//     this.boiler.boilWater();
//     this.brewer.brewCoffee();
//     console.log("Cofee is ready!");
//   }
// }

// let grinder = new Grinder();
// let boiler = new Boiler();
// let brewer = new Brewer();
// let makeCoffee = new CoffeeMakerFacade(grinder, boiler, brewer);

// makeCoffee.makeCoffee();

//FACADE REAL WORLD IMPLEMENTATION

class Amplifier {
  turnOn(): void {
    console.log("Amplifier is turned on");
  }
  setVolume(level: number): void {
    console.log(`Volume is set to ${level}`);
  }
}

class DvdPlayer {
  turnOn(): void {
    console.log("DvdPlayer is turned on");
  }
  play(movie: string): void {
    console.log(`Playing ${movie}`);
  }
}

class Projector {
  turnOn() {
    console.log("Projector is turned on");
  }

  setInput(dvdPlayer: DvdPlayer) {
    console.log("Projector input set to DvdPlayer");
  }
}

class Lights {
  dim(level: number) {
    console.log(`Lights are dimmed to ${level}%`);
  }
}

class HomeTheaterFacade {
  constructor(private amplifier: Amplifier, private dvdPlayer: DvdPlayer, private projector: Projector, private lights: Lights) {}

  HomeTheaterFacade(amplifier: Amplifier, dvdPlayer: DvdPlayer, projector: Projector, lights: Lights) {}
  watchMovie(movie: string, volume: number, level: number) {
    console.log("Get ready to watch a movie...");
    this.lights.dim(level);
    this.amplifier.turnOn();
    this.amplifier.setVolume(volume);
    this.dvdPlayer.turnOn();
    this.projector.setInput(this.dvdPlayer);
    this.dvdPlayer.play(movie);
  }
}

let amplifier = new Amplifier();
let dvdPlayer = new DvdPlayer();
let projector = new Projector();
let lights = new Lights();
let initiateMovie = new HomeTheaterFacade(amplifier, dvdPlayer, projector, lights);
initiateMovie.watchMovie("Inception", 32, 2);
console.log(initiateMovie);
