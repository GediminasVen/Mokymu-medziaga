const Komp8 = () => {
    let antraste = 'Prekiu sarasas'
    let prekes = [
        {id: 1, pavadinimas: 'Tusinukas', kaina: 2.5, kiekis : 283},
        {id: 2, pavadinimas: 'pienas', kaina: 5.5, kiekis : 33},
        {id: 3, pavadinimas: 'arbata', kaina: 7.5, kiekis : 12},
        {id: 4, pavadinimas: 'Duona', kaina: 8.5, kiekis : 222},
        {id: 5, pavadinimas: 'vanduo', kaina: 4.5, kiekis : 567},
    
       ]


       return (
        <div>
            <h1>{antraste}</h1>
            {
                prekes.length > 0 
                ? prekes.map((preke) => {
                    return (
                        <div key={preke.id}>
                            <h4>{preke.pavadinimas}</h4>
                            <p>Kaina: {preke.kaina}, Kiekis: {preke.kiekis}</p>
                        </div>
                    )
                })
                : <p>prekiu nera</p>
            }
        </div>
    )
}
export default Komp8