import "./Nav.css";
import { Link } from "react-router-dom";
import { ShoppingCart,ShoppingBag } from 'pixelarticons/react'



export const Nav = ()=>{
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
                        <Link to={"/cart"} className="nav-list_link"><ShoppingBag/></Link>
                    </li>
                </ul>
            </nav>
    )
}