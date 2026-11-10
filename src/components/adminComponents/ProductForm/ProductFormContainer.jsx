import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { ProductFormUI } from "./ProductFormUI"
import {validateProduct} from '../../../utils/validateProduct'
import { uploadImg } from '../../../services/uploadImg'
import { createProduct } from '../../../services/productService'

import './ProductFormContainer.css'

export const ProductFormContainer = ()=>{
    const navigate = useNavigate()
    const [loading,setLoading] = useState(false)
    const [errors,setErrors] = useState({})
    const [img, setImg] = useState(null)
    const [product,setProduct] = useState({
        name:'',
        category:'',
        cost:'',
        effect:''
    })

const handleChange = (e)=>{
    const {name,value} = e.target;
    setProduct({...product,[name]:value})
}

const handleFileChange = (e)=>{
    const image = e.target.files[0] || null;
    setImg(image);
}

const handlesubmit = async (e)=>{
    e.preventDefault()
    
    setErrors({})
    setLoading(true)

    const newErrors = validateProduct({...product,img})
    if (Object.keys(newErrors).length > 0) {
        setErrors(newErrors)
        setLoading(false);
        return;     
    }
    try {
        const imgUrl = await uploadImg(img)
        
        const productData = {
            ...product,
            cost: Number(product.cost),
            image: imgUrl
        };
        const newProduct= await createProduct(productData);

        setProduct({ name:'', category:'', cost:'', effect:''})
        setImg(null)

        navigate(`/admin/products/success/${newProduct.id}/${newProduct.name}`,{replace: true})

    } catch (error) {
        setErrors({general: error.message});

    }finally{
        setLoading(false);
    }
}

return(
    <ProductFormUI
    product={product}
    errors={errors}
    loading={loading}
    onChange={handleChange}
    onFileChange={handleFileChange}
    onSubmit={handlesubmit}
    />
)
}