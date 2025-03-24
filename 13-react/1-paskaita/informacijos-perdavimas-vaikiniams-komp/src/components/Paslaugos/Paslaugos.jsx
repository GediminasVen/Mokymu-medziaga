import Paslauga from "./Paslauga"

const Paslaugos = () => {
    return (
        <div>
            <h2>Paslaugos</h2>
            <Paslauga pavadinimas='ravejimas' kategorija='sodas' />
            <Paslauga pavadinimas='tvarkymas' kategorija='meistras' />
            <Paslauga pavadinimas='melzimai' kategorija='gyvunai' />
         
        </div>
    )
}

export default Paslaugos