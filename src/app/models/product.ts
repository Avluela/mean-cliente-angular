export class Product {
  _id?: number;           //se lo pone con _ inicial porque asi tambien lo tiene en mongo db
  name: string;
  category: string;
  location: string;
  price: number;

  constructor(name: string, category: string, location: string, price: number) {
    this.name = name;
    this.category = category;
    this.location = location;
    this.price = price;
  }
}
