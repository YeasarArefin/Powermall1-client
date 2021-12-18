import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import ProductCart from './components/Product Cart/ProductCart';
import Account from './components/Profile/Account';
import EditProfile from './components/Profile/EditProfile';
import SubNav from './components/SubNavbar/SubNav';
import AuthProvider from './contexts/AuthProvider';
import CartProvider from './contexts/CartProvider';
import QuantityProvider from './contexts/QuantityProvider';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Login from './pages/Login';
import ProductDetails from './pages/ProductDetails';
import Profile from './pages/Profile';
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
      <QuantityProvider>
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


          <Route path="/profile/*" element={<Profile />}>
            <Route path="*" element={<Account />} />
            <Route path="account" element={<Account />} />
            <Route path="edit" element={<EditProfile />} />
            <Route path="myOrders" element={<h1>My Order</h1>} />
          </Route>


        </Routes>
      </QuantityProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
