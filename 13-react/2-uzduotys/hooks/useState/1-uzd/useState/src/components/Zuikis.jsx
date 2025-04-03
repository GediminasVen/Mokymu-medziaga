import { useState } from 'react';


const Zuikis = () => {

    let [arPersoko, setArPersoko] = useState(false)

    const atsitiktineReiksme = () => {
        const reiksme = Math.random() < 0.5;
        setArPersoko(reiksme)
    }

    const reiksmeTrue = () => {
        setArPersoko(true);
    }
    
    return (
        <div>
            <h1>zuikis puikis</h1>
            <button onClick={atsitiktineReiksme}>Ikris i duobe?</button>
            <button onClick={reiksmeTrue}>Persoks visada</button>
            <p>ar zuikis bus patiektas ant stalo, nes ikrito i duobe? - {arPersoko ? 'Ne' : 'Taip'}</p>

        </div>
    )
}

export default Zuikis