import  "./ItemList.css";
import { Item } from "../Item/Item"
import { Link } from "react-router-dom";

export const ItemList = ({products})=>{
    if(!products.length){
        return <p>No hay productos</p>
    }
    return(
        <div className="ItemList-cont">
        {products.map((product)=>(
            <Link to={`/products/${product.id}`} key={product.id} className="ItemList-cont_item">
                <Item {...product}>
                </Item>
            </Link>
        ))}

        </div>
    );
}