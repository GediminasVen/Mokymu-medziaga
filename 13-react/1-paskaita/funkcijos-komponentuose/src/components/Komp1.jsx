import { suma } from '../utils/calculator'

const Komp1 = () => {
    let skaicius = 57;
    let pirmas = 5, antras = 6;

    const patikrinkSkaiciu = (skaiciukas) => {
        return skaiciukas === 55 ? 'skaicius yra 55' : 'skaicius nera 55'
    }

    return (
        <div>
            <h2>skaicia ir skaiciavimas</h2>
            <p>{skaicius}</p>
            <p>{skaicius + 5}</p>
            <p>{skaicius - 5}</p>
            <p>{skaicius * 5}</p>
            <p>{skaicius / 5}</p>
            <p>{skaicius === 55 ? 'skaicius yra 55' : 'skaicius nera 55'}</p>
            <p>{patikrinkSkaiciu(skaicius)}</p>
            <p>{suma(pirmas, antras)}</p>



        </div>

    )
}

export default Komp1




// const Komp1 = () => {
//     return (
//         <div>
//             Komp1
//         </div>

//     )
// }

// export default Komp1