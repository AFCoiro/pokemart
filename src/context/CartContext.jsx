import { useContext,createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const CartContext = createContext();

/* -------------------------------------------------------------------------- */
/*                                    HOOK                                    */
/* -------------------------------------------------------------------------- */
export const useCart = ()=>{
    const context = useContext(CartContext); 
    
    if(!context){
        throw new Error('useCart debe usarse dentro de un CartProvider')
    }
    return context;
}
/* -------------------------------------------------------------------------- */
/*                                  PROVIDER                                  */
/* -------------------------------------------------------------------------- */
export const CartProvider = ({children})=>{
    const navigate = useNavigate();
    const [cart,setCart] = useState([]);

    const isInCart=(item)=>{
        const inCart = cart.some((el)=>el.id === item.id)
        return inCart
    }
    const addItem = (item)=>{
        if(isInCart(item)){
            alert('ya existe ese producto en el carrito')
            return;
        }
        setCart([...cart,item]);
        alert('Producto agregado al carrito')
    }

    const removeItem = (id) =>{
        const updateCart = cart.filter((el)=> el.id != id);
        setCart(updateCart);
        alert("Eliminaste el producto correctamente")
    }

    const clearCart= ()=>{
        setCart([])
    }

    const numOfItems = ()=>{
        return cart.length
    }

    /* -------------------------------------------------------------------------- */
    /*                                SUMA DE PAGO                                */
    /* -------------------------------------------------------------------------- */
    const totalCart = ()=>{
        return cart.reduce((ac,el)=> ac+el.cost,0)
    }
    /* -------------------------------------------------------------------------- */
    /*                                   COMPRA                                   */
    /* -------------------------------------------------------------------------- */
    const checkout = ()=>{
        alert('Compra realizada exitosamente');
        clearCart();
        navigate('/');
    }

    const values = {
        cart,
        addItem,
        removeItem,
        clearCart,
        numOfItems,
        totalCart,
        checkout
    }

    return <CartContext.Provider value= {values} >
                {children}
            </CartContext.Provider>

}