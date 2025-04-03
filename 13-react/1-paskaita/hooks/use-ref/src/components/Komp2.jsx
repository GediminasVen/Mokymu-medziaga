import { useState } from "react"
import { useRef } from "react"

const Komp2 = () => {
    const pirmasZodisRef = useRef()
        const antrasZodisRef = useRef()
        const [pirmas, setPirmas] = useState('')
        const [antras, setAntras] = useState('')


    const onIvestiClick = () => {
        const zodis1 = pirmasZodisRef.current.value
        const zodis2 = antrasZodisRef.current.value
        setPirmas(zodis1)
        setAntras(zodis2)

        pirmasZodisRef.current.value = ''
        antrasZodisRef.current.value = ''

    }

const daugiauRaidziu = () => {
    let pirmAts = pirmas.split('').filter(raide => raide === 'a').length
    let antrAts = antras.split('').filter(raide => raide === 'a').length


if (pirmAts > antrAts) {
    return 'pirmas zodis'
} else if (
    antrAts > pirmAts
){
    return 'antras zodis'
}

    return 'abu lygus'
}

const pvz = () => {
    console.log('pvz')
}

    return (
        <div>
            <h1>Komp2</h1>
            <h4>LYGINTI ZODZIUS</h4>

            <input type="text" onInput={pvz} />

            <div>
                <label htmlFor="pirmasZodis">Pirmas Zodis</label>
                <input type="text" id="pirmasZodis" ref={pirmasZodisRef}/>
            </div>
            <div>
                <label htmlFor="antrasZodis">Antras Zodis</label>
                <input type="text" id="antrasZodis" ref={antrasZodisRef}/>
            </div>
            <div>
                <button onClick={onIvestiClick}>Ivesti</button>
            </div>
            
            <p>{daugiauRaidziu()}</p>

            {
                pirmas && antras &&
                <>
                <p>{pirmas}</p>
                <p>{antras}</p>
                </>
            }
        </div>
    )
}

export default Komp2