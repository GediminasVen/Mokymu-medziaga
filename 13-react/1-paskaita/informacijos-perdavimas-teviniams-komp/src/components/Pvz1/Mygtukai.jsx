const Mygtukai = (props) => {

const onClickButtonHandler = () => {

    console.log('onClick button event:' + props.buttonText)
    props.tevoKomponentoFunkcija(2000)

}





    return (
        <>
        <h3>Mygtukai</h3>
        <button onClick={onClickButtonHandler}>{props.buttonText}</button>
        
        
        </>
    )
}

export default Mygtukai