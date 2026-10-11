import { useContext,createContext } from "react";

const CartContext = createContext();

export const useCart = ()=>{
    const context = useContext(CartContext)
    
}

