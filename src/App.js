import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom";
import Navbar from './components/Navbar/Navbar';
import OfferNav from './components/Offer Nav/OfferNav';
import ProductCart from './components/Product Cart/ProductCart';
import Account from './components/Profile/Account';
import EditProfile from './components/Profile/EditProfile';
import Orders from './components/Profile/Orders';
import AuthProvider from './contexts/AuthProvider';
import CartProvider from './contexts/CartProvider';
import QuantityProvider from './contexts/QuantityProvider';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import ErrorPage from './pages/ErrorPage';
import Home from './pages/Home';
import Login from './pages/Login';
import OrderSuccessful from './pages/OrderSuccessful';
import ProductDetails from './pages/ProductDetails';
import Profile from './pages/Profile';
import Shops from './pages/Shops';
import SignUp from './pages/SignUp';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  const [header, setHeader] = useState(false)
  const [showOffer,setShowOffer] = useState(true)
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
          <div>
            {showOffer && <OfferNav setShowOffer={setShowOffer} />}
            <div className={`${header && "fixed top-0 w-full z-30 transition duration-300"} `}>
              <Navbar />
            </div>
          </div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/shops" element={<Shops />} />
            <Route path="/order-successful" element={<PrivateRoute><OrderSuccessful /></PrivateRoute>} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/profile/*" element={<PrivateRoute><Profile /></PrivateRoute>}>
              <Route path="*" element={<PrivateRoute><Account /></PrivateRoute>} />
              <Route path="account" element={<PrivateRoute><Account /></PrivateRoute>} />
              <Route path="edit" element={<PrivateRoute><EditProfile /></PrivateRoute>} />
              <Route path="orders" element={<PrivateRoute><Orders /></PrivateRoute>} />
            </Route>
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </QuantityProvider>
      </CartProvider>
    </AuthProvider>
  )
}

export default App
