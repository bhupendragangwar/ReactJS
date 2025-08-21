// CartStatus.jsx
import { useContext } from "react";
import { CartContext } from "./Cartcontext";

export default function CartStatus() {
  const { totalItems } = useContext(CartContext);

  return <h2>Total items in cart: {totalItems}</h2>;
}
