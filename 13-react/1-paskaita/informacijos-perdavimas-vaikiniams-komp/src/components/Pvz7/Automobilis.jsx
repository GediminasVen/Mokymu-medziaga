const Automobilis = (props) => {
    // console.log(props)

    let {gamintojas, modelis} = props.auto


    return (
        <div>
                <h2>Automobilis</h2>
                <h4>{gamintojas}: {modelis}</h4>
        </div>
    )
}

export default Automobilis