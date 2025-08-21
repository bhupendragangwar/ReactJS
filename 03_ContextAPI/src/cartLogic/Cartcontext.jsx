import {createContext, useState, useContext} from 'react'

export const CartContext = createContext();

export const CartProvider = ( {children} )=>{
    const [cart, setCart] = useState([]) //empty cart

    // Add product to cart
    const addToCart= (product) =>{
        setCart([...cart, product])
    }
    // Count total items
    const totalItems  = cart.length;

    const value = {cart, setCart, addToCart, totalItems}
    return(
        <CartContext.Provider value={value}>
            {children}
        </CartContext.Provider>
    )
}