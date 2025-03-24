const Komp6 = () => {
    let skaiciai1 = [1, 2, 5, 6, 75]
    let skaiciai2 = [];
    let arPrisijunges = true;

    return (
        <div>
            <h3>skaiciai 1:</h3>
            {
                skaiciai1.length > 0 ? <ul>{skaiciai1.map((skaicius, i) => <li key={i}>{skaicius} - {skaicius % 2 === 0 ? 'lyginis' : 'nelyginis'}</li>)}</ul> : <p>masyvas 'skaiciai1' tuscias</p>
            }

            <h3>Skaiciai2 :</h3>

            {
                skaiciai2.length > 0 ? <ul>{skaiciai2.map((skaicius, i) => <li key={i}>{skaicius}</li>)}</ul> : <p>masyvas 'skaiciai2' tuscias</p>
            }

            <h3>Ar Prisijunges?</h3>
            {
                arPrisijunges ? 'Prisijunges' : 'prisijunk'
            }
        </div>
    )
}

export default Komp6