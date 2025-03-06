const person = {
  name: "abul",
  age: 10,
  father: {
    name: "babul",
    isHonest: true,
  },
};

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person));
console.log(person.mother?.age);
console.log(person.sister?.profession);
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const newNum = numbers.map(element=> element * element);
console.log(newNum);
const numIncrease = numbers.map((increament) => increament +1);
console.log(numIncrease);

const products = [
  {
    id: 1,
    name: "iphone",
    color: "black",
    price: 120000,
    brand: "apple",
  },
  {
    id: 2,
    name: "samsung",
    color: "blue",
    price: 1200,
    brand: "sam",
  },
  {
    id: 3,
    name: "xiomi",
    color: "gold",
    price: 1000,
    brand: "redmi",
  },
  {
    id: 4,
    name: "nokia",
    color: "black",
    price: 9000,
    brand: "nokia",
  },
  {
    id: 5,
    name: "flpbd",
    color: "black",
    price: 19000,
    brand: "apple",
  },
];

kono ekta shorter vittite eti kaj kore ja diben tai kore
const newProducts = products.filter((p) => p.color === "gold");
const newProducts = products.filter((p) => p.id !==3);
console.log(newProducts);

  products.forEach(p=> {
    if(p.color==="black"){
        console.log("kaj hoice re");
    }
  })
const singleProduct = products.find((p) => p.color === "black");
console.log(singleProduct);

class person {
  constructor(name, age, district) {
    this.name = name;
    this.age = age;
    this.district = district;
  }

  description() {
    console.log(
      `my name is ${this.name} my age is ${this.age} my hometown ${this.district}`
    );
  }
}

const newPerson = new person("abul", "20", "dhaka");
newPerson.description();
class hena extends person{
    constructor(name, age, district, institute){
        super(name, age, district);
        this.institute= institute;
    }
    bapparaj(){
        console.log(`henar name ki ${this.name} henar age ki ${this.age}`);
    }
}
const newHena = new hena ("hena", "22", "sylhet", "hero alom er bari");
newHena.bapparaj();
console.log(newHena);