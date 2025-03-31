
import './App.css'
import GeriausiasMedis from './components/GeriausiasMedis'
import Laimejimas from './components/laimejimas'
import Sansas from './components/Sansas'
import Skaiciai from './components/Skaiciai'
import Studentai from './components/Studentai'
import Tikrinimai from './components/Tikrinimai'

function App() {

  return (
    <>
    <Laimejimas />
    <hr />
    <Sansas />
    <hr />
    <Tikrinimai />
    <hr />
    <GeriausiasMedis />
    <hr />
    <Skaiciai />
    <hr />
    <Studentai />
    </>
  )
}

export default App
