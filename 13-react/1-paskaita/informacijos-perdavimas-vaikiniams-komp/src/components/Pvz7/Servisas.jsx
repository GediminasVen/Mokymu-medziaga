import Automobilis from "./Automobilis"

const Servisas = () => {

    let automobiliai = [
        { gamintojas: 'Audi', modelis: 'a6'},
        { gamintojas: 'bmw', modelis: 'x5'},
        { gamintojas: 'honda', modelis: 'Civic'},
        { gamintojas: 'Mazda', modelis: '6'},
        { gamintojas: 'Toyota', modelis: 'Corolla'}
    ]
    return (
        <div>
                <h2>servisas</h2>
                {/* <Automobilis auto={automobiliai[0]}/>
                <Automobilis auto={automobiliai[1]}/>
                <Automobilis auto={automobiliai[2]}/>
                <Automobilis auto={automobiliai[3]}/>
                <Automobilis auto={automobiliai[4]}/> */}
{
               automobiliai.map((automobilis, i) => <Automobilis key={i} auto={automobilis}/>)
            }
               </div>
    )
}

export default Servisas