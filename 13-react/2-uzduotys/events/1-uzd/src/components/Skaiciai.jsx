
const Skaiciai = () => {
  const skaiciai = [5, 12, 8, 21, 3];

  const sumosSkaiciuokle = () => {
    let suma = 0;
    for (let skaicius of skaiciai) {
      suma += skaicius;
    }
    alert(`Suma: ${suma}`);
  };

  const didziausiasSkaicius = () => {
    const didziausias = Math.max(...skaiciai);
    alert(`Didziausias: ${didziausias}`);
  };

  return (
    <div>
      <h3>Skaičiai: {skaiciai.join(' ')}</h3>
      <button onClick={sumosSkaiciuokle}>Suma</button>
      <button onClick={didziausiasSkaicius}>Didziausias</button>
    </div>
  );
};

export default Skaiciai;
