import { useRef } from "react"
import { useState } from "react"

const Komp3 = () => {
    const [pazymiai, setPazymiai] = useState([1, 2, 3])
    const pazymisInputRef = useRef()

    const onPazymiaiSubmitHandler = (e) => {
        e.preventDefault();
        // alert('submit')
        setPazymiai([...pazymiai, pazymisInputRef.current.valueAsNumber])
    }

const vidurkis = () => {
    return pazymiai.reduce((prev, curr) => curr + prev, 0 / pazymiai.length)
}

    return (
        <div>
            <h1>Komp3</h1>
            <h4>Studento vidurkis:</h4>
            <form onSubmit={onPazymiaiSubmitHandler}>
                <label htmlFor="pazymys">Iveskite pazymi</label>
                <input ref={pazymisInputRef} type="number" min="1" max="10" id="pazymys" />
                <button type="submit">Ivesti</button>
            </form>

            <div>
                <h4>Ivesti pazymiai</h4>
                <p>{pazymiai.join(', ')}</p>
                <p>{vidurkis()}</p>
                </div>

        </div>
    )
}

export default Komp3