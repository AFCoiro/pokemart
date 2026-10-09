import './ItemDetail.css'
import { Item } from "../Item/Item"

export const ItemDetail = ({item})=>{
    return(
        <>
        <Item {...item}>
            <button className="Item-btn">Agregar al Carrito</button>
        </Item>
        </>
    )
}