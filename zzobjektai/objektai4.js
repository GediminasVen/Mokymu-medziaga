let imones = [
  {
    name: "kedes uab",
    ikurimometai: 2015,
    darbuotojuKiekis: 31,
    pelnas: 3333,
  },
  {
    name: "Organic UAB",
    ikurimometai: 2018,
    darbuotojuKiekis: 31,
    pelnas: 3333,
  },
  {
    name: "BLYNAI UAB",
    ikurimometai: 2020,
    darbuotojuKiekis: 31,
    pelnas: 3333,
  },
];

const dabartiniaiMetai = new Date().getFullYear();

imones.forEach((imone) => {
  console.log(
    `${imone.name} ikurta ${imone.ikurimometai} imoneje dirba ` +
      `${imone.darbuotojuKiekis} darbuotojai ir pelnas yra : ${imone.pelnas}`
  );
});

let bendrasAmzius = 0;
let bendrasDarbuotojuKiekis = 0;
let bendrasPelnas = 0;

for (let i = 0; i < imones.length; i++) {
  const amzius = dabartiniaiMetai - imones[i].ikurimometai;
  bendrasAmzius += amzius;
  bendrasDarbuotojuKiekis += imones[i].darbuotojuKiekis;
  bendrasPelnas += imones[i].pelnas;
}

let vidutinisAmzius = bendrasAmzius / imones.length;

console.log(`Bendras vidutinis imoniu amzius: ${vidutinisAmzius.toFixed()} metu.`);
console.log(`Bendras darbuotojų kiekis: ${bendrasDarbuotojuKiekis} darbuotoju.`);
console.log(`Bendras pelnas: ${bendrasPelnas}.`);
