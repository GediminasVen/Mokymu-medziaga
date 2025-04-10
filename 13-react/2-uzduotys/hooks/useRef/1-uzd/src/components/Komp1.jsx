import { useRef } from "react"
import { useState } from "react"

const Komp1 = () => {

    const [skaiciai, setSkaiciai] = useState();
    const inputRef = useRef()


    const onIvestiClick = () => {
        setSkaiciai(
            inputRef.current.valueAsNumber
        );

        inputRef.current.valueAsNumber = ''
    }

    const arLyginis = () => {
        return skaiciai % 2 === 0 ? 'lyginis' : 'nelyginis'
    }

    return (

        <div>


                <label htmlFor="pirmasInput"></label>
                <input ref={inputRef} type="number" id="pirmasInput" />
                <button onClick={onIvestiClick} >Spausk</button>

                {
                    skaiciai && 
                    <>
                    <p>{skaiciai}</p>
                    <p>{arLyginis()}</p>
                    </>
                }
                

            

        </div>
    )
}

export default Komp1