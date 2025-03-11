const age = 10;
console.log("eta hocce first", age);

fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((res) => res.json())
  .then((data) => console.log("eta hocce 2nd", data));

setTimeout(() => {
  console.log("ami hocce 3rd");
}, 2000);

const amaarFunction = () => {
  console.log("eta hocce 4th");
};
amaarFunction();

const person = {
  name: "abul",
  age: 8,
  profession: "cowboy",
};

console.log("eta hocce 5th", person.profession);
