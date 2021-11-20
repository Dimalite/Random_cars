var audi = {
  make: "Audi",
  model: "TT",
  power: 197,
  color: "grey",
  passengers: 4,
  convertible: false,
  weight: '1705',
  started: false,
  fuel: 4,
  volume: 50,
  produc_year: 'January 2018',
  overclocking: 6.6,
  length: 4191,
  width: 1832,
  height: 1376,
  start: function () {
    this.started = true;

  },
  stop: function () {
    this.started = false;


  },
  drive: function () {
    if (this.started) {
      if (this.fuel > 0) {

        alert(this.make + " " +
          this.model + " go!");
        console.log("car is moving!");
        this.fuel = this.fuel - 1;

      } else {
        alert("Uh oh, out of fuel.");
        tank.innerHTML = "Empty!"
        document.querySelector(".gauge__body").style.background = "Red";
        console.log('The car has stopped!');
        this.stop();
        ignition.pause();
        ignition.currentTime = 0;
        element.classList.remove("ignition2");
        alert("Leave the car or refuel it!")
      }
    } else {
      alert("First, you need to start the engine.");
    }
  },
  addFuel: function (amount) {
    this.fuel = this.fuel + amount;
  }

};
