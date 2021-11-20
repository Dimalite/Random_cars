const one = document.querySelector('.one').onclick = replace1;
const two = document.querySelector('.two').onclick = replace2;
const tree = document.querySelector('.tree').onclick = replace3;
const four = document.querySelector('.four').onclick = replace4;
const five = document.querySelector('.five').onclick = replace5;
let characters = document.querySelectorAll('.char');
let dimen = document.querySelectorAll('.dimen');



function replace1() {
  myGaz.className += " gaz1";
  myTormoz.className += " tormoz1";
  start.setAttribute('class', 'start1');
  photo.setAttribute('src', './img/audi-tt-n8-10.jpg');
  
  txt.innerText = ' Audi TT 8N';
  test(audi);
  characters[0].innerHTML = 'Fuel: ' + audi.fuel;
  characters[1].innerHTML = 'Production year: ' + audi.produc_year;
  characters[2].innerHTML = 'Power, hp: ' + audi.power;
  characters[3].innerHTML = 'Acceleration time to 100 km / h.: ' + audi.overclocking + ' sec.';
  characters[4].innerHTML = 'Number of seats: ' + audi.passengers;
  characters[5].innerHTML = 'Fuel tank volume, l.: ' + audi.volume;
  characters[6].innerHTML = 'Weight: ' + audi.weight + ' kg';
  dimen[0].innerHTML = 'Length: ' + audi.length + ' mm.';
  dimen[1].innerHTML = 'Width: ' + audi.width + ' mm.';
  dimen[2].innerHTML = 'Height: ' + audi.height + ' mm.';


}
function replace2() {
  photo.setAttribute('src', './img/mercedes EQC.jpg');
  myGaz.className += " gaz1";
  myTormoz.className += " tormoz1";
  start.setAttribute('class', 'start1');
  start.classList.add('start');

  txt.innerText = 'Mercedes EQC';
  test(mercEQC);
  characters[0].innerHTML = 'Fuel: ' + mercEQC.fuel;
  characters[1].innerHTML = 'Production year: ' + mercEQC.produc_year;
  characters[2].innerHTML = 'Power, hp: ' + mercEQC.power;
  characters[3].innerHTML = 'Acceleration time to 100 km / h.: ' + mercEQC.overclocking + ' sec.';
  characters[4].innerHTML = 'Number of seats: ' + mercEQC.passengers;
  characters[5].innerHTML = mercEQC.volume;
  characters[6].innerHTML = 'Weight: ' + mercEQC.weight + ' kg';
   dimen[0].innerHTML = 'Length: ' + mercEQC.length + ' mm.';
   dimen[1].innerHTML = 'Width: ' + mercEQC.width + ' mm.';
   dimen[2].innerHTML = 'Height: ' + mercEQC.height + ' mm.';
}

function replace3() {
  photo.setAttribute('src', './img/m-b e 220 d4Matic all-Terrain Luxury.jpg');
  myGaz.className += " gaz1";
  myTormoz.className += " tormoz1";
  start.setAttribute('class', 'start1');
  txt.innerText = 'Mercedes-Benz e 220 d4Matic';
  test(merc220);
  characters[0].innerHTML = 'Fuel: ' + merc220.fuel;
  characters[1].innerHTML = 'Production year: ' + merc220.produc_year;
  characters[2].innerHTML = 'Power, hp: ' + merc220.power;
  characters[3].innerHTML = 'Acceleration time to 100 km / h.: ' + merc220.overclocking + ' sec.';
  characters[4].innerHTML = 'Number of seats: ' + merc220.passengers;
  characters[5].innerHTML = 'Fuel tank volume, l.: ' + merc220.volume;
  characters[6].innerHTML = 'Weight: ' + merc220.weight + ' kg';
  dimen[0].innerHTML = 'Length: ' + merc220.length + ' mm.';
  dimen[1].innerHTML = 'Width: ' + merc220.width + ' mm.';
  dimen[2].innerHTML = 'Height: ' + merc220.height + ' mm.';
}

function replace4() {
  photo.setAttribute('src', './img/MzafcKltVQR.jpg');
  myGaz.className += " gaz1";
  myTormoz.className += " tormoz1";
  start.setAttribute('class', 'start1');
  txt.innerText = 'Ford Aspire ';
  test(ford);
  characters[0].innerHTML = 'Fuel: ' + ford.fuel;
  characters[1].innerHTML = 'Production year: ' + ford.produc_year;
  characters[2].innerHTML = 'Power, hp: ' + ford.power;
  characters[3].innerHTML = 'Acceleration time to 100 km / h.: ' + ford.overclocking + ' sec.';
  characters[4].innerHTML = 'Number of seats: ' + ford.passengers;
  characters[5].innerHTML = 'Fuel tank volume, l.: ' + ford.volume;
  characters[6].innerHTML = 'Weight: ' + ford.weight + ' kg';
  dimen[0].innerHTML = 'Length: ' + ford.length + ' mm.';
  dimen[1].innerHTML = 'Width: ' + ford.width + ' mm.';
  dimen[2].innerHTML = 'Height: ' + ford.height + ' mm.';
}

function replace5() {
  photo.setAttribute('src', './img/Fiat-500X_Sport.jpg');
  myGaz.className += " gaz1";
  myTormoz.className += " tormoz1";
  start.setAttribute('class', 'start1');
  txt.innerText = 'Fiat-500X_Sport';
  test(fiat);
  characters[0].innerHTML = 'Fuel: ' + fiat.fuel;
  characters[1].innerHTML = 'Production year: ' + fiat.produc_year;
  characters[2].innerHTML = 'Power, hp: ' + fiat.power;
  characters[3].innerHTML = 'Acceleration time to 100 km / h.: ' + fiat.overclocking + ' sec.';
  characters[4].innerHTML = 'Number of seats: ' + fiat.passengers;
  characters[5].innerHTML = 'Fuel tank volume, l.: ' + fiat.volume;
  characters[6].innerHTML = 'Weight: ' + fiat.weight + ' kg';
  dimen[0].innerHTML = 'Length: ' + fiat.length + ' mm.';
  dimen[1].innerHTML = 'Width: ' + fiat.width + ' mm.';
  dimen[2].innerHTML = 'Height: ' + fiat.height + ' mm.';
}