import { Link, useParams } from "react-router-dom"
import './ProductSuccess.css'

export const ProductSuccess = ()=>{
    const { id, name } = useParams();

    return(<section>
        <h2>Producto {name} se cargó de forma exitosa con el id:{id}.</h2>

        <Link to='/admin'>Cargar otro producto</Link>

    </section>)
}