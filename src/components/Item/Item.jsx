import "./Item.css";

export const Item = ({name,category,image,cost,effect,children})=>{
    return(
        <article  className="item">

            <header className="item-header">
                <span className="item-category">{category}</span>
                <h2 className="item-name">{name}</h2>
            </header>

            <div className="item-img">
                <div className="item-img_category">
                    
                </div>
                <img src={image} alt={name} />
            </div>

            <p><span>Descripción:</span> {effect}</p>

            <footer className="item-cont">
                
                <span className="item-price">${cost}</span>
                {children}
            </footer>

        </article> 
    )
}