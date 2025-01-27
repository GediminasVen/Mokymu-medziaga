let studentai = {
    vardas: 'Vilma',
    pavarde: 'Lape',
    amzius: 22,
    ugis: 190,
    kursas: 3,
    mokykla: 'VU'
}
console.log(studentai)

console.log("===============2 uzd=================");

let filmas = {
    pavadinimas: 'Vienas',
    rezisierius: 'Ponas',
    biudzetas: 123456,
    uzdarbis: 654321,
    zanras: 'Romanas',
    trukme: 2.5,
    metai: 2010,
    aktoriai: ['Vilma', 'Rimas', 'Kazys']
}

console.log(filmas)
console.log("uzdirbo: ", filmas.uzdarbis - filmas.biudzetas);
console.log(filmas.aktoriai.length)
console.log("Filmo amzius: ",new Date(Date.now()).getFullYear() - filmas.metai)

console.log("===============3 uzd=================");

let knyga1 = {
    pavadinimas: 'Romualdija',
    autorius: 'Kestutis',
    zanras: 'Drama',
    kaina: 12,
    puslapiai: 123,
    skyriai: ['Pirmas', 'Antras', 'Trecias', 'Ketvirtas'],
    metai: 2000,
    knygynuose: false
}

let knyga2 = {
    pavadinimas: 'Roma',
    autorius: 'Nestutis',
    zanras: 'Romanas',
    kaina: 7,
    puslapiai: 13,
    skyriai: ['Pirmas', 'Antras', 'Trecias', 'Ketvirtas'],
    metai: 2020,
    knygynuose: true
}

console.log("Pirma Knyga: ",knyga1);
console.log("Antra Knyga: ",knyga2);

let maziauPsl = knyga1.puslapiai < knyga2.puslapiai ? knyga1 : knyga2;
console.log("Knyga turinti maziau puslpaiu: ", maziauPsl.pavadinimas);

let daugiauSkyriu = knyga1.skyriai.length > knyga2.skyriai.length ? knyga1 : knyga2;
console.log("Daugiau skyriu turinti knyga: ", daugiauSkyriu.pavadinimas)

if(knyga2.kaina * 2 > knyga1.kaina) {
    console.log("Padauginus antros knygos suma, kaina brangesne")
} else {
    console.log("Kaina nera brangesne")
}

console.log("===============4 uzd=================");

let prekes1 = {
    pavadinimas: 'Pienas',
    kaina: 3.40,
    savikaina: 1.10,
    kodas: 2314343523,
    kiekisSandelyje: 34,
    matmenys: { x: 5, y: 10, z: 30}

}
let prekes2 = {
    pavadinimas: 'TV',
    kaina: 340,
    savikaina: 110,
    kodas: 8493234,
    kiekisSandelyje: 100,
    matmenys: { x: 500, y: 100, z: 3000}

}
let prekes3 = {
    pavadinimas: 'Saldytuvas',
    kaina: 90,
    savikaina: 50,
    kodas: 324123,
    kiekisSandelyje: 3,
    matmenys: { x: 5000, y: 1000, z: 4000}
}

console.log("Pirma preke: ", prekes1);
console.log("Antra preke: ", prekes2);
console.log("Trecia preke: ", prekes3);

console.log(`Pirmos prekes kaina: ${prekes1.kaina}eur, Antros prekes kaina: ${prekes2.kaina}eur, Trecios prekes kaina: ${prekes3.kaina}eur`);
let brangiausia = prekes1.kaina;
if (prekes2.kaina > brangiausia) {
    brangiausia = prekes2.kaina;
} 
if (prekes3.kaina > brangiausia) {
    brangiausia = prekes3.kaina;
}
console.log("Brangiausia prekes kaina: ",brangiausia)

let turis1 = prekes1.matmenys.x * prekes1.matmenys.y * prekes1.matmenys.z;
console.log("Pirmas turis: ", turis1)
let turis2 = prekes2.matmenys.x * prekes2.matmenys.y * prekes2.matmenys.z;
console.log("Antras turis: ", turis2)
let turis3 = prekes3.matmenys.x * prekes3.matmenys.y * prekes3.matmenys.z;
console.log("Trecias turis: ", turis3)


let pelnas1 = (prekes1.kaina - prekes1.savikaina) * prekes1.kiekisSandelyje;
console.log("Pirmos prekes pelningumas: ", Math.floor(pelnas1))
let pelnas2 = (prekes2.kaina - prekes2.savikaina) * prekes2.kiekisSandelyje;
console.log("Antros prekes pelningumas: ", Math.floor(pelnas2))
let pelnas3 = (prekes3.kaina - prekes3.savikaina) * prekes3.kiekisSandelyje;
console.log("Pirmos prekes pelningumas: ", Math.floor(pelnas3))



console.log("===============4 uzd=================");

let automobilis = {
}
automobilis.marke = 'porshe';
automobilis.modelis = '911';
automobilis.rida = 10000;
automobilis.metai = 2010;
automobilis.spalva = 'Salotine';
automobilis.turis = 2.0;
automobilis.arDauzta = false;
automobilis.arParduodama = true;

console.log(automobilis);

let dabartiniaiMetai = new Date(Date.now()).getFullYear();
let metuSkirtumas = dabartiniaiMetai - automobilis.metai;

console.log('automobiliui yra: ' + metuSkirtumas + ' metu');

if (metuSkirtumas > 0 ){
    console.log('per metus nuvaziuoja ' + (automobilis.rida /metuSkirtumas).toFixed(2))

} else {
    console.log(automobilis.rida.toFixed(2));
}
