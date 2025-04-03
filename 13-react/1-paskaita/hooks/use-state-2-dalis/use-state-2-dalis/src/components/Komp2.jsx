import { useState } from "react"

const Komp2 = () => {

    const [pirmas, setPirmas] = useState('');
    const [antras, setAntras] = useState('');

    const pirmasHandler = (e) => {
        setPirmas(e.target.value)
    }

    const antrasHandler = (e) => {
        setAntras(e.target.value)

    }

    const ilgesnis = () => {
        if (pirmas.length > antras.length) {
            return pirmas
        } else if (pirmas.length < antras.length) {
            return antras
        } else {
            return 'Abu zodziai yra vienodo ilgio'
        }
    }


    return (
        <div>
                <h2>Komp2</h2>
                <div>
                    <label htmlFor="pirmasInput">Pirmas</label>
                    <input onChange={pirmasHandler} type="text" id="pirmasInput" />
                </div>
                <div>
                    <label htmlFor="antrasInput">Antras</label>
                    <input onChange={antrasHandler} type="text" id="antrasInput" />
                </div>

                <p>
                    <strong>
                        Ivesti zodziai: {pirmas} ir {antras} 
                    </strong>
                </p>
                <p>
                    <strong>Ilgesnis zodis: {ilgesnis()}</strong>
                </p>

        </div>
    )
}

export default Komp2




