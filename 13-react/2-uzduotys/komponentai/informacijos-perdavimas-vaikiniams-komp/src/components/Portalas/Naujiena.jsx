
function Naujiena({ visiduomenys }) {
  const { pavadinimas, perziuros, tekstas } = visiduomenys;

  function populiarumoTikrinimas(perziuros) {
    return perziuros >= 1000 ? 'populiaru' : 'not popular';
  }

  return (
    <div>
      <h2>{pavadinimas} {populiarumoTikrinimas(perziuros)}</h2>
      <p>Perziuru skaicius {perziuros}</p>
      <p>{tekstas}</p>
    </div>
  );
}

export default Naujiena;
