import { useState } from "react"

const Komp3 = () => {
    const [masyvas, setMasyvas] = useState([])

    const onShowButtonClickHandler = () => {
        console.log(masyvas)
    }

    const onAddButtonClickHandler = () => {
        // masyvas.push(
        //     Math.round(Math.random() * 10)
        // )

        setMasyvas([...masyvas, Math.round(Math.random())])
    }

    return (
        <div>
            <button onClick={onShowButtonClickHandler}>Show array</button>
            <div>
                <button onClick={onAddButtonClickHandler}>add value to array</button>
            </div>
        </div>
    )
}

export default Komp3




// const Komp1 = () => {
//     return (
//         <div>

//         </div>
//     )
// }

// export default Komp1