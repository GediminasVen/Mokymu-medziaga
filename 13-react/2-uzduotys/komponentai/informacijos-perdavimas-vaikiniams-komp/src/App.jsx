
import './App.css'
import Pardavejas from './components/AutoPardavejas/Pardavejas'
import Imone from './components/Bonusai/Imone'
import HobiuParduotuve from './components/Deliones/HobiuParduotuve'
import Mokymai from './components/MokymuInfo/Mokymai'
import Pasaulis from './components/Pasaulis/Pasaulis'
import Kategorija from './components/Portalas/Kategorija'
import VisosRoles from './components/Roles/VisosRoles'
import Studentas from './components/StudentoInfo/Studentas'

function App() {

  return (
   <>
   <Pasaulis />
   <hr />
   <VisosRoles />
   <hr />
   <Imone />
   <hr />
   <Pardavejas />
   <hr />
   <HobiuParduotuve />
   <hr />
   <Studentas />
   <hr />
   <Kategorija />
   <hr />
   <Mokymai />
   </>
     
  )
}

export default App
