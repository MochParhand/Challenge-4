// class App {
//   constructor() {
//     this.clearButton = document.getElementById("clear-btn");
//     this.loadButton = document.getElementById("load-btn");
//     this.carContainerElement = document.getElementById("cars-container");
//   }

//   async init() {
//     await this.load();

//     // Register click listener
//     this.clearButton.onclick = this.clear;
//     this.loadButton.onclick = this.run;
//   }

//   run = () => {
//     Car.list.forEach((car) => {
//       const node = document.createElement("div");
//       node.innerHTML = car.render();
//       this.carContainerElement.appendChild(node);
//     });
//   };

//   async load() {
//     const cars = await Binar.listCars();
//     Car.init(cars);
//   }

//   clear = () => {
//     let child = this.carContainerElement.firstElementChild;

//     while (child) {
//       child.remove();
//       child = this.carContainerElement.firstElementChild;
//     }
//   };
// }

class App {
  constructor() {
    this.btnSearchCars = document.getElementById("load-btn");
    this.carContainerElement = document.getElementById("cars-container");
  }

  async init() {
    this.btnSearchCars.onclick = await this.run;
  }

  run = async () => {
    await this.load();
    Car.list.forEach((car) => {
      const node = document.createElement("div");
      node.innerHTML = car.render();
      this.carContainerElement.appendChild(node);
    });
  };

  async load() {
    const driver = document.getElementById("driver");
    const penumpang = document.getElementById("passanger");
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;
    const dateTime = `${date}${time}`;

    const filterer = {
      driver: driver.value,
      passenger: penumpang.value,
      dateTime: dateTime,
    };

    const cars = await Binar.listCars(filterer);
    Car.init(cars);
  }
}
