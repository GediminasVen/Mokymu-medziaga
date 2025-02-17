// //Sukurkite JS funkciją, kurios parametras yra callback funkcija. Jūsų funkcija turėtų vykdyti callback funkciją po 2s.

// function callHelloLater(callback){
//     setTimeout(callback, 2000);
// }

// function sayHello() {
//     console.log('hello');
// }

// callHelloLater(sayHello)

// // Sukurkite JS funkciją, kuri daro HTTP Request užklausą ir grąžina pažadą su duomenimis.   
// fetch('https://api.tvmaze.com/people')
// .then(response => response.json())
// .then(data => {
//     console.log(data)
// })


// // 3

// function arLyginiai(mas, callback) {
//     for (let item of mas) {
//         callback(item)
//     }
// }

// function callback(skaicius) {
//     if (skaicius % 2 === 0) {
//         console.log('lyginis')
//     } else {
//         console.log('nelyginis')
//     }
// }

// let masyvas = [1, 5, 7, 8, 45, 78, 11]
// arLyginiai(masyvas, callback)




// //4 uzd

// let zodziai = ['red', 'prps', 'svx', 'mama'];

// function patikrintZodzioIlgi(masyvas, callback) {
//     masyvas.forEach(item => callback(item));
// }

// patikrintZodzioIlgi(zodziai, koksIlgis)

// function koksIlgis(string) {
//     console.log(
//         `zodzio ${string} ilgis yra - ${string.length}`
//     )
// }

// //5 

// function pvz(masyvas, callback) {
//     masyvas.forEach(item => callback(item));
// }

// function naujasObjektas(item) {
//     console.log(
//         {
//             marke: item.marke,
//             modelis: item.modelis
//         }
//     )
// }

// let auto = [
//         { rida: 150000, marke: "Toyota", modelis: "Corolla", metai: 2015, kaina: 8000 },
//         { rida: 90000, marke: "Honda", modelis: "Civic", metai: 2018, kaina: 12000 },
//         { rida: 50000, marke: "BMW", modelis: "X5", metai: 2020, kaina: 40000 }    
// ]

// pvz(auto, naujasObjektas)


// //6

// function checkUserLogin(isUserLogedIn) {
//     return new Promise((resolve, reject) => {
//         if (isUserLogedIn) {
//             resolve("Prisijunges");
//         } else {
//             reject("Neprisijunges");
//         }
//     });
// }

// checkUserLogin(true)
//     .then(message => console.log(message)) 
//     .catch(error => console.error(error)); 

// checkUserLogin(false)
//     .then(message => console.log(message)) 
//     .catch(error => console.error(error)); 


//     7. Sukurkite async funkciją, kuri priimtų parametrą "age". Funkcijos viduje
// padarykite patikrinimą ar "age" yra paduotas ir ar jis yra skaičius - priešingu
// atveju iškvieskite klaidą (throw). Toliau tikrinkite ar amžius yra daugiau nei 18,
// jeigu taip, grąžinkite, kad “vartotojas gali laikyti vairuotojo egzaminą", priešingu
// atveju iškvieskite klaidą (throw) ir parašykite, kad "jūsų amžius turi būti daugiau
// nei 18". Iškvieskite šią funkciją naudojantis then ir catch.

async function checkIfPersonCanDrive(age) {
    return new Promise((resolve, reject) => {
        if (age == undefined || age == null) {
            reject("Truksta reiksmes skiltyje, - Amzius");
        } else if (typeof age !== "number") {
            reject("Amzius privalo buti skaicius, patikrinkite ivesta informacija");
        } else if (age < 18) {
            reject(`Asmuo privalo buti 18 metu, ivesta reiksme = ${age}`);
        } else {
            resolve("Amzius atitinka reikalavimus, egzamina laikyti galite");
        }
    });
}

checkIfPersonCanDrive(15).then(response => console.log(response)).catch(error => console.error(error))
checkIfPersonCanDrive(22).then(response => console.log(response)).catch(error => console.error(error))

checkIfPersonCanDrive("Jonauskas").then(response => console.log(response)).catch(error => console.error(error))

checkIfPersonCanDrive().then(response => console.log(response)).catch(error => console.error(error))
