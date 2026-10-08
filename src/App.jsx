import { Route, Routes } from 'react-router-dom'
import { Footer } from "./components/Footer/Footer";
import './App.css'
import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<><h1>POKE-MART HOME</h1> <ItemListContainer/></>}/>
      <Route path="/cart" element={<h1>POKE-MART CART SHOP</h1>}/>
      <Route path="/productos" element={<h1>POKE-MART PRODUCTS</h1>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
