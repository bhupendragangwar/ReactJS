import './App.css'

// Import Pages

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contect'
import MainContext from './contextProvider/MainContext'

function App() {

  return (
    <>
    <h1>Context API in React</h1>
    <MainContext>
    <Home />
    </MainContext>
    </>
  )
}

export default App
