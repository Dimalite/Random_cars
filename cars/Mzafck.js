var ford = {
  make: "MzaFord fck",
  model: "Aspire",
  power: 64,
  color: "Yellow",
  passengers: 5,
  convertible: false,
  weight: '2004',
  started: false,
  fuel: 4,
  volume: 59,
  produc_year: 'January 1994',
  overclocking: 7.1,
  length: 3960,
    width: 1689,
    height: 1412,
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
