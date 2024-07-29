import { ToastContainer } from 'react-toastify';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Error from "./components/404/Error";
import { CartProvider } from './context/CartContext';
import Carrito from "./components/Carrito/Carrito";
import Checkout from './components/Checkout/Checkout';
import Contacto from "./components/Contacto/Contacto";

import './App.css';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <BrowserRouter>
      <CartProvider>
        <NavBar />
        <ToastContainer theme="dark"/>

        <Routes>
          <Route path="/" element={<ItemListContainer/>} />
          <Route path="/categoria/:idCategoria" element={<ItemListContainer/>}/>
          <Route path="/detalle/:idProducto" element={<ItemDetailContainer/>} />
          <Route path="/carrito" element={<Carrito/>}/>
          <Route path="/checkout" element={<Checkout />} />

          <Route path="/contacto" element={<Contacto/>} />
          <Route path="*" element={<Error/>}/>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App