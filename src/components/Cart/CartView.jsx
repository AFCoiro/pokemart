import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import {CartList} from './CartList'
import {CartSummary} from './CartSummary'

export const CartView = ()=>{
    const { cart } = useCart();

    return (
    <section>
        <h1>Carrito de Compras</h1>
        {cart.length ?
            (<>
            <CartList />
            <CartSummary />
            </>
            ):(
            <>
            <p>Carrito vacio</p>
            <Link to={'/'}>Volver</Link>
            </>)
        }
    </section>
    );
}