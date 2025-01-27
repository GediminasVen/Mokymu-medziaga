let automobiliai = {
    pavadinimas: ['bmw', 'audi', 'porshe'],
    amzius: [2020, 2019, 2017],
}
console.log(automobiliai.pavadinimas[0], automobiliai.pavadinimas[1], automobiliai.pavadinimas[2]);
console.log(automobiliai.amzius[0], automobiliai.amzius[1], automobiliai.amzius[2]);
console.log(new Date(Date.now()).getFullYear() - automobiliai.amzius[0], new Date(Date.now()).getFullYear() - automobiliai.amzius[1], new Date(Date.now()).getFullYear() - automobiliai.amzius[2]);

