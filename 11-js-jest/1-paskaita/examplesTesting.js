const maistoProduktai = ["pienas", "duona", "vanduo"];

function duokMasyva() {
  return ["pienas", "duona", "vanduo"];
}

async function fakeAPI(timeout) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (timeout > 2000) {
        reject("no data found");
      }
      resolve("Atsakymas");
    }, timeout);
  });
}

const atmetantiFunkcija = async () => {
  return Promise.reject(new Error("bad request"));
};
expect().to
module.exports = [maistoProduktai, duokMasyva, fakeAPI, atmetantiFunkcija];
