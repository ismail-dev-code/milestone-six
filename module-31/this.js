class person {
  #district;
  constructor(name, age, district) {
    this.name = name;
    this.age = age;
    this.#district = district;
  }

  details() {
    console.log(
      `his name is ${this.name} his age is ${this.age} his hometown ${
        this.#district
      }`
    );
  }
  action() {
    console.log(this.#district);
  }
}
const soliMuddin = new person("solim mia", "10", "sylhet");
soliMuddin.action();
