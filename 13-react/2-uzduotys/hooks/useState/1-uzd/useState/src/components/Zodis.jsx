import { useState } from 'react';

const Zodis = () => {
    const [zodis, setZodis] = useState('');

    const keiciaPomidora = () => {
        setZodis('pomidoras');
    }

    const keiciaAgurka = () => {
        setZodis('agurkas');
    }

    return (
        <div>
            <h1>Žodis</h1>
            <p>{zodis}</p>
            <button onClick={keiciaPomidora}>Pomidoras</button>
            <button onClick={keiciaAgurka}>Agurkas</button>
        </div>
    );
}

export default Zodis;
