const Komp1 = () => {
    const tekstoHandler = (event) => {
        // console.log(event)
        // console.log(event.target.value)

        let tekstas = event.target.value;
        if (tekstas.length > 6) {
            console.log('tekstas didejaaaa')
        }
    }


    return (
        <div>
            <h2>Komp1</h2>
            <input onInput={tekstoHandler} type="text" />
        </div>
    )
}

export default Komp1

// const Komp1 = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default Komp1