import './ItemDetail.css'
import { Item } from "../Item/Item"
import { useCart } from '../../context/CartContext'

export const ItemDetail = ({item})=>{
    const {addItem} = useCart();

    return(
        <>
        <Item {...item}>
                    <p><span>Descripción:</span> {item.effect}</p>
                    <button className="Item-btn" onClick={()=>addItem(item)}>Agregar al Carrito</button>
            </Item>
        </>
    )
}