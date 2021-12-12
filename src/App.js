import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import ProductCart from './components/Product Cart/ProductCart';
import SubNav from './components/SubNavbar/SubNav';
import AuthProvider from './contexts/AuthProvider';
import CartProvider from './contexts/CartProvider';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import SignUp from './pages/SignUp';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  const [header, setHeader] = useState(false)

  const changeHeader = () => {
    if (window.scrollY >= 80) {
      setHeader(true)
    } else {
      setHeader(false)
    }
  }

  window.addEventListener('scroll', changeHeader)

  return (
    <AuthProvider>
      <CartProvider>
        <ProductCart />
        <div className={`${header && "fixed top-0 w-full z-30 transition duration-300"} `}>
          <Navbar />
          <SubNav />
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/products/:id" element={<ProductDetails />} />
        </Routes>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
