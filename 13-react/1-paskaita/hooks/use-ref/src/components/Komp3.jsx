import { useState } from "react"

const Komp3 = () => {
    const [pazymiai, setPazymiai] = useState([1, 2, 3])

    const onPazymiaiSubmitHandler = () => {
        alert('submit')
    }

    return (
        <div>
            <h1>Komp3</h1>
            <h4>Studento vidurkis:</h4>
            <form onSubmit={onPazymiaiSubmitHandler}>
                <label htmlFor="pazymys">Iveskite pazymi</label>
                <input type="number" min="1" max="10" id="pazymys" />
                <button type="submit">Ivesti</button>
            </form>

            <div>
                <h4>Ivesti pazymiai</h4>
                <p>{pazymiai.join(', ')}</p>
                </div>

        </div>
    )
}

export default Komp3