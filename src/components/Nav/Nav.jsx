import "./Nav.css";
import { Link } from "react-router-dom";
import { ShoppingBag } from 'pixelarticons/react'
import { useCart } from "../../context/CartContext";
import { useAuth } from "../../context/AuthContext";
/*import { ShoppingCart,ShoppingBag } from 'pixelarticons/react'*/


export const Nav = ()=>{
    const {numOfItems} = useCart();
    const totalItems = numOfItems();
    const {user, logout,loading} = useAuth();
    
    if(loading) return null;
    
    return(
            <nav>
                {user ? (
                    <ul className="nav-list">
                        <li>
                            <Link to="/admin">Admin Dashboard</Link>
                        </li>
                        <li>
                            <button onClick={logout}>Cerrar sesión</button>
                        </li>
                    </ul>
                ) :(
                    <ul className="nav-list">
                        <li>
                            <Link to={"/"} className="nav-list_link">Home</Link>
                        </li>
                        <li>
                            <Link to={"/products"} className="nav-list_link">Productos</Link>
                        </li>
                        <li>
                            <Link to={"/category/batalla"}>Batalla</Link>
                        </li>
                        <li>
                            <Link to={"/cart"} className="nav-list_link">
                                <ShoppingBag/>
                                {totalItems > 0 && <span className="cart-num">{totalItems}</span>}
                            </Link>
                        </li>
                    </ul>
                )}
            </nav>
    )
}
/* -------------------------------------------------------------------------- */
/* que el selected sea una flechita abajo o algo tipo gameboy cuando esta en el item. quizas que el nav sean botones como el logo de la tienda                                      .                                     */
/* -------------------------------------------------------------------------- */
