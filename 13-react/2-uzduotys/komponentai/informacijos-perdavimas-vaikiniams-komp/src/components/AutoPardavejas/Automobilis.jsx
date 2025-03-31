const Automobilis = ({ automobilis }) => {
    const { marke, modelis, metai, rida, kaina } = automobilis;
    return (
        <div>
        <h2>Auto (marke is modelis):{marke} {modelis}</h2>
        <p>Metai:{metai}</p>
        <p>Rida:{rida}km</p>
        <p>Kaina:{kaina}€</p>

        </div>
    )
}

export default Automobilis