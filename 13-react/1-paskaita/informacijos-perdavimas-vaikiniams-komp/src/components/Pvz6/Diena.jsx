const Diena = (props) => {
    const arDetisKepura = (temperatura) => {
        if (temperatura > 18) {
            return 'kepures nereik'
        } else {
            return 'dekis kepure'
        }
    }

    return (
        <div>
        Diena
        <h3>Dienos temperatura: {props.temp}</h3>
        <p>{arDetisKepura(props.temp)}</p>
        </div>
    )
}

export default Diena