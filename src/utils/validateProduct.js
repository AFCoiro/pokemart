export const validateProduct = (product)=>{
    const errors = {}

        if(!product.name.trim()){
            errors.name = 'Nombre de producto obligatorio'
        }

        if(!product.category.trim()){
            errors.category = 'Categoria de producto obligatoria'
        }

        if(!product.cost || product.cost <= 0){
            errors.cost = 'Precio de producto obligatorio'
        }
        
        if(!product.effect.trim()){
            errors.effect = 'Descripción/efecto de producto obligatoria'
        }
        if(!product.img){
            errors.img = 'Imagen de producto obligatoria'
        }

    return errors;
}