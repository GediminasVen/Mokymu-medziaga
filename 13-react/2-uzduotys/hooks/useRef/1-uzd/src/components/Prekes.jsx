
import { useState, useRef } from "react";

const Prekes = () => {
  const pavadinimasRef = useRef();
  const kainaRef = useRef();
  const kiekisRef = useRef();
  const [prekes, setPrekes] = useState([]);

  const pridetiPreke = (e) => {
    e.preventDefault();

    const naujaPreke = {
      pavadinimas: pavadinimasRef.current.value,
      kaina: kainaRef.current.valueAsNumber,
      kiekis: kiekisRef.current.valueAsNumber,
    };

    setPrekes([naujaPreke, ...prekes]);

    pavadinimasRef.current.value = '';
    kainaRef.current.value = '';
    kiekisRef.current.value = '';
  };

  const isvalytiPrekes = () => setPrekes([]);

  const prekesMazaiKiekio = prekes.filter(p => p.kiekis < 5);

  return (
    <div>
      <h2>Prekės</h2>

      <form onSubmit={pridetiPreke}>
        <label htmlFor="pavadinimas">Pavadinimas:</label>
        <input id="pavadinimas" type="text" ref={pavadinimasRef} />
        <label htmlFor="kaina">Kaina:</label>
        <input id="kaina" type="number" ref={kainaRef} />
        <label htmlFor="kiekis">Kiekis:</label>
        <input id="kiekis" type="number" ref={kiekisRef} />
        <button type="submit">Prideti</button>
      </form>

      {prekes.length === 0 ? (<p>Iveskite prekes</p>) : (
        <div>
          <h3>Ivestos prekes</h3>
          {prekes.map((preke, i) => (
            <div key={i}>
              <p>Pavadinimas: {preke.pavadinimas}</p>
              <p>Kaina: {preke.kaina}</p>
              <p>Kiekis: {preke.kiekis}</p>
            </div>
          ))}
          <button onClick={isvalytiPrekes}>Isvalyti</button>
        </div>
      )}

      {prekesMazaiKiekio.length > 0 && (
        <div>
          <h3>Liko maziau nei 5 vienetai</h3>
          {prekesMazaiKiekio.map((preke, i) => (
            <div key={i}>
              <p>Pavadinimas: {preke.pavadinimas}</p>
              <p>Kiekis: {preke.kiekis}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Prekes;




// import { useRef } from "react"
// import { useState } from "react"

// const Prekes = () => {

//     const [prekes, setPrekes] = useState([])

//     const pavadinimasRef = useRef()
//     const kainaRef = useRef()
//     const kiekisRef = useRef()
//     const MAZAS_KIEKIS = 5;
    


//     const onFormSubmitHandler = (e) => {
//         e.preventDefault()


//         setPrekes([
//             ...prekes, 
//             {
//                 pavadinimas: pavadinimasRef.current.value,
//                 kaina: kainaRef.current.valueAsNumber,
//                 kiekis: kiekis.current.valueAsNumber
//             }
//         ])

//         pavadinimasRef.current.value = '';
//         kainaRef.current.value = '';
//         kiekisRef.current.value = '';



//     }

//     const onClearClick = () => {
//         setPrekes([])
//     }


//     // const lessThanFive = () => {
//     //     const prekiuLikuciai = prekes.filter(preke => preke.kiekis < MAZAS_KIEKIS)


//     //     return prekiuLikuciai.length > 0 ? (
//     //         <div>
//     //             <h3>prekiu likuciai</h3>
//     //                 prekiuLikuciai.map((preke, i )=> (
//     //                     <p key={i}>
//     //                         pav : {preke.pavadinimas}, kaina: {preke.kaina}, kiekis: {preke.kiekis}
//     //                         </p>
                
//     //         </div>
//     //     )
//     // } : '';


//     return (
//         <div>

//             <h2>Prekes</h2>

//         <form onSubmit={onFormSubmitHandler}>
//             <label htmlFor="pavadinimas">Pavadinimas:</label>
//             <input id="pavadinimas" type="text" ref={pavadinimasRef} />

//             <label htmlFor="kaina">Kaina:</label>
//             <input id="kaina" type="number" ref={kainaRef} />

//             <label htmlFor="kiekis">Kiekis:</label>
//             <input id="kiekis" type="number" ref={kiekisRef} />

//             <button type="submit">Prideti</button>
//        </form>

//        {
//         prekes.length > 0 && (
//             <div>
//                 {prekes.map((preke, i )=> (
//                     <p key={i}>
//                         pav : {preke.pavadinimas}, kaina: {preke.kaina}, kiekis: {preke.kiekis}
//                     </p>
//                 ))}
//                 <button onClick={onClearClick}>Isvalyti</button>
//             </div>
//         )
//        }
//        {
//         prekes.length === 0 && (
//             <h3>
//                 kol kas nera prekiu
//             </h3>
//         )
//        }


//         </div>
//     )
// }

// export default Prekes;

