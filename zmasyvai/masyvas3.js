console.log("===============1 uzd=================");


let zodziai = ["namas", "butas", "bebutas", "benamis", "nuomoskainos?"];

for (let zodis in zodziai)
    console.log(zodis, zodziai[zodis])
console.log("===============2 uzd=================");
let pirkiniai = ["pienas", "duona", "suris", "heetsai"];

console.log("Pirkiniu kiekis: ", pirkiniai.length);

for (let pirkinys of pirkiniai) {
    console.log("- " + pirkinys)
}
console.log("===============3 uzd=================");

let pazymiai = [8, 3, 7, 8, 4, 8, 9];
let suma = 0;
for (let pazymys of pazymiai) {
    suma += pazymys;
}
console.log("Pazymiai :")
let vidurkis = suma / pazymiai.length;
for (let pazymys of pazymiai) {
    // console.log("Pazymiai :")
    console.log( "- ", pazymys)
}
console.log("vidurkis: ", Math.floor(vidurkis))
console.log("vidurkis: ", vidurkis)
console.log("===============4 uzd=================");

let kelionesKm = [150, 30, 500, 85, 430];

for (let dienosKm of kelionesKm) {
    if (dienosKm > 150) {
        console.log("Nuvaziuoti KM, didesni nei 150 :", dienosKm);
    };
}

console.log("===============6 uzd=================");

let autos = ["audi", "bmw", "citroen", "vw"];

for (let auto of autos){
    console.log(auto, " - ", "Zodis susidaro is ", auto.length, "raidziu")
}

console.log("===============7 uzd=================");

let errorKodas = ["err1", "err2", "err3"];

console.log(errorKodas[0], "susprogs sistema");
console.log(errorKodas[1], "susprogs sistema");
console.log(errorKodas[2], "susprogs sistema");


console.log("===============7 uzd=================");

let kiekisSandelyje = [33, 94, 235, 44, 534];
let parduodamPerDiena = 5;

for (let likutis of kiekisSandelyje) {
console.log(likutis + 'nt uzteks mazdaug tiek d' + Math.round(likutis/parduodamPerDiena));
}


console.log("===============7 uzd=================");

pazymiai = [];
for (let i = 0; i < 20; i++) {
    let atsitiktinisPazymys = Math.floor(Math.random() * 10) + 1;
    pazymiai.push(atsitiktinisPazymys);
}

suma = 0;
for (let pazymys of pazymiai) {
    suma += pazymys;
}
vidurkis = suma / pazymiai.length;

let neigiami = 0;
for (let pazymys of pazymiai) {
    if (pazymys < 5) {
        neigiami++;
    }
}

let teigiami = [];
for (let pazymys of pazymiai) {
    if (pazymys >= 5) {
        teigiami.push(pazymys);
    }
}

console.log("Visi pažymiai:", pazymiai);
console.log("Vidurkis:", vidurkis.toFixed(2));
console.log("Neigiamų pažymių kiekis:", neigiami);
console.log("Teigiami pažymiai:", teigiami);

console.log("===============7 uzd=================");
console.log("===============7 uzd=================");
console.log("===============7 uzd=================");
console.log("===============7 uzd=================");
console.log("===============7 uzd=================");
