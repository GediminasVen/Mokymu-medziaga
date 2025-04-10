import { useRef } from "react"
import { useState } from "react"


const Kelione = () => {
    const [kelioneKm, setKelioneKm] = useState();
    const [kuroSanaudos, setKuroSanaudos] = useState();
    const [litroKaina, setLitroKaina] = useState();

    const kelioneKmRef = useRef();
    const kuroSanaudosRef = useRef();
    const kainaRef = useRef();

    const onSkaiciuotiClick = () => {
    const ivestiKm = kelioneKmRef.current.valueAsNumber;
    const ivestosSanaudos = kuroSanaudosRef.current.valueAsNumber;
    const ivestaKaina = kainaRef.current.valueAsNumber;

    setKelioneKm(ivestiKm);
    setKuroSanaudos(ivestosSanaudos);
    setLitroKaina(ivestaKaina);

    kelioneKmRef.current.value = '';
    kuroSanaudosRef.current.value = '';
    kainaRef.current.value = '';
    
  };

  const kiekKuro = () => {
    return (kelioneKm * kuroSanaudos) / 100;
  };

  const kokiaKuroKaina = () => {
    return kiekKuro() * litroKaina;
  };

  return (
    <div>
      <h2>kelione</h2>

      <label htmlFor="kelioneKm">keliones kilometrai</label>
      <input type="number" id="kelioneKm" ref={kelioneKmRef}/>

      <label htmlFor="kuroSanaudos">vidutines kuro sanaudos:</label>
      <input type="number" id="kuroSanaudos" ref={kuroSanaudosRef}/>

      <label htmlFor="kaina">kuro litro kaina:</label>
      <input type="number" id="kaina" ref={kainaRef}/>

      <button onClick={onSkaiciuotiClick}>skaiciuoti</button>

      {
        kelioneKm && kuroSanaudos && litroKaina && (
        <div>
            <p>keliones kelioneKm : {kelioneKm} </p>
            <p>kuro kuroSanaudos : {kuroSanaudos}</p>
            <p> litro kaina{litroKaina}</p>
            
            <p>kelionei reikalingas kuras{kiekKuro()}</p>
            <p>viso kuro kaina : {kokiaKuroKaina()}</p>
        </div>
        )
      }
    </div>
  );
};

export default Kelione;
