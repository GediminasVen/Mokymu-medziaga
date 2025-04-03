const LyginisArNe = () => {
    const lyginis = (e) => {
        let skaicius = e.target.value

        if (skaicius % 2 === 0) {
            console.log(`lyginis = ${skaicius}`)
        } else {
            console.log(`nelyginis = ${skaicius}`)
        }
    }

    return (
        <div>
            <h1>
                skaiciuojam dzesika lyginius
            </h1>
            <input type="number" onChange={lyginis}/>

        </div>
    )



}

export default LyginisArNe