import { useState } from "react";
import useInput from "../hooks/useInput";

const Komp3 = () => {

    const nameInput = useInput('')
    const ageInput = useInput('')
    const [name, setName] = useState();
    const [age, setAge] = useState();

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setName(nameInput.value)
        setAge(ageInput.value)

    }


    return (
        <>
            <h3>form input pvz</h3>

            <form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" {...nameInput}/>
                </div>
                <div>
                    <label htmlFor="age">Age</label>
                    <input type="number" id="age" {...ageInput}/>
                </div>
                <button type="submit">submit</button>
                <p>Mano Vardas: {name}</p>
                <p>Mano amz: {age}</p>
            </form>
        </>
    )
}

export default Komp3