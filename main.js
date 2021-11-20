var car = {
  make: "Fiat",
  model: "500",
  year: 1955,
  color: "yellow",
  passengers: 4,
  convertible: false,
  mileage: 281341,
  started: false,
  fuel: 1,
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


// const one = document.querySelector('.one').onclick = replace1;
// const two = document.querySelector('.two').onclick = replace2;
// const tree = document.querySelector('.tree').onclick = replace3;
// const four = document.querySelector('.four').onclick = replace4;
// const five = document.querySelector('.five').onclick = replace5;

const txt = document.querySelector('h1');

const photo = document.getElementById('img');
// ........................................................Sounds...............
const noise = document.createElement('audio');
noise.setAttribute('src', './sounds/shum-goroda.mp3');
noise.volume = 0.2;
// noise.play();
const ignition = document.createElement('audio');
ignition.setAttribute('src', './sounds/dvigatel.mp3');
ignition.volume = 1;
// ignition.play();
// ...........................................................................
const myTormoz = document.getElementById('Z');
const myGaz = document.getElementById('gazon')
const tank = document.querySelector('.tank');
const gaugeElement = document.querySelector('.gauge');
let element = document.getElementById("myButton");
let start = document.querySelector('.start');
// start.onclick = starterOn;


// +++++ Main Function +++++++++++++

function test(car) {
  noise.play();
  let start = document.getElementById('start');
  start.onclick = starterOn;

  const drive = document.querySelector('.gazon').onclick = go;
  const stop = document.querySelector('.tormoz').onclick = starterOff;
  const addFuel = document.querySelector('.addFuel').onclick = fuel;


  function setGaugeValue(gauge, value) {
    if (value < 0 || value > 10) {
      return;
    }
    gauge.querySelector(".gauge__fill").style.transform = `rotate(${value / 20}turn)`;
    gauge.querySelector(".gauge__cover").textContent = `${value}`;
  }

  function fuelScreen() {
    setGaugeValue(gaugeElement, car.fuel);
    if (car.fuel == 0) {
      // document.querySelector(".gauge__body").style.background = "Red";
    } else if (car.fuel == 1 || car.fuel == 0) {
      document.querySelector(".gauge__fill").style.background = "OrangeRed";
      tank.innerHTML = "Empty soon!"
    } else if (car.fuel == 2 || car.fuel == 3) {
      document.querySelector(".gauge__fill").style.background = "DarkOrange";
      tank.innerHTML = "Half full."
    } else if (car.fuel == 10) {
      tank.innerHTML = "Tank full."
    } else {
      document.querySelector(".gauge__fill").style.background = "#009578";
    }
  }

  function starterOn() {
    car.start();
    ignition.play();
    // shum.pause();
    // shum.currentTime = 0;
    element.innerText = "Start on"

    if (element.classList.contains('ignition2')) {
      element.classList.remove('ignition2');
      starterOff();
    } else {
      element.classList.add('ignition2');
    }
  };
  // if (gaugeCar == 0) {
  //   document.querySelector('.ignition').onclick = null;
  //   alert("First, you need to start the engine.");
  // }
  function starterOff() {
    element.classList.remove("ignition2");
    car.stop();
    element.innerText = "Start Off"
    ignition.pause();
    ignition.currentTime = 0;
  };

  function go() {
    car.drive();
    fuelScreen();
  };

  function fuel() {
    car.addFuel(1);
    fuelScreen();
  };

  fuelScreen();

}

