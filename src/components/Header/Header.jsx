import "./Header.css";
import brand from "../../assets/pokemart-logo.svg";
import { Link } from "react-router-dom";
import { Nav } from "../Nav/Nav";


export const Header = ()=>{
    return(
        <header className="header">
            <div className="brand-cont">
                <Link to={"/"}>
                    <img src={brand} alt="Pokemart Logo Brand" />
                </Link>            
            </div>
            <Nav/>
        </header>
    )
}