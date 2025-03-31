
const Studentai = () => {
  const studentai = ['Vilma', 'Tomas', 'Vaiva', 'Roro', 'Mantas'];

  const pasirinkStudenta = () => {
    const atsitiktinisStudentas = studentai[Math.floor(Math.random() * studentai.length)];
    alert(`Studentas : ${atsitiktinisStudentas}`);
  };
  

  return (
    <div>
      <h3>Atsirinktinis studentas</h3>
      <p>{studentai.join(' ')}</p>
      <button onClick={pasirinkStudenta}>Atsitiktinis studentas</button>
    </div>
  );
};

export default Studentai;
