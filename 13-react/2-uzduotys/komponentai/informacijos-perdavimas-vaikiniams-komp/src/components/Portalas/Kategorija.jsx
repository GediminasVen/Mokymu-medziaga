import Naujiena from './Naujiena';

function Kategorija() {
  const naujienos = [
    {
      pavadinimas: 'Zinios',
      perziuros: 3000000,
      tekstas: 'vaikai geria antifreeza, liudna'
    },
    {
      pavadinimas: 'Orai',
      perziuros: 200000,
      tekstas: 'savaitgali pils visi i baka'
    },
    {
      pavadinimas: 'Mire',
      perziuros: 100,
      tekstas: 'mire popiezius, laukiam kol bus kitas'
    }
  ];

  return (
    <div>
      <h1>Naujienos</h1>
      {naujienos.map((naujiena, i) => (
        <Naujiena key={i} visiduomenys={naujiena} />
      ))}
    </div>
  );
}

export default Kategorija;
