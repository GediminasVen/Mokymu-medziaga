import { useState } from "react"

const TrysKepyklos = () => {

    const [dienos, setDienos] = useState('')
    const [pirmaKepykla, setPirmaKepykla] = useState('')
    const [antraKepykla, setAntraKepykla] = useState('')
    const [treciaKepykla, setTreciaKepykla] = useState('')
    const [kepyklos, setKepyklos] = useState([
        {   
            
            pavadinimas: 'kepyklaVienas',
            klientoPavadinimas: 'Pirma kepykla',
            reiksme: 0
        },
        {
            pavadinimas: 'kepyklaDu',
            klientoPavadinimas: 'Antra kepykla',

            reiksme: 0
        },
        {
            pavadinimas: 'kepyklaTrys',
            klientoPavadinimas: 'Trecia kepykla',

            reiksme: 0
        },
    ])

    const dienosHandler = (e) => {
        setDienos(e.target.value)
    }
    // const pirmaHandler = (e) => {
    //     setPirmaKepykla(e.target.value)
    // }
    // const antraHandler = (e) => {
    //     setAntraKepykla(e.target.value)
    // }
    // const treciaHandler = (e) => {
    //     setTreciaKepykla(e.target.value)
    // }
    const kepyklaHandler = (event, id) => {
        console.log(event)
        console.log(id)
        const newValue = kepyklos[id];
        newValue.reiksme = event.target.value

        // setKepyklos([
        //     ...kepyklos.splice()
        // ])
    }

    const uzsakymuVykdymas = () => {
        const pajegus = Number(pirmaKepykla) + Number(antraKepykla) + Number(treciaKepykla);
        const skirtumas = pajegus - dienos
        if (skirtumas >= 0) {
            return 'Kepyklos uzsakymus padarys, uzsakinekit daugiau'
        } else {
            return `truksta jegu, truks ${Math.abs(skirtumas)} kepiniu`
        }
    }

 



    return (
        <div>
          <h2>Kepyklų užsakymų vertinimas</h2>
      
          <label htmlFor="dienosUzsakymai">Uzsakymu kiekis</label>
          <input onChange={dienosHandler} type="number" id="dienosUzsakymai" />
      
          {/* <label htmlFor="kepyklaVienas">Pirma kepykla :</label>
          <input onChange={pirmaHandler} type="number" id="kepyklaVienas"/>
      
          <label htmlFor="kepyklaDu">Antra kepykla:</label>
          <input onChange={antraHandler} type="number" id="kepyklaDu"/>
      
          <label htmlFor="kepyklaTrys">Trecia kepykla:</label>
          <input onChange={treciaHandler} type="number" id="kepyklaTrys"/> */}
      


            {
                kepyklos.map((kepykla, index) => {
                   return ( <div key={index}>
                    <label htmlFor={kepykla.pavadinimas}>{kepykla.klientoPavadinimas}</label>
                    <input onChange={(e) => kepyklaHandler(e, index)} type="number" id={kepykla.number}/>
                    </div>)
                })
            }

          <p>{uzsakymuVykdymas()}</p>
          {/* <p>{kepyklaHandler()}</p> */}
        </div>
      );
      
}

export default TrysKepyklos