import Darbuotojas from "./Darbuotojas"

const Imone = () => {
let darbuotojai = [
    {vardas: 'Rimas', pavarde: 'Rimauskas', bonus: 99},
    {vardas: 'Timas', pavarde: 'Tamas', bonus: 0},
    {vardas: 'Bimas', pavarde: 'Sho', bonus: 12000}
]

    return (
        <div>
            <h1>Imone</h1>
            {darbuotojai.map((darbuotojas, i) => (<Darbuotojas  key={i} vardas={darbuotojas.vardas} pavarde={darbuotojas.pavarde} bonus={darbuotojas.bonus} />
      ))}

        </div>
    )
}

export default Imone