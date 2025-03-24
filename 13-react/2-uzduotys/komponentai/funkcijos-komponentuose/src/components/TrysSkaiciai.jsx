const TrysSkaiciai = () => {
    const skaicius1 = 31;
    const skaicius2 = 30;
    const skaicius3 = 5;

    const visiSkaiciai = () => {
        return `${skaicius1}, ${skaicius2}, ${skaicius3}`;
    };

    const didziausiasSkaicius = () => {
        return Math.max(skaicius1, skaicius2, skaicius3);
    };

    const suma = () => {
        return skaicius1 + skaicius2 + skaicius3;
    };

    return (
        <div>
            <p>Visi trys skaiciai: <strong>{visiSkaiciai()}</strong></p>
            <p>Didziausias skaicius: <strong>{didziausiasSkaicius()}</strong></p>
            <p>Visu skaiciu suma: <strong>{suma()}</strong></p>
        </div>
    );
};

export default TrysSkaiciai;