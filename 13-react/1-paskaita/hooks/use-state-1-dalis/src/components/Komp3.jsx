import { useState } from "react"

const Komp3 = () => {
    let [skaicius, setSkaicius] = useState(0)

    const onClickButtonAction = (value) => {
        if (value === 0 ) {
            setSkaicius(0)
        } else {
            setSkaicius(skaicius + value)
        }
    }

    return (
        <div>
            <h1>Komp3</h1>
            <h3>Skaiciu keitinejimas</h3>
            <button onClick={() => onClickButtonAction(1)}>didint vienu</button>
            <button onClick={() => onClickButtonAction(-1)}>mazint vienu</button>
            <button onClick={() => onClickButtonAction(5)}>didint penkiais</button>
            <button onClick={() => onClickButtonAction(-5)}>mazint penkiais</button>
            <button onClick={() => onClickButtonAction(0)}>let go back to 0 </button>
            <p>dabartine reiksme: {skaicius}</p>

        </div>
    )
}

export default Komp3