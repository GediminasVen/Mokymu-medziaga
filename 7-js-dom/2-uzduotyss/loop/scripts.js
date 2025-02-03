let skaicius = 1;
let maxskaicius = 5;
let atsakymas = document.querySelector("h1 span");

document.querySelector(".atgal").addEventListener("click", () => {
  if (skaicius === 1) {
    skaicius = maxskaicius;
  } else {
    skaicius--;
  }
  atsakymas.innerText = skaicius;
});

document.querySelector(".pirmyn").addEventListener("click", () => {
  if (skaicius === maxskaicius) {
    skaicius = 1;
  } else {
    skaicius++;
  }
  atsakymas.innerText = skaicius;
});
