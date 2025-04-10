import { useRef } from "react"

const ImoneIvestis = (props) => {

    const inputVardasRef = useRef()
    const inputPavardeRef = useRef()
    const inputPareigosRef = useRef()
    const inputAtlyginimasRef = useRef()

    const onDarbuotojasSubmit = (e) => {
        e.preventDefault()

        const naujasDarbuotojas = {
            vardas: inputVardasRef.current.value || 'vardas neivestas',
            pavarde: inputPavardeRef.current.value || 'pavarde neivestas',
            pareigos: inputPareigosRef.current.value || 'pareigos neivestos',
            atlyginimas: inputAtlyginimasRef.current.value || 0
        }

        props.pridetiDarbuotoja(naujasDarbuotojas)

        inputVardasRef.current.value = null
        inputPavardeRef.current.value = null
        inputPareigosRef.current.value = null
        inputAtlyginimasRef.current.value = null
    }



    return (
        <div>
            <form onSubmit={onDarbuotojasSubmit}>
                <div>
                    <label htmlFor="vardas">Vardas</label>
                    <input ref={inputVardasRef} type="text" id="vardas" />
                </div>
                <div>
                    <label htmlFor="pavarde">Pavarde</label>
                    <input ref={inputPavardeRef} type="text" id="pavarde"  />
                </div>
                <div>
                    <label htmlFor="pareigos">Pareigos</label>
                    <input ref={inputPareigosRef} type="text" id="pareigos"  />
                </div>
                <div>
                    <label htmlFor="atlyginimas">Atlyginimas</label>
                    <input ref={inputAtlyginimasRef} type="number" id="atlyginimas"  />
                </div>

                <div>
                    <button type="submit" >Prideti</button>
                </div>


            </form>
        </div>
    )
}

export default ImoneIvestis