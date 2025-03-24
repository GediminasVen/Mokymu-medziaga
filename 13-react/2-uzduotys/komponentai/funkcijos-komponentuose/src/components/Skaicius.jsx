const Skaicius = () => {
    const skaicius = -8;

    const arLyginis = (skaicius) => {
        return skaicius % 2 === 0 ? "Taip" : "Ne";
    };
    
    const arTeigiamas = (skaicius) => {
        if (skaicius > 0) return "Teigiamas";
        if (skaicius < 0) return "Neigiamas";
        return "Nulis";
    };

    return (
        <div>
            <p>Skaicius: <strong>{skaicius}</strong></p>
            <p>Ar lyginis? <strong>{arLyginis(skaicius)}</strong></p>
            <p>Teigiamas ar neigiamas?: <strong>{arTeigiamas(skaicius)}</strong></p>
        </div>
    );
};

export default Skaicius;