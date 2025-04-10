import { useRef } from "react"

const KnyguIvedimas = (props) => {

    const inputPavadinimasRef = useRef()
    const inputKainaRef = useRef()
    const inputKiekisRef = useRef()

    const onKnygosFormSubmit = (e) => {
        e.preventDefault()

        const naujaKnyga = {
            pavadinimas: inputPavadinimasRef.current.value || 'nera-pavadinimo',
            kaina: inputKainaRef.current.valueAsNumber || 0,
            kiekis: inputKiekisRef.current.valueAsNumber || 0
        }

        props.pridetiKnyga(naujaKnyga)

        inputPavadinimasRef.current.value = null;
        inputKainaRef.current.value = null;
        inputKiekisRef.current.value = null

    }



    return (
        <div>
            <h1>Knygu Ivedimas</h1>
            <form onSubmit={onKnygosFormSubmit}>
                <div>
                    <label htmlFor="pavadinimas">Pavadinimas</label>
                    <input ref={inputPavadinimasRef} type="text" id="pavadinimas" />
                </div>
                <div>
                    <label htmlFor="kaina">Kaina</label>
                    <input ref={inputKainaRef} type="number" id="kaina" step={0.1} />
                </div>
                <div>
                    <label htmlFor="kiekis">Kiekis</label>
                    <input ref={inputKiekisRef} type="number" id="kiekis" step={0.1} />
                </div>

                <div>
                    <button type="submit" >Prideti</button>
                </div>


            </form>
        </div>
    )
}

export default KnyguIvedimas