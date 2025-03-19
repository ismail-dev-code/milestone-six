const handleAddToCart = () => {
  const productName = document.getElementById("productName");
  const productQuantity = document.getElementById("productQuantity");
  const name = productName.value;
  const quantity = productQuantity.value;

  productName.value = "";
  productQuantity.value = "";
  saveProductToLocalStorage(name, quantity);
  displayProduct(name, quantity);
};

const displayProduct = (name, quantity) => {
  const ul = document.getElementById("container");
  const li = document.createElement("li");
  li.innerText = `${name} ${quantity}`;
  ul.append(li);
};

const getProductFromLocalStorage = () => {
  let cart = {};
  const getProduct = localStorage.getItem("cart");
  if (getProduct) {
    cart = JSON.parse(getProduct);
  }
  return cart;
};

const displayProductFromLocalStorage = () => {
  const products = getProductFromLocalStorage();
  for (let product in products) {
    displayProduct(product, products[product])
  }
};

const saveProductToLocalStorage = (name, quantity) => {
  const cart = getProductFromLocalStorage();
  cart[name] = quantity;
  const cartString = JSON.stringify(cart);
  localStorage.setItem("cart", cartString);
};
displayProductFromLocalStorage();

// const product = {
//   laptop: 12
// }
// product["test"] = 100;
// console.log(product);
