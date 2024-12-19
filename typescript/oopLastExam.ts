class Product {
  constructor(public id: string, public price: number, public description: string) {}

  display(): void {
    console.log(`ID ${this.id}, Price ${this.price}, Description: ${this.description}`);
  }
}

class Book extends Product {
  constructor(public id: string, public price: number, public description: string, public author: string, public title: string) {
    super(id, price, description);
  }

  display(): void {
    super.display();
    console.log(`Author ${this.author}, Title ${this.title}`);
  }
}

class Electronic extends Product {
  constructor(public id: string, public price: number, public description: string, public brand: string, public model: string) {
    super(id, price, description);
  }

  display(): void {
    super.display();
    console.log(`Author ${this.brand}, Title ${this.model}`);
  }
}


let kitap = new Book('111',11,'Anna Karanina','SMutlu','Anna Karanina 2');
kitap.display();
let telefon = new Electronic('222',11,'Smutlus','Apple','16 PRO');
telefon.display();
