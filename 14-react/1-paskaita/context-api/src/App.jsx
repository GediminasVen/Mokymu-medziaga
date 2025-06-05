
import './App.css'
import NavBar from './components/Navbar'
import Books from './components/Books'
import ThemeContextProvider from './contexts/ThemeContextProvider'
import ThemeToggle from './components/ThemeToggle'

function App() {

  return (
    <>
    <ThemeContextProvider >
    <NavBar />
    <Books />
    <ThemeToggle />
    </ThemeContextProvider>
   
    </>
  )
}

export default App
