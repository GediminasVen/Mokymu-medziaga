const Komp7 = () => {
    let skaiciukas = 14;

    const patikrintiHandler = () => {
        if (skaiciukas > 10) {
            console.log('didenis uz 10')
        } else {
            console.log('mazesnis arba lygus 10')
        }
    }


return (
    <div>
            <h4>Komp7</h4>
            <button onClick={patikrintiHandler}>Patikrink skaiciu </button>
        
    </div>
)
}

export default Komp7