import './App.css'

// Import Pages

import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contect'
import Footer from './Common/Footer'

import { UserProvider } from './contextProvider/MainContext'

function App() {

  return (
    <UserProvider>
    <h1>Context API in React</h1>
    <Home />
    <Footer />
    </UserProvider>
  )
}

export default App
