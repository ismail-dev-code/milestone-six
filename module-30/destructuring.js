const person = {
  name: "abul",
  profession: "actor",
  district: "sylhet",
  age: 10,
  status: "Not Found",
};

const { age, status, profession, district, name } = person;

// console.log(district, age);
const friends = [
  "hero alom",
  "ripon vdeo",
  { district: "sylhet" },
  "ar kita koitam",
];

const [actor, arekpagla, maya, hoice] = friends;
console.log(hoice);