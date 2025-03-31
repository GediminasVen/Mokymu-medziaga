import Automobilis from "./Automobilis"

const Pardavejas = () => {
let automobiliai = [
    {marke: 'bmw', modelis: 'x1', metai: 2020, rida: 222222, kaina: 9800 },
    {marke: 'audi', modelis: 'q2', metai: 2000, rida: 123456, kaina: 19800 },
    {marke: 'Toyota', modelis: 'Corolla', metai: 2018, rida: 20, kaina: 4800 },
    {marke: 'honda', modelis: 'civic', metai: 2000, rida: 1234, kaina: 3000 },
]

    return (
        <div>
            <h1>Pardavejas</h1>
            {
                automobiliai.map((automobilis, i) => <Automobilis key={i} automobilis={automobilis}/> )
            }
        </div>
    )
}

export default Pardavejas