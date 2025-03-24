const Darbuotojas = () => {
    const darbuotojas = {
        vardas: "Jonas",
        profesija: "Programuotojas",
        atlyginimas: 2000, 
        etatas: 0.8, 
        stazas: 6 
    };

    const bendrasUzdirbis = () => {
        const menesiuSkaicius = darbuotojas.stazas * 12;
        const perskaiciuotasAtlyginimas = darbuotojas.atlyginimas * darbuotojas.etatas;
        return perskaiciuotasAtlyginimas * menesiuSkaicius;
    };

    const ilgametisDarbuotojas = () => {
        return darbuotojas.stazas >= 5 ? "Ilgametis" : "Naujokas";
    };

    const tikrintiAtlyginima = (kriterijus) => {
        if (darbuotojas.atlyginimas > kriterijus) return "Daugiau nei kriterijus";
        if (darbuotojas.atlyginimas === kriterijus) return "Lygiai kaip kriterijus";
        return "Maziau nei kriterijus";
    };

    return (
        <div>
            <h3>Darbuotojo informacija:</h3>
            <p>Vardas: <strong>{darbuotojas.vardas}</strong></p>
            <p>Profesija: <strong>{darbuotojas.profesija}</strong></p>
            <p>Atlyginimas: <strong>{darbuotojas.atlyginimas} €</strong></p>
            <p>Etatas: <strong>{darbuotojas.etatas}</strong></p>
            <p>Darbo stazas: <strong>{darbuotojas.stazas} metai</strong></p>
            <p>Bendras uždarbis: <strong>{bendrasUzdirbis()} €</strong></p>
            <p>Darbuotojo statusas: <strong>{ilgametisDarbuotojas()}</strong></p>
            <p>Atlyginimo palyginimas su 1800 €: <strong>{tikrintiAtlyginima(1800)}</strong></p>
        </div>
    );
};

export default Darbuotojas;
