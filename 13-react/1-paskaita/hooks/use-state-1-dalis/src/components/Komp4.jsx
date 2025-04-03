import { useState } from "react"

const Komp4 = () => {
    let [selection, setSelection] = useState('nepasirinkote')

    const pasirinkimoHandler = (event) => {
        let pasirinktaReiksme = event.target.innerText

        setSelection(pasirinktaReiksme)
    }

    const tikrinti = () => {
        switch ( selection ) {
            case 'HTML':
            return ' html - tai zymejimo kalba';
            case 'CSS':
                return 'css - tai stiliaus kalba'
            case 'JAVASCRIPT':
                return 'js tai programuoj'
            case 'REACT':
                return 'React - tai JS library'
            default: 
            return 'Nepasirinkta'
        }
    };



    return (
        <div>
            <h1>Komp4</h1>
            <h3>Pasirinkimas</h3>
            <p>labiausiai patiko</p>
            <button onClick={pasirinkimoHandler}>HTML</button>
            <button onClick={pasirinkimoHandler}>CSS</button>
            <button onClick={pasirinkimoHandler}>JAVASCRIPT</button>
            <button onClick={pasirinkimoHandler}>React</button>
            <p>pasirinkote: {selection}</p>
            <p>{tikrinti()}</p>
        </div>
    )
}

export default Komp4