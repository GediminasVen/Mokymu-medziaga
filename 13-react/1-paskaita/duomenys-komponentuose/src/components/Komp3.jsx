const Komp3 = () => {
    let studentas = {
        vardas: 'Jonas',
        amzius: 20,
        miestas: 'Vilnius',
        adresas: {
            gatve: 'Vilniaus',
            numeris: 1
        },
        bedarbis: false,
        pazymiai: [10, 7, 6, 5, 4]

    };

    const ArBedarbis = (bedarbis) => {
        if (bedarbis) {
            'Taip'
        }
        return 'Ne'
    }

    return (
        <>
           <h2>Studento Informacija</h2>
           <p>
            Studento vardas: <strong>{studentas.vardas}</strong>,
            Amzius: {studentas.amzius}
            </p>

            <p>
                Ar bedarbis : {ArBedarbis(studentas.bedarbis)}
            </p>

            <p>Miestas : {studentas.miestas}</p>
            <p>Gatve : {studentas.adresas.gatve} - {studentas.adresas.numeris}</p>
            <p>Pazymiai: {studentas.pazymiai.join(':')}</p>
        </>
    )
}

export default Komp3