import "./Nav.css";
import { Link } from "react-router-dom";
import { ShoppingCart,ShoppingBag } from 'pixelarticons/react'
import { useCart } from "../../context/CartContext";



export const Nav = ()=>{
    const {numOfItems} = useCart();
    const totalItems = numOfItems();
    
    return(
            <nav>
                <ul className="nav-list">
                    <li>
                        <Link to={"/"} className="nav-list_link">Home</Link>
                    </li>
                    <li>
                        <Link to={"/products"} className="nav-list_link">Productos</Link>
                    </li>
                    <li>
                        <Link to={"/cart"} className="nav-list_link">
                            <ShoppingBag/>
                            {totalItems > 0 && <span className="cart-num">{totalItems}</span>}
                        </Link>
                    </li>
                </ul>
            </nav>
    )
}