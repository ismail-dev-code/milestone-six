class vehicle {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  move() {
    console.log("ami dowraite pari re");
  }
}
const vehicleV = new vehicle("toyota", "3000000");
vehicleV.move();

class bus extends vehicle {
  constructor(name, price, seat) {
    super(name, price);
    this.seat = seat;
  }
  route() {
    console.log("noakhali to sylhet");
  }
}
const busV = new bus("mitsubishi", "5000000", "40");
busV.route();

class truck extends vehicle {
  constructor(name, price, carryLoad) {
    super(name, price);
    this.carryLoad = carryLoad;
  }
  area() {
    console.log("only dhaka to ctg area");
  }
}
const truckV = new truck("mahindra truck", "2500000", "40K Kg");
truckV.area();
console.log(`eta vehicle: ${vehicleV.price} eta bus: ${busV.seat} eta truck: ${truckV.carryLoad}`);