const Laimejimas = () => {
    const laimejot = () => {
        alert('Laimejot 100 euru')
    }
    return (
<div>
    <h3>Laimejimas</h3>
    <button onClick={() => {laimejot()}}>Mygtukas</button>
</div>
    )
}

export default Laimejimas