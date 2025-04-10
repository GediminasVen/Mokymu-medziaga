import { useRef, useState } from "react";

const Kepyklele = () => {
  const darbuotojaiRef = useRef();
  const kepiniaiRef = useRef();
  const valandosRef = useRef();
  const uzsakymasRef = useRef();

  const [uzsakymai, setUzsakymai] = useState([]);

  const pridetiUzsakyma = (e) => {
    e.preventDefault();

    const kiekis = uzsakymasRef.current.valueAsNumber;
    if (kiekis > 0) {
      const naujasUzsakymas = {
        kiekis: kiekis,
      };

      setUzsakymai([naujasUzsakymas, ...uzsakymai]);

      uzsakymasRef.current.value = '';
    }
  };

  const isvalytiUzsakymus = () => setUzsakymai([]);

  const gautiUzsakymuSuma = () => {
    return uzsakymai.reduce((suma, u) => suma + u.kiekis, 0);
  };

  const gautiPajeguma = () => {
    const darbuotojai = darbuotojaiRef.current.valueAsNumber;
    const kepiniai = kepiniaiRef.current.valueAsNumber;
    const v = valandosRef.current.valueAsNumber;

    if (darbuotojai > 0 && kepiniai > 0 && v > 0) {
      return darbuotojai * kepiniai * v;
    }
    return null;
  };

  const arSpejama = () => {
    const pajegumas = gautiPajeguma();
    const suma = gautiUzsakymuSuma();

    if (pajegumas !== null && uzsakymai.length > 0) {
      return pajegumas >= suma;
    }
    return null;
  };

  return (
    <div>
      <h2>Kepyklėlės informacija</h2>

      <form>
        <label htmlFor="darbuotojai">Darbuotojų skaičius:</label>
        <input id="darbuotojai" type="number" ref={darbuotojaiRef} />

        <label htmlFor="kepiniai">Kepinių kiekis per valandą:</label>
        <input id="kepiniai" type="number" ref={kepiniaiRef} />

        <label htmlFor="valandos">Darbo valandų per dieną:</label>
        <input id="valandos" type="number" ref={valandosRef} />
      </form>

      <h3>Užsakymų įvedimas</h3>

      <form onSubmit={pridetiUzsakyma}>
        <label htmlFor="uzsakymas">Dienos užsakymo kiekis:</label>
        <input id="uzsakymas" type="number" ref={uzsakymasRef} />
        <button type="submit">Pridėti užsakymą</button>
      </form>

      {uzsakymai.length === 0 ? (
        <p>Įveskite užsakymus</p>
      ) : (
        <div>
          <h3>Įvesti užsakymai</h3>
          {uzsakymai.map((u, i) => (
            <div key={i}>
              <p>Kiekis: {u.kiekis}</p>
            </div>
          ))}
          <button onClick={isvalytiUzsakymus}>Išvalyti užsakymus</button>
        </div>
      )}

      {uzsakymai.length > 0 && (
        <div>
          <h4>Bendra užsakymų suma: {gautiUzsakymuSuma()}</h4>
        </div>
      )}

      {gautiPajeguma() !== null && (
        <div>
          <h4>Kepyklos pajėgumas: {gautiPajeguma()}</h4>
        </div>
      )}

      {arSpejama() !== null && (
        <div>
          <h4>
            Ar kepykla spės įvykdyti visus užsakymus?{" "}
            {arSpejama() ? "Taip" : "Ne"}
          </h4>
        </div>
      )}
    </div>
  );
};

export default Kepyklele;
