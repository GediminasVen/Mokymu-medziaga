const Komp8 = () => {
    let slaptasSkaiciukas = Math.floor(Math.random() * 3) + 1

const spetiHandler = () => {
    console.log(
        slaptasSkaiciukas === 1 ? 'Atspejot -1' : 'Neatspejot -1'
    )
}
const spetiHandler2 = () => {
    console.log(
        slaptasSkaiciukas === 1 ? 'Atspejot -2' : 'Neatspejot -2'
    )
}
const spetiHandler3 = () => {
    console.log(
        slaptasSkaiciukas === 1 ? 'Atspejot -3' : 'Neatspejot -3'
    )
}

    return (
        <div>
            <h3>Komp8</h3>
            <button onClick={spetiHandler}>Spejimas 1</button>
            <button onClick={spetiHandler2}>Spejimas 2</button>
            <button onClick={spetiHandler3}>Spejimas 3</button>
        </div>
    )
}

export default Komp8