const KnyguSpausdinimas = (props) => {

    let knygos = props.knyguDuomenys


    return (
        <div>
             <div>
            {
            knygos.length === 0 && (
                <p>Iveskite knyga</p>
            )
            }
            {
                knygos.length > 0 && (
                    <div>
                        {
                            knygos.map((knyga, index) => {
                                return (
                                    <div key={index} >
                                        <h4>{knyga.pavadinimas}</h4>
                                        <p>Metai: {knyga.metai}, Kaina <strong>{knyga.kaina}</strong></p>
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

export default KnyguSpausdinimas