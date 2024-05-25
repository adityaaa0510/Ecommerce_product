import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './features/Pages/Home';
import LoginPage from './features/Pages/LoginPage';
import SignupPage from './features/Pages/SignupPage';
import CartPage from './features/Pages/CartPage';
import Checkout from './features/Pages/Checkout';
import ProductDetailPage from './features/Pages/ProductDetailPage'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/cart' element={<CartPage/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route path='/productdetail' element={<ProductDetailPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
