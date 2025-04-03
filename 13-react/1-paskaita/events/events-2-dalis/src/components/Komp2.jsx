

const Komp2 = () => {
    const inputHandler = (event) => {
        let value = event.target.value;
        if (value > 100) {
            console.log('ivestas sk didesnis uz 100')
        } else {
            console.log('ivestas sk mazesnis arba lygus 100')
        }
    }


    return (
        <div>
            <h2>Komp2</h2>
            <input type="number" onInput={inputHandler}/>
        </div>
    )
}

export default Komp2

// const Komp1 = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default Komp1

// const Komp1 = () => {
//     return (
//         <div>
            
//         </div>
//     )
// }

// export default Komp1