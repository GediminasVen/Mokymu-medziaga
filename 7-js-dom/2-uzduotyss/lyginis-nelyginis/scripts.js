let inputSkaicius = document.getElementById("inputSkaicius");

document.querySelector("button").addEventListener("click", () => {
  const laukelis = document.querySelector("input");
  let reiksme = laukelis.valueAsNumber;

  if (reiksme % 2 === 0) {
    result.innerHTML = `<p class="taip">Skaičius ${reiksme} yra lyginis!</p>`;
  } else {
    result.innerHTML = `<p class="ne">Skaičius ${reiksme} yra nelyginis!</p>`;
  }
  laukelis.value = "";
});
