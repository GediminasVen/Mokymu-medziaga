import { useState } from "react"
import KnyguIvedimas from "./KnygosIvedimas"
import KnyguSpausdinimas from "./KnyguSpausdinimas"

const KnyguBendras = () => {


    

    const [knygos, setKnygos] = useState([
        { pavadinimas: 'Knyga vienas', kaina: 15, metai: 2000},
        { pavadinimas: 'Knyga du', kaina: 5, metai: 2020}
    ])

    const handleKnygosPridejimas = (naujaKnyga) => {
        setKnygos([...knygos, naujaKnyga])
    }


    return (
        <div>
            <h1>Knygu Bendras</h1>

            <KnyguIvedimas pridetiKnyga ={handleKnygosPridejimas} />
            <KnyguSpausdinimas knyguDuomenys={knygos} />
        </div>
    )
}

export default KnyguBendras