let studentai = [
  {
    vardas: "Romas",
    pavarde: "Pavarde",
    amzius: 25,
    pazymiai: [2, 6, 7, 8, 9],
    studijuPrograma: "Medicina",
    kursas: 1,
  },
  {
    vardas: "Vilma",
    pavarde: "Piene",
    amzius: 19,
    pazymiai: [6, 6, 6, 9, 9],
    studijuPrograma: "Matematika",
    kursas: 2,
  },
  {
    vardas: "Rokas",
    pavarde: "Vokas",
    amzius: 33,
    pazymiai: [9, 9, 10, 8, 9],
    studijuPrograma: "HR",
    kursas: 4,
  },
];

let bendrasVidurkis = 0;
let bendrasPazymiuSkaicius = 0;

for (let studentas of studentai) {
  let suma = 0;

  for (let pazymys of studentas.pazymiai) {
    suma += pazymys;
  }

  let vidurkis = suma / studentas.pazymiai.length;

  bendrasVidurkis += suma;
  bendrasPazymiuSkaicius += studentas.pazymiai.length;
  console.log("-----");
  console.log(
    `${studentas.vardas} ${studentas.pavarde}, ${studentas.amzius} metų, studijų programa: ${studentas.studijuPrograma}, kursas: ${studentas.kursas}`
  );
  console.log(`Pažymiai: ${studentas.pazymiai.join(", ")}`);
  console.log(`Pažymių vidurkis: ${vidurkis.toFixed(2)}`);
  console.log("-----");
}

let galutinisVidurkis = bendrasVidurkis / bendrasPazymiuSkaicius;
console.log(
  `Bendras visų studentų pažymių vidurkis: ${galutinisVidurkis.toFixed(2)}`
);
console.log("-----");






const parduotuve = {
    pavadinimas: "Varle",
    adresas: "Kauno gatve 12A, Vilnius",
    darbuotojuKiekis: 100,
    prekes: [
        { pavadinimas: "Kompiuteris", kodas: "K001", kaina: 900, savikaina: 700, kiekis: 15 },
        { pavadinimas: "Monitorius", kodas: "K002", kaina: 200, savikaina: 150, kiekis: 25 },
        { pavadinimas: "Klaviatūra", kodas: "K003", kaina: 50, savikaina: 30, kiekis: 40 },
        { pavadinimas: "Pelė", kodas: "K004", kaina: 25, savikaina: 15, kiekis: 50 },
        { pavadinimas: "Ausinės", kodas: "K005", kaina: 75, savikaina: 50, kiekis: 30 }
    ]
};

console.log(`Parduotuvė: ${parduotuve.pavadinimas}`);
console.log(`Adresas: ${parduotuve.adresas}`);
console.log(`Darbuotojų kiekis: ${parduotuve.darbuotojuKiekis}`);
console.log("-----");
console.log("Prekės:");

let bendrasKiekis = 0;
let daugiausiaiTurimaPreke = parduotuve.prekes[0];
let maziausiaiTurimaPreke = parduotuve.prekes[0];

for (let preke of parduotuve.prekes) {
    console.log(`${preke.pavadinimas} - Kaina: ${preke.kaina} €, Kiekis: ${preke.kiekis} vnt.`);

    bendrasKiekis += preke.kiekis;

    if (preke.kiekis > daugiausiaiTurimaPreke.kiekis) {
        daugiausiaiTurimaPreke = preke;
    }

    if (preke.kiekis < maziausiaiTurimaPreke.kiekis) {
        maziausiaiTurimaPreke = preke;
    }
}

console.log("-----");
console.log(`Bendras prekių kiekis: ${bendrasKiekis} vnt.`);

console.log(`Daugiausiai turima prekė: ${daugiausiaiTurimaPreke.pavadinimas} (${daugiausiaiTurimaPreke.kiekis} vnt.)`);
console.log(`Mažiausiai turima prekė: ${maziausiaiTurimaPreke.pavadinimas} (${maziausiaiTurimaPreke.kiekis} vnt.)`);
