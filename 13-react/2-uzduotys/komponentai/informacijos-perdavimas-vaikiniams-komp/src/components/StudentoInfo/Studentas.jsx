import Pazymys from './Pazymys';

function Studentas() {
  const studentai = [
    {
      vardas: 'Momo',
      pavarde: 'Mome',
      mokykla: 'VU',
      programa: 'IT',
      pazymiai: [10, 8, 3, 7, 4, 6],
    },
    {
      vardas: 'Vilma',
      pavarde: 'Vilmauske',
      mokykla: 'VU',
      programa: 'SEO',
      pazymiai: [9, 10, 10, 8, 7],
    },
  ];

  return (
    <div>
      <h1>Studentai</h1>

      {studentai.map((studentas, i) => (
        <div key={i} >
        <p>Vardas: {studentas.vardas}</p>
        <p>Pavarde: {studentas.pavarde}</p>
        <p>Mokykla: {studentas.mokykla}</p>
        <p>Programa: {studentas.programa}</p>

        <h3>Pazymiai:</h3>
          {studentas.pazymiai.map((pazymys, i) => (
            <Pazymys key={i} pazymys={pazymys} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Studentas;
