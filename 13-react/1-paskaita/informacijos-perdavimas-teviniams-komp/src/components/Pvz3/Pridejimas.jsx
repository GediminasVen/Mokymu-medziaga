import { useRef } from "react";

const Pridejimas = (props) => {

    const inputPavadinimasRef = useRef()
    const inputKainaRef = useRef()
    const inputMetaiRef = useRef()

    const handleSubmit = (event) => {
        event.preventDefault();

        const naujaPreke = {
            id: Math.floor(Math.random() * 1000),
            pavadinimas: inputPavadinimasRef.current.value || 'nera-pavadinimo',
            kaina: inputKainaRef.current.valueAsNumber || 0,
            metai: inputMetaiRef.current.valueAsNumber || 0
        }

        props.pridetiPreke(naujaPreke)

        inputPavadinimasRef.current.value = null;
        inputKainaRef.current.value = null;
        inputMetaiRef.current.value = null

    }

   

    return (
        <div>
            <h2>Prideti preke: </h2>

            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="pavadinimas">Pavadinimas</label>
                    <input ref={inputPavadinimasRef} type="text" id="pavadinimas" />
                </div>
                <div>
                    <label htmlFor="kaina">Kaina</label>
                    <input ref={inputKainaRef} type="number" id="kaina" step={0.1} />
                </div>
                <div>
                    <label htmlFor="Metai">Metai</label>
                    <input ref={inputMetaiRef} type="number" id="Metai" step={0.1} />
                </div>

                <div>
                    <button type="submit" >Prideti</button>
                </div>


            </form>
        </div>
    )
}

export default Pridejimas