const Komp9 = () => {
        let slaptasSkaicius = Math.floor(Math.random() * 3 ) + 1;
        const SpetiSkHandler = (spejimas) => {
            console.log (
                slaptasSkaicius === spejimas ? 'atspejot' : 'ha neatspejai'
            )
        }

return (


    <div>
        <h4>Komp 9</h4>
        <button onClick={() => SpetiSkHandler(1)}>click me</button>
        <button onClick={() => SpetiSkHandler(2)}>click me</button>
        <button onClick={() => SpetiSkHandler(3)}>click me</button>
        <button onClick={() => SpetiSkHandler(4)}>click me</button>
        <button onClick={() => SpetiSkHandler(5)}>click me</button>
     
    </div>
)
}

export default Komp9