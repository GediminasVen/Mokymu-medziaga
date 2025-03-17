function pirmaFunkcija() {
  return "labas";
}

function antraFunkcija() {
  return this.pirmaFunkcija();
}

function sudet(a, b) {
  return a + b;
}

function skaiciaiKuriuosSudet(c, d) {
  return sudet(c, d);
}
module.exports = { pirmaFunkcija, antraFunkcija, sudet, skaiciaiKuriuosSudet };
