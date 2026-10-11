import './ItemDetail.css'
import { Item } from "../Item/Item"

export const ItemDetail = ({item})=>{
    return(
        <>
        <Item {...item}>
                    <p><span>Descripción:</span> {item.effect}</p>
                    <button className="Item-btn">Agregar al Carrito</button>
            </Item>
        </>
    )
}