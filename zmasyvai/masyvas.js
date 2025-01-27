let pirmasMasyvas = [1, 2, 3];
let antrasMasyvas = [];
console.log(pirmasMasyvas);
console.log(antrasMasyvas);


//index/indeksavimas

console.log("================================");
console.log("================================");

let norimasMasyvas = [1, 2, 3, 4, 5, 6];
console.log(norimasMasyvas);
console.log('pirmas', norimasMasyvas[0]);
console.log('paskutinis', norimasMasyvas[norimasMasyvas.length -1]);
console.log('du nariai', norimasMasyvas[1],  norimasMasyvas[2]);
console.log('kiekis', norimasMasyvas.length);

console.log("================================");
console.log("================================");

let kitasMasyvas = [9, 9, 9, 9, 9, 9, 9, 9, 9];
console.log(kitasMasyvas);
kitasMasyvas[3] = '2';
kitasMasyvas[2] = '3';
kitasMasyvas[4] = '4';
console.log('atnaujintas masyvas',kitasMasyvas);


console.log("================================");
console.log("================================");

let tusciasMasyvas = [];
tusciasMasyvas.push(123)
tusciasMasyvas.push(12443)
tusciasMasyvas.push(1223)
tusciasMasyvas.push(12223)

console.log('masyvo duomenys', tusciasMasyvas);

console.log("================================");
console.log("================================");

let tusciasMasyvas2 = [];
for (let i = 0; i < 10; i++) {
    let randomNr = Math.floor(Math.random() * 10);
    tusciasMasyvas2.push(randomNr);
}
console.log(tusciasMasyvas2)


console.log("================================");
console.log("================================");


let pazymiaiVienas = [5, 6, 6, 7, 8];
let pazymiaiDu = [8, 9, 2, 8, 5];



console.log("================================");
console.log("================================");