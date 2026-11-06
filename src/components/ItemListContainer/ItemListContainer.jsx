import { useEffect, useState } from "react"
import { ItemList } from "../ItemList/ItemList"
import { Loading } from "../Loading/Loading"
import { getByCategory } from "../../services/productService"
import { useParams } from "react-router-dom"


export const ItemListContainer = ()=>{
    const { category } = useParams()
    const [products, setProducts] =useState([])
    const [errors, setErrors] =useState(null)
    const [loading, setLoading] =useState(true)

    useEffect(()=>{
       getByCategory(category)
        .then(data=>setProducts(data))
        .catch((err)=>setErrors(err.message))
        .finally(()=> setLoading(false))
    },[category])

    if (loading) {return <Loading/>}
    if (errors) {return <p>{errors}</p>}
    
    return(
        <section>
            <h2>Lista de Productos</h2>
            <ItemList products={products} />
        </section>
    )
}