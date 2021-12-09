import React from 'react';
import { Route, Routes } from "react-router-dom";
import CartProvider from './contexts/CartProvider';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

const App = () => {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
    </CartProvider>
  )
}

export default App
