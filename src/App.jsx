import { Route, Routes } from 'react-router-dom'
import { Footer } from "./components/Footer/Footer";
import './App.css'
import { Header } from './components/Header/Header';
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Home } from './pages/Home';
import { CartView } from './components/Cart/CartView';
import { ProductFormContainer } from './components/adminComponents/ProductForm/ProductFormContainer';
import { ProductSuccess } from './components/adminComponents/ProductSuccess';


function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/:products" element={<><h1>POKE-MART PRODUCTS</h1> <ItemListContainer/></>}/>
      <Route path="/cart" element={<CartView />}/>
      <Route path="/products/:id" element={<><h1>POKE-MART PRODUCTS</h1> <ItemDetailContainer/></>}/>
      <Route path="/category/:category" element={<><h1>POKE-MART CATEGORY</h1> <ItemListContainer/></>}/>
      
      {/*ADMIN*/}
      <Route path="/admin" element={<><h1>ADMIN</h1> <ProductFormContainer/></>}/>
      <Route path="/admin/products/success/:id/:name" element={<><h1>NEW PRODUCT</h1> <ProductSuccess/></>}/>

    </Routes>
    <Footer/>
    </>
  )
}

export default App
