// const person = {
//   name: "abul",
//   profession: "actor",
//   district: "sylhet",
//   age: 10,
//   status: "Not Found",
// };

// Object.seal(person); eita diye existing jei property value ace ogulo change kora jabe
// Object.freeze(person); eta diye kono kicu change kora jabena
// person.name= "babul";


// console.log(person);
//   console.log(Object.keys(person));
// console.log(Object.values(person));
// console.log(Object.entries(person)[2]);
// for(let obj in Object.entries(person)[2]){

// }

const person = {
    name: "abul",
    profession: "actor",
    district: "sylhet",
    age: 10,
    status: "Not Found",
  };

//   for(let key in person){
//     console.log(` key: ${key} value: ${person[key]}`);
//   }
const array = Object.entries(person);

for(let [key, value] of array){
    console.log(`key: ${key} value: ${value}`);
}