import { useState } from "react"

import ImoneIvestis from "./ImoneIvestis"
import ImoneSpausd from "./ImoneSpausd"

const ImoneBendras = () => {


    

    const [darbuotojas, setDarbuotojas] = useState([
        { vardas: 'Rimas', pavarde: 'Rimauskas', pareigos: 'Stalius', atlyginimas: 2000},
        { vardas: 'Vanda', pavarde: 'Vandauske', pareigos: 'Bureja', atlyginimas: 25000},

    ])

    const handleDarbuotojoPridejimas = (naujasDarbuotojas) => {
        setDarbuotojas([...darbuotojas, naujasDarbuotojas])
    }


    return (
        <div>
            <h1>Imones darbuotojai</h1>

            <ImoneIvestis pridetiDarbuotoja ={handleDarbuotojoPridejimas} />
            <ImoneSpausd darbuotojuInfo={darbuotojas} />
        </div>
    )
}

export default ImoneBendras