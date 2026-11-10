export const ProductFormUI = ({
    product,
    errors,
    loading,
    onChange,
    onFileChange,
    onSubmit 
    })=>{
    return <section>

        <form className="product-form" onSubmit={onSubmit}>
            <h2>Agregar Nuevo Producto</h2>
            <div>
                <label>Nombre:</label>
                <input 
                 type="text"
                 name="name"
                 value={product.name}
                 onChange={onChange}
                 placeholder="Nombre de producto"
                 />
                 {errors.name && <p className="errorText">{errors.name}</p>}
            </div>

            <div>
                <label>Categoria:</label>
                <input 
                 type="text"
                 name="category"
                 value={product.category}
                 onChange={onChange}
                 placeholder="Categoria del producto"
                 />
                 {errors.category && <p className="errorText">{errors.category}</p>}
            </div>

            <div>
                <label>Precio:</label>
                <input 
                 type="text"
                 name="cost"
                 value={product.cost}
                 onChange={onChange}
                 placeholder="Precio del producto"

                 />
                 {errors.cost && <p className="errorText">{errors.cost}</p>}
            </div>

            <div>
                <label>Efecto/descripción:</label>
                <textarea 
                 name="effect"
                 value={product.effect}
                 onChange={onChange}
                 placeholder="Efecto/descripción del producto"
                 />
                 {errors.effect && <p className="errorText">{errors.effect}</p>}
            </div>

            <div>
                <label>Imagen:</label>
                <input 
                 type="file"
                 name="img"
                 accept='image/*'
                 onChange={onFileChange}
                 />
                 {errors.img && <p className="errorText">{errors.img}</p>}
            </div>

            <button type="submit" disabled={loading}>
                {loading? 'Guardando...' : 'Guardar'}
            </button>

        {errors.general && <p className="errorText">{errors.general}</p>}

        </form>
    </section>
}