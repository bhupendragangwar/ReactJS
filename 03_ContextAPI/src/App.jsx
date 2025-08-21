import './App.css'

// Import Pages

// import Home from './pages/Home'
// import About from './pages/About'
// import Contact from './pages/Contect'
// import Footer from './Common/Footer'
// import { UserProvider } from './contextProvider/MainContext'

import { CartProvider } from './cartLogic/Cartcontext'
import Product from './cartLogic/Product'
import CartStatus from './cartLogic/CartStatus'

import UserContextProvider from './UserData/UserContextProvider'
import Login from './UserData/Login'
import Profile from './UserData/Profile'

function App() {

  return (
    // <UserProvider>
    // <h1>Context API in React</h1>
    // <Home />
    // <Footer />
    // </UserProvider>
    // <CartProvider>
    //   <h1>🛒 Shopping Cart with Context API</h1>
    //   <Product />
    //   <CartStatus />
    // </CartProvider>
    <UserContextProvider>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
