import { useRef, useState } from "react";

const MedzioApdirbejas = () => {
  const [medziaguKaina, setMedziaguKaina] = useState();
  const [valandos, setValandos] = useState();
  const [valandinisUzdarbis, setValandinisUzdarbis] = useState();

  const medziagosRef = useRef();
  const valandosRef = useRef();
  const uzdarbisRef = useRef();


  const magicNumber = 1.3;
  const onClickPatvirtinti = () => {
    const kaina = medziagosRef.current.valueAsNumber;
    const dirbtaVal = valandosRef.current.valueAsNumber;
    const uzdarbis = uzdarbisRef.current.valueAsNumber;

    setMedziaguKaina(kaina);
    setValandos(dirbtaVal);
    setValandinisUzdarbis(uzdarbis);

    medziagosRef.current.value = '';
    valandosRef.current.value = '';
    uzdarbisRef.current.value = '';
  };

  const skaiciuotiSavikaina = () => {
    return (valandos * valandinisUzdarbis) + medziaguKaina;
  };

  const skaiciuotiPardavimoKaina = () => {
    return skaiciuotiSavikaina() * magicNumber
  };

  return (
    <div>
      <h2>Medzio apdirbejas</h2>

      <label htmlFor="medziagos">medziagu kaina</label>
      <input type="number" id="medziagos" ref={medziagosRef}/>

      <label htmlFor="valandos">Dirbtos valandos:</label>
      <input type="number" id="valandos" ref={valandosRef}/>

      <label htmlFor="uzdarbis">valandinis</label>
      <input type="number" id="uzdarbis" ref={uzdarbisRef}/>

      <button onClick={onClickPatvirtinti}>
        Patvirtinti
      </button>

      {
      medziaguKaina && valandos && valandinisUzdarbis && (
        <div >
          <p>Medžiagų kaina: {medziaguKaina} €</p>
          <p>Dirbtos valandos: {valandos} val.</p>
          <p>Valandinis uždarbis: {valandinisUzdarbis} €/val.</p>
          <p>Projekto savikaina: {skaiciuotiSavikaina().toFixed(2)} €</p>
          <p>Rekomenduojama pardavimo kaina: {skaiciuotiPardavimoKaina().toFixed(2)} €</p>
        </div>
      )}
    </div>
  );
};

export default MedzioApdirbejas;
