const prekiuKrepselis = () => {
    const prekes = [
        { id: 1, pavadinimas: "Saldytuvas", kaina: 800, kiekis: 3, nuolaida: 20 },
        { id: 2, pavadinimas: "TV", kaina: 1820, kiekis: 7, nuolaida: 33 },
        { id: 3, pavadinimas: "Telefonas", kaina: 1200, kiekis: 4, nuolaida: 30 },
        { id: 4, pavadinimas: "Svarstykles", kaina: 25, kiekis: 2, nuolaida: 2 }
    ];

    const Lentele = (masyvas) => {
        return (
            <table border="1" cellPadding="3" >
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Pavadinimas</th>
                        <th>Kaina</th>
                        <th>Kiekis</th>
                        <th>Nuolaida</th>
                    </tr>
                </thead>
                <tbody>
                    {masyvas.map(preke => (
                        <tr key={preke.id}>
                            <td>{preke.id}</td>
                            <td>{preke.pavadinimas}</td>
                            <td>{preke.kaina}</td>
                            <td>{preke.kiekis}</td>
                            <td>{preke.nuolaida}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    };

    const bendraNuolaida = () => {
        return prekes.reduce((acc, preke) => acc + preke.nuolaida, 0);
    };

    const krepselioKaina = () => {
        let suma = 0;
        for (const preke of prekes) {
            suma += (preke.kaina * preke.kiekis - preke.nuolaida);
        }
        return suma;
    };
    

    const atrinktiPagalKaina = (riba) => {
        return prekes.filter(preke => preke.kaina > riba);
    };

    return (
        <div>
            <h3>Prekių krepšelis:</h3>
            {Lentele(prekes)}

            <p>Bendra nuolaida: {bendraNuolaida()}€</p>
            <p>Bendra krepšelio kaina: {krepselioKaina()}€</p>

            <h4>Prekės, kurių kaina viršija 500 €</h4>
            {Lentele(atrinktiPagalKaina(500))}
        </div>
    );
};

export default prekiuKrepselis;
