import { useCart } from "../../context/CartContext"

export const CartSummary = ()=>{
    const {totalCart,checkout} = useCart();
    const total = totalCart();
    
    return<>
        <p>Total a pagar: ${total}</p>

        <button onClick={()=>checkout()}>Finalizar compra</button>
    </>
}