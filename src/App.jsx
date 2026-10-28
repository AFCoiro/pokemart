import { Route, Routes } from 'react-router-dom'
import { Footer } from "./components/Footer/Footer";
import './App.css'
import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Home } from './pages/Home';
import { CartView } from './components/Cart/CartView';


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:products" element={<><h1>POKE-MART PRODUCTS</h1> <ItemListContainer/></>}/>
      <Route path="/cart" element={<CartView />}/>
      <Route path="/products/:id" element={<><h1>POKE-MART PRODUCTS</h1> <ItemDetailContainer/></>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
