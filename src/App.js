import React from 'react';
import { Route, Routes } from "react-router-dom";
import AuthProvider from './contexts/AuthProvider';
import CartProvider from './contexts/CartProvider';
import Checkout from './pages/Checkout';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PrivateRoute from './routes/PrivateRoute';

const App = () => {
  return (
    <AuthProvider>
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="/checkout" element={<PrivateRoute><Checkout /></PrivateRoute>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </CartProvider>
    </AuthProvider>
  )
}

export default App
