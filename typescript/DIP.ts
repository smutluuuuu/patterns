//Dependency Inversion Principle

interface IDatabase {
  save(data: string): void;
}

class MySqlDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} is being saved to mySQL`);
  }
}

class MongoDbDatabase implements IDatabase {
  save(data: string): void {
    console.log(`${data} is being saved to MongoDB`);
  }
}

class HighLevelModule {
  constructor(private database: IDatabase) {}

  execute(data: string) {
    this.database.save(data);
  }
}

let mongodb = new MongoDbDatabase();

let modul = new HighLevelModule(mongodb);

let data = "true";

modul.execute(data);
