const Darbuotojas = (props) => {
   let darb = props.darbuotojas;

    

    return (
        <div>
            <h3>vardas{darb.vardas}, pavarde{darb.pavarde}</h3>
            <p>amzius:{darb.amzius}</p>
            <p>Pareigos: {darb.pareigos}</p>
            <p>Atlyginimas: {darb.atlyginimas}</p>
        </div>
    )
}

export default Darbuotojas