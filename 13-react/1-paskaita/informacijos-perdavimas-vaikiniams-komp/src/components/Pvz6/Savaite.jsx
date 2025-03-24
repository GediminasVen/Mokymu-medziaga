import Diena from "./Diena"

const Savaite = () => {
let temperaturos = [13, 22, 3, 4, 5,6,7]

    return (
        <div>
        Savaite
         {
            temperaturos.map((temperatura, i ) => <Diena key={i} temp={temperatura}/>)
        }
        </div>

       
    )
}

export default Savaite