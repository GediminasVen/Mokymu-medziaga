console.log("================================");

let studijos = ['medicina', 'sportas', 'maths', 'kazkas'];

for (let i = 0; i < studijos.length; i++) {
    console.log(studijos[i]);
};


console.log("================================");

let salys = ['latvija', 'estija', 'lietuva', 'uk'];
let i = 0;

while (i < salys.length){
    console.log("Salis: " +salys[i]);
    i++;
}

console.log("For")
for (let i = 0; i < salys.length; i++) {
    console.log("salis for; " + salys[i])
}

console.log("================================");

let projektai = ['projektas1', 'projektas2', 'projektas3', 'projektas4']

for (let i = 0; i < projektai.length; i++) {
    console.log((i + 1) + "-asis Projekto pavadinimas : " + projektai[i])
}

i = 0;

while (i < projektai.length) {
     console.log((i + 1) + "-asis Projekto While pavadinimas: " + projektai[i]);
     i++;
}

console.log("================================");


let skaiciuMasyvas = [9, 8, 7, 6, 5, 4];

i = 0;

while (i < skaiciuMasyvas.length) {
    if (skaiciuMasyvas[i] > 5) {
        console.log("Didesni nei 5 : " + skaiciuMasyvas[i]);
    }
    i++;
}

console.log("==============5 uzduotis==================");

let randomskaiciuMasyvas = [];
for (let i = 0; i < 10; i++) {
    randomskaiciuMasyvas.push(Math.floor(Math.random() * 100) + 1)
}

let skaiciuSuma = 0;
 i = 0;

 while (i < randomskaiciuMasyvas.length) { 
    if (randomskaiciuMasyvas[i] % 4 === 0) {
        skaiciuSuma += randomskaiciuMasyvas[i];
    }
    i++;
 }
 console.log("Skaiciu masyvas: " + randomskaiciuMasyvas);
 console.log("Skaiciai kurie dalinasi is 4 suma: " + skaiciuSuma);

skaiciuSuma = 0

 for (let i = 0; i < randomskaiciuMasyvas.length; i++) {
    if (randomskaiciuMasyvas[i] % 4 === 0) {
        skaiciuSuma += randomskaiciuMasyvas[i];
    }

 }

 console.log("Skaiciu masyvas:[for] " + randomskaiciuMasyvas);
 console.log("Skaiciai kurie dalinasi is 4 suma:[for] " + skaiciuSuma);

console.log("=============6 uzduotis===================");

let pazymiai = [];
for (let i = 0; i < 10; i++) {
    pazymiai.push(Math.floor(Math.random() * 10) + 1);
}

let pazymiuSuma = 0;
i = 0;

while (i < pazymiai.length) {
    pazymiuSuma += pazymiai[i];
    i++;
}

let vidurkis = pazymiuSuma / pazymiai.length;
console.log("Pazymiai: ", pazymiai);
console.log("Vidurkis: ", vidurkis);


console.log("================================");
console.log("===============7 uzd=================");

let pazymiaiAntras = [];
for (let i = 0; i < 10; i++) {
    pazymiaiAntras.push(Math.floor(Math.random() * 10) + 1);
}

let pazymiuSumaAntras = 0;
for (let i = 0; i < 10; i++) {
    pazymiuSumaAntras += pazymiaiAntras[i];
}
let vidurkisAntras = pazymiuSumaAntras / pazymiaiAntras.length;

let didesniNeiVidurkis = [];
for (let i = 0; i < 10; i++) {
    if (pazymiaiAntras[i] > vidurkisAntras) {
        didesniNeiVidurkis.push(pazymiaiAntras[i]);
    }
    
}

console.log("pazymiai", pazymiaiAntras)
console.log("vidurkis for visuals", vidurkis)
console.log("Didesni nei vidurkis", didesniNeiVidurkis)


console.log("================================");
console.log("=============8 uzduotis===================");

let skaiciai = [8, 7, 9, 9, 4, 11, 8, 3, 22];
i = 0;
while (i < skaiciai.length) {
    if (skaiciai[i] % 2 === 0) {
        console.log("Skaicius: " + skaiciai[i], "- Kvadratas = " + (skaiciai[i] ** 2));
    } else {
        console.log(`Skaicius: ${skaiciai[i]}`)
    }
    i++;
}

console.log("=============9 uzduotis===================");


let studentoPazymiai = [2, 3, 8, 8, 9, 4, 5];

for (let i = 0; i < studentoPazymiai.length; i++) {
    if (studentoPazymiai[i] >= 5) {
        console.log("Pazymys: " + studentoPazymiai[i], " - patenkinamas pazymys")
    } else {
        let trukoBalo = 5 - studentoPazymiai[i];
        console.log("Pazymys: " + studentoPazymiai[i], " - Nepatenkinamas pazymys, truko: " + trukoBalo, "iki teigiamo pazymio")
    }
}

console.log("=============10 uzduotis===================");

let paskutinisSkaiciuMasyvas = [];
for (let i = 0; i < 10; i++) {
    paskutinisSkaiciuMasyvas.push(Math.floor(Math.random() * 100) + 1);
}

suma = 0;
let skaiciuKiekis = 0;
let skaiciaiDalinasiIsTriju = [];

for (let j = 0; j < paskutinisSkaiciuMasyvas.length; j++) {
    if (paskutinisSkaiciuMasyvas[j] % 3 == 0) {
        suma += paskutinisSkaiciuMasyvas[j];
        skaiciuKiekis++;
        skaiciaiDalinasiIsTriju.push(paskutinisSkaiciuMasyvas[j]);
    }
}

let delVaizdoDalybai = suma / 3;

if (skaiciuKiekis > 0) {
    vidurkis = suma / skaiciuKiekis;
} else {
    vidurkis = 0;
}

console.log("Skaiciu Masyvas: ", paskutinisSkaiciuMasyvas);
console.log(`Skaiciai kurie dalinasi is 3: ${skaiciaiDalinasiIsTriju}`);
console.log("Skaiciu kurie dalinasi is 3 suma: ", suma , ` Cia tik del vizualo - ${suma} / 3 = `, delVaizdoDalybai);
console.log("Vidurkis: ", vidurkis);
