import { useState } from 'react';

const GreicioMatuoklis = () => {
  const [greitis, setGreitis] = useState(0);

  const pakeistiGreiti = (naujasGreitis) => {
    setGreitis(naujasGreitis);
  };

  const greicioAprasymas = () => {
    if (greitis === 0) {
      return 'stovit vietoj';
    } else if (greitis > 0 && greitis < 25) {
      return 'vaziuojat';
    } else if (greitis >= 25 && greitis < 60) {
      return 'greitis toks po truputi';
    } else {
      return 'Važiuojate greitai';
    }
  };

  return (
    <div>
      <p>Dabartinis greitis {greitis} km per val</p>

      <button onClick={() => pakeistiGreiti(0)}>stovit vietoj</button>
      <button onClick={() => pakeistiGreiti(10)}>10 km per val</button>
      <button onClick={() => pakeistiGreiti(61)}>61 km per val</button>
      <button onClick={() => pakeistiGreiti(25)}>25 km per val</button>

      <p>{greicioAprasymas()}</p>
    </div>
  );
};

export default GreicioMatuoklis;
