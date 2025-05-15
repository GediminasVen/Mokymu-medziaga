import { useState } from "react"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"

const Komp1 = () => {
    const {data, loading, makeApiCall} = useFetch('https://api.ipify.org?format=json', 1500)
    const [ip, setIp] = useState(null)

    useEffect(() => {
        console.log(loading)
    }, [loading])

    const getData = () => {
        fetch('https://api.ipify.org?format=json').then(response => response.json()).then(data => setIp(data.ip))
    }

    return (
        <div>
            <h3>API PVZ</h3>
            <button onClick={getData}>get ip data</button>
            <p>tavo ip: {ip}</p>
            <p>custom hooks tavo ip: 
                {loading ? 'Loading data....' : data?.ip}
                </p>
        </div>
    )
}

export default Komp1