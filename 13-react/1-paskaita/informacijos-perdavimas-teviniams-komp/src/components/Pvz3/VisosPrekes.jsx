const VisosPrekes = (props) => {

    let prekes = props.data

    console.log(prekes)

    

    return (
        <div>
            <h2>turimos prekes</h2>
            {
            prekes.length === 0 && (
                <p>prekiu nera</p>
            )
            }
            {
                prekes.length > 0 && (
                    <div>
                        {
                            prekes.map(preke => {
                                return (
                                    <div key={preke.id} >
                                        <h4>{preke.pavadinimas}</h4>
                                        <p>Kiekis: {preke.kiekis}, Kaina <strong>{preke.kaina}</strong></p>
                                        <hr />
                                    </div>
                                )
                            })
                        }
                    </div>
                )

            }

        </div>
    )
}

export default VisosPrekes