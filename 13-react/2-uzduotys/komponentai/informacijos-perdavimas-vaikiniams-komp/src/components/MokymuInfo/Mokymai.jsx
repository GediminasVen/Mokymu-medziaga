import Modulis from './Modulis';

function Mokymai() {
  const moduliai = [
    { pavadinimas: 'HTML', trukme: 300 },
    { pavadinimas: 'CSS', trukme: 120 },
    { pavadinimas: 'JavaScript', trukme: 20000 },
    { pavadinimas: 'React', trukme: 1500 }
  ];

  return (
    <div>
      <h1>Mokymai</h1>
     { moduliai.map((modulis, i) => (<Modulis key={i} pavadinimas={modulis.pavadinimas} trukme={modulis.trukme} />
))}
    </div>
  );
}

export default Mokymai;
