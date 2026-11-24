import { Route, Routes } from 'react-router-dom'
import './App.css'
import { ItemListContainer } from './components/ItemListContainer/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer/ItemDetailContainer';
import { Home } from './pages/Home';
import { CartView } from './components/Cart/CartView';
import { ProductFormContainer } from './components/adminComponents/ProductForm/ProductFormContainer';
import { ProductSuccess } from './components/adminComponents/ProductSuccess';
import { PublicLayout } from './layouts/PublicLayout';
import { AdminLayout } from './layouts/AdminLayout';
import { Login } from './components/Login/Login';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { Dashboard } from './components/adminComponents/Dashboard/Dashboard';


function App() {

  return (
    <>
      <Routes>

        <Route element={<PublicLayout/>}>
            <Route path="/" element={<Home/>}/>
            <Route path="/:products" element={<><h1>POKE-MART PRODUCTS</h1> <ItemListContainer/></>}/>
            <Route path="/cart" element={<CartView />}/>
            <Route path="/products/:id" element={<><h1>POKE-MART PRODUCTS</h1> <ItemDetailContainer/></>}/>
            <Route path="/category/:category" element={<><h1>POKE-MART CATEGORY</h1> <ItemListContainer/></>}/>
        </Route> 

            <Route path="/admin/login" element={<Login/>}/>

        {/*ADMIN*/}
        <Route 
            path='/admin' 
            element={
            <ProtectedRoute>
              <AdminLayout/>
            </ProtectedRoute>
            }>
            <Route index element={<><h1>ADMIN</h1> <ProductFormContainer/></>}/>
            <Route path="dashboard" element={ <Dashboard/>}/>
            <Route path="products/new" element={<><h1>ADMIN</h1> <ProductFormContainer/></>}/>
            <Route path="products/success/:id/:name" element={<><h1>NEW PRODUCT</h1> <ProductSuccess/></>}/>
            
        </Route>

      </Routes>
    </>
  )
}

export default App
        
