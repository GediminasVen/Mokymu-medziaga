console.log(document);
console.dir(document);

// let pElementHtml = document.getElementById("pirmas-paragrafas-bloke");
// // console.log(pElementHtml)

// let pirmasBlokas = document.querySelector(".pirmas");
// console.log(pirmasBlokas);

// // let visiBlokai = document.querySelectorAll('.pirmas')
// // console.log(visiBlokai)

// // let pirmasParagrafas = document.querySelector('.paragrafas')
// // console.log(pirmasParagrafas)

// // let pirmasParagrafasBloke = pirmasBlokas.querySelector('.paragrafas');
// // console.log(pirmasParagrafasBloke)
// console.log("+++Judejimas per dom medi +++");
// // console.log(
// //     pirmasBlokas.nextElementSibling
// // )
// // console.log(pirmasBlokas.previousElementSibling)
// // console.log(pirmasBlokas.parentElement)
// // console.log(pirmasBlokas.parentNode)

// let paragrafas = pirmasBlokas.querySelector(".paragrafas");
// console.log(paragrafas.nextElementSibling.nextElementSibling);
// console.log("+++Judejimas per dom medi +++");

// let pirmasBlokas = document.querySelector('.pirmas')
// console.log(pirmasBlokas)

// pirmasBlokas.innerHTML = 'pvz';

// let span = document.createElement('span')

// span.textContent = 'tavo pirmas spanas'

// console.log(span)

// pirmasBlokas.appendChild(span)

// let mygtukas = document.querySelector('.button')

// mygtukas.addEventListener('click', (event) => {
//     console.log('ivyko click event')
//     console.log(event)
//     alert('mane paclickino')
// });

// mygtukas.addEventListener('mouseenter', (e) =>{
//     console.log('ivyko mouse enter event')
// });

// document.addEventListener('keypress', (e) => {
//     console.log(e)
// })

// console.log(mygtukas)

// let visiBlokai = document.querySelectorAll(".paragrafas");
// console.log(visiBlokai);

// visiBlokai.forEach((elementas) => {
//     elementas.style.color = 'red';
// })

// window.addEventListener("load", () => {
//   console.log("puslapis pilnai uzkrautas");
// });

// console.log(window)

// console.log(document.readyState)


// let visiBlokai = document.querySelectorAll(".paragrafas");
// console.log(visiBlokai);

// visiBlokai.forEach((elementas) => {
//     elementas.style.cssText = 'color: blue; font-size:20px'
//     elementas.addEventListener('mouseenter', (e) => {
//         elementas.style.color = 'red';
//     })
//     elementas.addEventListener('mouseleave', (e) => {
//         elementas.style.color = 'green';
//     })
// })



let mygtukas = document.querySelector('.button')
// console.log(mygtukas.classList)

// mygtukas.classList.replace('pirmas', 'paragrafas')

// mygtukas.classList.add('mygtukas')

// mygtukas.addEventListener('click', () => {
//     mygtukas.classList.add('button-click')
// })

// if (mygtukas.classList.contains('paragrafas')) {
//     console.log('paragrafas klase yra')
// } else {
//     console.log('tokios klases ner')
// } 