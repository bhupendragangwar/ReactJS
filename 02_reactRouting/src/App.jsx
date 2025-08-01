import './App.css'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'

import Home from './Route/Home'
import About from './Route/About'
import Contact from './Route/Contact'
import Services from './Route/Services'

import Welcome from './component/pages/Welcome'

import Navbar from './component/Navbar'

function App() {

  return (
    <>
      <h1>React Routing</h1>
      <Router>
        {/* <nav>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to = '/about'>About</Link>
          </li>
        </ul>
      </nav> */}

        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/services' element={<Services />} />
          <Route path='/welcome' element={<Welcome />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
