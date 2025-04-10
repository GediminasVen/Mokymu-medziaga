const ImoneSpausd = (props) => {
    const darbuotojai = props.darbuotojuInfo || []

    return (
        <div>
             <div>
            {
            darbuotojai.length === 0 && (
                <p>Iveskite darbuotoja</p>
            )
            }
            {
                darbuotojai.length > 0 && (
                    <div>
                        {
                            darbuotojai.map((darbuotojas, index) => {
                                return (
                                    <div key={index} >
                                        <h4>{darbuotojas.vardas}, {darbuotojas.pavarde}</h4>
                                        <p>atlyginimas: {darbuotojas.atlyginimas}, pareigos: {darbuotojas.pareigos}</p>
                                        <hr />
                                    </div>
                                )
                            })
                        }
                    </div>
                )

            }

        </div>
        </div>
    )
}

export default ImoneSpausd
