const Komp5 = () => {
    let automobiliai = ['BMW', 'Audi', 'Volvo', 'VW', 'Mazda', 'Toyota'];

    let title = 'Mano Automobiliai:'


    return (
        <div>
        <h1>{title}</h1>
        <ul>
        { automobiliai.map((automobilis, index) => <li key={index}>{automobilis}</li>)}

        </ul>
        </div>
    )
}

export default Komp5