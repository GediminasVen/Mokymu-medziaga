import { useState } from "react"
import Pridejimas from "./Pridejimas"
import VisosPrekes from "./VisosPrekes"

const Parduotuve = () => {

    // const TEST_PREKES = [
    //     { id: 156, pavadinimas: 'knyga', kiekis: 5, kaina: 120},
    //     { id: 48, pavadinimas: 'vanduo', kiekis: 9, kaina: 10},
    //     { id: 1, pavadinimas: 'tv', kiekis: 8, kaina: 130},
    //     { id: 6, pavadinimas: 'lapas', kiekis: 3, kaina: 1110},
    //     {id: 100056, pavadinimas: 'pen', kiekis: 1, kaina: 17},
    // ]

    const [prekes, setPrekes] = useState([])

    

    const handlePrekesPridejimas = (newItem) => {
        console.log('Parde gavo')
        console.log(newItem)
        setPrekes([...prekes, newItem])
    }

    return (
        <div>
            <h2>Parduotuve</h2>
            <Pridejimas 
                pridetiPreke={handlePrekesPridejimas}
            />
            <VisosPrekes
                data={prekes}
            />
        </div>
    )
}

export default Parduotuve