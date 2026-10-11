import { HeroBanner } from "../components/HeroBanner/HeroBanner"
import { ItemListContainer } from "../components/ItemListContainer/ItemListContainer"


export const Home = ()=>{
    return(
        <>
            <HeroBanner/>
            <h1>POKE-MART HOME</h1>
             <ItemListContainer/>
        </>
    )
}