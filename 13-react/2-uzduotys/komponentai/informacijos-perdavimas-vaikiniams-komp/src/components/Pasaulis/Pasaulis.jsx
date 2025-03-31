import Salis from './Salis';

const Pasaulis = () => {
  const salys = [
    { salis: 'Lietuva', zemynas: 'Europa' },
    { salis: 'Japonija', zemynas: 'Azija' },
    { salis: 'Latvija', zemynas: 'Europa' },
    { salis: 'Vokietija', zemynas: 'Europa' },
  ];

  return (
    <div>
      <h1>Pasaulis</h1>
      {salys.map((salis, index) => (
        <Salis key={index} info={salis} />
      ))}
    </div>
  );
};

export default Pasaulis;
