var merc220 = {
  make: "Mercedes",
  model: "E220D",
  power: 194,
  color: "Black",
  passengers: 5,
  convertible: false,
  weight: '2300',
  started: false,
  fuel: 2,
  volume: 66,
  produc_year: 'January 2016',
  overclocking: 7.4,
  length: 4826,
    width: 1860,
    height: 1430,
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
