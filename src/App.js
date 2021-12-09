import React from 'react'
import CartProvider from './contexts/CartProvider'
import Home from './pages/Home'

const App = () => {
  return (
    <CartProvider>
      <Home />
    </CartProvider>
  )
}

export default App
