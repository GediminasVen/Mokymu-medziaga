import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Komp1 from './components/Komp1'
import Komp2 from './components/Komp2'
import Komp3 from './components/Komp3'
import Komp4 from './components/Komp4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Komp1 />
    <hr />
    <Komp2 />
    <hr />
    <Komp3 />
    <hr />
    <Komp4 />
    </>
  )
}

export default App
