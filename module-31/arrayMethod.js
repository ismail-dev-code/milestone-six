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
console.log(products);
products.forEach(Element=>{
 if(Element.color==="black"){
  console.log(Element);
 }
})
const newProducts =products.filter(Element=>Element.price>100000);
console.log(newProducts);
const productsNew = products.find(element=>element.id===3);
console.log(productsNew);
const prod = products.filter((Element) => Element.id !== 3);
console.log(prod);

const newProducts3 = products.map((p) => {
  if (p.brand === "apple") {
    p.price = p.price + 500;
  }
  return p;
});
console.log(newProducts3);

products.forEach((element) => {
  if (element.color === "black") {
    console.log(element)
  };
});
const singleProduct = products.find((p) => p.id === 4);
console.log(singleProduct);
const newProducts2 = products.filter((p) => p.brand == "apple");
console.log(newProducts2);