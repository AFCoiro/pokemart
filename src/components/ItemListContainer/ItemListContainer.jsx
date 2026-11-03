import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { Loading } from "../Loading/Loading"
import { getProducts } from "../../services/productService"


export const ItemListContainer = ()=>{
    const [products, setProducts] =useState([])
    const [errors, setErrors] =useState(null)
    const [loading, setLoading] =useState(true)

    useEffect(()=>{
       getProducts()
        .then(data=>setProducts(data))
        .catch((err)=>setErrors(err.message))
        .finally(()=> setLoading(false))
    },[])

    if (loading) {return <Loading/>}
    if (errors) {return <p>{errors}</p>}
    
    return(
        <section>
            <h2>Lista de Productos</h2>
            <ItemList products={products} />
        </section>
    )
}