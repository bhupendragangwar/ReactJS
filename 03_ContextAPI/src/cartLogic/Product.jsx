import { useContext } from "react"
import { CartContext } from "./Cartcontext"

export default function Product(){
    const {addToCart} = useContext(CartContext)
    const productList = [
         { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" },
    { id: 3, name: "Headphones" },
    {id: 4, name: 'Jivu'}
    ]

    return(
        <div>
        <h2>Products</h2>
        {productList.map((p)=>(
            <div key={p.id}>
                 {p.name}
                 <button onClick={()=>addToCart(p)}>
                    Add to Cart
                 </button>
            </div>
        ))}
        </div>
    )
}