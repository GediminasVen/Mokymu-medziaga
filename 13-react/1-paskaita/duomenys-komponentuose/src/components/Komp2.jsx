const Komp2 = () => {
   let pazymiai = [10, 9, 3, 5, 6, 7, 8]

   const vidurkispaz = (masyva) => {
    let suma = 0;
    masyva.forEach(element => suma += element);
    
    return suma / masyva.length
   }

    return (
        <div>
         <h2>Komp2</h2>
         <p>

            {
            pazymiai.join(', ')
            }

            </p>
            <p>{pazymiai[2]}</p>
            <p>{pazymiai.length}</p>
            <p>Pazymiu vidurkis yra : {vidurkispaz(pazymiai)}</p>
        </div>
    )
}

export default Komp2