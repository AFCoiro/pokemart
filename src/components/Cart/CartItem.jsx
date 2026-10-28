import { useCart } from "../../context/CartContext"

export const CartItem = ({name,id,category,image,cost})=>{
    
    const {removeItem} = useCart();

    return <article  className="item">

            <header className="item-header">
                <span className="item-category">{category}</span>
                <h2 className="item-name">{name}</h2>
            </header>

            <div className="item-img">
                <div className="item-img_category">
                    
                </div>
                <img src={image} alt={name} />
            </div>

            

            <footer className="item-cont">
                
                <span className="item-price">${cost}</span>
                <button onClick={()=>removeItem(id)}>Eliminar</button>
            </footer>

        </article> 
}