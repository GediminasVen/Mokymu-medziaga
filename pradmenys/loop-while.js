console.log("================================");
console.log("====   ciklas for uzduotys      ====");
console.log("====   1 uzduotis:          ====");

let i = 1;
while (i <= 20) {
  console.log(i);
  i++;
}

console.log("====   2 uzduotis:          ====");

i = 1;

while (i <= 50) {
  if (i % 2 === 0) {
    console.log(i + " Lyginis");
  } else {
    console.log(i + " Nelyginis");
  }
  i++;
}

console.log("====   3 uzduotis:          ====");

i = 25;
while (i <= 50) {
  if (i % 3 === 0) {
    console.log(`Skaicius ${i} dalinasi is 3`);
  } else {
    console.log(i);
  }
  i++;
}

console.log("====   4 uzduotis:          ====");

i = 1;
while (true) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(`${i} dalinas is 3 ir 5`);
    break;
  } else {
    console.log(i);
  }
  i++;
}

console.log("====   5 uzduotis:          ====");

let skaiciuSuma = 0;
i = 1;

while (i <= 100) {
  if (i % 2 === 0) {
    skaiciuSuma += i;
  }
  i++;
}

console.log("Lyginiu skaiciu suma : " + skaiciuSuma);

console.log("====   6 uzduotis:          ====");

let skaicius = 1;

while (skaicius < 5) {
  console.log(`${skaicius} : skaiciaus kvadratas: ${skaicius * skaicius}`);
  skaicius++;
}

console.log("====   7 uzduotis:          ====");

let randomSkaicius = Math.random() * 100;

while (randomSkaicius > 0) {
  console.log(Math.floor(Math.random() * 100) + 1);
  randomSkaicius--;
}

console.log("====   8 uzduotis:          ====");

let kiekis = Math.random() * 100;
let suma = 0;

while (kiekis > 0) {
  let skaicius = Math.random() * 100;
  console.log(skaicius);
  suma += skaicius;
  kiekis--;
}

console.log("====   7 uzduotis:          ====");
console.log("====   7 uzduotis:          ====");
console.log("====   7 uzduotis:          ====");
console.log("====   7 uzduotis:          ====");

let skaiciai = 123456;
naujasSkaicius = 0;
while (skaiciai > 0) {
  naujasSkaicius = naujasSkaicius * 10 + (skaiciai % 10);
  skaiciai = Math.floor(skaiciai / 10);
}

console.log(naujasSkaicius);

console.log("================================");
console.log("================================");

let kava = 0.6;
let pinigai = 2.45;
let graza = 0;

if (pinigai > kava) {
  graza = pinigai - kava;
}
console.log(graza)
if (graza > 0) {
  let moneta50 = Math.floor(graza / 0.5);
  let moneta20 = Math.floor(
    (graza - moneta50 * 0.5) / 0.2
  )

  console.log('50:', moneta50);
  console.log('20:', moneta20);
  
  let moneta10 = Math.floor(
    (graza - moneta50 * 0.5 - moneta20 * 0.2) / 0.1
  );
  let moneta1 = Math.floor(
    (graza - moneta50 * 0.5 - moneta20 * 0.2 - moneta10 * 0.1) / 0.01
  );;

  console.log('10:', moneta10);
  console.log('1:', moneta1);

}









console.log("================================");
console.log("================================");
console.log("================================");
console.log("================================");
console.log("================================");
