import './App.css'
import Darbuotojas from './components/Darbuotojas'
import PrekiuKrepselis from './components/PrekiuKrepselis'
import Skaicius from './components/Skaicius'
import TrysSkaiciai from './components/TrysSkaiciai'
import ZodzioIlgis from './components/ZodzioIlgis'


function App() {

  return (
    <>
    <hr />
    <ZodzioIlgis/>
    <hr />
    <Skaicius/>
    <hr />
    <TrysSkaiciai/>
    <hr />
    <Darbuotojas/>
    <hr />
    <PrekiuKrepselis/>
    <hr />
    </>
  )
}

export default App
