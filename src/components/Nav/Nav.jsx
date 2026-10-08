import { Link } from "react-router-dom";
import "./Nav.css";



export const Nav = ()=>{
    return(
            <nav>
                <ul className="nav-list">
                    <li>
                        <Link to={"/"} className="nav-list_link">Home</Link>
                    </li>
                    <li>
                        <Link to={"/productos"} className="nav-list_link">Productos</Link>
                    </li>
                    <li>
                        <Link to={"/cart"} className="nav-list_link">Cart</Link>
                    </li>
                </ul>
            </nav>
    )
}