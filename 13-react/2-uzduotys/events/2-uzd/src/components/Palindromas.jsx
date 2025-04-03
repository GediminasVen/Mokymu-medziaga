const Palindromas = () => {
    const palindrominis = (e) => {
        let zodis = e.target.value;
        let isGalo = zodis.split('').reverse().join('');
        
        if (zodis === isGalo) {
            console.log(`${zodis} palindromas`);
        } else {
            console.log(`${zodis} nepalindromas`);
        }
        
    }

    return (
        <div>
            <h1>Palindromas</h1>
            <input type="text" onChange={palindrominis} />
        </div>
    )
}

export default Palindromas