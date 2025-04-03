import { useState } from "react"

const Komp2 = () => {
    let zodziai = ['labas', 'rytas', 'Lietuva', 'sakau', 'tau']
    let [istrauktas, setIstrauktas] = useState('-')

    const traukti = () => {
        let random = Math.floor(Math.random() * zodziai.length);
        setIstrauktas(zodziai[random])
    }


    return (
        <div>
            <h1>Komp2</h1>
            <h3>Random zodis:</h3>
            <button onClick={traukti}>Traukti</button>
            <p>Israukem: {istrauktas}</p>
        </div>
    )
}

export default Komp2