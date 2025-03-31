import Delione from './Delione';

function HobiuParduotuve() {
  const delione1 = {
    pavadinimas: 'Panele Princesa',
    detaliuKiekis: 600,
    plotis: 100,
    aukstis: 200
  };

  const delione2 = {
    pavadinimas: 'Donaldas Trumpas',
    detaliuKiekis: 1,
    plotis: 20,
    aukstis: 20
  };

  const delione3 = {
    pavadinimas: 'Vargsas',
    detaliuKiekis: 3000,
    plotis: 1000,
    aukstis: 500
  };

  return (
    <div>
      <h1>Hobių Parduotuvė</h1>
      <Delione {...delione1} />
      <Delione {...delione2} />
      <Delione {...delione3} />
    </div>
  );
}

export default HobiuParduotuve;
