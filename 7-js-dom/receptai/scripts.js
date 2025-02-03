let receptai = [
  {
    id: 1,
    pavadinimas: "Vistiena su salotom",
    aprasymas:
      "Amet et at aliquam duis ut morbi turpis. Quis cursus tincidunt risus purus faucibus elit ut. Pellentesque montes.",
    imgUrl: "img/vistiena.png",
    receptas: {
      miltai: 100,
      kiausiniai: 2,
      melynes: 33,
      cukrus: 20,
    },
  },
  {
    id: 2,
    pavadinimas: "Tortas su melynemis",
    aprasymas:
      "Amet et at aliquam duis ut morbi turpis. Quis cursus tincidunt risus purus faucibus elit ut. Pellentesque montes.",
    imgUrl: "img/tortas.png",
    receptas: {
        miltai: 1300,
        kiausiniai: 22,
        melynes: 33,
        cukrus: 230,
      },
  },
  {
    id: 3,
    pavadinimas: "Makaronai su mesa",
    aprasymas:
      "Amet et at aliquam duis ut morbi turpis. Quis cursus tincidunt risus purus faucibus elit ut. Pellentesque montes.",
    imgUrl: "img/makaronai.png",
    receptas: {
        miltai: 1200,
        kiausiniai: 21,
        melynes: 323,
        cukrus: 230,
      },
  },
];

function onKortelesPaspaudimas(id) {
  let receptas = receptai.find((el) => el.id === id).receptas;

  let receptoHTML = "";

  for (let property in receptas) {
    receptoHTML += `<p>${property}: <strong>${receptas[property]}</strong></p>`;
  }

  document.getElementById('rezultatai').innerHTML = receptoHTML;





  console.log(receptas);
}



window.addEventListener('load', () => {
    let korteliuHTML = '';

    for(let receptas of receptai) {
        console.log(receptas)
        korteliuHTML += `
        <div class="kortele" onclick="onKortelesPaspaudimas(1)">
          <img src="img/vistiena.png" alt="Vištiena su salotomis" />
          <div class="text">
            <h4>Vištiena su salotom</h4>
            <p>
              Amet et at aliquam duis ut morbi turpis. Quis cursus tincidunt
              risus purus faucibus elit ut. Pellentesque montes.
            </p>
          </div>
          <img src="img/selected.png" class="active" alt="Selected Icon" />
        </div>
        `;
    }
})