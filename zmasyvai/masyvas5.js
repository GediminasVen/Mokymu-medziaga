console.log("===============1 uzd=================");
//Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių (naudojant find metodą), kuris yra lyginis. Pvz, jeigu masyvas bus [3, 7, 2, 9, 6, 4], tai atsakymas turi gautis 2, nes 3 ir 7 buvo nelyginiai.
let patiekalai = [3,4,6,7,8,9,1,2];
console.log(patiekalai);

let lyginiai = patiekalai.find(lyginis => lyginis % 2 === 0)
console.log("lyginis skaicius:", lyginiai);

console.log("===============1 uzd=================");

//Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Suraskite jame pirmą skaičių, kuris yra teigiamas (daugiau nei 0). Pvz, jeigu masyvas bus [-3, 0, 5, -8, 2, 7], atsakymas turi gautis 5.

let reiksmes = [1, -2, 4, 6, 8, -8, -2, 3];

let pirmasNr = reiksmes.find(numeriukas => numeriukas > 0)
console.log("pirmas lyginis: ", pirmasNr)

console.log("===============1 uzd=================");
//Susikurkite skaičių masyvą, kuriame būtų teigiamų ir neigiamų skaičių. Suraskite jame pirmą skaičių kuris yra neigiamas ir išveskite jo indeksą, o jeigu tokio skaičiaus nėra išveskite -1. Pvz, jeigu masyvas bus [8, -2, 3, 4], tai atsakymas yra 1, nes skaičius -2 yra indekse 1. O jeigu masyvas bus [7, 5, 3], tai atsakymas bus -1, nes masyve nėra neigiamo skaičiaus.
let skaiciai = [1, -2, 4, 6, 8, -8, -2, 3];

let neigiamas = skaiciai.findIndex(neigiamo => neigiamo < 0);
console.log(neigiamas)

console.log("===============1 uzd=================");
//Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra lygus arba didesnis 10 ir išveskite jo indeksą, o jeigu tokio skaičiaus nėra išveskite -1. Pvz, jeigu turite masyvą [8, 12, 5, 3, 15, 9], atsakymas bus 1.

let skaiciais = [1, -2, 4, 6, 8, -8, -2, 3];

let didesnisLygusDesimt = skaiciais.findIndex(didLygDesimt => didLygDesimt >= 10);

console.log(didesnisLygusDesimt)


console.log("===============1 uzd=================");

//Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris dalintųsi iš 3 ir būtų didesnis nei 10, ir jį išveskite. Pvz, jeigu masyvas yra [5, 9, 12, 7, 18, 4], atsakymas bus 12.

let nuDarVienasMasyvas = [3, 5, 66, 74, 200, 3, 6, 90];
let atsakymoReik = nuDarVienasMasyvas.find(numeriai => numeriai % 3 === 0 && numeriai > 10);
console.log(atsakymoReik)

console.log("===============6 uzd=================");
//Susikurkite skaičių masyvą. Suraskite jame pirmą skaičių, kuris yra neigiamas ir yra lyginis. Pvz, jeigu masyvas [5, 8, -3, -6, 4, 7], tai atsakymas yra -6.
let irDarVienasMasyvas = [1, -2, 4, 6, 8, -8, -2, 3];

let paskaiciuojam = irDarVienasMasyvas.find(neigiamas => neigiamas % 2 === 0 && neigiamas < 0);
console.log(paskaiciuojam)

console.log("===============7 uzd=================");

//Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra teigiami (didesni nei 0). Pvz, jeigu masyvas [7, 5, 9, 8], tai atsakymas true, o jeigu masyvas [8, 9, -3, 2], tai atsakymas false.

let nznKelintasMasyvas = [1, 3, 6, 8, -3, -6, 88, 2];

let skaiciuojam = nznKelintasMasyvas.every(elementas => elementas > 0 && elementas < 0);
console.log(skaiciuojam);
console.log("===============8 uzd=================");
//Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve visi skaičiai yra lyginiai. Pvz, jeigu masyvas yra [2, 4, 8, 6], tai atsakymas true, o jeigu masyvas [7, 3, 6, 8, 10], tai atsakymas false.

let lyginiuMasyvas = [3, 6, 8, 6, 1, -2, 43];

let tikrinamLyginius = lyginiuMasyvas.every(elementai => elementai % 2)
console.log(tikrinamLyginius);
console.log("===============9 uzd=================");
//Susikurkite skaičių masyvą. Patikrinkite ar šiame masyve yra bent vienas skaičius, kuris yra mažesnis nei 5. Pvz, jeigu masyvas [8, 20, 5, 97, 44], tai atsakymas false, bet jeigu masyvas [20, 3, 7, 9], tai atsakymas true.

let masyvas9uzd = [2, 6, 7, 8, 8 , 22];
let skaiciai4 = masyvas9uzd.some (elementas1 => {
    return elementas1<5;
})
console.log(skaiciai4);
console.log("===============1 uzd=================");
console.log("===============1 uzd=================");
console.log("===============1 uzd=================");
console.log("===============1 uzd=================");
console.log("===============1 uzd=================");
console.log("===============1 uzd=================");
console.log("===============1 uzd=================");
console.log("===============1 uzd=================");
console.log("===============1 uzd=================");

//Susikurkite masyvą studento pažymiams saugoti. Suraskite kiek studentas turi gerų pažymių (8 ar daugiau). Pvz, jeigu masyvas yra [7, 8, 10, 6, 5, 9], išfiltravus gausis [8, 10, 9], o tokių pažymių jis turi 3.

let pazymiuMasyvas = [3, 6, 7, 8, 9, 2, 3, 1, 4, 9];

let geriPaz = pazymiuMasyvas.filter(pazymys => pazymys >= 8);
console.log(geriPaz)


let fib = [];
let n = 9;

for (let i = 0; i < n; i++) {
    if (i > 1) {
        fib.push(
            fib[i - 1] + fib[i -2]
        );
    
    } else {
        fib[i]= i;
    }
}

console.log(fib)
