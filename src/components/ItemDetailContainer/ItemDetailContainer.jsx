import { useParams } from "react-router-dom"
import { ItemDetail } from "../ItemDetail/ItemDetail"
import { useEffect, useState } from "react"
import { Loading } from "../Loading/Loading"

export const ItemDetailContainer = ()=>{

    const { id } = useParams();
    const [itemDetail, setItemDetail] = useState(null)
    const [errors, setErrors] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(()=>{


        fetch('/data/data.json')
        .then((res)=>res.json())
        .then((data)=>{
            const item = data.find((p)=>p.id===id)
            if(item){
                setItemDetail(item);
                return
            }else{
             throw new Error('Elemento no encontrado')
            }
        })
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