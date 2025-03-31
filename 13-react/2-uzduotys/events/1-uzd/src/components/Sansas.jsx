const Sansas = () => {
    const tikrinamSk = () => {
            let skaicius = Math.floor(Math.random() * 10) + 1
            console.log(skaicius)
            skaicius >= 5 ? alert('LAIMEJOT MILIJONA OMG WOW NUSIPIRK LAIVA DABAR') : alert('wow nieka nu ka dabar toks buozes gyvenimas')
        
    }
    return (
        <div>
            <h2>Sansas</h2>
            <button onClick={tikrinamSk}>DRUM ROLLS</button>

        </div>
    )

}

export default Sansas