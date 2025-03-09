const person = {
  name: "hero alom",
  age: 10,
  friends: ["abul", "babul", "jhankar"],
  status: true,
};

const newPerson = JSON.stringify(person);
console.log(typeof newPerson);
const newPerson2 = JSON.parse(newPerson);
console.log(typeof newPerson2);
