console.log("===============1 uzd=================");

let valgiai = ["Pica", "Sushi", "Vistiena", "Salotos", "Lazanija"];

valgiai.unshift("Mica");
console.log("Pridetas priekyje: ", valgiai);

valgiai.push("Bulviu Kose");
console.log("Pridetas i gala: ", valgiai);

valgiai.splice(2, 2, "Sriubyte");
console.log("Prideta su splice;", valgiai);

valgiai.shift();
console.log("Istrinam", valgiai);

valgiai.pop();
console.log("Istrinam pabaigoj: ", valgiai);

console.log("===============2 uzd=================");

let randomMasyv = [3, 6, 7, 8, 2, 22, 3, 6];

console.log(
  "Masyvas",
  randomMasyv,
  "turi pasirinka skaiciu : 3",
  randomMasyv.includes(3)
);

console.log("===============3 uzd=================");

let zodziuMasyvas = ["Rodeo", "Kaina", "Vilma", "Emi"];

let sujungti = zodziuMasyvas.join("- ");
console.log(sujungti);
sujungti = zodziuMasyvas.join(", ");
console.log(sujungti);
sujungti = zodziuMasyvas.join("____ ");
console.log(sujungti);

console.log("===============4 uzd=================");

let pazymiuMasyvas = [3, 4, 7, 8, 2, 6];

let surikiuotiSkaic = pazymiuMasyvas.slice().sort((a, b) => b - a);
console.log("Surikiuoti skaiciai:", surikiuotiSkaic);
let trysDidzPazymiai = surikiuotiSkaic.slice(0, 3);
console.log("Didziausi pazymiai: ", trysDidzPazymiai);

console.log("===============5 uzd=================");

let biologijosStudentai = ["Laura", "Ona", "Marius", "Zigmas", "Jonas"];
let matematikosStudentai = ["Kreta", "Aivaras", "Marius", "Jurate", "Tomas"];

console.log("Biologijos studentai: ", biologijosStudentai);
console.log("Matematikos studentai: ", matematikosStudentai);

let sujungtiStudentai = biologijosStudentai.concat(matematikosStudentai);

console.log("Sujungti studentai: " + sujungtiStudentai);

console.log("===============6 uzd=================");

let pirmasSemestras = ["Info", "Medicina", "Farmacija", "Nemadas"];
let antrasSemestras = [
  "Matematika",
  "Latviu",
  "Prancuzu",
  "Reabilitacija nuo mokslu",
];

console.log("Pirmas semestras: ", pirmasSemestras);
console.log("Antras semestras: ", antrasSemestras);

let sujungtiSemestrai = [...pirmasSemestras, ...antrasSemestras];
const sujungtiSemestrai2 = Array.of(pirmasSemestras, antrasSemestras); // static method
let sujungtiSemestrai3 = new Array(pirmasSemestras, antrasSemestras);

console.log("Sujungti semestrai: " + sujungtiSemestrai);
console.log("Sujungti semestrai: " + sujungtiSemestrai2);
console.log("Sujungti semestrai: " + sujungtiSemestrai3);
console.log("===============7 uzd=================");

let spalvos = ["raudona", "melyna", "geltona", "rozine"];

let kopija = [...spalvos];

spalvos = [];
console.log(spalvos);
console.log(kopija);

console.log("===============8 uzd=================");

let miestai = ["Vilnius", "Jurbarkas", "Mariuke", "Ploksciai", "Naujamiestis"];
let uniqueMiestas = "Vilnius";

let miestoPozicija = miestai.indexOf(uniqueMiestas);

console.log(miestai);
console.log(miestoPozicija);
console.log("===============7 uzd=================");

let skaiciuMasyvelis = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let dupesFound = false;

for (let i = 0; i < skaiciuMasyvelis.length; i++) {
  if (skaiciuMasyvelis.indexOf(skaiciuMasyvelis[i]) !== i) {
    dupesFound = true;
    break;
  }
}
if (dupesFound) {
  console.log("Dupes found");
} else {
  console.log("dupes no bueno, try again next year");
}

console.log("===============7 uzd=================");

let chunkMasyvas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log("===============11 uzd=================");

let pirmasisMasyvas = [1, 3, 5, 6, 7, 8, 9];
let antrasisMasyvas = [3, 6, 7, 4, 5, 8];
let tusciasMasyvas = [];

for (let i = 0; i < pirmasisMasyvas.length; i ++) {
    if (!tusciasMasyvas.includes(pirmasisMasyvas[i])) {
        tusciasMasyvas.push(pirmasisMasyvas[i]);
    }
}

for (let i = 0; i < antrasisMasyvas.length; i++) {
    if (!tusciasMasyvas.includes(antrasisMasyvas[i])) {
        tusciasMasyvas.push(antrasisMasyvas[i]);
    }
}

console.log(pirmasisMasyvas);
console.log(antrasisMasyvas);
console.log(tusciasMasyvas);

console.log("===============7 uzd=================");
