const person = {
  name: "abul",
  profession: "actor",
  details: {
    company: "bfdc",
    district: "sylhet",
    father: "babul",
    movies: {
      year: 2025,
      name: "abul keno ashami",
      budget: 100000,
      isFamous: false,
    },
  },
};

console.log(person.details.mother?.isFamous);