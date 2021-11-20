var mercEQC = {
  make: "Mercedes",
  model: "EQC",
  power: 408,
  color: "Black",
  passengers: 4,
  convertible: false,
  weight: '1605',
  started: false,
  fuel: 1,
  volume: 'Battery capacity: 80 kWh',
  produc_year: 'January 2018',
  overclocking: 5.1,
  length: 4761,
    width: 1885,
    height: 1624,
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
