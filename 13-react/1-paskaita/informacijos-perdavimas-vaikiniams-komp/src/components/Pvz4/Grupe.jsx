import Studentas from "./Studentas"

const Grupe = () => {
let studentas = {
    vardas: 'Jonas',
    pavarde: 'Jonaitis',
    amzius: 25
}

    return (

        <div>
        <h2>Grupe</h2>

        <Studentas studentas={studentas} />
        </div>
    )
}

export default Grupe