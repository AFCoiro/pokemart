import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { Loading } from "../Loading/Loading"
import { getProductById } from "../../services/productService"

export const ItemDetailContainer = ()=>{

    const { id } = useParams();
    const [itemDetail, setItemDetail] = useState(null)
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getProductById(id)
        .then(data=>setItemDetail(data))
        .catch((err)=>setErrors(err.message))
        .finally(()=>setLoading(false))
    },[id])
    
    if(loading) return <Loading/>
    if(errors) return <p>{errors}</p>
    if(!itemDetail) return <p>Producto no encontrado</p>


    return(
        <>
        <h2>Detalles del Producto</h2>
        <ItemDetail item={itemDetail}/>
        </>
    )
}