
import ApieMus from './ApieMus'
import './App.css'
import Footer from './Footer'
import Header from './Header'
import Navbar from './Navbar'
import Paslaugos from './Paslaugos'

function App() {

  return (
    <div className='app'>
      <Navbar />
      <Header />
      <Paslaugos />
      <ApieMus />
      <Footer />
    </div>
  )
}

export default App
