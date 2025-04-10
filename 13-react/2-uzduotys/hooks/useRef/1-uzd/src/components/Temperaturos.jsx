import React, { useRef, useState } from 'react';

const Temperaturos = () => {
  const inputRef = useRef();
  const [temperaturos, setTemperaturos] = useState([]);

  const pridetiTemperatura = (e) => {
    e.preventDefault();
    const ivestis = inputRef.current.value.trim();
    if (ivestis === '') return;

    const skaicius = parseFloat(ivestis);
    if (isNaN(skaicius)) return;

    setTemperaturos((prev) => [...prev, skaicius]);
    inputRef.current.value = '';
  };

  const skaiciuotiVidurki = () => {
    const suma = temperaturos.reduce((a, b) => a + b, 0);
    return (suma / temperaturos.length).toFixed(2);
  };

  const zemiausiaTemperatura = () => {
    return Math.min(...temperaturos);
  };

  const auksciausiaTemperatura = () => {
    return Math.max(...temperaturos);
  };

  const skirtumasTemperaturu = () => {
    return (auksciausiaTemperatura() - zemiausiaTemperatura()).toFixed(2);
  };

  const isvalytiTemperaturas = () => {
    setTemperaturos([]);
  };
  return (
    <div>
      <h2>Temperatūrų įvedimas</h2>

      <form onSubmit={pridetiTemperatura}>
        <input
          type="text"
          ref={inputRef}
          placeholder="Įveskite temperatūrą"
        />
        <button type="submit">Pridėti</button>
      </form>

      {temperaturos.length > 0 && (
        <div>
          <p>Temperatūros: {temperaturos.join(', ')}</p>
        </div>
      )}

      <p>Iš viso įvesta temperatūrų: {temperaturos.length || 0}</p>

      {temperaturos.length > 0 && (
        <>
          <p>Vidutinė temperatūra: {skaiciuotiVidurki()}°C</p>
          <p>Žemiausia temperatūra: {zemiausiaTemperatura()}°C</p>
          <p>Aukščiausia temperatūra: {auksciausiaTemperatura()}°C</p>
          <p>Skirtumas: {skirtumasTemperaturu()}°C</p>
        </>
      )}

      {temperaturos.length > 0 && (
        <button onClick={isvalytiTemperaturas}>Išvalyti</button>
      )}
    </div>
  );
};

export default Temperaturos;