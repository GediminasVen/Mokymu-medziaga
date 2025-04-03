import { useState } from "react";

const Vistos = () => {

    const uzsakymai = 23;
    let[kiausiniai, setKiausiniai] = useState('')

    const kiausiniuHandler = (e) => {
        setKiausiniai(e.target.value)
    }

    const kiausiniuSkaiciuokle = () => {
        const skirtumas = kiausiniai - uzsakymai;
        if (kiausiniai === '') return "laikas peret kiausinius damos";
        return skirtumas >= 0 
          ? ` viskas gerai ${skirtumas}vnt. Kiausiniu daugiau nei uzsake` 
          : `nespėja truksta ${Math.abs(skirtumas)}vnt. Kiausiniu iki uzsakymo ivykdymo`;
      };

    return (
        <div>
            <p>Kiek kiausiniu reikia : {uzsakymai}</p>
            <label htmlFor="kiekKiausiniu">Kiek kiausiniu surinkai is vistinyko ?</label>
            <input onChange={kiausiniuHandler} type="number" id="kiekKiausiniu" />
            <p>{kiausiniuSkaiciuokle()}</p>
        </div>
    )
}

export default Vistos