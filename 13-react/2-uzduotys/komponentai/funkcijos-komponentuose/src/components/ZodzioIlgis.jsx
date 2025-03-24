const ZodzioIlgis = () => {
    const zodis = "Pavargau";

    const zodzioIlgis = (zodis) => {
        return zodis.length;
    };

    return (
        <div>
            <p>Zodis: <strong>{zodis}</strong></p>
            <p>Zodzio ilgis (simboliu kiekis): <strong>{zodzioIlgis(zodis)}</strong></p>
        </div>
    );
};

export default ZodzioIlgis;