let skaicius = 1;
let mygtukas = document.querySelector("button");
let tekstas = document.querySelector("p span");
let tekstasKitas = document.querySelector(".papildomas");

mygtukas.addEventListener("click", () => {
  skaicius++;
  tekstas.innerHTML = skaicius;
});

mygtukas.addEventListener("click", () => {
    if (skaicius < 10) {
      tekstasKitas.innerHTML = "Dar tik pradzia";
    } 
  });

mygtukas.addEventListener("click", () => {
  if (skaicius >= 10) {
    tekstasKitas.innerHTML = "Jau pasiekem 10!!!!";
  } 
});

mygtukas.addEventListener("click", () => {
    if (skaicius >= 20) {
      tekstasKitas.innerHTML = "Jau pasiekem 20!!!! Kur tu vaziuoji";
    } 
  });