function apskritimoPlotas(r) {
  return Math.PI * Math.pow(r, 2);
}

function palindrome(str) {
  const cleanStr = str.replace(/[\W_]/g, "").toLowerCase();
  const reverseStr = cleanStr.split("").reverse().join("");
  return cleanStr === reverseStr;
}

function findMax(skaiciai) {
  if (!Array.isArray(skaiciai) || !skaiciai.length) {
    throw new Error("neteisingai ivestas parametras skaiciai");
  }
  return Math.max(...skaiciai);
}

function pridetiKaina(objektas) {
  if (objektas.hasOwnProperty("kaina")) {
    return "Objektas jau turi kainą!";
  }
  objektas.kaina = 50;
  return objektas;
}

async function uzdelsimas(delay) {
  return new Promise((resolve, reject) => {
    if (delay > 1000) {
      reject(new Error("uzdelsimas mazesnis nei 1 sek"));
    } else {
      setTimeout(() => {
        resolve("Atsakymas gautas!");
      }, delay);
    }
  });
}
function grazinaNull() {
    return null;
}

module.exports = [apskritimoPlotas, palindrome, findMax, pridetiKaina, uzdelsimas, grazinaNull];
