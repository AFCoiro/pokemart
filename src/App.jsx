import { Route, Routes } from 'react-router-dom'
import { Footer } from "./components/Footer/Footer";
import './App.css'
import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<><h1>POKE-MART HOME</h1> <ItemListContainer/></>}/>
      <Route path="/:products" element={<><h1>POKE-MART PRODUCTS</h1> <ItemListContainer/></>}/>
      <Route path="/cart" element={<h1>POKE-MART CART SHOP</h1>}/>
      <Route path="/products/:id" element={<><h1>POKE-MART PRODUCTS</h1> <ItemDetailContainer/></>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
