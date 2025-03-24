import Preke from "./Preke"

const Parduotuve = () => {
    let prekes = [
        { id: 1, pavadinimas: 'obuoliai', kaina: 6, kiekis:100},
        { id: 2, pavadinimas: 'Kriauses', kaina: 3, kiekis:12200},
        { id: 3, pavadinimas: 'agurkai', kaina: 44, kiekis:1020}
    ]

    return (
        <div>
            <h1>parduotuve</h1>

            {
                prekes.map((item) => <Preke key={item.id} pavadinimas={item.pavadinimas} kaina={item.kaina} kiekis={item.kiekis}/>)
            }

            <Preke />
        </div>
    )

}

export default Parduotuve