import { useState } from "react"
import CounterMygtukai from "./CounterMygtukai";

const CounterTev = () => {
    const [count, setCount] = useState(0);
    const counterButtons = [
        {value : 1, text: '+1'},
        {value : 2, text: '+2'},
        {value : 3, text: '+3'},
        {value : 5, text: '+5'},
        {value : 9, text: '+9'},
        {value : 99, text: '+99'},
        {value : 999, text: '+999'},
    ]

    const valueHandler = (value) => {
        setCount(count + value)
    }

    return (
        <div>
            <h3>{count}</h3>
            <CounterMygtukai addValue={valueHandler} buttons={counterButtons}/>
        </div>
    )
}

export default CounterTev