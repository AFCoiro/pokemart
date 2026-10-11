import { Link } from 'react-router-dom'
import './HeroBanner.css'


export const HeroBanner = ()=>{

    return(
        <section className='hero'>
            <Link to='/products/rare-candy'>
                <img 
                src="/img/hero-banner/hero-1.jpg" 
                alt="Promo: Caramelo Raro"
                className='hero-img' />
            </Link>
            
        </section>
    )
}