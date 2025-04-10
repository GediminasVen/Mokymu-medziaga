import { useState } from "react"
import ZodziuIvedimas from "./ZodziuIvedimas"

const ZodziuBendras = () => {
    const [zodziai, setZodziai] = useState([])

    const naujasZodis = (zodisPrideti) => {
        setZodziai((prev) => [...prev, zodisPrideti])
    }


    const rastiIlgiausiaZodi = () => {
        return Math.max(...zodziai.map(zodis => zodis.length));
      };


    return (
        <div>
            <h1>Zodziu bendras</h1>
            {
                zodziai.length > 0 ? (
                    <div>
                        <ul>
                            {zodziai.map((zodis, i) => (
                                <li key={i}>{zodis}</li>
                            ))}
                        </ul>
                        <p>Ilgiausias zodis:{rastiIlgiausiaZodi()} </p>
                    </div>
                ) : (<p>„Deja, nėra įvestos informacijos“.</p>)
            }
            <ZodziuIvedimas pridetiZodi={naujasZodis} />
        </div>
    )
}

export default ZodziuBendras