import { useState } from "react";

const Komp1 = () => {
    const [skaicius, setSkaicius] = useState(0)

    // let skaicius = 0;

    const didinti = () => {
        // skaicius++
        setSkaicius(skaicius+ 1)
    }
    const mazinti = () => {
        // skaicius++
        setSkaicius(skaicius- 1)
    }




    return (
        <div>
            <h2>Counter</h2>
            <button onClick={didinti}>Didint</button>
            <button onClick={mazinti}>Mazinti</button>
            <p>dabar yra: {skaicius}</p>

        </div>
    )
}

export default Komp1