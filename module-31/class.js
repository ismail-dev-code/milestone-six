class product {
  constructor(name, price, brand, owner) {
    this.name = name;
    this.price = price;
    this.brandName = brand;
    this.owner = owner;
  }
  details() {
    console.log(`ami ${this.name} product er details re ba`);
  }
}

const iphone = new product("iphone", "120000", "apple", "steve jobs");
iphone.details();

const samsung = new product("samsung", "25000", "sam", "ar kita");
samsung.details();

class product {
  constructor(name, price, color, origin) {
    this.name = name;
    this.price = price;
    this.color = color;
    this.origin = origin;
  }

  description() {
    console.log(
      `ami ${this.name} er description. amar bari ${this.origin}. amar dam ${this.price}. amar rong ${this.color}`
    );
  }
}

const golAloo = new product("lal aloo", "80tk", "lal", "sylhet");
golAloo.description();
