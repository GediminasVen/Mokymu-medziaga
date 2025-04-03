import { useState } from "react";

const Begikai = () => {
    const [pirmas, setPirmas] = useState('');
    const [antras, setAntras] = useState('');

    const greitesnis = () => {
        let rezultas = pirmas - antras
        if (pirmas < antras) {
            return `Pirmas bega greiciau uz antra - ${Math.abs(rezultas)} sec.`
        } else if (pirmas > antras) {
            return `Antras bega greiciau uz pirma- ${Math.abs(rezultas)} sec.`
        } else {
            return 'Begikai bega lygiai'
        }
    }

    const pirmasHandler = (e) => {
        setPirmas(e.target.value)
    }

    const antrasHandler = (e) => {
        setAntras(e.target.value)
    }
    return (
        <div>
            <label htmlFor="pirmasLaukas">Pirmas</label>
            <input onChange={pirmasHandler} type="number" id="pirmasLaukas" />
            <label htmlFor="antrasLaukas">Antras</label>
            <input onChange={antrasHandler} type="number" id="antrasLaukas" />
            <p>Rezultatas:  {greitesnis()}</p>
        </div>
    )
}

export default Begikai